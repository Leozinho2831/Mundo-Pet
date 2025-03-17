import { openForm } from "./openForm.js";

const today = dayjs();
const inputDate = document.querySelector('.js-dateSchedule');

inputDate.min = today.format('YYYY-MM-DD');

function schedule(){
    const inputValue = dayjs(inputDate.value);
        
    if(inputValue > today){
        const form = document.querySelector('.js-form');
        const sections = document.querySelectorAll('.js-blur');
        const inputDateForm = document.querySelector('.js-formInputDate');

        inputDateForm.value = inputValue.format('YYYY-MM-DD');
        openForm(form, sections);
    } else {
        // criar uma notificação
        alert('Digite uma data maior que a data de agora!')
        inputDate.value = '';
    }
}

inputDate.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') schedule();
});

const phone = document.querySelector('.js-inputPhone');

const verifyPhone = () => {
    let valueArray = [];

    phone.value = phone.value.replace(/\D/g, '');
    valueArray = phone.value.split('');

    if(valueArray.length === 11){
        phone.value = `(${valueArray.slice(0, 2).join('')}) ${valueArray.slice(2, 7).join('')}-${valueArray.slice(7, 11).join('')}`;
    }

    const phoneRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;

    if(phoneRegex.test(phone.value)){
        // executar uma função de enviar dados
    } else {
        alert('Seu número de telefone está escrito de forma incorreta!');
    }
}

phone.oninput = () => {
    verifyPhone();
}