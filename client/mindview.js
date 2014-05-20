'use strict';


// **********
// MINDVIEW 
// **********

angular.module('mindview',[
  'btford.socket-io'
]).

factory('socket', function (socketFactory) {
  return socketFactory();
}).


controller('braindata', function($scope, socket) {
  socket.on('eeg', function(data) {
    $scope.eeg = data;
  });
  socket.on('attention', function(data) {
    $scope.attention = data;
  });
  socket.on('meditation', function(data) {
    $scope.meditation = data;
  });
  socket.on('wave', function(data) {
    $scope.wave = data;
  })
});
