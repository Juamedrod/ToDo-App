/*HTML ELEMENT CAPTION*/
const seccionTasks = document.querySelector('.tasks');
const btnAddTask = document.querySelector('#addTask');
const seccionPopUp = document.querySelector('.popup');
const home = document.querySelector('nav1');
const actives = document.querySelector('nav2');
const completed = document.querySelector('nav3');

/*Global Variables*/
let isMenuOpen = false;
let newId = () => taskToDo.at(-1).id + 1;


/*********************/

btnAddTask.addEventListener('click', toggleAddMenu);



function paintTasks(tasks, section) {
    section.innerHTML = '';
    tasks.forEach(task => {
        paintTask(task, section);
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
    divDescription.style.display = 'none';
    inputPercent.type = 'range';
    inputPercent.dataset.taskid = task.id;//ojo que esto es un numero
    inputPercent.id = 'percent';
    inputPercent.value = task.percent;
    btnComplete.dataset.taskid = task.id;
    btnComplete.innerText = 'COMPLETE';

    inputPercent.addEventListener('change', updatePercent);
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


}

function completeTask(event) {

}

function rotatePriority(event) { //click on circle increase or decrease priority for that task
    let taskId = event.target.dataset.taskid;
    task = findById(taskId, tasksActive);
    newPriority = task.priority + 1 > 2 ? 0 : task.priority + 1;
    task.priority = newPriority;
    event.target.style.color = priorityMap[newPriority];

}

function toggleDescription(event) {
    let taskId = event.target.dataset.taskid;
    let divDescription = document.querySelector('#id' + taskId);
    divDescription.style.display == 'none' ? divDescription.style.display = '' : divDescription.style.display = 'none';

}

function updatePercent(event) {
    let task = findById(event.target.dataset.taskid);
    let pPercent = document.querySelector('#percent' + task.id);
    task.percent = event.target.value;
    pPercent.innerText = event.target.value + '%';
}










paintTasks(tasksActive, seccionTasks);//para test, quitar despues!!!
















function toggleAddMenu(event) {
    if (isMenuOpen) {
        seccionTasks.style.display = '';
        seccionPopUp.style.display = 'none';
    } else {
        seccionTasks.style.display = 'none';
        seccionPopUp.style.display = 'flex';
    }
    isMenuOpen = !isMenuOpen;
}

