const successPromise = new Promise(resolve => {
  resolve(32);
});

successPromise
  .then(number => {
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then(number => {
    const squaredNumber = number * number;
    return squaredNumber;
  })
  .then(result => {
    console.log(result);
  });

successPromise
  .then(number => {
    return number * 10;
  })
  .then(result => {
    console.log(result); // 320
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
