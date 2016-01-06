'use strict';
angular.module('main')
.controller('FooCtrl', function ($log) {

  $log.log('Hello from your Controller: FooCtrl in module main:. This is your controller:', this);

});
