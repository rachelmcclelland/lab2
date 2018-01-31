"use strict";
var str = ["blue", "yellow", "red", "orange", "green"];
function addTask(task) {
    var count = str.push(task);
    console.log(task + " has been added to the array");
    // return (str.length);
    return count;
}
function listAllTasks() {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
    /*for (let item of str)
    {
        console.log(item)
    }

    str.forEach(function(task){
        console.log()
    })*/
}
function deleteTask(task) {
    var index = str.indexOf(task);
    /*for (let i = 0; i < str.length; i++)
    {
        if (str[1] == task)
        {
            index = i;
        }
    }*/
    str.splice(index, 1);
    console.log(task + " has been removed from the array");
    return (str.length);
}
listAllTasks();
console.log("\n");
var x = addTask("purple");
console.log(x);
listAllTasks();
console.log("\n");
var y = deleteTask("red");
console.log(y);
listAllTasks();
