(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('aboutCardController', aboutCardController);

  aboutCardController.$inject = ['JsonData', '$translate'];

  function aboutCardController(JsonData, $translate) {
    var vm = this;

    vm.pathToJson = '../JSON/about-en.json';
    vm.info = [];

    JsonData.all(vm.pathToJson).then(function(response) {
      vm.info = response.data.information;
    });
  };
})();
