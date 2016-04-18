(function() {
  'use strict'

  angular
    .module('webApp', ['ngMaterial', 'duScroll'])
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

    vm.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
  };

})();
