export const dateConverter = function (timestamp) {
  const dateConvert = new Date(Number(timestamp));
  const newDate = dateConvert.toLocaleDateString();
  return newDate;
};

export const changeTitle = function () {
  document.title = "Upload Page";
};
