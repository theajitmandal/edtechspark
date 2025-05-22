const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

const findAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    res.json({ msg: "Something went wrong" });
  }
};

const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const hashPassword = await bcrypt.hash(req.body?.password, saltRounds);
    req.body.password = hashPassword;
    const emailExist = await User.exists({ email: req.body.email });
    
    if (emailExist) {
      return res.status(409).json({ msg: "Email already taken" });
    } else {
      await User.create(req.body);
      res.json({ msg: "User Created Successfully" });
    }
    
  } catch (err) {
    res.json({ msg: "Something went wrong" });
  }
};

const logInUser = async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.body.phone });
    if (user) {
      const isMatched = await bcrypt.compare(req.body.password, user.password);
      if (isMatched) {
        const token = jwt.sign(
          { phone: req.body.phone },
          process.env.SECRET_KEY
        );
        console.log(process.env.SECRET_KEY);
        res.json({ msg: "Aunthenticated", token, user });
      } else {
        res.status(401).json({ msg: "Invalid Password" });
      }
    } else {
      res.status(401).json({ msg: "Phone Number not registered" });
    }
  } catch (err) {
    res.json({ msg: "Something went wrong" });
  }
};

const forgotPassword = async(req, res) => {
  console.log(req)
}

const changePassword = async(req, res) => {
  console.log(req)
}

module.exports = { findAllUsers, registerUser, logInUser, forgotPassword, changePassword }
