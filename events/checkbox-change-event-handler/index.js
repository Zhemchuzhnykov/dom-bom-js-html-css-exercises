// event handler logging to the console the state of the checkbox when it is changed

const checkboxElement = document.querySelector('.task-status');

const checkboxStateLogger = () => {
  console.log(checkboxElement.checked);
};

checkboxElement.addEventListener('change', checkboxStateLogger);