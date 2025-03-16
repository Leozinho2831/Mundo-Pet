const today = dayjs();
const inputDate = document.querySelector('.js-dateSchedule');

inputDate.min = today.format('YYYY-MM-DD');

inputDate.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        const inputValue = dayjs(inputDate.value);
        
        if(inputValue > today){
            // ...
        } else {
            // criar uma notificação
            alert('Digite uma data maior que a data de agora!')
            inputDate.value = '';
        }
    }
});