let xhr = new XMLHttpRequest;
let serverDateObject; // данные с сервера
let questionObject = ""; // строка с вопросом
let answer; // массив с ответами

const pollTitle = document.getElementById('poll__title');//вопрос
const pollAnswers = document.getElementById('poll__answers'); //блок с кнопакми ответов

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        serverDate = JSON.parse(xhr.responseText);
        questionObject = serverDate.data.title;
        answer = serverDate.data.answers;

        pollTitle.textContent = questionObject;

        for (let i = 0; i < answer.length; i++) {

            let htmlButtons = document.createElement("button");
			htmlButtons.setAttribute("class", "poll__answer");
            htmlButtons.textContent = answer[i];
            pollAnswers.appendChild(htmlButtons); 
            
            htmlButtons.addEventListener('click', (event) => {
                event.preventDefault;               
                alert("Спасибо, ваш голос засчитан!");
                location.reload();
            })
        }
    }   
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
