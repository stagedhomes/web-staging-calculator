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
        .controller("ctrlROSI", ["$scope", "$state", "$localStorage", "commonVariables", "factoryROSI", function($scope, $state, $localStorage, commonVariables, factoryROSI) {
            // Add global variables to $scope.
            $scope.commonVariables = commonVariables;

            // Get values from factory.
            $scope.userValues = factoryROSI.getUserValues();
            $scope.userResults = factoryROSI.getUserResults();
            $scope.historyValues = factoryROSI.getHistoryValues();

            $scope.calculateROSI = function() {
                // Do ROSI calculations here.

                // Redirect user to home if input values are missing
                // Cost to Sell Your Home Unstaged
                $scope.userResults.numCostUnstaged = (
                    parseFloat($scope.userValues.mortgageAmount) +
                    parseInt($scope.userValues.utilityAndFees)) *
                    parseFloat($scope.userValues.monthsBeforeNotASPStaged)
                ; // userResults.unstagedCost

                // Cost to Sell Your Home Staged
                $scope.userResults.numCostStaged = (
                    parseFloat($scope.userValues.mortgageAmount) +
                    parseInt($scope.userValues.utilityAndFees)) *
                    parseFloat($scope.userValues.monthsBeforeASPStaged) +
                    parseInt($scope.userValues.stagingInvestment)
                ; // userResults.investment

                // Savings When You SELL Your Home ASP® Staged
                $scope.userResults.numSavingsStaged =
                    $scope.userResults.numCostUnstaged -
                    $scope.userResults.numCostStaged
                ; // userResults.savingsASPStaged

                // Return on Staging Investment (ROSI)
                $scope.userResults.numRosi =
                    (($scope.userResults.numSavingsStaged /
                    parseInt($scope.userValues.stagingInvestment)) * 100).toFixed(2)
                ; // userResults.numRosi

                // Add to history array.
                $scope.historyValues.push({
                    numCostUnstaged: $scope.userResults.numCostUnstaged,
                    numCostStaged: $scope.userResults.numCostStaged,
                    numSavingsStaged: $scope.userResults.numSavingsStaged,
                    numRosi: $scope.userResults.numRosi
                }); // historyValues.push

                console.log($scope.historyValues);

                // View Results
                $state.go("app.results");

            }; // calculateROSI()
        }]) // controller("ctrlROSI")
    ; // angular.module("appROSI")
})(); // function()
