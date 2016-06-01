(function() {
    "use strict";

    angular.module("appROSI")
        .controller("ctrlROSI", ["$scope", "$state", "factoryROSI", function($scope, $state, factoryROSI) {
            // Get values from factory.
            $scope.userValues = factoryROSI.getUserValues();
            $scope.userResults = factoryROSI.getUserResults();

            $scope.calculateROSI = function() {
                // Do ROSI calculations here.

                
                // View Results
                $state.go("app.results");
            }; // calculateROSI()
        }]) // controller("ctrlROSI")
    ; // angular.module("appROSI")
})(); // function()
