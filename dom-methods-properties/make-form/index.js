// function amending a form

const finishForm = () => {

  const formElement = document.querySelector('.login-form');
  const existingInput = document.querySelector('input');

  existingInput.type = 'password';

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'login';
  formElement.prepend(newInput);

};