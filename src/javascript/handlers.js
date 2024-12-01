const scheduleDateText = document.querySelector('.js-scheduleDateText');

scheduleDateText.textContent = dayjs().format('DD/MM/YYYY');

const scheduleDateChoice = document.querySelector('.js-scheduleDateChoice');

function openOptionSchedule(){
    
}

scheduleDateChoice.onclick = openOptionSchedule;