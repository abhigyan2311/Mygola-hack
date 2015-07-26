
angular.module('MyApp', ['ngMaterial', 'ngMessages'])

.controller('AppCtrl', function($scope) {

  $scope.submitsearch = function () {
     $scope.name = "Place Name";
  }
});