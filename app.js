angular.module("swapiApp", ["ui.router"])

.constant("planets", []);
.constant("characters", []);

.controller(ResidentCtrl, function($scope, ResidentService) {
  $scope.getResidents = function(){
    ResidentService.getResidents();
    .then(function(res){
      $scope.residents = res.data.results;
      residents.push(res.data.results);
    })
  }
})

.controller("PlanetCtrl", function($scope, PlanetService, planets, characters) {
  $scope.getPlanets = function(){
    PlanetService.getPlanets();
  }
  $scope.getPlanets();

  $scope.seen = function(){
    characters.push($scope.this.id);
    $scope.class = seen;
  }
});

app.config([$"urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise("/planets");

  $stateProvider
    .state("planets", {
      url: "/planets",
      templateUrl: "planets.html",
      controller: "PlanetCtrl"
    })
    .state("resident", {
      url: "/resident/:id",
      controller: "ResidentCtrl"
    })
}]);

app.service("PlanetService", function($http) {
  this.planets = [];
  this.planet = {};
  this.getPlanets = function() {
    return $http({
      url: "http://swapi.co/api/planets/?format=json",
      method: "GET"
    })
    .then(function(res) {
      $scope.planets = res.data.results.map(planet => {
        planet.residents = planet.residents.map(resident => {
          var resident = { url: resident };
          resident.id = resident.url.match(/\d+/)[0];
          return resident;
        });
        return planet;
      });
      var planet = ({name: $res.data.results.planets.name, population: $res.data.results.planets.population}),
      var planets = [];
      planets.push(planet);
    }, function(err) {
      console.error(err);
    })
  }
})

// app.service("ResidentService", function($http) {
//   this.getResidents = function() {
//     return $http({
//       url: "http://swapi.co/api/planets/residents/?format=json",
//       method: "GET"
//     })
//     .then(function(res) {
//       $scope.character = res.data;
//     }, function(err) {
//       console.error(err);
//     })
//   }
// })



