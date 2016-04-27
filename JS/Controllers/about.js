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
      vm.namespace = Object.keys(response.data)[0] + '.';

      for (var property in Object.keys(response.data.information)[0]) {
        if (Object.keys(response.data.information)[0].hasOwnProperty(property)) {
          vm.name = Object.keys(response.data.information[property]);
        };
      };
    });

    vm.getContent = function(id) {
      return vm.namespace + id + '.' + vm.name[1];
    }

    vm.getImageUrl = function(id) {
      return vm.namespace + id + '.' + vm.name[2];
    };

    vm.getImageAlt = function(id) {
      return vm.namespace + id + '.' + vm.name[3];
    };
  };
})();
