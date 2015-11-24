'use strict';

var app = angular.module("swapiApp", ["ui.router"])

app.controller(ResidentCtrl, function($scope, ResidentService) {
  $scope.getResidents = function(){
    ResidentService.getResidents();
    .then(function(res){
      $scope.residents = res.data.results;
      residents.push(res.data.results);
    })
  }
})