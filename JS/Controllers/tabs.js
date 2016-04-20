(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('tabsController', tabsController);

  tabsController.$inject = ['JsonData', '$mdDialog', '$mdMedia', '$scope'];

  function tabsController(JsonData, $mdDialog, $mdMedia, $scope) {
    var vm = this;

    vm.pathToJson = ['../JSON/tabs.json', '../JSON/products.json'] ;
    vm.info = [];

    JsonData.all(vm.pathToJson[0]).then(function(response) {
      console.log(vm.pathToJson[0]);
      vm.info = response.data.information;
    });

    vm.products = [];

    JsonData.all(vm.pathToJson[1]).then(function(response) {
      console.log(vm.pathToJson[1]);
      vm.products = response.data.product;
    });

    vm.customFullScreen = $mdMedia('xs') || $mdMedia('sm');

    vm.showMore = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;

      $mdDialog.show({
        controller: tabsController,
        controllerAs: 'tabsCtrl',
        templateUrl: '../TEMPLATES/products.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: useFullScreen
      });

      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        vm.customFullscreen = (wantsFullScreen === true);
      });
    };

    vm.cancel = function() {
      $mdDialog.cancel();
    }
  };
})();
