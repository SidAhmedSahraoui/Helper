const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const User = require("../models/User");
const Post = require("../models/Post");

//  @route       GET api/posts
//  @desc        Get all posts
//  @access      Private
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({
      date: -1,
    });
    res.json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

//  @route       GET api/posts/user
//  @desc        Get user posts
//  @access      Private
router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findOne({_id: req.user.id})
    const posts = await Post.find({
      user: user._id,
    }).sort({
      date: -1,
    });
    res.json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

//  @route       POST api/posts
//  @desc        Add post
//  @access      Public
router.post(
  "/",
  async (req, res) => {
    try {
      const { user_id, title, content, category, willaya, phone } = req.body;

      let user = await User.find({ _id: user_id });
      if (!user || !user.length) {
        return res.status(404).json("User not exists");
      }

      const newPost = new Post({
        user: user_id,
        title,
        content,
        category,
        willaya,
        phone
      });

      const post = await newPost.save();
      res.json(post);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);
        

//  @route       DELETE api/posts/:id
//  @desc        Delete post
//  @access      Private
router.delete("/:id", async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json("Post not found");

    // Make sure user owns post
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json("Not authorized");
    }

    await Post.findByIdAndRemove(req.params.id);

    res.json("Post removed");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;