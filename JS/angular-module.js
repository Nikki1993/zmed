(function() {
  'use strict'

  angular
    .module('webApp', ['ngMaterial'])
    .config(themeConfiguration)
    .controller('mainController', mainController);

    mainController.$inject = ['$mdSidenav'];

  function themeConfiguration($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '500'
      })
      .accentPalette('red')
      .warnPalette('deep-orange')
      .backgroundPalette('grey', {
        'default': '100'
      });
  };

  function mainController($mdSidenav) {
    var vm = this;

    vm.isSideNavOpen = false;

    vm.openLeftMenu = function() {
      if (vm.isSideNavOpen === false) {
        $mdSidenav('left').toggle();
        vm.isSideNavOpen = true;
      };
    };

    vm.closeLeftMenu = function() {
      if (vm.isSideNavOpen === true) {
        $mdSidenav('left').toggle();
        vm.isSideNavOpen = false;
      };
    }
  };

})();
