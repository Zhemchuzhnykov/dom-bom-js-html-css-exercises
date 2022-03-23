// selecting DOM elements required for execution of the functions
const listElem = document.querySelector('.list');

// function for sorting tasks in a correct order
const compareTasks = (a, b) => {

  // sorting by completion
    if (a.done < b.done) return -1;
    if (a.done > b.done) return 1;

    // sorting by time of completion
    if (a.doneTime < b.doneTime) return 1;
    if (a.doneTime > b.doneTime) return -1;

    // sorting by time of addition
    if (a.creationTime < b.creationTime) return 1;
    if (a.creationTime > b.creationTime) return -1;

  };

// renders tasks to the web document
export const renderTasks = () => {

  if (localStorage.getItem('tasksList') === null) return;

  const tasksList = JSON.parse(localStorage.getItem('tasksList'));

  listElem.innerHTML = '';

  listElem.append(...tasksList
    .sort(compareTasks)
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
    }));
};