const tasks = [
  { text: 'Buy milk', id: 1, creationTime: new Date().getTime(), doneTime: new Date().getTime(), done: false },
  { text: 'Pick up Tom from airport', id: 2, creationTime: new Date().getTime(), doneTime: new Date().getTime(),  done: false },
  { text: 'Visit party', id: 3, creationTime: new Date().getTime(), doneTime: new Date().getTime(),  done: true },
  { text: 'Visit doctor', id: 4, creationTime: new Date().getTime(), doneTime: new Date().getTime(),  done: false },
  { text: 'Buy meat', id: 5, creationTime: new Date().getTime(), doneTime: new Date().getTime(),  done: true },
];

const listElem = document.querySelector('.list');
const createButton = document.querySelector('.create-task-btn');
const newTaskField = document.querySelector('.task-input');

const compareTasks = (a, b) => {
  if (a.done) return new Date(b.finishDate) - new Date(a.finishDate);

  return new Date(b.creationTime) - new Date(a.creationTime);
};

const renderTasks = tasksList => {
  const orderedByTimeTasks = tasksList.sort(compareTasks);
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
      task.doneTime = new Date().getTime();
    }
  });

  listElem.innerHTML = '';

  renderTasks(tasks);
};

const addNewTask = () => {
  const newTask = newTaskField.value;

  if(newTask.length > 0) tasks.push( {text: newTask, id: tasks.length + 1, creationTime: new Date().getTime(), done: false} );

  listElem.innerHTML = '';

  renderTasks(tasks);
  newTaskField.value = '';
};

listElem.addEventListener('click', taskStatusChange);
createButton.addEventListener('click', addNewTask);







