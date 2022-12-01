import Todo from '../models/todoSchema';

exports.createTodo = async (req, res) => {
    try {
        const { title, task } = req.body;

        if (!(title)) {
            throw new Error("Title is must to create TODO!");
        }

        const existsTodo = await Todo.findOne({ title });

        if (existsTodo) {
            throw new Error("This name is alreaady exist , Please provide a unique name");
        }

        const newTodo = await Todo.create({ title, task });

        res.status(200).json({
            success: true,
            message: "Todo is created succesfully",
            newTodo
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "Todo is not created yet",
        })
    }
}


exports.getTodos = async (req, res) => {
    try {

        const todoList = await Todo.find({});

        res.status(200).json({
            success: true,
            message: "All TODO's list are : ",
            todoList
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "Enable to get all TODO's",
        })
    }
}


exports.editTodo = async (req, res) => {
    try {
        const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "Your todo is updated",
            updateTodo
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "Todo is not updated successfully"
        })
    }
}


exports.deleteTodo = async (req, res) => {
    try {
        const deleteTodo = await Todo.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Todo is deleted Successfully",
            deleteTodo
        })

    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "Todo is not deleted successfully"
        })
    }
}


exports.searchTodo = async (req, res) => {}