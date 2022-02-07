// function returning the difference between two times

const getDiff = (startDate, endDate) => {
  const difference = [startDate.getTime(), endDate.getTime()].sort((a,b) => b - a)
    .reduce((acca, value) => acca - value);

  const hours = difference % 86400000;
  const minutes = hours % 3600000;
  const seconds = minutes % 60000;


  return (`${parseInt(difference / 86400000)}d ${parseInt(hours / 3600000)}h ${parseInt(minutes / 60000)}m ${parseInt(seconds / 1000)}s`);
};