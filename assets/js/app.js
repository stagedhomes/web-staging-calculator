(function() {
    "use strict";

    angular.module("appROSI", [
        "ui.router",
        "ngResource",
        "LocalStorageModule"
    ]) // angular.module
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                // Route: Home
                .state("app", {
                    url: "/",
                    views: {
                        "header": {
                            templateUrl: "./assets/views/header.html",
                        }, // header
                        "content": {
                            templateUrl: "./assets/views/home.html",
                        } // content
                    } // views
                }) // .state

                // Route: Results
                .state("app.results", {
                    url: "results",
                    views: {
                        "content@": {
                            templateUrl: "./assets/views/results.html"
                        } // content
                    } // views
                }) // .state

                // Route: ROSI
                .state("app.history", {
                    url: "history",
                    views: {
                        "content@": {
                            templateUrl: "./assets/views/history.html"
                        } // content
                    } // views
                }) // state

                // Route: ROSI
                .state("app.rosi", {
                    url: "rosi",
                    views: {
                        "content@": {
                            templateUrl: "./assets/views/rosi.html"
                        } // content
                    } // views
                }) // state

                // Route: Become an ASP
                .state("app.become_asp", {
                    url: "become_asp",
                    views: {
                        "content@": {
                            templateUrl: "./assets/views/become-asp.html"
                        } // content
                    } // views
                }); // state

            $urlRouterProvider.otherwise("/");
        }) // .config
    ; // angular.module
})(); // function
