import {myQueue} from "./exercise2";

class myClass implements myQueue{
    
    str : Array<String> = [];

    addTask(task: string) : number
    {
        let count:number = this.str.push(task);
        console.log(task + " has been added to the array")
        return count;
    }

    listAllTasks()
    {
        for (let item of this.str)
        {
        console.log(item)
        }
    }

    deleteTask(task:string)
    {
        let index:number = this.str.indexOf(task);

        if (index > -1)
        {
            str.splice(index, 1);
        }
        
        console.log(task + " has been removed from the array")
        return (this.str.length);
    }
}

let newClass = new myClass();
let x = newClass.addTask("Hello");
console.log(x);

