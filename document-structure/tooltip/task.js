const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
let toolTip = document.querySelector('.tooltip');

function activeHint() {
    for (let i = 0; i < hasTooltip.length; i++) {
        hasTooltip[i].addEventListener('click', (event) => {
            event.preventDefault();
            let coords = hasTooltip[i].getBoundingClientRect();
              
            toolTip.textContent = hasTooltip[i].title;
            toolTip.classList.add('tooltip_active');
            toolTip.style.left = coords.left + "px";
            toolTip.style.top = coords.bottom + "px";
            
        })       
    }   
}

activeHint();
