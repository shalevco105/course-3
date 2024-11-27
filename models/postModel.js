const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    sender_id: { type: String, required: true },
  },
  { collection: "Post" }
);

module.exports = mongoose.model("Post", PostSchema);
