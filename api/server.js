const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const welcome = require("./data/routers/welcome/welcome-router");
const classesRouter = require("./data/routers/classes/classes-router");
const usersRouter = require("./data/routers/users/users-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(welcome);
server.use(classesRouter);
server.use(usersRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

module.exports = server;
