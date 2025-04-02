const formElements = document.querySelectorAll('.hide');
const textArea = document.querySelector('.text-area');
const typeArea = document.querySelector('.type');
const submitButton = document.getElementById('button');

textArea.addEventListener('click', function () {
    formElements.forEach(element => {
        element.classList.remove('hide');
        element.classList.add('opening-comment');
    });

    textArea.classList.add('opening-comment');
});


document.addEventListener('click', function (event) {
    if (!typeArea.contains(event.target) && !textArea.contains(event.target)) {
        formElements.forEach(element => element.classList.remove('opening-comment'));
        typeArea.classList.remove('opening-comment');
    }
});


// wanneer je de comment plaats krijg je een animatie te zien
submitButton.addEventListener('click', function (event) {
    typeArea.classList.add('submit-comment');
})