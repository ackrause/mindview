'use strict';

var NeuroSky = function(io) {

  NeuroSky.prototype.connection = { name: 'neurosky', adaptor: 'neurosky', port: '/dev/tty.MindWaveMobile-DevA' };
  NeuroSky.prototype.device = {name: 'headset', driver: 'neurosky'};
  NeuroSky.prototype.work = function(my) {
    my.headset.on('blink', function(data) {
      io.sockets.emit('blink', data);
    });
    my.headset.on('eeg', function(data) {
      io.sockets.emit('eeg', data);
    });
    my.headset.on('attention', function(data) {
      io.sockets.emit('attention', data);
    });
    my.headset.on('meditation', function(data) {
      io.sockets.emit('meditation', data);
    });
    my.headset.on('wave', function(data) {
      io.sockets.emit('wave', data);
    })
  };
};

module.exports = NeuroSky;