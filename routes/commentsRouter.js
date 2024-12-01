const express = require('express');
const commentsController = require('../controllers/commentsController');

const commentsRouter = express.Router();

commentsRouter.get('/data', commentsController.getAllComments);

commentsRouter.get('/:comment_id', commentsController.getCommentById);

commentsRouter.get('/', commentsController.getCommetnsByPostId);

commentsRouter.post('/', commentsController.createComment);

commentsRouter.put('/:comment_id', commentsController.updateComment);

module.exports = commentsRouter;