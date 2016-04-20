(function() {
  'use strict'

  angular
    .module('webApp')
    .factory('JsonData', JsonDataFactory);

  JsonDataFactory.$inject = ['$http'];

  function JsonDataFactory($http) {
    return {
      all: function(path) {
        return $http({
          method: "GET",
          url: path
        });
      }
    };
  };
})();
