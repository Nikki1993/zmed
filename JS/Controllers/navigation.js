(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('navigationController', navigationController);

  navigationController.$inject = ['$translatePartialLoader', '$translate', 'JsonData'];

  function navigationController($translatePartialLoader, $translate, JsonData) {

    var vm = this;

    vm.namespace = 'items.';
    vm.name = ['.image', '.imageAlt'];

    vm.pathToJson = '../JSON/navigation.json';
    vm.menuItems = [];

    JsonData.all(vm.pathToJson).then(function(response) {
      console.log(vm.pathToJson);
      vm.menuItems = response.data.items;
    });
  };
})();
