'use strict';

var app = angular.module("swapiApp", ["ui.router"])

app.run(function(PlanetService){
  PlanetService.getPlanets();
});

app.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise("/planets");

  $stateProvider
    .state("planets", {
      url: "/planets",
      templateUrl: "../partials/planets.html",
      controller: "PlanetCtrl"
    })
    .state("resident", {
      url: "../partials/resident/:id",
      controller: "ResidentCtrl"
    })
});



