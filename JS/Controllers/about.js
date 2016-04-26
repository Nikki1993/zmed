(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('aboutCardController', aboutCardController);

  aboutCardController.$inject = ['$translatePartialLoader', '$translate'];

  function aboutCardController($translatePartialLoader, $translate) {

    var vm = this;

    vm.info = [];

    $translatePartialLoader.addPart('about');
    $translate.refresh();
  };
})();
