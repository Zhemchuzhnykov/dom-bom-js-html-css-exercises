// function changing classes of elements

const manageClasses = () => {

  const elementClassOne = document.querySelector('.one');
  elementClassOne.classList.add('selected');

  const elementClassTwo = document.querySelector('.two');
  elementClassTwo.classList.remove('selected');

  const elementClassThree = document.querySelector('.three');
  elementClassThree.classList.toggle('three_done');

  const elementClassFour = document.querySelector('.four');
  if (elementClassFour.classList.contains('some-class')) elementClassFour.classList.add('another-class');

};