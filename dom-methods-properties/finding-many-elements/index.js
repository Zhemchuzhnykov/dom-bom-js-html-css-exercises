// function finding items from a list

const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

// function finding items from a list and returning it as an array

const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(elementsArray);
  return Array.from(elementsArray);
};