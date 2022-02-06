const tasks = [
  { text: 'Buy milk', id: 1, done: false },
  { text: 'Pick up Tom from airport', id: 2,  done: false },
  { text: 'Visit party', id: 3,  done: true },
  { text: 'Visit doctor', id: 4,  done: false },
  { text: 'Buy meat', id: 5,  done: true },
];

const listElem = document.querySelector('.list');
const toDoList = document.querySelector('.list');
const createButton = document.querySelector('.create-task-btn');
const newTaskField = document.querySelector('.task-input');

const renderTasks = tasksList => {
  const tasksElems = tasksList
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
    if (task.id == targetTask) task.done = !task.done;
  });

  listElem.innerHTML = '';

  renderTasks(tasks);
};

const addNewTask = () => {
  const newTask = newTaskField.value;

  tasks.push( {text: newTask, id: tasks.length + 1, done: false} );

  listElem.innerHTML = '';

  renderTasks(tasks);
};

toDoList.addEventListener('click', taskStatusChange);
createButton.addEventListener('click', addNewTask);

/* button Create adds a new task with the text from the field before Create and clears the field after adding.
event listener for the button Create => function to the event listener => get a value of the input
change the initial array */

