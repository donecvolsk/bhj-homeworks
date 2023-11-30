
let dropdown__value = document.querySelector('.dropdown__value');
let dropdown__list = document.querySelector('.dropdown__list');
let dropdown__item = document.getElementsByClassName('dropdown__item');
let dropdown__link = document.getElementsByClassName('dropdown__link');

function showList() {
    dropdown__list.classList.add('dropdown__list_active');

    for (let i = 0; i < dropdown__item.length; i++) {
        dropdown__item[i].addEventListener('click', function(event) {
            event.preventDefault();
            dropdown__value.textContent = dropdown__link[i].textContent;
            dropdown__list.classList.remove('dropdown__list_active');
         })        
     }        
}

dropdown__value.addEventListener('click', showList);
   
 

    
 
    
        
    
    

