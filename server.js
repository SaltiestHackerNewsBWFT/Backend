const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {isValid} = require('./users/validation')

const configMiddleware = require('./middleWare/serverConfig')
const authenticate = require('./auth/auth-middleware')
const authRouter = require('./auth/auth-router')
const profileRouter = require('./users/profileRoutes')
const commentRouter = require('./comments/comments-route')
const favoritesRouter = require('./favorites/favorites-route')
const bookmarksRouter = require('./bookmars/bookmarks-route')


const server = express()
configMiddleware(server)
// Middlewares
server.use(bodyParser.urlencoded({ extended: false })) 
server.use(cookieParser())
server.use(passport.initialize());










server.use('/api/auth', authRouter)
server.use('/api/profile', authenticate, profileRouter)
server.use('/api/favorites', authenticate, favoritesRouter)
server.use('/api/bookmarks', authenticate, bookmarksRouter)
server.use('/api/comments', commentRouter)

server.get("/", (req, res) => {
    res.json("server is up");
  });

 
module.exports = server;