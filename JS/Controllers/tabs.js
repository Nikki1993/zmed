(function() {
  'use strict';

  angular
    .module('webApp')
    .controller('tabsController', tabsController);

  tabsController.$inject = ['$translatePartialLoader', '$translate', 'JsonData', '$mdDialog', '$mdMedia', '$scope'];

  function tabsController($translatePartialLoader, $translate, JsonData, $mdDialog, $mdMedia, $scope) {

    var vm = this;

    vm.pathToJson = ['../JSON/tabs-en.json', '../JSON/products-en.json', '..JSON/products-ru.json'];

    vm.showMore = function(ev) {

      $mdDialog.show({
        controller: tabsController,
        controllerAs: 'tabsCtrl',
        templateUrl: '../TEMPLATES/products.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: 'true'
      });

      $scope.$watch(function() {
        return $mdMedia('sm') || $mdMedia('xs');
      }, function(wantsFullScreen) {
        vm.customFullscreen = (wantsFullScreen === true);
      });
    };

    vm.showDescription = function() {
      if(vm.option) {
        vm.option = false;
      }
      else {
        vm.option = true;
      }
    };

    vm.cancel = function() {
      $mdDialog.cancel();
    };

    vm.data = [];

    JsonData.all(vm.pathToJson[0]).then(function(response) {
      vm.namespace = Object.keys(response.data);
      vm.count = JsonData.setObjectCount(Object.keys(response.data[vm.namespace]).length);

      console.log('vm.namespace from tabs = ' + vm.namespace);

      for (var property in vm.namespace) {
        if (vm.namespace.hasOwnProperty(property)) {
          vm.name = Object.keys(response.data[vm.namespace][property]);
          console.log(vm.name);
        }
      }
    });

    vm.getContent = function(index, keyVal) {
      return vm.namespace + '.' + index + '.' + vm.name[keyVal];
    };

    JsonData.all(vm.pathToJson[1]).then(function(response) {
      vm.namespaceProducts = Object.keys(response.data);
      vm.countProducts = JsonData.setObjectCount(Object.keys(response.data[vm.namespaceProducts]).length);

      vm.dataArray = response.data[vm.namespaceProducts];

      console.log('vm.namespaceProducts from tabs = ' + vm.namespaceProducts);

      for (var property in vm.namespaceProducts) {
        if (vm.namespaceProducts.hasOwnProperty(property)) {
          vm.nameProducts = Object.keys(response.data[vm.namespaceProducts][property]);
          console.log(vm.nameProducts);
        }
      }
    });

    vm.getContentProducts = function(index, keyVal) {
      return vm.namespaceProducts + '.' + index + '.' + vm.nameProducts[keyVal];
    }
  }
})();
