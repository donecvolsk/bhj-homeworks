const registrationBlock = document.querySelector(`.signin`);
const form = document.querySelector('#signin__form');
const registrationValue = document.querySelectorAll('.control');
const welcome = document.querySelector(`.welcome`);
const welcomeId = welcome.querySelector(`span`);

const deauthorization = document.querySelector('#deauthorization');

window.addEventListener(`load`, () => {
    localStorage.userId ? showWelcome() : false;
  })

/*registrationValue[0].addEventListener('change', () => {
    console.log("Логин: " + registrationValue[0].value);
})

registrationValue[1].addEventListener('change', () => {
    console.log("Пароль: " + registrationValue[1].value);
})*/

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.onload = () => {
        if(xhr.response.success) {
            localStorage.setItem(`userId`, xhr.response.user_id);
            showWelcome();
            form.reset();
        } else {
            alert(`Неверный логин/пароль`);
            form.reset();
        }
    }
})

function showWelcome() {
    registrationBlock.classList.remove(`signin_active`);
    welcomeId.textContent = localStorage.userId;
    welcome.classList.add(`welcome_active`);
}

deauthorization.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('userId');
    location.reload();
})


