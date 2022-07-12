const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Post = require("../models/Post");
const Message = require("../models/Message");

//  @route       GET api/messages
//  @desc        Get user messages
//  @access      Private
router.get("/", auth, async (req, res) => {
  try {
    const messages = await Message.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(messages);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

//  @route       POST api/messages
//  @desc        Send message
//  @access      Public
router.post(
  "/",
  [
    auth,
    [
      check("post_id", "PostId is required").not().isEmpty(),
      check("content", "Message content is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    try {
      const { post_id, content } = req.body;

      let sender = await User.findById(req.user.id);

      if (!sender) {
        return res.status(404).json("Sender not exists");
      }

      let post = await Post.findById(post_id);

      if (!post) {
        return res.status(404).json("Post not exists");
      }

      let user = await User.findOne({ _id: post.user });

      if (!user) {
        return res.status(404).json("User not exists");
      }

      const newMessage = new Message({
        user: user._id,
        sender: sender.username,
        post: post.title,
        content: content,
      });

      const message = await newMessage.save();
      res.json("Message sent");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
