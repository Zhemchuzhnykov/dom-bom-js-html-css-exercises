// function inserting an HTML content into an element

const setButton = (btnText) => {
  document.querySelector('body').innerHTML = `<button>${btnText}</button>`;
};