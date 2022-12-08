import Todo from '../models/todoSchema';

exports.createTodo = async (req, res) => {
    try {
        const { title, userId } = req.body;
        console.log(title, userId);

        if (!(title)) {
            throw new Error("Title is required!");
        }

        const titleExists = await Todo.findOne({ title });

        if (titleExists) {
            throw new Error("This title is already in database")
        }

        const newTodo = await Todo.create({ title, userId });

        // res.header("Access-Control-Allow-Origin", "*");

        res.status(200).json({
            success: true,
            message: "Todo is created succesfully",
            newTodo
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "Todo is not created yet!",
        })
    }
}

exports.createTask = async (req, res) => {
    try {
        const todoId = req.params.id;
        const { title } = req.body;

        if (!title) {
            return res.status(401).json({
                success: false,
                message: "Enter the Task Name"
            })
        }

        const tasks = await Todo.findByIdAndUpdate(todoId, { $addToSet: { "tasks": { title } } });
        console.log(tasks);

        res.status(200).json({
            success: true,
            message: "Task created succesfully",
            tasks
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "Task is not Created."
        })
    }
}

exports.listTodos = async (_req, res) => {
    try {
       
        const todoList = await Todo.find({});

        res.status(200).json({
            success: true,
            message: "All list of Todos",
            todoList
        });
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "Not able to fetch the list of Todos",
        });
    }
}

