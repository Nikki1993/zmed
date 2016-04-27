(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('aboutCardController', aboutCardController);

  aboutCardController.$inject = ['$translatePartialLoader', '$translate', 'JsonData'];

  function aboutCardController($translatePartialLoader, $translate, JsonData) {

    var vm = this;

    vm.name = [];

    vm.pathToJson = '../JSON/about-en.json';

    JsonData.all(vm.pathToJson).then(function(response) {
      vm.count = JsonData.setObjectCount(Object.keys(response.data.information).length);
      vm.namespace = Object.keys(response.data);

      console.log('vm.namespace = ' + vm.namespace);

      for (var property in vm.namespace) {
        if (vm.namespace.hasOwnProperty(property)) {
          vm.name = Object.keys(response.data[vm.namespace][property]);
          console.log(vm.name);
        };
      };
    });

    vm.getContent = function(index, keyVal) {
      return vm.namespace + '.' + index + '.' + vm.name[keyVal];
    }
  };
})();
