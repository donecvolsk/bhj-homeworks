let rotatorArray = Array.from(document.querySelectorAll('.rotator__case')); //Массив из элементов c классом '.rotator__case'
let numberRotator = (rotatorArray.length - 1); //Номер ротатора 
let last_numberRotator = (rotatorArray.length - 1); //Номер следующего ротатора
let pause = 1000; // пауза в интервале

function rotatorFun() {
    rotatorArray[numberRotator].classList.remove('rotator__case_active'); 
    if(numberRotator == last_numberRotator) {
        numberRotator = 0;    
    } else {   
        numberRotator++
    }
    
    rotatorArray[numberRotator].classList.add('rotator__case_active');      
    setTimeout(rotatorFun, pause);   
}

rotatorFun();
  
   
   
    
   
    