/* global require, Logger, module */
'use strict';

var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'neurosky', 
    adaptor: 'neurosky',
    port: '/dev/tty.MindWaveMobile-DevA'
  },

  device: {
    name: 'headset',
    driver: 'neurosky'
  },

  work: function (my) {
    my.headset.on('eeg', function(data) {
       Logger.info('eeg:' + data);
    });
    my.headset.on('attention', function(data) {
      Logger.info('attention: ' + data);
    });
    my.headset.on('meditation', function(data) {
      Logger.info('meditation:' + data);
    });
    my.headset.on('blink', function(data) {
      Logger.info('blink: ' + data);
    });
    my.headset.on('signal', function(data) {
      Logger.info('signal: ' + data);
    });
     my.headset.on('wave', function(data) {
       Logger.info('wave: ' + data);
    });
  }
});

Cylon.start();

module.exports = Cylon;
