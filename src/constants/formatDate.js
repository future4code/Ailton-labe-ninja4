export const formatDate = (date) => {
  const year = date.toString().substr(0, 4);
  const month = date.toString().substr(5, 2);
  const day = date.toString().substr(8, 2);

  return day + "/" + month + "/" + year;
};
