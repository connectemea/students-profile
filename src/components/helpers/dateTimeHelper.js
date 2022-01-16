export const getDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
export const getYear = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}`;
};
