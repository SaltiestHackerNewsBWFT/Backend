const express = require('express');

const configMiddleware = require('./middleWare/serverConfig')
const authenticate = require('./auth/auth-middleware')
const authRouter = require('./auth/auth-router')

const server = express()

configMiddleware(server)

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });

  server.use('/api/auth', authRouter)
module.exports = server;