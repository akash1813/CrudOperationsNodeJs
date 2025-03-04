const express = require("express");

const { connectMongoDb } = require('./connection');
const { logReqRes } = require("./middlewares")
const userRouter = require("./Routes/user");
const { connect } = require("mongoose");

const PORT = 8000;
const app = express();

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>console.log("MongoDb connected"));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));


// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));