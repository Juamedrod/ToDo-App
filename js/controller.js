
/***ELEMENT CAPTION */
const btnSaveTask = document.querySelector('.popup button');
const inputTitle = document.querySelector('.popup #title');
const inputDescription = document.querySelector('.popup #description');
const selectPriority = document.querySelector('.popup #urgency');
const message = document.querySelector('.popup #message');
const iFilter = document.querySelector('.add #filters i');
const inputFilter = document.querySelector('.add #filters input');
const cursor = document.querySelector('.cursorAnim');
const main = document.querySelector('main');
const hoverables = document.querySelectorAll('.hoverable');
/***LISTENERS */
iFilter.addEventListener('click', filterByPriority);
inputFilter.addEventListener('input', filterByDescription);
btnSaveTask.addEventListener('click', saveTask);


/*Mediaquery and cursor management*/
const mediaquery = window.matchMedia('(min-width: 768px)');
mediaquery.addEventListener('change', resolutionChange);
resolutionChange(mediaquery);

function resolutionChange(event) {
    if (event.matches) {
        document.addEventListener('mousemove', divfollow);
        hoverables.forEach(hoverable => {
            hoverable.addEventListener('mouseenter', hovered);
            hoverable.addEventListener('mouseleave', endHovered);
        })
    } else {
        document.removeEventListener('mousemove', divfollow);
        hoverables.forEach(hoverable => {
            hoverable.removeEventListener('mouseenter', hovered);
            hoverable.removeEventListener('mouseleave', endHovered);
        })
    }
}

function hovered() {
    cursor.style.width = '45px';
    cursor.style.height = '45px';
    cursor.style.border = '4px dashed var(--hoverColor)';
}

function endHovered() {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.border = '2px solid var(--hoverColor)';
}

function divfollow(event) {

    let x = event.clientX;
    let y = event.clientY;

    if (x >= (document.documentElement.clientWidth) - 24) {
        x = document.documentElement.clientWidth - 24;
    }
    if (y >= (document.documentElement.clientHeight) - 35) {
        y = document.documentElement.clientHeight - 35;
    }
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
}

function filterByPriority(event) {

    let newPriority = parseInt(event.target.dataset.priority);
    (newPriority + 1 > 3) ? newPriority = 0 : newPriority++;
    event.target.style.color = priorityMap[newPriority];
    event.target.dataset.priority = newPriority.toString();
    if (newPriority == 3) {
        event.target.style.color = 'white';
        return paintTasks(tasksActive, seccionTasks);
    }
    const filteredArray = tasksActive.filter(task => task.priority === newPriority);
    paintTasks(filteredArray, seccionTasks);
}


function filterByDescription(event) {

    event.target.style.backgroundColor = 'red';
    const filteredArray = tasksActive.filter(task => {

        if (task.title.toLowerCase().includes(event.target.value.toLowerCase())) return task;
        if (task.description.toLowerCase().includes(event.target.value.toLowerCase())) return task;
    });

    if (filteredArray.length > 0) event.target.style.backgroundColor = 'green';
    if (event.target.value == '') event.target.style.backgroundColor = 'white';
    paintTasks(filteredArray, seccionTasks);
}


function saveTask(event) {
    let task = {//input fetching values for the possible new task
        id: newId(),
        title: inputTitle.value,
        description: inputDescription.value,
        percent: 0,
        priority: parseInt(selectPriority.value)
    }
    let error = isAcceptable(task);//this new possible task meet the requeriments?

    if (error === 0) {
        inputTitle.value = '';
        inputDescription.value = '';
        selectPriority.value = '';
        message.innerText = codeErrors(error);//error mapping to show correct error msg
        tasksActive.push(task);//push the new item to the array
        saveTasksToLocalStorage(tasksActive, 'tasksActive');//save to local storage
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
    if (tasksCompleted.length > 9) tasksCompleted.splice(0, 1);
    tasksCompleted.push(newTask);//push of task to completed array
    saveTasksToLocalStorage(tasksCompleted, 'tasksCompleted');//save tasksCompleted to local storage

    tasksActive.splice(tasksActive.findIndex(e => e.id == id), 1);//delete the task from being active
    saveTasksToLocalStorage(tasksActive, 'tasksActive');//save to local storage
    paintTasks(tasksActive, seccionTasks);
}

function findById(id, list) {
    return tasksActive.find(e => e.id == id);
}

//BUILD HOME PROMPT

function buildHome() {
    let h2 = document.createElement('h2');
    main.classList.add('bg');

    h2.innerText = 'You Know Nothing, Task Snow';
    seccionTasks.appendChild(h2);

    /* setTimeout(() => {  //Navigate to the top of the scroll & timeout is there for bypass load times issues
        window.scrollTo(0, 0);
    }, 1); */
}

function restartWrapper() {
    main.classList.remove('bg');
    main.style.width = '';
    main.style.height = '';
}



/***SAVE AND LOAD ***/

function fetchFromLocalStorage() {
    let lsSettings = localStorage.getItem('lsSettings');
    if (lsSettings === null) {
        return;
    } else {
        settings.loadFromJson(JSON.parse(lsSettings));
    }

}

function saveTasksToLocalStorage(list, key) {
    localStorage.setItem(key, JSON.stringify(list));
}

function retrieveTasksFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}




