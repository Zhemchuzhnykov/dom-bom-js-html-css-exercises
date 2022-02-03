// an event listener logging the text from an input into the console

const inputElement = document.querySelector('.text-input');

const inputTextLogger = (event) => {
  console.log(event.target.value);
};

inputElement.addEventListener('change', inputTextLogger);