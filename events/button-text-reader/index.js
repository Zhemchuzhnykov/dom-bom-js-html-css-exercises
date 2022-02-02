// reading the texts of the buttons and logging these texts to a console

[ buttonJS, buttonHTML ] = document.querySelectorAll('.btn');

const handleClick = (event) => {
  console.log(event.target.textContent);
};

buttonJS.addEventListener('click', handleClick);
buttonHTML.addEventListener('click', handleClick);
