// Task Manager
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Event listener for adding a task
taskForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

// Function to add a task
function addTask(taskText) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = '❌';
  span.addEventListener('click', function () {
    removeTask(li);
  });
  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;
  li.appendChild(span);
  li.appendChild(taskTextSpan);
  taskList.appendChild(li);
}

// Function to remove a task
function removeTask(task) {
  taskList.removeChild(task);
}
