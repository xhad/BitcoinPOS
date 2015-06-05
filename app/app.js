angular.module('adaptiveApp', ['ja.qr']).

controller('AdaptiveCtrl', function ($scope) {
  $scope.qrcodeString = '1Akq3sCaNZLoE2RmrBCvN8paDGq1HiKow5';
  $scope.size = 250;
  $scope.correctionLevel = '';
  $scope.typeNumber = 0;
  $scope.inputMode = '';
  $scope.image = true;
});