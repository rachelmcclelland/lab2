let str : Array<string> = ["blue", "yellow", "red", "orange", "green"];

function addTask(task : string) : number
{
    let count:number = str.push(task);
    console.log(task + " has been added to the array")

   // return (str.length);
   return count;
}

function listAllTasks()
{
    for(let i = 0; i < str.length; i++)
    {
        console.log(str[i])
    }
}

function deleteTask(task : string) : number
{
    let index:number = str.indexOf(task);
    /*for (let i = 0; i < str.length; i++)
    {
        if (str[1] == task)
        {
            index = i;
        }
    }*/
    str.splice(index, 1);

    console.log(task + " has been removed from the array")
    return (str.length);
}

listAllTasks();
console.log("\n")

let x:number = addTask("purple");
console.log(x)
listAllTasks();
console.log("\n")

let y : number = deleteTask("red");
console.log(y);

listAllTasks();