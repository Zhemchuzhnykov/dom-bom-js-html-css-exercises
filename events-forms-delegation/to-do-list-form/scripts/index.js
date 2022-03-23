import { renderTasks } from './tasks-render.js';
import { taskStatusChange } from './task-status.js';
import { addNewTask } from './task-create.js';

// selecting all the required DOM elements
const toDoList = document.querySelector('.list');
const createButton = document.querySelector('.create-task-btn');

// event handlers for users' actions to change a status of a task or add a new task
toDoList.addEventListener('click', taskStatusChange);
createButton.addEventListener('click', addNewTask);
window.addEventListener('storage', renderTasks);
window.addEventListener('DOMContentLoaded', renderTasks);
