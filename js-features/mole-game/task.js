let dead = document.getElementById("dead") //значение уьито кротов
let lost = document.getElementById("lost") //значение промахов
let victory = parseInt(dead.textContent); //значение попаданий
let loss = parseInt(lost.textContent); //значение промахов

getHole = function(index) {
   return document.getElementById(`hole${index}`); 
}

for(i = 1; i <= 9; i++) {
getHole(i).onclick = function() {
    if(this.className.includes("hole hole_has-mole")) {
        ++dead.textContent;
        ++victory;
    } else {
        ++lost.textContent;
        ++loss;
    }
    if(loss === 5) {
        alert("Вы проиграли");
        location.reload(); 
    } else if(victory === 10) {
        alert("Вы убили всех кротов!"); 
        location.reload(); 
    }
}
}






