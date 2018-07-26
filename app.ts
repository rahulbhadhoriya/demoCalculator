/// <reference path="./typings/angularjs/angular.d.ts"/>
/// <reference path="./typings/angular-ui-router/angular-ui-router.d.ts"/>

namespace App {
  export const appName = "app";
}

function configFn(
  $stateProvider: ng.ui.IStateProvider,
  $urlRouterProvider: ng.ui.IUrlRouterProvider,
  $httpProvider: ng.IHttpProvider,
  baseUrl: string
) {
  $httpProvider.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest"
  };
  // $httpProvider.interceptors.push('authInterceptor');
  $urlRouterProvider.otherwise("/demo");

  $stateProvider.state("demo", {
    url: "/demo",
    controller: App.Controllers.DemoController,
    controllerAs: "ctrl",
    template: `
            <div class="container">
        <div class="screen">
            <table>
                <tr>
                    <td class="entry" colspan="4" ng-if="!ctrl.output">{{ctrl.num1}}{{ctrl.selectedOperation}}{{ctrl.num2}}</td>
                    <td class="entry" colspan="4" ng-if="ctrl.output" >{{ctrl.output}}</td>
                </tr>
                <tr>
                    <td><input type="button" value="7" class="button num" ng-click="ctrl.setValues($event)"></td>
                    <td><input type="button" value="8" class="button num" ng-click="ctrl.setValues($event)"></td>
                    <td><input type="button" value="9" class="button num" ng-click="ctrl.setValues($event)"></td>
                    <td><button value="x" class="button operators"       ng-click="ctrl.selectOperation($event)">X</button></td>
                </tr>
                <tr>
                    <td><input type="button" value="4" class="button num"  ng-click="ctrl.setValues($event)"></td>
                    <td><input type="button" value="5" class="button num"  ng-click="ctrl.setValues($event)" ></td>
                    <td><input type="button" value="6" class="button num"  ng-click="ctrl.setValues($event)"></td>
                    <td><input type="button" value="-" class="button operators"  ng-click="ctrl.selectOperation($event)"></td>
                </tr>
                
                <tr>
                    <td><input type="button" value="1" class="button num"  ng-click="ctrl.setValues($event)"></td>
                    <td><input type="button" value="2" class="button num"  ng-click="ctrl.setValues($event)"></td>
                    <td><input type="button" value="3" class="button num"  ng-click="ctrl.setValues($event)"></td>
                    <td><input type="button" value="+" class="button operators"  ng-click="ctrl.selectOperation($event)"></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="button" value="0" class="button num zero"  ng-click="ctrl.setValues($event)"></td>
                    <td><input type="button" value="AC" class="button decimal"  ng-click="ctrl.clearButton()"></td>
                    <td><input type="button" value="=" class="button equal"  ng-click="ctrl.getResult(ctrl.num1,ctrl.num2)"></td>
                </tr>
            </table>
        </div>
        </div>
            `
  });
}

angular
  .module(App.appName, ["ui.router"])
  .constant("baseUrl", (<any>window).baseUrl + "api")
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    "$httpProvider",
    "baseUrl",
    configFn
  ]);
