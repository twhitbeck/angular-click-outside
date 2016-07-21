(function() {
  'use strict';

  angular.module('app', ['tw.directives.clickOutside']);

  angular.module('app').controller('MainController', MainController);

  function MainController() {
    this.menuItems = [ 'these', 'are', 'menu', 'items' ];

    this.handleClick = function (menuItem) {
      console.log('you clicked', menuItem);
    };
  }
})();
