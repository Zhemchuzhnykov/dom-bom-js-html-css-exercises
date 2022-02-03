// reading the texts of the buttons and logging these texts to a console

const handleClick = (event) => {
  console.log(event.target.textContent);
};

Array.from(document.querySelectorAll('.btn')).forEach(button => button.addEventListener('click', handleClick));
