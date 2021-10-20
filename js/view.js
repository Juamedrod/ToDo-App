/*HTML ELEMENT CAPTION*/
const seccionTasks = document.querySelector('.tasks');
const btnAddTask = document.querySelector('#addTask');
const seccionPopUp = document.querySelector('.popup');


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
    pPercent.innerText = task.percent + '%';
    pDescription.innerText = task.description;
    divTask.classList.add('task');
    circle.classList.add('fas');
    circle.classList.add('fa-circle');
    reciclebin.className = 'fas fa-trash-alt';
    reciclebin.dataset.taskid = task.id;
    divDescription.classList.add('description');
    inputPercent.type = 'range';
    inputPercent.dataset.taskid = task.id;//ojo que esto es un numero
    inputPercent.id = 'percent';
    btnComplete.dataset.taskid = task.id;
    btnComplete.innerText = 'COMPLETE';

    inputPercent.addEventListener('click', updatePercent);
    reciclebin.addEventListener('click', deleteTask);
    circle.addEventListener('click', rotatePriority);
    h3.addEventListener('click', showDescription);

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



function rotatePriority(event) {
    console.log('hello3');
}

function updatePercent(event) {
    console.log('hello1');
}

function deleteTask(event) {
    console.log('hello2');
}





function showDescription(event) {
    console.log('hello4');
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

