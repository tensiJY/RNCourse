export function getFormattedDate(date) {
  let month = date.getMonth() + 1;
  month = month > 10 ? month : `0${month}`;
  let day = date.getDate();
  day = day > 10 ? day : `0${day}`;
  return `${date.getFullYear()}-${month}-${day}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
