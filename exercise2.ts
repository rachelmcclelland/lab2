export interface myQueue{
   
    str : Array<String>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string): number;
}