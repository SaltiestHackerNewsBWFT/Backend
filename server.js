const express = require('express');

const configMiddleware = require('./middleWare/serverConfig')
const authenticate = require('./auth/auth-middleware')
const authRouter = require('./auth/auth-router')
const profileRouter = require('./users/profileRoutes')

const server = express()
configMiddleware(server)


 server.use('/api/auth', authRouter)
  server.use('/api/profile', authenticate, profileRouter)

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });

 
module.exports = server;