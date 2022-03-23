import { renderTasks } from './tasks-render.js';

const newTaskField = document.querySelector('.task-input');

// adds a new task to the list of tasks and renders the updated list to the web document
export const addNewTask = () => {

  if(localStorage.getItem('tasksList') === null) localStorage.setItem('tasksList', JSON.stringify([]));

  const newTask = newTaskField.value;

  if(newTask.length > 0) {
    localStorage.setItem('tasksList', JSON.stringify(JSON.parse(localStorage.getItem('tasksList'))
    .concat( 
      { text: newTask,
        id: JSON.parse(localStorage.getItem('tasksList')).length + 1,
        creationTime: new Date().getTime(),
        done: false }
      )));
  };

  newTaskField.value = '';

  renderTasks();
};