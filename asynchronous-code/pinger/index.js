'use strict';

// function pinging a certain number of times with a set interval
const pinger = (count, period) => {

  console.log("ping");

  const interval = setInterval(() => {
    console.log("ping");
  }, period);

  const stopTime = count * period - period;

  setTimeout(() => {
    clearInterval(interval);
  }, stopTime);
};

pinger(7, 300); // makes 5 writes with 100 ms interval