(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('navigationController', navigationController);

  navigationController.$inject = ['JsonData'];

  function navigationController(JsonData) {
    var vm = this;

    vm.pathToJson = '../JSON/navigation.json';
    vm.menuItems = [];

    JsonData.all(vm.pathToJson).then(function(response) {
      console.log(vm.pathToJson);
      vm.menuItems = response.data.items;
    });
  };
})();
