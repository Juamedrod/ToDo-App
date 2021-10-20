


function deleteTask(event) {
    let id = event.target.dataset.taskid;
    tasksActive.splice(tasksActive.findIndex(e => e.id == id), 1);
    paintTasks(tasksActive, seccionTasks);
}

function findById(id, list) {
    return tasksActive.find(e => e.id == id);
}

