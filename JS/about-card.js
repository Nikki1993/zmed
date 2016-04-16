(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('aboutCardController', aboutCardController)
    .directive('aboutCard', aboutCard);

  aboutCardController.$inject = ['$http'];

  function aboutCardController($http) {
    var vm = this;

    vm.info = [];

    $http.get('../JSON/about-card-data.json').then(function(response) {
      console.log("Loaded about-card-data.json");
      vm.info = response.data.information;
    });
  };

  function aboutCard() {
    return {
      restrict: 'EA',
      priority: 1001,
      templateUrl: '../TEMPLATES/about-card.html',
      controller: 'aboutCardController',
      controllerAs: 'aboutCardCtrl'
    };
  };
})();
