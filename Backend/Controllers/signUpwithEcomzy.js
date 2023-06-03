const User = require("../Models/signUpModal");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
require("dotenv").config();
exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { email, password, confirm_password } = req.body;
    if (!password || !email || !confirm_password) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    } else if (password !== confirm_password) {
      return res.status(400).json({
        status: 401,
        message: "Password did not matched",
      });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(201).json({
        status: 201,
        message: "This email is already registered",
      });
    }
    //secure the password n to n encrypted
    let hashedPassword;
    try{
      hashedPassword = await bcrypt.hash(password, 10);  
    }
    catch(err){
        return res.status(500).json({
          status: 500,
          message: "Error in hashing password",
        })
    }
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      status: 200,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    let user = await User.findOne({email});
    if(!user){
      return res.status(401).json({
        status: 401,
        message: "User not found Please Singup",
      });
    }
    const payload = {
      email: email,
      id: user.id,
      role: "buyer"
    }
    if(await bcrypt.compare(password, user.password)){
      let token = jwt.sign(payload,process.env.JWT_SECRET,{
          expiresIn: "2h"
      });
      user = user.toObject();
      user.token = token;
      user.password = "Mai nahi bataunga!"; 
      const options = {
        expires: new Date(Date.now() + 3*24*60*60*1000),
        httpOnly: true
      }
      res.cookie("EcomzyToken",token, options).status(200).json({
          success: true,
          token,
          user,
          message:"User created successfully"
      });
    
    }
    else{
      res.status(403).json({
        success: false,
        message: "Password incorrect"
      })
    }

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
};
