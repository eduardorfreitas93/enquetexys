angular.module('enqueteApp', ['ngRoute', 'ngResource', 'enqueteService'])
    .config(function ($routeProvider, $interpolateProvider) {
        "use strict";

        $routeProvider.when('/rest',{
            templateUrl: root_path+'/bundles/rest/Rest/view/index.html',
            controller: 'IndexController'
        });

        $interpolateProvider.startSymbol('[[').endSymbol(']]');
    })
;