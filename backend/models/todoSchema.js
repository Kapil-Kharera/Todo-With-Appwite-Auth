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
            title: {
                type: String,
                trim: true,
                requierd: [true, "Title for task is required"]
            },
            idDone: {
                type: Boolean,
                default: false
            },
            createdAt: {
                type: Date,
                default: Date.now()
            },
            updatedAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    userId: {
        type: String,
        trim: true,
        require: [true, "UserId is needed!"]
    }
}, {
    timestamps: true
});

export default mongoose.model("Todo", todoSchema);