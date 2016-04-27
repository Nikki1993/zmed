(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('aboutCardController', aboutCardController);

  aboutCardController.$inject = ['$translatePartialLoader', '$translate', 'JsonData'];

  function aboutCardController($translatePartialLoader, $translate, JsonData) {

    var vm = this;

    vm.namespace = 'information.';
    vm.name = ['.image', '.imageAlt'];

    vm.pathToJson = '../JSON/about-en.json';


    JsonData.all(vm.pathToJson).then(function(response) {
      vm.count = JsonData.setObjectCount(Object.keys(response.data.information).length) ;
    });

    vm.getImageUrl = function(id) {
      return vm.namespace + id + vm.name[0];
    };

    vm.getImageAlt = function(id) {
      return vm.namespace + id + vm.name[1];
    };
  };
})();
