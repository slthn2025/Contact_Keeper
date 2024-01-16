const { application } = require("express");
const express = require("express");
const router = express.Router();

//@route          GET api/auth
//@desc           Get logged in user
//@access         Private

router.get("/", (req, res) => {
  res.send("Get Logged in User");
});

//@route          POST api/auth
//@desc           Auth User & get Token
//@access         Public

router.post("/", (req, res) => {
  res.send("Log In User");
});

module.exports = router;
