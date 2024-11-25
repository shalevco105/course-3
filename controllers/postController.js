const Post = require('../models/postModel');

// Add a New Post
exports.addPost = async (req, res) => {
  try {
    const { title, content, sender_id } = req.body;
    const newPost = new Post({ title, content, sender_id });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log({posts})
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a Post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Posts by Sender
exports.getPostsBySender = async (req, res) => {
  try {
    const senderId = req.query.sender;
    const posts = await Post.find({ sender_id: senderId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a Post
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.post_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
