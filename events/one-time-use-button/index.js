// a button that triggers an event that works only one time

const eventTriggerBtn = document.querySelector('.single-use-btn');

const consoleLoggerFunc = () => {
  console.log('clicked');
};

const singleEventFunc = () => {
  eventTriggerBtn.removeEventListener('click', consoleLoggerFunc);
};

eventTriggerBtn.addEventListener('click', consoleLoggerFunc);

eventTriggerBtn.addEventListener('click', singleEventFunc);