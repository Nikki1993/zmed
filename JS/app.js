(function() {
  'use strict'

  angular
    .module('webApp', ['ngMaterial', 'duScroll', 'ngMessages', 'ngclipboard'])
    .config(themeConfiguration);

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
})();
