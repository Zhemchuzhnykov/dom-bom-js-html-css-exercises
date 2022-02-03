// event handler that logs into the console the state of a checkbox

const checkboxElement = document.querySelector('.task-status');

const checkboxStateLogger = (event) => {
  console.log(event.target.checked);
};

checkboxElement.addEventListener('change', checkboxStateLogger);