/* function returning a promise that has the method that returns another promise: simulation of the request to a 
  server */

const serverResponsePromise = new Promise(resolve => {
  const serverResponse = {
    ok: true,
    json() {
      return Promise.resolve({
        name: 'John',
        age: 20,
      });
    },
  };
  resolve(serverResponse);
});


serverResponsePromise
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
