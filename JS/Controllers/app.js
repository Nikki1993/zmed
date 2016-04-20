(function() {
  'use strict'

  angular
    .module('webApp')
    .controller('mainController', mainController);

    mainController.$inject = ['$mdSidenav'];

    function mainController($mdSidenav) {

        var vm = this;

        vm.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
    };
})();
