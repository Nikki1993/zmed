(function() {
  'use strict'

  angular
    .module('webApp')
    .directive('blurOnEnter', blurOnEnter);

  function blurOnEnter() {
    return function(scope, elem, attrs) {
      elem.bind('blur', function() {
        scope.$apply(attrs.ngBlur);
      });
    }
  };
})();

// Credits http://jsfiddle.net/nq6fgse1/
