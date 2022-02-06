// function that returns the week day of a certain date

const dayOfWeek = (date, days) => {

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St']

  return weekDays[new Date(date.setDate(date.getDate() + days)).getDay()];

};