"use strict";

var express = require('express');
var app = express();
var routers = {};
var NoteRouter = express.Router();
routers.NoteRouter = NoteRouter;

require('./config.js')(app, express, routers);

require('../note/note_routes.js')(NoteRouter);

require('./neurosky.js');

module.exports = exports = app;