interface toDoInterface {
    Tasks: Array<string>;
    addTasks(task: string): number;
    listAllTasks(): void;
    deleteTasks(task: string): number;


}

class toDo implements toDoInterface {
    constructor() { }
    Tasks: Array<string> = [];

    addTasks(task: string): number {
        this.Tasks.push(task);
        console.log("Task " + task + " Add to the list.");
        return this.Tasks.length;

    }
    listAllTasks(): void {
        this.Tasks.forEach((item) => {
            console.log(item);
        })
    }

    deleteTasks(tasks:string):number{
        let index:number = this.Tasks.indexOf(tasks);
        if(index> -1){
            this.Tasks.splice(index,1);
            console.log("Task " +tasks + " deleted from list. ");
        } else{
            console.log("Task "+tasks +" Not found in list. ");
        }
        return this.Tasks.length;

    }
}


let myToDos = new toDo();
myToDos.addTasks("eat ");
myToDos.addTasks("work");
myToDos.addTasks("Sleep");
myToDos.listAllTasks();
myToDos.deleteTasks("eat");