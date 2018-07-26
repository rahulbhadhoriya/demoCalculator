/// <reference path="./typings/angularjs/angular.d.ts"/>
/// <reference path="./typings/angular-ui-router/angular-ui-router.d.ts"/>


module App {
    export const appName = 'app'
}

function configFn(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $httpProvider: ng.IHttpProvider,
    baseUrl: string) {
    $httpProvider.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest' };
   // $httpProvider.interceptors.push('authInterceptor');
    $urlRouterProvider.otherwise('/demo');

    $stateProvider
        .state('demo', {
            url: '/demo',
            controller:App.Controllers.DemoController,
            controllerAs:'ctrl',
            templateUrl:'demoCalculator/templates/demo.html'
        })
}

angular.module(App.appName,['ui.router'])
    .constant('baseUrl', (<any>window).baseUrl + 'api')
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'baseUrl', configFn]);
