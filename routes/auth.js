const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

//  @route       GET api/auth
//  @desc        Get user
//  @access      Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

//  @route       POST api/auth/login
//  @desc        Auth and get Token
//  @access      Public
router.post(
  "/login",
  [
    check("username", "Username is required").exists(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const { username, password } = req.body;

    try {
      let user = await User.findOne({
        $or: [{ email: username }, { username: username }],
      });

      if (!user) {
        return res.status(400).json("Invalid Credentials");
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json("Invalid Credentials");
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600 * 1000,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//  @route       POST api/auth/register
//  @desc        Register a user
//  @access      Public
router.post(
  "/register",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be more than 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const { username, email, phone, password } = req.body;
    console.log(req.body);
    try {
      let user = await User.findOne({
        $or: [{ email: email }, { username: username }],
      });

      if (user) {
        return res.status(400).json("Username or Email already exists");
      }

      user = new User({ username, email, phone, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
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
          expiresIn: 3600 * 1000,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//  @route       PUT api/auth
//  @desc        Update user password
//  @access      Private
router.put(
  "/",
  [
    auth,
    [
      check("old_password", "Old password is required").exists(),
      check("new_password", "Password must be at least 6 characters").isLength({
        min: 6,
      }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const { old_password, new_password } = req.body;

    try {
      let user = await User.findById(req.user.id);

      if (!user) return res.status(404);

      const isMatch = await bcrypt.compare(old_password, user.password);

      if (!isMatch) {
        return res.status(400);
      }

      // New user object
      const new_user = {};
      const salt = await bcrypt.genSalt(10);
      new_user.password = await bcrypt.hash(new_password, salt);

      user = await User.findByIdAndUpdate(
        req.user.id,
        { $set: new_user },
        { new: true }
      ).select("-password");

      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//  @route       PUT api/auth/edit
//  @desc        Update a user
//  @access      Private
router.put("/edit", auth, async (req, res) => {
  const { name, phone, willaya } = req.body;

  const new_user = {};

  if (name !== null) new_user.name = name;
  if (phone !== null) new_user.phone = phone;
  if (willaya !== null) new_user.willaya = willaya;

  try {
    let user = await User.findById(req.user.id);

    if (!user) return res.status(404);

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: new_user },
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
