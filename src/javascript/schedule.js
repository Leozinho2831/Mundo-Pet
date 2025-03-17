const form = document.querySelector('.js-form');
const inputs = document.querySelectorAll('.input');

const classError = 'inputError';

form.onsubmit = (event) => {
    event.preventDefault();

    inputs.forEach((input) => {
        
        if(input.value === ''){
            input.classList.add(classError);
        }
    });
}

inputs.forEach((input) => {
    input.onclick = () => {
        if(input.classList.contains(classError)){
            input.classList.remove(classError);
        }
    }
});