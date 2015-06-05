angular.module('bosApp', ['ja.qr']).

controller('saleCtrl', function ($scope) {

  $scope.merchantAddress = '1Akq3sCaNZLoE2RmrBCvN8paDGq1HiKow5';
  $scope.saleAmount = '';
  $scope.saleQr  = function() { 
       return 'bitcoin:' + $scope.merchantAddress + '?amount=' + $scope.saleAmount;
   };

  
  $scope.size = 200;
  $scope.correctionLevel = '';
  $scope.typeNumber = 0;
  $scope.inputMode = '';
  $scope.image = true;


});