const Users = require("../models/Users");
const {comparePassword, hashPassword} = require("../utils/hashPassword");
const JWT = require("jsonwebtoken")

const Register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).send("Enter your Name");
  }
  if (!email) {
    return res.status(400).send("Enter your Email");
  }
  if (!password) {
    return res.status(400).send("Enter your Password");
  }
  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      res.status(400).send({
        message: "User already Exists",
        status: "Fail",
      });
    } else {
      const hashedPassword = await hashPassword(password)
      const registerUser = await new Users({
        name,
        email,
        password:hashedPassword,
      }).save();
      res.status(201).send({
        message: "User registered successfully",
        User: registerUser,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Something Went Wrong",
      status: "Internal Server Error",
      err,
    });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(404).send({ message: "Email is required" });
  }
  if (!password) {
    return res.status(404).send({ message: "Password is required" });
  }

  try {
    const user = await Users.findOne({ email });
    const token = JWT.sign({id:user._id}, process.env.JWT,{expiresIn:"7d"});
    const comparedPassword = await comparePassword(password,user.password)
    if (comparedPassword) {
      res.status(200).send({
        message: "Login Successful",
        status: "Success",
        User:{
          name:user.name,
          email:user.email,
          password:user.password
        },
        token
      });
    } else {
      res.status(401).send({
        message: "Incorrect Password",
        satus: "Failed",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Something Went Wrong",
      status: "Fail",
      err,
    });
  }
};

module.exports = { Register, Login };
