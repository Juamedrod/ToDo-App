


function completeTask(event) {
    let id = event.target.dataset.taskid;

    let newTask = JSON.parse(JSON.stringify(findById(id)));//deep copy of task going to be completed
    newTask.id = parseInt(tasksCompleted.at(-1).id) + 1;
    tasksCompleted.push(newTask);//push of task to completed array

    tasksActive.splice(tasksActive.findIndex(e => e.id == id), 1);//delete the task from being active
    paintTasks(tasksActive, seccionTasks);
}

function findById(id, list) {
    return tasksActive.find(e => e.id == id);
}

