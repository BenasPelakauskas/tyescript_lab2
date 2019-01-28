let tasks: Array<string> = [];

function addTask(task: string): number {
    tasks.push(task);
    console.log("Insertion completed successfully");
    return tasks.length;
}

function listAllTasks() {
    console.log("Start of the Array");
    tasks.forEach(function (task) {
        console.log(task);
    })
    console.log("End of the Array");
}

function deleteTask(task: string): number {
    let key: string = task;
    let index: number = tasks.indexOf(key, 0)

    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Item Deleted successfully");
    }
    else {
        console.log("Item not found");
    }
    return tasks.length;
}

addTask("task1");
addTask("task2");
listAllTasks();
deleteTask("task1");
listAllTasks();
deleteTask("task3");
