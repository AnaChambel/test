const toDoList = document.getElementById('to-do-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', () => {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const listItem = document.createElement('li');
    listItem.textContent = newTask;
    toDoList.appendChild(listItem);
    newTaskInput.value = '';
  }
});
