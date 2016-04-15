(function() {
    'use strict'

    angular
        .module('webApp')
        .controller('boneController', boneController)
        .directive('boneTab', boneTab);

    boneController.$inject = ['$http', '$mdDialog', '$mdMedia', '$scope'];

    function boneController($http, $mdDialog, $mdMedia, $scope) {
        var vm = this;

        vm.info = [];

        $http.get('../JSON/tab-data.json').then(function(response) {
            console.log("Loaded data.json");
            vm.info = response.data.information;
        });

        vm.customFullScreen = $mdMedia('xs') || $mdMedia('sm');

        vm.showMore = function(ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;

            $mdDialog.show({
                controller: boneController,
                controllerAs: 'boneCtrl',
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

    function boneTab() {
        return {
            restrict: 'EA',
            priority: 1001,
            templateUrl: '../TEMPLATES/tabs.html',
            controller: 'boneController',
            controllerAs: 'boneCtrl'
        };
    };
})();
