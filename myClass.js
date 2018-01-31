"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass() {
        this.str = [];
    }
    myClass.prototype.addTask = function (task) {
        var count = this.str.push(task);
        console.log(task + " has been added to the array");
        return count;
    };
    myClass.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.str; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    myClass.prototype.deleteTask = function (task) {
        var index = this.str.indexOf(task);
        if (index > -1) {
            str.splice(index, 1);
        }
        console.log(task + " has been removed from the array");
        return (this.str.length);
    };
    return myClass;
}());
var newClass = new myClass();
var x = newClass.addTask("Hello");
console.log(x);
//listAllTasks();
/*console.log("\n")

let x:number = addTask("purple");
console.log(x)
listAllTasks();
console.log("\n")

//let y : number = deleteTask("red");
//console.log(y);

listAllTasks();*/ 
