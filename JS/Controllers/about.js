(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('aboutCardController', aboutCardController);

  aboutCardController.$inject = ['$translatePartialLoader', '$translate', 'JsonData'];

  function aboutCardController($translatePartialLoader, $translate, JsonData) {

    var vm = this;

    vm.name = ['.heading', '.content', '.image', '.imageAlt'];

    vm.pathToJson = '../JSON/about-en.json';

    JsonData.all(vm.pathToJson).then(function(response) {
      vm.count = JsonData.setObjectCount(Object.keys(response.data.information).length);
      vm.namespace = Object.keys(response.data)[0] +'.';

      console.log(Object.keys(response.data)[0]);
      console.log(Object.keys(response));
    });

    vm.getImageUrl = function(id) {
      return vm.namespace + id + vm.name[2];
    };

    vm.getImageAlt = function(id) {
      return vm.namespace + id + vm.name[3];
    };
  };
})();
