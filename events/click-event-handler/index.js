// adding an event handler to a button for a click event

const eventTriggerButton = document.querySelector('.create-btn');

const alertMessage = () => {
  alert('done');
};

eventTriggerButton.addEventListener('click', alertMessage);