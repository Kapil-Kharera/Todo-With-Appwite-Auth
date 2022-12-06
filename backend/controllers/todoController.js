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

