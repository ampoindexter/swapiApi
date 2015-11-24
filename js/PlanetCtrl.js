'use strict';

var app = angular.module("swapiApp", ["ui.router"])

app.controller("PlanetCtrl", function($scope, PlanetService) {
  $scope.getPlanets = function(){
    // PlanetService.getPlanets();
    $scope.planets = PlanetService.planets;
  }
  $scope.watch('planets', function(newValue, oldValue) {
    console.log('watch:', newValue, oldValue);
  });

  $scope.seen = function(){
    characters.push($scope.this.id);
    $scope.class = seen;
  }
});