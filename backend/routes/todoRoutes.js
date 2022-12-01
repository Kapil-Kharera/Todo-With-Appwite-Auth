import express from 'express';
const router = express.Router();

const { createTodo, getTodos, editTodo, deleteTodo } = require('../controllers/todoController');

router.post("/createtodo", createTodo);
router.get("/gettodos", getTodos);
router.put("/edittodo/:id", editTodo);
router.delete("/deletetodo/:id", deleteTodo);

module.exports =  router;