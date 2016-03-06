'use strict';

angular.module('mean.links').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('links example page', {
      url: '/links/example',
      templateUrl: 'links/views/index.html'
    });
  }
]);
