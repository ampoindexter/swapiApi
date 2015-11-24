'use strict';

app.service('SwapiService', function($http, $stateParams) {
  this.planets = [];
  this.getPlanets = () => {
    http.get("http://swapi.co/api/planets/?format=json");
    .then(res => {
      this.planets = res.data.results.map(planet => {
        planet.residents = planet.residents.map(resident => {
          var resident = { url: resident };
          resident.id = resident.url.match(/\d+/)[0];
          return resident;
        });
        return planet;
      });  
    })
    .catch(error => console.error(error.status));
  }

})