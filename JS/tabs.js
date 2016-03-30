(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('boneController', boneController)
    .directive('boneTab', boneTab);

  boneController.$inject = ['$http'];

  function boneController($http) {
    var vm = this;

    vm.test = "test";

    vm.info = [];

    $http.get('../JSON/data.json').then(function(response) {
      console.log("Loaded data.json");
      // console.log(JSON.stringify(response));       // TODO remove

      vm.info = response.data.information;
    });
  };

  function boneTab() {
    return {
      restrict: 'EA',
      priority: 1001,
      templateUrl: '../TEMPLATES/tabs.html',
      controller: 'boneController',
      controllerAs: 'bone'
    };
  };

})();
