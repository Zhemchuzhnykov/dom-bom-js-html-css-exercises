// adding an event of the type "change" repsonding to the change of the text in an input form

const inputForm = document.querySelector('.text-input');

const textFromInput = () => {
  console.log(inputForm.value);
};

inputForm.addEventListener('change', textFromInput);