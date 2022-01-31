// function creating list items and amending a list with these list items

const finishList = () => {

  const listElement = document.querySelector('.list');
  const fifthElement = document.querySelector('.special');
  
  const firstElement = document.createElement('li');
  firstElement.textContent = '1';
  listElement.prepend(firstElement);

  const forthElement = document.createElement('li');
  forthElement.textContent = '4';
  fifthElement.before(forthElement);

  const sixthElement = document.createElement('li');
  sixthElement.textContent = '6';
  fifthElement.after(sixthElement);

  const eightElement = document.createElement('li');
  eightElement.textContent = '8';
  listElement.append(eightElement);

};