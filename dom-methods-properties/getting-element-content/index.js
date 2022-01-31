// function returning an element's text with textContent

const getTitle = () => document.querySelector('.title').textContent;

// function returning an element's text with innerText

const getDescription = () => document.querySelector('.about').innerText;

// function returning an element's HTML with innerHTML

const getPlans = () => document.querySelector('.plans').innerHTML;

// function returning an element's HTML with outerHTML

const getGoal = () => document.querySelector('.goal').outerHTML;