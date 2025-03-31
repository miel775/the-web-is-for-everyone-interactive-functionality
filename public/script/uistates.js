const loadingState = document.getElementById('loading-state');
const errorState = document.getElementById('error-state');
const successState = document.getElementById('success-state');
const emptyState = document.getElementById('empty');
const commentSection = document.querySelector('.comment-section');
const progressBar = document.getElementById('file');
// dit zijn alle states met de progressbar


// wanneer de commentsectie leeg is, dan laat hij een bericht zien dat de comment sectie
// als de commentsectie leeg is, dan laat hij de emptystate zien
// wanneer er wel een comment in de sectie zit (else) dan wordt staat emptystate uit

document.addEventListener('submit' async function(event) {

    const form = event.target

    if (!form.hasAttribute('data-enhanced')) {
        return
    }

    if ()

})
