// function that executes a promises with a certain delay

const delay = ms => {
  
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  });
};

delay(3000).then(() => alert('And...?'));