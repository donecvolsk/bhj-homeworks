const revealArray = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    for (let i = 0; i < revealArray.length; i++) {
        let {top, bottom} = revealArray[i].getBoundingClientRect();

        if(bottom < 0 || top < this.window.innerHeight) {
            revealArray[i].classList.add('reveal_active');
        }        
    }   
  })