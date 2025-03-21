const buttonForm = document.querySelector('.js-buttonForm');
const form = document.querySelector('.js-form');
const main = document.querySelector('.js-main');

const sections = document.querySelectorAll('.js-blur');

// os parâmetros são os elementos usados na function
export function openForm(form, sections){
    form.classList.remove('hidden');
    form.classList.add('grid');
        
    sections.forEach((section) => {
        section.classList.add('blur-sm');
    });
}

buttonForm.onclick = () => {
    openForm(form, sections);
}

main.onclick = (event) => {

    if(form.classList.contains('grid')){
            
    const itemClick = event.target;
            
    if(!form.contains(itemClick)){
        form.classList.remove('grid');
        form.classList.add('hidden');

            sections.forEach((section) => {
                section.classList.remove('blur-sm');
            });
        }

    }

}