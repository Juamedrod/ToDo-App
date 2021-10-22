
/***ELEMENT CAPTION */
const btnSaveTask = document.querySelector('.popup button');
const inputTitle = document.querySelector('.popup #title');
const inputDescription = document.querySelector('.popup #description');
const selectPriority = document.querySelector('.popup #urgency');
const message = document.querySelector('.popup #message');

/***LISTENERS */

btnSaveTask.addEventListener('click', saveTask);



function saveTask(event) {
    let task = {
        id: newId(),
        title: inputTitle.value,
        description: inputDescription.value,
        percent: 0,
        priority: selectPriority.value
    }
    let error = isAcceptable(task);

    if (error === 0) {
        inputTitle.value = '';
        inputDescription.value = '';
        selectPriority.value = '';
        message.innerText = codeErrors(0);
        tasksActive.push(task);
        paintTasks(tasksActive, seccionTasks);
    } else {
        message.innerText = codeErrors(error);
    }
}

function isAcceptable(task) {
    //rules of addition
    let acceptable = 0;
    (task.title == "" || task.description == '' || selectPriority.value == '') ? acceptable = -3 : acceptable = 0;
    if (acceptable === 0) tasksActive.filter(e => e.title == task.title).length > 0 ? acceptable = -1 : acceptable = 0;
    if (acceptable === 0) tasksActive.filter(e => e.description == task.description).length > 0 ? acceptable = -2 : acceptable = 0;
    return acceptable;
}

function codeErrors(error) {//print code errors

    switch (error) {
        case 0:
            return 'Everything working smoothly!!';
            break;


        case -1:
            return 'This task title is already in!!!';
            break;

        case -2:
            return 'Description already in place!!';
            break;

        case -3:
            return 'Fullfill all the inputs!!'

        default:
            return 'The odds are not within us today! try later!';
            break;
    }
}


function completeTask(event) {
    let id = event.target.dataset.taskid;

    let newTask = JSON.parse(JSON.stringify(findById(id)));//deep copy of task going to be completed
    if (tasksCompleted.length > 0) {
        newTask.id = parseInt(tasksCompleted.at(-1).id) + 1;
    } else {
        newTask.id = 1;
    }
    tasksCompleted.push(newTask);//push of task to completed array

    tasksActive.splice(tasksActive.findIndex(e => e.id == id), 1);//delete the task from being active
    paintTasks(tasksActive, seccionTasks);
}

function findById(id, list) {
    return tasksActive.find(e => e.id == id);
}

//BUILD HOME PROMPT

function buildHome() {
    let h2 = document.createElement('h2');
    wrapper.classList.add('bg');
    wrapper.style.width = '100%';
    wrapper.style.height = '90vh';

    h2.innerText = 'You Know Nothing, Task Snow';
    seccionTasks.appendChild(h2);
    window.scrollTo(0, 0);
}

function restartWrapper() {
    wrapper.classList.remove('bg');
    wrapper.style.width = '';
    wrapper.style.height = '';
}