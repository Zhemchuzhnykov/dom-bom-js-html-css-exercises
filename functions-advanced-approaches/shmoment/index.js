// the set of the getter methods for the object Date
const getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

// the set of the setter methods for the object Date
const setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

// the time-machine function: sends to the future with the method add() or to the past with the method subtract()
const shmoment = (date) => {

  return {
    time: new Date(date),
    add(units, value) {
      const currentUnitValue = this.time[getMethodsNames[units]]();
      this.time = new Date(
        this.time[setMethodsNames[units]](currentUnitValue + value)
      );
      return this;
    },
    subtract(units, value) {
      return this.add(units, -value);
    },
    result() {
      return this.time;
    },
  };
};