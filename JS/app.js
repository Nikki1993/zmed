(function() {
  'use strict'

  angular
    .module('webApp', ['ngMaterial', 'duScroll', 'ngMessages', 'ngclipboard', 'pascalprecht.translate'])
    .config(themeConfiguration)
    .config(translateConfiguration);

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

  function translateConfiguration($translateProvider) {

    $translateProvider.useSanitizeValueStrategy(null);

    $translateProvider.useStaticFilesLoader({
      files: [{
        prefix: '../JSON/locale-',
        suffix: '.json'
      }, {
        prefix: '../JSON/about-',
        suffix: '.json'
      }]
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');
  };
})();
