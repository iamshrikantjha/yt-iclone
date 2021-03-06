const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("./../middleware/requireLogin");
const Post = mongoose.model("Post");

//ALL POSTS
router.get('/allposts', (req, res) => {
    Post.find()
    .populate('postedBy', '_id name')
    .then((posts) => {
        res.json({posts})
    })
    .catch((err) => {
        res.json(err)
    })
})

//MY POSTS
router.get('/myposts',requireLogin, (req, res) => {
    Post.find({postedBy: req.user.id})
    .populate('postedBy', '_id name')
    .then((posts) => {
        res.json({posts})
    })
    .catch((err) => {
        res.json(err)
    })
})


// CREATE POST
router.post("/createpost", requireLogin, (req, res) => {
  const { title, body, photo } = req.body;
  if (!title || !body || !photo) {
    return res.status(422).json({ error: "Please add all fields" });
  }
  req.user.password = undefined
  const post = new Post({
      title,
      body,
      postedBy: req.user,
      photo
  })
  post.save().then(result => {
      res.json({ post: result })
  }).catch((err) => {
      console.log(err);
  })


});

module.exports = router;
