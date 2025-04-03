const formElements = document.querySelectorAll('.forms');
const textArea = document.querySelector('.text-area');
const typeArea = document.querySelector('.type');
const submitButton = document.getElementById('button');
const testButton = document.querySelector('.test-submit');

textArea.addEventListener('click', function () {
    formElements.forEach(element => {
        element.classList.remove('hide');
        element.classList.add('opening-comment');
    });

    textArea.classList.add('opening-comment');
});


document.addEventListener('click', function (event) {
    if (typeArea) {
        if (!typeArea.contains(event.target) && !textArea.contains(event.target)) {
            formElements.forEach(element => {
                element.classList.add('general');
                element.classList.remove('submit-comment'); 
            });

            typeArea.classList.remove('opening-comment');
            textArea.classList.remove('submit-comment');
            textArea.classList.add('opening-comment'); 
        }
    }
});


// wanneer je de comment plaats krijg je een animatie te zien
testButton.addEventListener('click', function (event) {
    formElements.forEach(element => {
        element.classList.add('hide');
        element.classList.remove('opening-comment');
    })

    textArea.classList.remove('opening-comment')

    requestAnimationFrame(() => {
        textArea.classList.add('submit-comment');
    })
})