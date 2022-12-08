import express from 'express';
const router = express.Router();

const { createTodo, createTask, listTodos } = require('../controllers/todoController');

router.post("/createTodo", createTodo);
router.put("/createTask/:id", createTask);
router.get("/listTodos", listTodos );


module.exports =  router;