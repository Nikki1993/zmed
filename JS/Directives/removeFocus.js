(function() {
  'use strict'

  angular
    .module('webApp')
    .directive('blurOnEnter', blurOnEnter);

  function blurOnEnter() {
    return function(scope, elem, attrs) {
      elem.bind('keydown keypress', function(e) {
        if (e.which === 13) {
          e.preventDefault();
          elem.blur();
          scope.$apply(attrs.ngBlur);
        }
      });
    }
  };
})();

// Credits http://jsfiddle.net/nq6fgse1/
