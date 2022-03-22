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