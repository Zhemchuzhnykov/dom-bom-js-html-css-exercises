// function creating and inserting an element to DOM

const createButton = (buttonText) => {
  const buttonElemenet = document.createElement('button');
  buttonElemenet.textContent = buttonText;
  const bodyElement = document.querySelector('body');
  bodyElement.append(buttonElemenet);
};