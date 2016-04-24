(function() {
  'use strict'

  angular
    .module('webApp')
    .directive('aboutCard', aboutCard);

  function aboutCard() {
    return {
      restrict: 'EA',
      priority: 1001,
      templateUrl: '../TEMPLATES/about.html',
      controller: 'aboutCardController',
      controllerAs: 'aboutCardCtrl'
    };
  };
})();
