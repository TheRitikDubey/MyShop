const User = require("../Models/signUpModal");

exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { email,password, confirm_password } = req.body;
    if (!password || !email || !confirm_password) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await User.create({
      email,
      password,
    });
    return res.status(200).json({
      status: 201,
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
