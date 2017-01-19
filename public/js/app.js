angular.module('StringExtension', [])
.controller('StringExtensionController', ['$scope', '$timeout', 
  ($scope, $timeout) => {
  $scope.options = [
    'hasVowels',
    'toUpper',
    'toLower',
    'ucFirst',
    'isQuestion',
    'words',
    'wordCount',
    'toCurrency',
    'fromCurrency',
    'inverseCase',
    'alternatingCase',
    'getMiddle',
    'numberWords',
    'isDigit',
    'doubleCheck'
  ];

  $scope.result = '';
  $scope.error = '';
  $scope.getResult = (input, selected) => {
    if (input === '' || input === undefined) {
      $scope.result = '';
      $scope.error = 'You did not enter any text';
      return;
    } else if (selected === undefined) {
      $scope.result = '';
      $scope.error = 'You did not select a method';
      return;
    }
    $scope.error = '';
    $scope.result = input[selected]();
    return;
  }
}])