// function receiving a current time in a user's timezone and returning the Greenwich time

const getGreenwichTime = (date) => {
  const formatter = new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC'
 });
 return formatter.format(date);
};