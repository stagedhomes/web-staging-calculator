(function() {
    "use strict";

    angular.module("appROSI")
        // Global Variables
        .constant("commonVariables", {
            cdnUrl: "https://d2itdnqewolu1g.cloudfront.net/"
        }) // constant("commonVariables")

        // <head> controller
        .controller("ctrlHead", ["$scope", "commonVariables", function($scope, commonVariables) {
            $scope.commonVariables = commonVariables;
        }]) // controller("ctrlHead")

        // Main controller for application.
        .controller("ctrlROSI", ["$scope", "$state", "commonVariables", "factoryROSI", function($scope, $state, commonVariables, factoryROSI) {
            // Add global variables to $scope.
            $scope.commonVariables = commonVariables;

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
