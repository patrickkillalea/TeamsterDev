'use strict';

angular.module('mean.team').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('team example page', {
      url: '/team/example',
      templateUrl: 'team/views/index.html'
    });
  }
]);
