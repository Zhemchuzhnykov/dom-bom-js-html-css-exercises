// a button logging into the console the text from the input form

const consoleLoggerBtn = document.querySelector('.search__btn');
const inputElement = document.querySelector('.search__input');

const consoleLoggerFunc = () => {
  console.log(inputElement.value);
};

consoleLoggerBtn.addEventListener('click', consoleLoggerFunc);