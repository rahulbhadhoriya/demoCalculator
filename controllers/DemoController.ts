namespace App.Controllers {
  export class DemoController {
    static controllerName = "demoController";

    output: number;
    doingOperation: boolean = false;
    num1: number;
    num2: number;
    temp1: string[] = [];
    temp2: string[] = [];
    selectedOperation: string;

    setValues(e) {
      if (!this.selectedOperation) {
        this.temp1.push(e.currentTarget.getAttribute("value"));
        this.num1 = parseInt(this.temp1.join(""));
      } else {
        this.temp2.push(e.currentTarget.getAttribute("value"));
        this.num2 = parseInt(this.temp2.join(""));
      }
    }
    selectOperation(e) {
      if(!this.num1 && !this.num2){
        return;
      }
      this.selectedOperation = e.currentTarget.getAttribute("value");
    }

    reset() {
      this.num1 = null;
      this.num2 = null;
      this.temp1 = [];
      this.temp2 = [];
      this.selectedOperation = "";
    }
    
    clearButton() {
      if (this.output) {
        this.output = null;
      } else {
        this.reset();
      }
    }

    getResult(a, b) {
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
    }
    static $inject = [];

    constructor() {}
  }
}
angular
  .module(App.appName)
  .controller(
    App.Controllers.DemoController.controllerName,
    App.Controllers.DemoController
  );
