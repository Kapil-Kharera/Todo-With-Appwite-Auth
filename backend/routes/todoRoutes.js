import express from 'express';
const router = express.Router();

const { createTodo, createTask } = require('../controllers/todoController');

router.post("/createTodo", createTodo);
router.put("/createTask/:id", createTask);


module.exports =  router;