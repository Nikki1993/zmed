(function() {
  'use strict';

  angular
    .module('webApp')
    .controller('mainController', mainController);

  mainController.$inject = ['$mdSidenav', '$translate', 'JsonData'];

  function mainController($mdSidenav, $translate, JsonData) {

    var vm = this;

    vm.changeLanguage = function(key) {
      $translate.use(key);
    };

    vm.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };

    var originatorEv;

    vm.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
  }
})();
