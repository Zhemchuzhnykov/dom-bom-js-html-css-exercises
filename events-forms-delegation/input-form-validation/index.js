// validation of a submit form and logging into the alert field the data from the input form

const formElem = document.querySelector('.login-form');
const emailErrorText = document.querySelector('.error-text_email');
const passwordErrorText = document.querySelector('.error-text_password');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');


const isEmptyField = value => value ? undefined: 'Required';

const isEmail = value => value.includes('@') ? undefined: 'Should be an email';

const validatorsByField = {
  email: [isEmptyField, isEmail],
  password: [isEmptyField]
};

const validator = (fieldName, value) => validatorsByField[fieldName].map(validator => validator(value)).filter(valid => valid).join(', ');

const emailFieldError = (event) => emailErrorText.textContent = validator('email', event.target.value);

const passwordFieldError = (event) => passwordErrorText.textContent = validator('password', event.target.value);

const submittedForm = (event) => alert(JSON.stringify(Object.fromEntries(new FormData(formElem))));

formElem.addEventListener('submit', submittedForm);
emailField.addEventListener('input', emailFieldError);
passwordField.addEventListener('input', passwordFieldError);
