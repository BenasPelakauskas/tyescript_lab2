import {TodoInterface} from './ex2';

class TodoClass implements TodoInterface{

     tasks: Array<string> = [];

 addTask(task: string): number {
    this.tasks.push(task);
    console.log("Insertion completed successfully");
    return this.tasks.length;
}

 listAllTask() {
    console.log("Start of the Array");
   this.tasks.forEach(function (task) {
        console.log(task);
    })
    console.log("End of the Array");
}

 deleteTask(task: string): number {
    let key: string = task;
    let index: number = this.tasks.indexOf(key, 0)

    if (index > -1) {
        this.tasks.splice(index, 1);
        console.log("Item Deleted successfully");
    }
    else {
        console.log("Item not found");
    }
    return this.tasks.length;
}
}

let testClass = new TodoClass();
testClass.addTask("task1");
testClass.addTask("task2");
testClass.listAllTasks();
testClass.deleteTask("task1");
testClass.listAllTasks();
testClass.deleteTask("task3");