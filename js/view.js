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
        pintarTask(task, section);
    });
}


function pintarTask(task, section) {

}


































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

