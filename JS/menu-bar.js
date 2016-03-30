(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('menuBarController', menuBarController)
    .directive('menuBar', menuBar);

  menuBarController.$inject = ['$http'];

  function menuBarController($http) {
    var vm = this;

    vm.menuItems = [];

    $http.get('../JSON/menu-data.json').then(function(response) {
      console.log("Loaded menu-data.json");
      vm.menuItems = response.data.items;
    });
  };

  function menuBar() {
    return {
      restrict: 'EA',
      priority: 1001,
      templateUrl: '../TEMPLATES/menu-bar.html',
      controller: 'menuBarController',
      controllerAs: 'menuCtrl',
    };
  };
})();
