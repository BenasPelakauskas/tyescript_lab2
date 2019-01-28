export interface TodoInterface {
    tasks : Array<string>;
    addTask(task : string) : number;
    listAllTask():void;
    deleteTask(task : string): number;
}