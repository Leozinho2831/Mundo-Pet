// deixando data formato brasileiro
dayjs.locale('pt-br');

// formatando input tel
const telInput = document.querySelector('input[type="tel"]');

function formatInputTel(){
    // não permitir letras
    const clearLetters = telInput.value.replace(/\D/g, '').substring(0,11);
    telInput.value = clearLetters;

    const numberArray = telInput.value.split('');
    let numberFormatted = '';

    if(numberArray.length > 0){
        numberFormatted += `(${numberArray.slice(0,2).join('')})`;
    }

    if(numberArray.length > 2){
        numberFormatted += ` ${numberArray.slice(2,7).join('')}`;
    }

    if(numberArray.length > 7){
        numberFormatted += `-${numberArray.slice(7,11).join('')}`;
    }

    telInput.value = numberFormatted;
    
}

telInput.addEventListener('input', formatInputTel);

// formatando input de data
const dateInput = document.querySelector('.js-inputDate');

function formatInputDate(){
    const clearLetters = dateInput.value.replace(/\D/g, '').substring(0,8);
    dateInput.value = clearLetters;

    const dateArray = dateInput.value.split('');
    let dateFormatted = '';

    if(dateArray.length > 0){
        dateFormatted += `${dateArray.slice(0,2).join('')}`;
    }

    if(dateArray.length > 2){
        dateFormatted += `/${dateArray.slice(2,4).join('')}`;
    }

    if(dateArray.length > 4){
        dateFormatted += `/${dateArray.slice(4,8).join('')}`;
    }

    dateInput.value = dateFormatted;
}

dateInput.addEventListener('input', formatInputDate);

// formatando input de horas
const hourInput = document.querySelector('.js-inputHour');

function formatInputHour(){
    const clearLetters = hourInput.value.replace(/\D/g, '').substring(0,4);
    hourInput.value = clearLetters;

    const hourArray = hourInput.value.split('');
    let hourFormatted = '';

    if(hourArray.length > 0){
        hourFormatted += `${hourArray.slice(0,2).join('')}`;
    }

    if(hourArray.length > 2){
        hourFormatted += `:${hourArray.slice(2,4).join('')}`;
    }

    hourInput.value = hourFormatted;
}

hourInput.addEventListener('input', formatInputHour);