angular.module('tw.directives.clickOutside', []).
directive('twClickOutside', ['$document', '$parse', function($document, $parse) {
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

      $document.on('click', function(e) {
        if (nakedEl === e.target) {
          return;
        }

        if (nakedEl.contains(e.target)) {
          return;
        }

        if (ignore && ignore(scope)) {
          return;
        }

        scope.$apply(attr.twClickOutside);
      });
    }
  };
}]);
