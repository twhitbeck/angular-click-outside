angular.module('tw.directives.clickOutside', []).
directive('twClickOutside', function($document) {
  return {
    link: function(scope, el, attr) {
      if (!attr.twClickOutside) {
        return;
      }

      var nakedEl = el[0];

      $document.on('click', function(e) {
        nakedEl === e.target
          || nakedEl.contains(e.target)
          || scope.$apply(attr.twClickOutside);
      });
    }
  };
});
