const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const classesRouter = require("../api/data/routers/classes/classes-router");
const welcome = require("../api/data/routers/welcome/welcome-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(classesRouter);
server.use(welcome);
server.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

module.exports = server;
