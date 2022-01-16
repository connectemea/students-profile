export const getDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
export const getYear = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}`;
};
export const yearToObj = (yearStr) => {
  const date = new Date(`1/1/${yearStr}`);
  return date;
};
export const dateToObj = (dateStr) => {
  const dateFields = dateStr.split("/");
  const date = new Date(`${dateFields[1]}/${dateFields[0]}/${dateFields[2]}`);
  return date;
};
