(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('aboutCardController', aboutCardController);

  aboutCardController.$inject = ['$translatePartialLoader', '$translate'];

  function aboutCardController($translatePartialLoader, $translate) {

    var vm = this;

    $translatePartialLoader.addPart('about');
    $translate.refresh();

    vm.getImageUrl = function(id) {
      return 'information.' + id + '.image';
    };

    vm.getImageAlt = function(id) {
      return 'information.' + id + '.imageAlt';
    };
  };
})();
