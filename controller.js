/**
 * Created with PyCharm.
 * User: rootart
 * Date: 4/10/13
 * Time: 2:33 PM
 */
var cartModule = angular.module('CartApp', []);
cartModule.controller('CartController',
    function ($scope, $location) {
        $scope.items = [
            {title: 'Coding with angular', quantity: 10, price: 12.10},
            {title: 'Coding with angular', quantity: 10, price: 190.0},
            {title: 'Coding with angular', quantity: 10, price: 7.54}
        ];
        $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        }
    });
cartModule.controller('StartUpController',
    function($scope){
        $scope.funding = { startingEstimate: 0};
        $scope.calc = function() {
            $scope.funding.needed = $scope.funding.startingEstimate * 10;
        }
        $scope.$watch('funding.startingEstimate', $scope.calc);
        $scope.requestFunding = function(){
            alert("Get more clients")
        }
        $scope.reset = function(){
            $scope.funding.startingEstimate = 0;
        }
    }
    );