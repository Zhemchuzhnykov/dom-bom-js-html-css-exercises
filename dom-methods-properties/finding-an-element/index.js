// function finding a title element and logging it to a console

export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
};

export const getInputElement = () => {
  const inputElem = document.querySelector("input");
  console.dir(inputElem);
  return inputElem;
};