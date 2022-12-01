import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title of todo is required"],
        maxLength: [30, "Maximum length of title is 30 characters"],
        unique: true
    },

    tasks: [
        {
            type: String
        }
    ]
}, {
    timestamps: true
});

export default mongoose.model("Todo", todoSchema);