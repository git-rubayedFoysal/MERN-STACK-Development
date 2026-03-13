
const parent = document.querySelector('#parent');

parent.addEventListener('click', (e) => {
    e.target.textContent = 'I am clicked!';
})

function handleClick(e) {
    console.log(e.clientX, e.clientY);
}

document.addEventListener('click', handleClick);
document.removeEventListener('click', handleClick);

function handleKeydown(e) {
    alert(e.key);
}

document.addEventListener('keydown', handleKeydown);

document.removeEventListener('keydown', handleKeydown);
