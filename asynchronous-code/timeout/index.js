// function delaying a call of the function passed as an argument

function delay(delay, callback, context, ...arguments) {
  setTimeout(() => callback.call(context, ...arguments), delay);
};

// test function
const mathOperations = (num1, num2, num3, num4, num5) => {
  console.log(num1 + num2 - ((num3 * num4) / num5));
};

// an object with a test method
const player = {
  name: 'Cristiano',
  season: '2021-2022',
  achievements: ['World Cup winner', 'Best Player of Year'],
  speech(num1, num2, num3) {
    console.log(`I am ${this.name}. In ${this.season}, I became ${this.achievements[0]} and \
${this.achievements[1]}. I have scored ${num1} goals in Premier League, ${num2} goals in Champions League, \
and ${num3} goals in the World Cup`);
  },
};

// test launch 1
delay(1000, mathOperations, this, 1, 2, 7, 2, 2);

// test launch 2
delay(2000, player.speech, player, 19, 6, 7);