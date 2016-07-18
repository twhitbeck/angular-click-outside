angular.module('tw.directives.clickOutside', []).
directive('twClickOutside', ['$window', '$document', '$parse', function($window, $document, $parse) {
  return {
    link: function(scope, el, attr) {
      if (!attr.twClickOutside) {
        return;
      }

      var ignore;
      if (attr.ignoreIf) {
        ignore = $parse(attr.ignoreIf);
      }

      var nakedEl = el[0];
      var fn = $parse(attr.twClickOutside);

      var handler = function(e) {
        if (nakedEl === e.target || nakedEl.contains(e.target) || (ignore && ignore(scope))) {
          return;
        }

        scope.$apply(fn);
      };

      $window.addEventListener('click', handler, true);

      scope.$on('$destroy', function(e) {
        if (typeof $document !== 'undefined') {
          $document.off('click', handler);
        }
      });
    }
  };
}]);
