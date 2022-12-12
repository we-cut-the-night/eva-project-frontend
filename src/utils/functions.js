export const getEmplName = (first, middle) => {
  return middle ? first + ' ' + middle : first;
};

export const getEmplFullName = (first, middle, last) => {
  return middle ? last + ' ' + first + ' ' + middle : last + ' ' + first;
};

export const getDate = (string, delimiter) => {
  const date = new Date(string);
  const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  return date.getDate() + delimiter + month + delimiter + date.getFullYear();
};

export const birthDateToAge = (date) => {
  const n = new Date();
  const b = new Date(date);
  const age = n.getFullYear() - b.getFullYear();
  return n.setFullYear(1970) < b.setFullYear(1970) ? age - 1 : age;
};

export const getEmplAge = (date) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = ['год', 'года', 'лет'];
  const number = birthDateToAge(date);
  return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};
