import express from 'express';
const router = express.Router();

const { createTodo } = require('../controllers/todoController');

router.post("/createTodo", createTodo);


module.exports =  router;