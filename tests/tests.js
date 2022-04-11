// Change format date in db to dd/mm/yyyy from yyyy-mm-dd
function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('/');
}

dbDate = '2022-09-04';
newDate = `Change database date from ${dbDate} to ${formatDate(dbDate)}`; // returns date in dd/mm/yyyy

console.log(newDate);
