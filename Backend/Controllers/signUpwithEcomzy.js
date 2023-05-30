const User = require("../Models/signUpModal");
const bcrypt = require("bcrypt");
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
