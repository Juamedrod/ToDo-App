/*HTML ELEMENT CAPTION*/
const h1 = document.querySelector('h1');
const seccionTasks = document.querySelector('.tasks');
const btnAddTask = document.querySelector('#addTask');
const seccionPopUp = document.querySelector('.popup');
const home = document.querySelector('.nav1');
const actives = document.querySelector('.nav2');
const completed = document.querySelector('.nav3');
const homeA = document.querySelector('.nav1 a');
const activesA = document.querySelector('.nav2 a');
const completedA = document.querySelector('.nav3 a');
const logo = document.querySelector('.logo');
const burguer = document.querySelector('.burguer');
const filters = document.querySelector('.add #filters');

/*Global Variables*/
let isMenuOpen = false;
let newId = () => (tasksActive.length > 0) ? tasksActive.at(-1).id + 1 : 1;
let settings = new Settings()

/*********************/
/*LISTENERS*/
home.addEventListener('click', goHome);
logo.addEventListener('click', goHome);
actives.addEventListener('click', goActives);
completed.addEventListener('click', goCompleted);
btnAddTask.addEventListener('click', toggleAddMenu);
burguer.addEventListener('click', goSettings);

startApp();//Function that start it all, and keep electrons moving.

function startApp() {
    fetchFromLocalStorage();//Settings stored in localStorage is injected into the app
    let lsActives = retrieveTasksFromLocalStorage('tasksActive');/*retrieve all datafrom local store and inject it*/
    lsActives === null ? tasksActive : tasksActive = lsActives;
    let lsCompleted = retrieveTasksFromLocalStorage('tasksCompleted');
    lsCompleted === null ? tasksCompleted : tasksCompleted = lsCompleted;
    goHome();
}


function goHome() {
    clearBoardHTML();
    if (isMenuOpen) toggleAddMenu();
    setAllInactive();
    homeA.id = 'active';
    hideFilters();
    buildHome();
}

function goActives() {
    restartWrapper();
    if (isMenuOpen) toggleAddMenu();
    setAllInactive();
    activesA.id = 'active';
    filters.style.display = 'flex';
    paintTasks(tasksActive, seccionTasks);
    showFilters();
}
function goCompleted() {
    restartWrapper();
    if (isMenuOpen) toggleAddMenu();
    setAllInactive();
    completedA.id = 'active';
    paintTasksCompleted(tasksCompleted, seccionTasks);
    hideFilters();
}

function goSettings() {
    restartWrapper();
    clearBoardHTML();
    if (isMenuOpen) toggleAddMenu();
    settings.showSettings(seccionTasks);
    settings.resetSettings();
    hideFilters();
}

function setAllInactive() {
    homeA.id = '';
    activesA.id = '';
    completedA.id = '';

}

function paintTasks(tasks, section) {
    clearBoardHTML();
    tasks.forEach(task => {
        paintTask(task, section);
    });
}

function paintTasksCompleted(tasks, section) {
    clearBoardHTML();
    if (tasksCompleted.length <= 0) seccionTasks.innerHTML = '<div style="margin-top: 30px; text-align: center; color:red"><i class="far fa-angry fa-4x"></i><h3>This.....is.....EMPTYYY!!!</h3></div>';
    tasks.forEach(task => {
        paintTaskCompleted(task, section);
    });
}


function paintTask(task, section) {
    let article = document.createElement('article');
    let divTask = document.createElement('div');
    let divDescription = document.createElement('div');
    let circle = document.createElement('i');
    let reciclebin = document.createElement('i');
    let h3 = document.createElement('h3');
    let pPercent = document.createElement('p');
    let pDescription = document.createElement('p');
    let inputPercent = document.createElement('input');
    let btnComplete = document.createElement('button');

    h3.innerText = task.title;
    h3.dataset.taskid = task.id;
    pPercent.innerText = task.percent + '%';
    pPercent.id = 'percent' + task.id;
    pDescription.innerText = task.description;
    divTask.classList.add('task');
    circle.classList.add('fas');
    circle.classList.add('fa-circle');
    circle.dataset.taskid = task.id;
    circle.style.color = priorityMap[task.priority];
    reciclebin.className = 'fas fa-trash-alt';
    reciclebin.dataset.taskid = task.id;
    divDescription.classList.add('description');
    divDescription.id = 'id' + task.id;
    divDescription.style.height = '0px';
    /* divDescription.style.display = 'none'; */
    inputPercent.type = 'range';
    inputPercent.dataset.taskid = task.id;//ojo que esto es un numero
    inputPercent.id = 'percent';
    inputPercent.value = task.percent;
    btnComplete.dataset.taskid = task.id;
    btnComplete.innerText = 'COMPLETE';
    article.style.height = '0px';


    inputPercent.addEventListener('input', updatePercent);
    btnComplete.addEventListener('click', completeTask);
    reciclebin.addEventListener('click', deleteTask);
    circle.addEventListener('click', rotatePriority);
    h3.addEventListener('click', toggleDescription);


    divTask.appendChild(circle);
    divTask.appendChild(h3);
    divTask.appendChild(pPercent);
    divTask.appendChild(reciclebin);

    divDescription.appendChild(pDescription);
    divDescription.appendChild(inputPercent);
    divDescription.appendChild(btnComplete);
    article.appendChild(divTask);
    article.appendChild(divDescription);
    section.appendChild(article);
    setTimeout(() => {
        article.style.height = '51px';
    }, 1);

}


function paintTaskCompleted(task, section) {
    let article = document.createElement('article');
    let divTask = document.createElement('div');
    let divDescription = document.createElement('div');
    let circle = document.createElement('i');
    let h3 = document.createElement('h3');
    let pPercent = document.createElement('p');
    let pDescription = document.createElement('p');

    h3.innerText = task.title;
    h3.dataset.taskid = task.id;
    pPercent.innerText = task.percent + '%';
    pPercent.id = 'percent' + task.id;
    pDescription.innerText = task.description;
    divTask.classList.add('task');
    circle.classList.add('fas');
    circle.classList.add('fa-circle');
    circle.dataset.taskid = task.id;
    circle.style.color = priorityMap[task.priority];
    divDescription.classList.add('description');
    divDescription.id = 'id' + task.id;
    divDescription.style.height = '0px';

    h3.addEventListener('click', toggleDescription);

    divTask.appendChild(circle);
    divTask.appendChild(h3);
    divTask.appendChild(pPercent);
    divDescription.appendChild(pDescription);
    article.appendChild(divTask);
    article.appendChild(divDescription);
    section.appendChild(article);

}

function deleteTask(event) {

    let id = event.target.dataset.taskid;
    tasksActive.splice(tasksActive.findIndex(e => e.id == id), 1);//delete the task from being active
    saveTasksToLocalStorage(tasksActive, 'tasksActive');//save to local storage
    let article = document.querySelector(`#percent${id}`).parentNode.parentNode;
    article.style.transform = 'scale(0.2)';
    article.style.marginRight = '300px';
    article.style.opacity = '0';
    setTimeout(() => {
        paintTasks(tasksActive, seccionTasks)
    }, 1000);
}

function rotatePriority(event) { //click on circle increase or decrease priority for that task
    let taskId = event.target.dataset.taskid;
    task = findById(taskId, tasksActive);
    newPriority = task.priority + 1 > 2 ? 0 : task.priority + 1;
    task.priority = newPriority;
    event.target.style.color = priorityMap[newPriority];
    saveTasksToLocalStorage(tasksActive, 'tasksActive');//save to local storage

}

function toggleDescription(event) { //show or hide description
    const articles = document.querySelectorAll('main .wrapper .tasks article');
    articles.forEach(article => {
        article.style.height = 'auto';
    })
    let taskId = event.target.dataset.taskid;
    let divDescription = document.querySelector('#id' + taskId);
    if (divDescription.style.height == '0px') {
        divDescription.style.height = '200px';
    } else {
        divDescription.style.height = '0px';
    }


}

function updatePercent(event) {// update percent value via the input slider
    let task = findById(event.target.dataset.taskid);
    let pPercent = document.querySelector('#percent' + task.id);
    task.percent = event.target.value;
    pPercent.innerText = event.target.value + '%';
    saveTasksToLocalStorage(tasksActive, 'tasksActive');//save to local storage
}




function toggleAddMenu(event) {
    if (isMenuOpen) {
        seccionTasks.style.display = '';
        seccionPopUp.style.display = 'none';
        if (activesA.id == 'active') showFilters();
    } else {
        seccionTasks.style.display = 'none';
        seccionPopUp.style.display = 'flex';
        hideFilters();
    }
    message.innerText = '';
    isMenuOpen = !isMenuOpen;
}

function clearBoardHTML() {
    seccionTasks.innerHTML = '';

}

function hideFilters() {
    filters.style.display = 'none';
}

function showFilters() {
    filters.style.display = 'flex';
}


















