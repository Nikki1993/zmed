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

    var translationsEN = {
      TITLE: 'Number One Distributor <br /> In Russia'
    };

    var translationsRU = {
      TITLE: 'Номер один дистрибутор <br /> в России'
    };

    $translateProvider.determinePreferredLanguage();

    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('ru', translationsRU);
    $translateProvider.fallbackLanguage('en');
  };
})();
