console.log("script.js loaded");

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: '/languages'
  }).then(function(response) {
    console.log(response);
    $scope.name = response.data;
  });
});
