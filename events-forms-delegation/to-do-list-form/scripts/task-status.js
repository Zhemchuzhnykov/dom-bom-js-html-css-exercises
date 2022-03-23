import { renderTasks } from './tasks-render.js';

// changes status of a task and renders the updated list of tasks to the web document
export const taskStatusChange = (event) => {

  if(!event.target.classList.contains('list__item-checkbox')) return;

  const targetTask = event.target.closest('.list__item').dataset.id;

  const tasksList = JSON.parse(localStorage.getItem('tasksList'));
  tasksList.forEach(task => {
    if (task.id === +targetTask) {
      task.done = !task.done;
      task.doneTime = new Date().getTime();
    };
  });

  localStorage.setItem('tasksList', JSON.stringify(tasksList));

  renderTasks();
};