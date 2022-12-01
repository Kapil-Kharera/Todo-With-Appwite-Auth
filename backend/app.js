const express = require('express');
const dbConnection = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(express.json());

dbConnection();

app.use("/api/v1", todoRoutes);

export default app;