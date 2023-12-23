

const subscribeModal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close');

if(document.cookie != "subscribeModal=true") {
    subscribeModal.classList.add('modal_active');

    closeModal.addEventListener('click', () => {
        subscribeModal.classList.remove('modal_active');
        document.cookie = "subscribeModal=" + "true";
        console.log('куки2:' + document.cookie);
    })

}

console.log('куки:' + document.cookie);

