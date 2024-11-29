// deixando data formato brasileiro
dayjs.locale('pt-br');
// usando plugin de formato
dayjs.extend(dayjs_plugin_customParseFormat);

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

// verificar se o input date ta com uma data do dia atual ou acima
const form = document.querySelector('.js-form');
const alertDate = document.querySelector('.js-textAlertDate');
const alertHour = document.querySelector('.js-textAlertHour');

const classDisplayNone = 'hidden';

function verifyTime(){
    // input do dias
    const today = dayjs().startOf('day');
    const dayInput = dayjs(dateInput.value, 'DD/MM/YYYY').startOf('day');

    if(dayInput.diff(today) >= 0){

        console.log('foi');
        
    } else {
        console.log(dayInput.diff(today));
        
        alertDate.classList.remove(classDisplayNone);
    }

    // input das horas
    const [hoursInput, minutesInput] = hourInput.value.split(':');
    const inputTime = dayjs().hour(hoursInput).minute(minutesInput);
    
    if(inputTime.diff(dayjs(), 'hour') >= 0 && inputTime.diff(dayjs(), 'minute') >= 0){
        console.log(inputTime.diff(dayjs(), 'hour'));
        console.log(inputTime.diff(dayjs(), 'minute'));
        
    } else {
        console.log(alertHour);
        alertHour.classList.remove(classDisplayNone);
    }
}

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    verifyTime();
});

form.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        verifyTime();
    }
});

// caso o texto de alerta estiver ativo, ele irá desativar toda vez que clicar no input
dateInput.onclick = () => {
    if(!alertDate.classList.contains(classDisplayNone)){
        alertDate.classList.add(classDisplayNone);
    }
}

hourInput.onclick = () => {
    if(!alertHour.classList.contains(classDisplayNone)){
        alertHour.classList.add(classDisplayNone);
    }
}