(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('aboutCardController', aboutCardController);

  aboutCardController.$inject = ['$translatePartialLoader', '$translate', 'JsonData'];

  function aboutCardController($translatePartialLoader, $translate, JsonData) {

    var vm = this;

    vm.pathToJson = '../JSON/about-en.json';

    $translatePartialLoader.addPart('about');
    $translate.refresh();

    JsonData.all(vm.pathToJson).then(function(response) {
      vm.count = Object.keys(response.data.information).length;
    });

    vm.setObjectCount = function(n) {
      return new Array(n);
    }

    vm.getImageUrl = function(id) {
      return 'information.' + id + '.image';
    };

    vm.getImageAlt = function(id) {
      return 'information.' + id + '.imageAlt';
    };
  };
})();
