(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('mainController', mainController);

  mainController.$inject = ['$mdSidenav', '$translate'];

  function mainController($mdSidenav, $translate) {

    var vm = this;

    vm.changeLanguage = function(key) {
      $translate.use(key);
    };

    vm.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
  };
})();
