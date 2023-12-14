
const form = document.querySelector('form');
const taskInput = document.getElementById('task__input');
const tasksList = document.querySelector('.tasks__list');


let task = function() {tasksList.innerHTML +=
`<div class="task">
<div class="task__title">
${taskInput.value}
</div>
<a href="#" class="task__remove">&times;</a>
</div>`; }



form.addEventListener('submit', (event) => {
	event.preventDefault();
	task();
	taskInput.value = "";

	let taskRemove = Array.from(document.querySelectorAll('.task__remove'));
	for (let i = 0; i < taskRemove.length; i++) {
	taskRemove[i].addEventListener('click', (event) => {
		event.preventDefault();
		event.target.closest(".task").remove();
	})	
}
})












    




