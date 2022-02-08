// function sorting an array of students' birthdays

const students = [ { name: 'Mama', birthDay: '09/29/1972' }, { name: 'Berdiansk', birthDay: '09/17/1888' }, { name: 'Cristiano', birthDay: '02/05/1985' }, { name: 'Jose', birthDay: '01/26/1965' }, { name: 'Nastia', birthDay: '06/05/1985' }, { name: 'Tareq', birthDay: '01/01/1860' }, { name: 'Yevhen', birthDay: '02/19/1993' } ];

const studentsBirthDays = (students) => {

  const monthName = new Intl.DateTimeFormat("en-US", { month: "short" });
  const months = students.sort((a,b) => new Date(a.birthDay).getMonth() - new Date(b.birthDay).getMonth())
  .map(student => monthName.format(new Date(student.birthDay)))
  .reduce((acca, month) => {
    if(!acca.includes(month)) acca.push(month);
    return acca;
  }, []);

  return months.map(month => { 
    return {
      [month]: students.filter(student =>  monthName.format(new Date(student.birthDay)) == month)
      .sort((a,b) => new Date(a.birthDay).getTime() - new Date(b.birthDay).getTime())
      .map(student => student.name)
    }});
};

console.log(studentsBirthDays(students));

/* sort array => generate an array with the months => formatter to add months strings => assign to new object array
 names from the months array by index => getMonth => assign key => assign value in the right format => return it */