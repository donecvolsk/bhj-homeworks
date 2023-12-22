const textarea = document.getElementById('editor');
const clearButton = document.querySelector('button');

const storedText = localStorage.getItem('textValue');

textarea.addEventListener('change', () => {
    localStorage.textValue = textarea.value;
})

if(storedText) {
    textarea.value = storedText;
}

clearButton.addEventListener('click', () => {
    textarea.value = '';
})



