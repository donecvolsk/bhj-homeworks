const form = document.querySelector('form');
const taskInput = document.getElementById('task__input');

const tasksList = document.querySelector('.tasks__list');
const task = document.querySelector('.task');
const taskTitle = document.querySelector('.task__title');


form.addEventListener('submit', (event) => { 
    event.preventDefault();

    let newDiv = document.createElement('div');
    newDiv = task.cloneNode(true);
    taskTitle.textContent = taskInput.value;
    tasksList.before(newDiv);
    event.target.reset();
    })
    







    




