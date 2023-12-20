
const form = document.querySelector('form');
let taskInput = document.getElementById('task__input');
//const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.querySelector('.tasks__list');


form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (taskInput.value.trim() != '') {
		tasksList.insertAdjacentHTML('beforebegin', 
		`<div class="task">
		<div class="task__title">
		${taskInput.value}
		</div>
		<a href="#" class="task__remove" onclick = "remove(this)">&times;</a>
		</div>`
		)
		taskInput.value = "";
	}
})

function remove(el) {
	let element = el;
  	element.closest('.task').remove();
}














    




