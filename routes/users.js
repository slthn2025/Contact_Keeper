const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { validationResult, check } = require("express-validator"); // Perbaikan: Menggunakan kurung kurawal dan mengimpor modul dengan benar

const User = require("../models/User");

//@route          POST api/users
//@desc           Register a user
//@access         Public

router.post(
  "/",
  [
    check("name", "Please Add Name").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with 6 charcters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({ msg: "User Already Exists" });
      }

      user = new User({
        name,
        email,
        password,
      });

      //hash password
      const salt = await bcrypt.genSalt(10);
      //ambil password user dan acak
      user.password = await bcrypt.hash(password, salt);
      //simpan user baru ke model
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server Error");
    }
  }
);

module.exports = router;
