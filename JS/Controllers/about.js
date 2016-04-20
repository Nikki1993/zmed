(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('aboutCardController', aboutCardController);

  aboutCardController.$inject = ['JsonData'];

  function aboutCardController(JsonData) {
    var vm = this;

    vm.pathToJson = '../JSON/featured.json';
    vm.info = [];

    JsonData.all(vm.pathToJson).then(function(response) {
      console.log(vm.pathToJson);
      vm.info = response.data.information;
    });
  };
})();
