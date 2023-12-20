let xhr = new XMLHttpRequest();
let serverDate; // JSON строка с сервера
let items = document.getElementById('items');
let imgLoader = document.getElementById('loader');

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        imgLoader.classList.remove('loader_active');
        console.log('xhr.responseText');
        serverDate = JSON.parse(xhr.responseText);

        let CharCode;
        let Value;
        for (const key in serverDate.response.Valute) {
            CharCode = serverDate.response.Valute[key].CharCode;
            Value = serverDate.response.Valute[key].Value;

            let htmlItem = document.createElement("div");
			htmlItem.setAttribute("class", "item");
            htmlItem.insertAdjacentHTML('beforeend', `
            <div class="item__code">
            ${CharCode}
            </div>
            <div class="item__value">
            ${Value}
            </div>
            <div class="item__currency">
            руб.
            </div>`
            )
            items.appendChild(htmlItem);
            
          }
  
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
