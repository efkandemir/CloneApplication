const JWT = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    //validation

    if (!name) {
      return res.status(400).send({
        success: false,
        message: "name is required",
      });
    }
    if (!surname) {
      return res.status(400).send({
        success: false,
        message: "surname is required",
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "email is required",
      });
    }
    if (!password || password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "password is required and 6 character long",
      });
    }

    //exisiting user
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.status(500).send({
        success: false,
        message: "User Already Register With This Email",
      });
    }

    //HASHED PASSWORD
    const hashedPassword = await hashPassword(password);

    //SAVE USER
    const user = await userModel({
      name,
      surname,
      email,
      password: hashedPassword,
    }).save();

    return res.status(201).send({
      success: true,
      message: "Registeration Succesfull Please Login",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Email Or Password",
      });
    }
    //find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User Not Found",
      });
    }

    //match password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(500).send({
        success: false,
        message: "Invalid username or password",
      });
    }

    //TOKEN JWT
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    //undefined password(şifreyi gizliyor , json içinde göndermiyor)
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "login succesfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in login api",
      error,
    });
  }
};

module.exports = { registerController, loginController };
