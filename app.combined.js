var App;
(function (App) {
    App.appName = 'app';
})(App || (App = {}));
function configFn($stateProvider, $urlRouterProvider, $httpProvider, baseUrl) {
    $httpProvider.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest' };
    $urlRouterProvider.otherwise('/demo');
    $stateProvider
        .state('demo', {
        url: '/demo',
        controller: App.Controllers.DemoController,
        controllerAs: 'ctrl',
        templateUrl: 'templates/demo.html'
    });
}
angular.module(App.appName, ['ui.router'])
    .constant('baseUrl', window.baseUrl + 'api')
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'baseUrl', configFn]);
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var DemoController = (function () {
            function DemoController() {
                this.doingOperation = false;
                this.temp1 = [];
                this.temp2 = [];
            }
            DemoController.prototype.setValues = function (e) {
                if (!this.selectedOperation) {
                    this.temp1.push(e.currentTarget.getAttribute("value"));
                    this.num1 = parseInt(this.temp1.join(""));
                }
                else {
                    this.temp2.push(e.currentTarget.getAttribute("value"));
                    this.num2 = parseInt(this.temp2.join(""));
                }
            };
            DemoController.prototype.selectOperation = function (e) {
                if (!this.num1 && !this.num2) {
                    return;
                }
                this.selectedOperation = e.currentTarget.getAttribute("value");
            };
            DemoController.prototype.reset = function () {
                this.num1 = null;
                this.num2 = null;
                this.temp1 = [];
                this.temp2 = [];
                this.selectedOperation = "";
            };
            DemoController.prototype.clearButton = function () {
                if (this.output) {
                    this.output = null;
                }
                else {
                    this.reset();
                }
            };
            DemoController.prototype.getResult = function (a, b) {
                if (this.selectedOperation == "x") {
                    this.output = a * b;
                }
                if (this.selectedOperation == "-") {
                    this.output = a - b;
                }
                if (this.selectedOperation == "+") {
                    this.output = a + b;
                }
                this.reset();
            };
            DemoController.controllerName = "demoController";
            DemoController.$inject = [];
            return DemoController;
        }());
        Controllers.DemoController = DemoController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
angular
    .module(App.appName)
    .controller(App.Controllers.DemoController.controllerName, App.Controllers.DemoController);
var App;
(function (App) {
    var Services;
    (function (Services) {
        var DemoService = (function () {
            function DemoService($http) {
                this.$http = $http;
            }
            DemoService.serviceName = 'demoService';
            DemoService.$inject = ['$http'];
            return DemoService;
        }());
        Services.DemoService = DemoService;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
angular.module(App.appName)
    .service(App.Services.DemoService.serviceName, App.Services.DemoService);
//# sourceMappingURL=app.combined.js.map