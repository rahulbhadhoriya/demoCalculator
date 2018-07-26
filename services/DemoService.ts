module App.Services{
    export class DemoService{
        static serviceName = 'demoService';

        static $inject = ['$http']
        constructor(private $http:ng.IHttpService){

        }
    }
}

angular.module(App.appName)
.service(App.Services.DemoService.serviceName,App.Services.DemoService)