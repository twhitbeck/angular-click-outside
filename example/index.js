(function() {
  'use strict';

  angular.module('app', ['tw.directives.clickOutside']);

  angular.module('app').controller('MainController', MainController);

  MainController.$inject = ['$window'];
  function MainController($window) {
    this.click = function() {
      $window.alert('Clicked!');
    };

    this.clickOutside = function() {
      $window.alert('Clicked outside!');
    };
  }
})();
