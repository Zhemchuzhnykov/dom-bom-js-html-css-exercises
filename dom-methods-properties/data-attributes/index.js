// function reading a number from a data attribute, squaring it, and logging it to another element as a data attribute

// get all the numbers into one array
// create a callback which will be iterating list items by the numbers from an array
// inside the callback change the value of the data attributes

const squaredNumbers = () => {

  const itemsWithNumberClass = document.querySelectorAll('.number');

  [...itemsWithNumberClass].forEach(listIttem => {
    listIttem.dataset.squaredNumber = listIttem.dataset.number ** 2;
  });

};