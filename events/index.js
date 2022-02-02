// the event handlers adding new elements to their parent element while diving and bubbling

// selecting all the elements
const divElement = document.querySelector('.rect_div');
const paragraphElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');
const elementsBox = document.querySelector('.events-list');

// creating a function executing a required work
const elementsAdder = (text, color) => {
  elementsBox.innerHTML += `<span style="color:${color}; margin-left: 8px;">${text}</span>`;
};

// creating functions to assign to events listeners
const greyDiv = elementsAdder.bind(null, 'DIV', 'grey');
const greyParagraph = elementsAdder.bind(null, 'P', 'grey');
const greySpan = elementsAdder.bind(null, 'SPAN', 'grey');
const greenDiv = elementsAdder.bind(null, 'DIV', 'green');
const greenParagraph = elementsAdder.bind(null, 'P', 'green');
const greenSpan = elementsAdder.bind(null, 'SPAN', 'green');

// adding event handlers to the squares
handlersActivatorFunc();

// button which clears the box with elements
const clearingFunction = () => {
  elementsBox.innerHTML = '';
};

const clearingButton = document.querySelector('.clear-btn');

clearingButton.addEventListener('click', clearingFunction);

// button removing handlers from the squares
const handlersRemoverFunc = () => {
  divElement.removeEventListener('click', greyDiv, true);
  paragraphElement.removeEventListener('click', greyParagraph, true);
  spanElement.removeEventListener('click', greySpan, true);
  divElement.removeEventListener('click', greenDiv);
  paragraphElement.removeEventListener('click', greenParagraph);
  spanElement.removeEventListener('click', greenSpan);
};

const removeHandlersButton = document.querySelector('.remove-handlers-btn');

removeHandlersButton.addEventListener('click', handlersRemoverFunc);

// button switching on all the event handlers for the squares
function handlersActivatorFunc() {
  divElement.addEventListener('click', greyDiv, true);
  paragraphElement.addEventListener('click', greyParagraph, true);
  spanElement.addEventListener('click', greySpan, true);
  divElement.addEventListener('click', greenDiv);
  paragraphElement.addEventListener('click', greenParagraph);
  spanElement.addEventListener('click', greenSpan);
};

const activateHandlersButton = document.querySelector('.attach-handlers-btn');

activateHandlersButton.addEventListener('click', handlersActivatorFunc);