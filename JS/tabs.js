(function() {
  angular
    .module('webApp')
    .controller('showcaseController', showcaseController)
    .directive('boneShowcaseTab', boneShowcaseTab);

  showcaseController.$inject = ['$http'];

  function showcaseController($http) {
    var vm = this;

    vm.info = [];

    $http.get('../JSON/data.json').success(function(response) {
      console.log("Loaded data.json");
      console.log(JSON.stringify(response));       // TODO remove

      vm.info = response.data.information;
    });
  };

  function boneShowcaseTab($http) {
    return {
      restrict: 'E',
      templateUrl: '../TEMPLATES/tabs.html',
      controller: 'showcaseController',
      controllerAs: 'tabs'
    };
  };
})();
