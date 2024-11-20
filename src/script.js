dayjs.locale('pt-br');

const inputDate = document.querySelector('input[type="date"]');

// tem que ser no formato americano por culpa do html
const today = dayjs().format('YYYY-MM-DD');

inputDate.min = today;