const addText = function () {
    const timer = document.getElementById("timer");

    timer.textContent -= 1;
    
    if(timer.textContent <= 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
    }

}

let timerId = setInterval(addText, 1000);