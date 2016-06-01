(function() {
    "use strict";

    angular.module("appROSI")
        .controller("ctrlROSI", ["$scope", "factoryROSI", function($scope, factoryROSI) {
            // Get values from factory.
            $scope.userValues = factoryROSI.getUserValues();
            $scope.userResults = factoryROSI.getUserResults();

            $scope.calculateROSI = function() {
                
            }; // calculateROSI()
        }]) // controller("ctrlROSI")
    ; // angular.module("appROSI")
})(); // function()
