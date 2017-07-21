'use strict';

angular.
  module('pokeList').
  component('pokeList', {
    templateUrl:'poke-list/poke-list.template.html',
    controller: ['$scope',
      function PokeListController($scope) {
        $scope.pokes = [
          {number:1, name:"Bulbasaur",  type:"Grass"},
          {number:2, name:"Ivysaur",    type:"Grass"},
          {number:3, name:"Vinasaur",   type:"Grass"}
        ];

        $scope.poke = {};

        $scope.addPoke = function(poke) {
          $scope.pokes.push(poke);
          $scope.poke = {};
        }

        $scope.editPoke = function(index) {
          $scope.editId = index;
          $scope.poke = $scope.pokes[index];
        }

        $scope.updatePoke = function(poke) {
          $scope.pokes[$scope.editId] = poke;
          $scope.editId = undefined;
          $scope.poke = {};
        }

        $scope.deletePoke = function(index) {
          $scope.pokes.splice(index, 1);
        }

      }
    ]
  });