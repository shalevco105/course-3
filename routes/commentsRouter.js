const express = require('express');
const commentsController = require('../controllers/commentsController');

const commentsRouter = express.Router();

commentsRouter.get('/', commentsController.getAllComments);

module.exports = commentsRouter;