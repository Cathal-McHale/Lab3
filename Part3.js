var toDo = /** @class */ (function () {
    function toDo() {
        this.Tasks = [];
    }
    toDo.prototype.addTasks = function (task) {
        this.Tasks.push(task);
        console.log("Task " + task + " Add to the list.");
        return this.Tasks.length;
    };
    toDo.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (item) {
            console.log(item);
        });
    };
    toDo.prototype.deleteTasks = function (tasks) {
        var index = this.Tasks.indexOf(tasks);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log("Task " + tasks + " deleted from list. ");
        }
        else {
            console.log("Task " + tasks + " Not found in list. ");
        }
        return this.Tasks.length;
    };
    return toDo;
}());
var myToDos = new toDo();
myToDos.addTasks("eat ");
myToDos.addTasks("work");
myToDos.addTasks("Sleep");
myToDos.listAllTasks();
myToDos.deleteTasks("eat");
