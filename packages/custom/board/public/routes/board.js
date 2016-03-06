'use strict';

angular.module('mean.board').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('board example page', {
      url: '/board/example',
      templateUrl: 'board/views/index.html'
    });
  }
]);
