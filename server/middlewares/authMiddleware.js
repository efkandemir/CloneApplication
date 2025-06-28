const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");


const requireSignIn = async (req, res, next) => {
  try {

    const decoded = JWT.verify(
      req.headers.authorization, 
      process.env.JWT_SECRET
    );

    req.user = await userModel.findById(decoded._id).select("-password");

    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Yetkisiz erişim. JWT geçersiz.",
    });
  }
};

module.exports = requireSignIn;
