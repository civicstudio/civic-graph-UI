(function (angular) {

    'use strict';

    angular.module('civic-graph')
        .constant('_', window._)
        .config(['$locationProvider', '$compileProvider',
            function ($locationProvider, $compileProvider) {
                $locationProvider.html5Mode(true);
                $compileProvider.debugInfoEnabled(true);
            }])
        .filter('thousandSuffix', function () {
            return function (input, decimals) {
                var exp,
                    suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

                if (window.isNaN(input)) {
                    return null;
                }

                if (input < 1000) {
                    return input;
                }

                exp = Math.floor(Math.log(input) / Math.log(1000));

                return (input / Math.pow(1000, exp)).toFixed(decimals) + suffixes[exp - 1];
            };
        });

})(angular);
