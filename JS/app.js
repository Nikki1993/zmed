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

  function translateConfiguration($translateProvider, $translatePartialLoaderProvider) {

    $translateProvider.useSanitizeValueStrategy(null);

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '../JSON/{part}-{lang}.json'
    });

    $translatePartialLoaderProvider.addPart('locale');
    $translatePartialLoaderProvider.addPart('about');
    $translatePartialLoaderProvider.addPart('navigation');

    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');
  };
})();
