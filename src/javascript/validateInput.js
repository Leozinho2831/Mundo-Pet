import { openForm } from "./openForm.js";

const today = dayjs();
const inputDate = document.querySelector('.js-dateSchedule');
const inputDateForm = document.querySelector('.js-formInputDate');

inputDate.min = today.format('YYYY-MM-DD');
inputDateForm.min = today.format('YYYY-MM-DD');

function scheduleHeader(){
    const inputValue = dayjs(inputDate.value);
        
    if(inputValue > today){
        const form = document.querySelector('.js-form');
        const sections = document.querySelectorAll('.js-blur');

        inputDateForm.value = inputValue.format('YYYY-MM-DD');
        openForm(form, sections);
    } else {
        // criar uma notificação
        alert('Digite uma data maior que a data de agora!')
        inputDate.value = '';
    }
}

inputDate.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') scheduleHeader();
});

const phone = document.querySelector('.js-inputPhone');

const verifyPhone = () => {
    let valueArray = [];

    phone.value = phone.value.replace(/\D/g, '');
    valueArray = phone.value.split('');

    if(valueArray.length === 11){
        phone.value = `(${valueArray.slice(0, 2).join('')}) ${valueArray.slice(2, 7).join('')}-${valueArray.slice(7, 11).join('')}`;

        const phoneRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;

        if(phoneRegex.test(phone.value)){
            // executar uma função de enviar dados
        } else {
            alert('Seu número de telefone está escrito de forma incorreta!');
        }
    }
}

phone.oninput = () => {
    verifyPhone();
}

const inputHour = document.querySelector('.js-inputHour');

inputHour.oninput = () => {
    const [hour, minute] = inputHour.value.split(":").map(Number);
    const inputTime = dayjs().hour(hour).minute(minute);

    const diffHour = dayjs(inputDateForm.value).diff(inputTime, 'hour');
    
    if(diffHour > 0){
        // ...
    }
}