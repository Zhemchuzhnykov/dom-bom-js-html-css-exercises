localStorage.setItem('MU PL 2022/2023', 3);
localStorage.setItem('MU CL Cup 2022/2023', 'quarterfinals');
localStorage.removeItem('MU FA Cup 2022/2023');
localStorage.setItem('MU Man City Win', true);
localStorage.setItem('MU Liverpool Win', null);
localStorage.setItem('MU Players of the Month', JSON.stringify(['De Gea', 'Ronaldo', 'Lewandowskii', 'Rice', 'Fernandes']));
localStorage.setItem('MU Players Stats Leaders', JSON.stringify({ goals: 'Ronaldo', assists: 'Fernandes' }));

// the function returning all the data stored in a local storage of a browser
const getLocalStorageData = () =>  Object.entries(localStorage).reduce( (acca, [key, value]) => {
  let valueToAssign;
  try {
    valueToAssign = JSON.parse(value);
  } catch {
    valueToAssign = value;
  }
  return { ...acca,
      [key]: valueToAssign,
    };
  }, {});

  // counter that saves its values when a web document is refreshed, reloaded, opened in another tab
  const counter = document.querySelector('.counter__container');
  const counterValue = counter.querySelector('.counter__value');

  const onCounterClick = (event) => {

    const operandOfChange = event.target.dataset.operation === 'decrease' ? -1: 1;

    counterValue.textContent = +counterValue.textContent + operandOfChange;

    localStorage.setItem('newValue', JSON.stringify(counterValue.textContent));

  };

  const localStorageValueLoad = () => {
    counterValue.textContent = JSON.parse(localStorage.getItem('newValue'));
  };

  counter.addEventListener('click', onCounterClick);
  window.addEventListener('storage', localStorageValueLoad);
  window.addEventListener('DOMContentLoaded', localStorageValueLoad);