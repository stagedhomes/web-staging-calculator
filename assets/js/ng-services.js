(function() {
    "use strict";

    angular.module("appROSI")
        .factory("factoryROSI", function() {
            var facrosi = {};

            // Store ROSI values
            facrosi.userValues = {
                // Values from user.
                monthsBeforeASPStaged: 0.4,
                monthsBeforeNotASPStaged: 3,
                mortgageAmount: null,
                utilityAndFees: null,
                stagingInvestment: null
            }; // userValues

            facrosi.userResults = {
                // Return on Staging Investment (ROSI)
                unstagedCost: null,
                investment: null,
                savingsASPStaged: null,
                rosiResult: null
            }; // userResults

            /* --------------------------------------------
                Getters
            -------------------------------------------- */
            // Return user values.
            facrosi.getUserValues = function() {
                return facrosi.userValues;
            }; // getValues()

            // Return results.
            facrosi.getUserResults = function() {
                return facrosi.userResults;
            }; // getUserResults()

            /* --------------------------------------------
                Setters
            -------------------------------------------- */
            facrosi.setUserResults = function(unstagedCost, investment, savingsASPStaged, rosiResult) {
                facrosi.userResults.unstagedCost = unstagedCost;
                facrosi.userResults.investment = investment;
                facrosi.userResults.savingsASPStaged = savingsASPStaged;
                facrosi.userResults.rosiResult = rosiResult;
            }; // setUserResults(unstagedCost, investment, savingsASPStaged, rosiResult)

            return facrosi;
        }) // .factory("factoryROSI")
    ; // angular.module("appROSI")
})(); // function()