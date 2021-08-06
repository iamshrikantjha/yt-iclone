const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = mongoose.model("User");
const { JWT_SECRET } = require("./../keys");

const requireLogin = require("./../middleware/requireLogin");

// SIGN UP
router.post("/signup", (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(422).json({ error: "Fill all the fields" });
  } else {
    User.findOne({ email: email })
      .then((savedUser) => {
        if (savedUser) {
          return res.status(422).json({ error: "User exists with same email" });
        }
        bcrypt.hash(password, 5).then((hashedpassword) => {
          const user = new User({
            email,
            name,
            password: hashedpassword,
          });
          user
            .save()
            .then((user) => {
              res.json({ message: "Saved User" });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

// SIGN IN
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Fill all the fields" });
  }
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      bcrypt.compare(password, user.password).then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: user._id }, JWT_SECRET);
          const { _id, name, email } = user;
          return res.json({ token, user: { _id, name, email } });
          //   return res.status(200).json({ message: "User signed in" });
        } else {
          return res.status(422).json({ error: "Invalid password" });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", requireLogin, (req, res) => {
  res.json({ message: "F9" });
});

module.exports = router;
