const formatDate = (date) => {
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Marco",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const dateFormatted = new Date(date);
  const day =
    dateFormatted.getDate() > 9
      ? dateFormatted.getDate()
      : `0${dateFormatted.getDate()}`; //acrescenter o 0 se for maior que nove
  const month = monthNames[dateFormatted.getMonth()]; //mes comeca apartir do mes 0
  const year = dateFormatted.getFullYear();

  return `${day} de ${month} de ${year}`;
};

export default formatDate;
