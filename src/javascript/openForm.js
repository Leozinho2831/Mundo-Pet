const buttonForm = document.querySelector('.js-buttonForm');
const form = document.querySelector('.js-form');
const main = document.querySelector('.js-main');

const sections = document.querySelectorAll('.js-blur');

buttonForm.onclick  = () => {
    form.classList.remove('hidden');
    form.classList.add('grid');
        
    sections.forEach((section) => {
        section.classList.add('blur-sm');
    });
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