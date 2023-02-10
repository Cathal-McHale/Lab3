let tasks:string[] = [];
var i;


function addTasks(task:string):number{
        tasks.push(task);
        console.log("Task "+task+" Add to the list.");
        return task.length;
}


function listAllTasks():void{
    for(let i = 0; i < tasks.length; i++){  
    console.log(tasks[i]); 
}
}


function deleteTasks(task:string):number{
    let index:number = tasks.indexOf(task);
    if(index> -1){
        tasks.splice(index,1);
        console.log("Task " +tasks + " deleted from list. ");
    } else{
        console.log("Task "+tasks +" Not found in list. ");
    }
    return tasks.length;
}


 addTasks("eat lunch");
 addTasks("Eat dinner");
 listAllTasks();
 deleteTasks("Eat Lunch");
 listAllTasks();