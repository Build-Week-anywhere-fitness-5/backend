const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const classesRouter = require("./database/classes/classes-router");
const welcome = require("./database/welcome/welcome-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/classes", classesRouter);
server.use(welcome);
server.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

module.exports = server;
