const ClickCookie = document.getElementById("cookie");

ClickCookie.onclick = function () {
    
    let clickerCounter = document.getElementById("clicker__counter");

   ++clickerCounter.textContent;

   if(clickerCounter.textContent % 2 != 0) {
    ClickCookie.width = 250;
   } else {
    ClickCookie.width = 200;
   }
    
}