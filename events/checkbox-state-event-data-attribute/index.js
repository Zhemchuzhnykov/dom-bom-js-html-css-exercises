/* checkboxes change event handler logging into the console the information stored in a data attribute
of the elements with events */

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

Array.from(document.querySelectorAll('.pagination__page')).forEach(checkbox => checkbox.addEventListener('click', handleClick));