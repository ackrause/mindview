"use strict";

var mongoose    = require('mongoose'),
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    middle      = require('./middleware');

mongoose.connect(process.env.DB_URL || 'mongodb://localhost/mindview');
/*
 * Include all your global env variables here.
*/
module.exports = exports = function (app, express, routers) {
  app.set('port', process.env.PORT || 9000);
  app.set('base url', process.env.URL || 'http://localhost');
  app.use(morgan('dev'));
  app.use(bodyParser());
  app.use(middle.cors);
  app.use(express.static(__dirname + '/../../client'));
  app.use('/note', routers.NoteRouter);
  app.use(middle.logError);
  app.use(middle.handleError);
};