const searchButton = document.querySelector('.zoekknop');
const allData = document.querySelectorAll('.publicatie-1, .publicatie-2');

searchButton.addEventListener('click', () => { 
    allData.forEach(item => {
        item.classList.add('off'); 
    });
});