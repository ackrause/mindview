'use strict';

var throttle = function(fn, threshold, ctx) {
  threshold = threshold || 500;
  ctx = ctx || this;
  var last;
  var deferTimer;
  return function() {
    var now = +new Date();
    var args = arguments;
    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function() {
        last = now;
        fn.apply(ctx, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(ctx, args);
    }
  };
};

var NeuroSky = function(io) {

  NeuroSky.prototype.connection = { name: 'neurosky', adaptor: 'neurosky', port: '/dev/tty.MindWaveMobile-DevA' };
  NeuroSky.prototype.device = {name: 'headset', driver: 'neurosky'};
  NeuroSky.prototype.work = function(my) {
    my.headset.on('blink', function(data) {
      io.sockets.volatile.emit('blink', data);
    });
    my.headset.on('eeg', function(data) {
      io.sockets.volatile.emit('eeg', data);
    });
    my.headset.on('attention', function(data) {
      io.sockets.volatile.emit('attention', data);
    });
    my.headset.on('meditation', function(data) {
      io.sockets.volatile.emit('meditation', data);
    });
    my.headset.on('wave', throttle(function(data) {
      io.sockets.emit('wave', data);
    }));
  };
};

module.exports = NeuroSky;