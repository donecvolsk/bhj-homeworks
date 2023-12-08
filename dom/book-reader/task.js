const bookControlArray = Array.from(document.querySelectorAll('.font-size')); // Массив элементов bookControl
const bookControlSmall = bookControlArray[0]; // Элемент уменьшения шрифта
const bookControlMedium =  bookControlArray[1]; // Элемент исходного шрифта
const bookControlBig = bookControlArray[2]; // Элемент увеличения шрифта
const book = document.getElementById('book'); // Элемент div с содержимым книги

function changingFont() {
    bookControlSmall.addEventListener('click', function(event) {
        event.preventDefault();
        bookControlSmall.classList.add('font-size_active');
        bookControlBig.classList.remove('font-size_active');
        bookControlMedium.classList.remove('font-size_active');
    
        book.classList.add('font-size_small');
        book.classList.remove('font-size_big');
       })
    
       bookControlBig.addEventListener('click', function(event) {
        event.preventDefault();
        bookControlBig.classList.add('font-size_active');
        bookControlSmall.classList.remove('font-size_active');
        bookControlMedium.classList.remove('font-size_active');
    
        book.classList.add('font-size_big');
        book.classList.remove('bookControlSmall');
        })
}

changingFont();
