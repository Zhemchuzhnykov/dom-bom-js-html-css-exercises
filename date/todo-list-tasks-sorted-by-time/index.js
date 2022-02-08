const tasks = [
  { text: 'Buy milk', id: 1, time: new Date().getTime(), done: false },
  { text: 'Pick up Tom from airport', id: 2, time: new Date().getTime(),  done: false },
  { text: 'Visit party', id: 3, time: new Date().getTime(),  done: true },
  { text: 'Visit doctor', id: 4, time: new Date().getTime(),  done: false },
  { text: 'Buy meat', id: 5, time: new Date().getTime(),  done: true },
];

const listElem = document.querySelector('.list');
const toDoList = document.querySelector('.list');
const createButton = document.querySelector('.create-task-btn');
const newTaskField = document.querySelector('.task-input');

const renderTasks = tasksList => {
  const orderedByTimeTasks = tasksList.sort((a,b) => b.time - a.time);
  const tasksElems = orderedByTimeTasks
    .sort((a, b) => a.done - b.done)
    .map(task => {
      const { text, done } = task;
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.setAttribute('data-id', task.id);
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    })

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const taskStatusChange = (event) => {
  if(!event.target.classList.contains('list__item-checkbox')) return;

  const targetTask = event.target.closest('.list__item').dataset.id;

  tasks.forEach(task => {
    if (task.id == targetTask) {
      task.done = !task.done;
    }
  });

  listElem.innerHTML = '';

  renderTasks(tasks);
};

const addNewTask = () => {
  const newTask = newTaskField.value;

  if(newTask.length > 0) tasks.push( {text: newTask, id: tasks.length + 1, time: new Date().getTime(), done: false} );

  listElem.innerHTML = '';

  renderTasks(tasks);
  newTaskField.value = '';
};

toDoList.addEventListener('click', taskStatusChange);
createButton.addEventListener('click', addNewTask);

