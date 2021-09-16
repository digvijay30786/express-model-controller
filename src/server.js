const express = require("express");
const server = express();

//connect to the databases
const connect = require("./config/db");

//port assign
const port = 2600;


server.use(express.json());
//controllers
const userController = require("./controllers/user.controller");
const studentController = require('./controllers/student.controller');
const EvaluationController = require('./controllers/evaluation.controller');
const topicController = require('./controllers/topics.controller');
const markController = require('./controllers/mark.controller')


server.use("/users", userController);
server.use("/students", studentController);
server.use("/evaluation", EvaluationController);
server.use("/topics", topicController);
server.use("/marks", markController);

server.listen(port, async () => {
    await connect();
    console.log(`server running on port : ${port}`);
})