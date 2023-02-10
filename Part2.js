var tasks = [];
var i;
function addTasks(task) {
    tasks.push(task);
    console.log("Task " + task + " Add to the list.");
    return tasks.length;
}
function listAllTasks() {
    for (var i_1 = 0; i_1 < tasks.length; i_1++) {
        console.log(tasks[i_1]);
    }
}
function deleteTasks(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Task " + tasks + " deleted from list. ");
    }
    else {
        console.log("Task " + tasks + " Not found in list. ");
    }
    return tasks.length;
}
addTasks("eat lunch");
addTasks("Eat dinner");
listAllTasks();
deleteTasks("Eat Lunch");
listAllTasks();
