(function() {
  'use strict'

  angular
    .module('webApp')
    .directive('menuBar', menuBar)
    .directive('menuBarSide', menuBarSide);

    function menuBar() {
      return {
        restrict: 'EA',
        priority: 1001,
        templateUrl: '../TEMPLATES/navigation.html',
        controller: 'navigationController',
        controllerAs: 'navCtrl',
      };
    };

    function menuBarSide() {
      return {
        restrict: 'EA',
        priority: 1001,
        templateUrl: '../TEMPLATES/navigation-sidenav.html',
        controller: 'navigationController',
        controllerAs: 'navCtrl',
      };
    }
})();
