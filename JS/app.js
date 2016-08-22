(function() {
  'use strict';

  angular
    .module('webApp', ['ngMaterial', 'duScroll', 'ngMessages', 'ngclipboard', 'pascalprecht.translate', 'angular-inview', 'ngLazyRender', 'ngYoutubeEmbed'])
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
  }
  function translateConfiguration($translateProvider, $translatePartialLoaderProvider) {

    $translateProvider.useSanitizeValueStrategy(null);

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '../JSON/{part}-{lang}.json'
    });

    $translatePartialLoaderProvider.addPart('locale');
    $translatePartialLoaderProvider.addPart('navigation');
    $translatePartialLoaderProvider.addPart('tabs');
    $translatePartialLoaderProvider.addPart('products');
    $translatePartialLoaderProvider.addPart('about');

    if ($translateProvider.resolveClientLocale() != "ru_RU") {
      $translateProvider.preferredLanguage('en');
    } else {
      $translateProvider.preferredLanguage('ru');
    }


    $translateProvider.fallbackLanguage('en');
  }
})();
