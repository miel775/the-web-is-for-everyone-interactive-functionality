const formElements = document.querySelectorAll('.hide');
const textArea = document.querySelector('.text-area');

textArea.addEventListener('click', function() {
    formElements.forEach(element => element.classList.remove('hide'));
});


