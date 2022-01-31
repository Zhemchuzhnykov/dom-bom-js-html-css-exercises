'use strict';

const jsdom = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><body><p id="main">My First JSDOM!</p></body>`);
// This prints "My First JSDOM!"
console.log(dom.window.document.getElementById("main").textContent);

// function adding elements into to-do list

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {

  tasks.sort( (a, b) => a.done - b.done).forEach(( { text, done } ) => {

    const listElement = document.querySelector('.list');

    const listItem = document.createElement('li');
    listItem.classList.add('list__item');
    if (done) listItem.classList.add('list__item_done');

    const listCheckBox = document.createElement('input');
    listCheckBox.setAttribute('type', 'checkbox');
    listCheckBox.classList.add('list__item-checkbox');
    listCheckBox.checked = done;

    listItem.append(listCheckBox, text);
    listElement.append(listItem);

  });

};

renderTasks(tasks);

