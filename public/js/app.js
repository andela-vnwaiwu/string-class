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
  $scope.getResult = () => {
    try {
      $scope.input && $scope.selected ? ($scope.result =  $scope.input[$scope.selected]()) : '';
    } catch (error) {
      $scope.result = error.message;
    }
    return $scope.result;
  }
}])