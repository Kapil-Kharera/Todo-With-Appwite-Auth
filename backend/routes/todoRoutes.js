import express from 'express';
const router = express.Router();

const { createTodo, createTask, listTodos, listTasks } = require('../controllers/todoController');

router.post("/createTodo", createTodo);
router.put("/createTask/:id", createTask);
router.get("/listTodos", listTodos );
router.get("/listTasks/:id", listTasks );


module.exports =  router;