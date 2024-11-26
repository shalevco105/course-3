const CommentsModel = require('../models/commentModel');

const getAllComments = async (req, res) => {
    const postId = req.query.post_id;
    try {
        if (postId) {
            const comments = await CommentsModel.find({ post_id: postId });
            res.send(comments);
        } else {
            const comments = await CommentsModel.find();
            res.send(comments);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getCommentById = async (req, res) => {
    const commentId = req.params.comment_id;
    try {
        const comment = await CommentsModel.findById(commentId);
        comment ? res.send(comment) : res.status(404).send('Comments not found');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const createComment = async (req, res) => {
    const commentBody = req.body;
    try {
        const comment = await CommentsModel.create(commentBody);
        res.status(201).send(comment);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateComment = async (req, res) => {
    const commentId = req.params.comment_id;
    const commentBody = req.body;

    try {
        const comment = await CommentsModel.findById(commentId);
        if (comment) {
            const updatedComment = await CommentsModel.findByIdAndUpdate(commentId, commentBody, {
                new: true,
                runValidators: true,
            });

            res.status(201).send(updatedComment);
        } else {
            res.status(404).send('Comments not found');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { getAllComments, getCommentById, createComment, updateComment };