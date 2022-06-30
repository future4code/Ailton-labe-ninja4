export const formatDate = () => {
  const dt = new Date();

  const year = dt.getFullYear();
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const day = dt.getDate().toString().padStart(2, "0");

  return day + "/" + month + "/" + year;
};
