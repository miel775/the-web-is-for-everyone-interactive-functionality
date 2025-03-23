const formElements = document.querySelectorAll('.hide');
const textArea = document.querySelector('.text-area');

textArea.addEventListener('click', function() {
    formElements.forEach(element => element.classList.remove('hide'));
    formElements.forEach(element => element.classList.add('opening-comment'))

    textArea.classList.add('opening-comment')
});


