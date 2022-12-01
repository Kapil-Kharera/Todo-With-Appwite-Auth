import mongoose from "mongoose";
import { MONGO_URL } from './index';

const dbConnection = () => {
    mongoose.connect(MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((con) => {
        console.log(`DB connected on : ${con.connection.host}`);
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbConnection;