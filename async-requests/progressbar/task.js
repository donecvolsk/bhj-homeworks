let file = document.getElementById('file');
let fileName = document.querySelector('.input__wrapper-desc');
let send = document.getElementById('send');

document.getElementsByTagName('input').file.onchange = function() {
    file = this.files[0];
    fileName.textContent = file.name;
    send.addEventListener('click', (event) => {
        event.preventDefault();
        const xhr = new XMLHttpRequest
        xhr.upload.onprogress = function (event) {
            const progress = document.getElementById( 'progress' );
            progress.value = (event.loaded / event.total).toFixed(3);
        };
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.send(file);
    })        
};


   