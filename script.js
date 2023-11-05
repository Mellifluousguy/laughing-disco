const inputField = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click",() =>{
    const color = inputField.value;
    document.body.style.background = color;
    document.body.style.backgroundSize = 'cover';
})