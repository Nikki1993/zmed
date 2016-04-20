(function() {
  'use strict'

  angular
    .module('webApp')
    .directive('boneTab', boneTab);

  function boneTab() {
    return {
      restrict: 'EA',
      priority: 1001,
      templateUrl: '../TEMPLATES/tabs.html',
      controller: 'tabsController',
      controllerAs: 'tabsCtrl'
    };
  }
})();
