let tabArray =  Array.from(document.getElementsByClassName('tab'));
let tabcontentArray = Array.from(document.getElementsByClassName('tab__content'));


for (let i = 0; i < tabArray.length; i++)  {
    tabArray[i].addEventListener('click', () => {
      if(tabArray[i].textContent === tabArray[2].textContent) {
        tabArray[i].classList.add('tab_active');
        tabArray[0].classList.remove('tab_active');
        tabArray[1].classList.remove('tab_active');

        tabcontentArray[i].classList.add('tab__content_active');
        tabcontentArray[0].classList.remove('tab__content_active');
        tabcontentArray[1].classList.remove('tab__content_active');
      }

      if(tabArray[i].textContent === tabArray[1].textContent) {
        tabArray[i].classList.add('tab_active');
        tabArray[0].classList.remove('tab_active');
        tabArray[2].classList.remove('tab_active');

        tabcontentArray[i].classList.add('tab__content_active');
        tabcontentArray[0].classList.remove('tab__content_active');
        tabcontentArray[2].classList.remove('tab__content_active');
      }

      if(tabArray[i].textContent === tabArray[0].textContent) {
        tabArray[i].classList.add('tab_active');
        tabArray[1].classList.remove('tab_active');
        tabArray[2].classList.remove('tab_active');

        tabcontentArray[i].classList.add('tab__content_active');
        tabcontentArray[1].classList.remove('tab__content_active');
        tabcontentArray[2].classList.remove('tab__content_active');
      }
     
    })
  }

/*for (let i = 0; i < tabArray.length; i++) { 
    tabArray[i].addEventListener('click', () => {
        tabArray[i].classList.add('tab_active');  
    })
    
}*/
