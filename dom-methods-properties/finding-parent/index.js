// function finding a certain element that is a parent of another certain element

const getSection = (num) => document.querySelector(`span[data-number="${num}"]`).closest('.box').dataset.section;