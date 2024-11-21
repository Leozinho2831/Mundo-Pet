// deixando data formato brasileiro
dayjs.locale('pt-br');

const inputDate = document.querySelector('input[type="date"]');

// tem que ser no formato americano por culpa do html
const today = dayjs().format('YYYY-MM-DD');

inputDate.min = today;

const telInput = document.querySelector('input[type="tel"]');

function formatInputTel(){
    // não permitir letras
    const clearLetters = telInput.value.replace(/\D/g, '').substring(0,11);
    telInput.value = clearLetters;

    const numberArray = clearLetters.split('');
    
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