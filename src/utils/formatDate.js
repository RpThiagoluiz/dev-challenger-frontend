const formatDate = (date) => {
  const dateFormatted = new Date(date);
  const day =
    dateFormatted.getDate() > 9
      ? dateFormatted.getDate()
      : `0${dateFormatted.getDate()}`; //acrescenter o 0 se for maior que nove
  const month =
    dateFormatted.getMonth() + 1 > 9
      ? dateFormatted.getMonth() + 1
      : `0${dateFormatted.getMonth() + 1}`; //mes comeca apartir do mes 0
  const year = dateFormatted.getFullYear();
  // UTC - const time = dateFormatted.get

  return `${day}/${month}/${year}`;
};

export default formatDate;
