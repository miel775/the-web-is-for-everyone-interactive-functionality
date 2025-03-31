const loadingState = document.getElementById('loading-state');
const errorState = document.getElementById('error-state');
const successState = document.getElementById('success-state');
const emptyState = document.getElementById('empty');
const progressBar = document.getElementById('file');
// dit zijn alle states met de progressbar

function submitComment() {
    loadingState.style.display = 'block';
    // het laadstate wordt weergegeven als de comment wordt gesplaatst
    errorState.style.display = 'none';
    successState.style.display = 'none';
};

// dit ook met de andere states gedaan
function showSuccess() {
    loadingState.style.display = 'none';
    errorState.style.display = 'none';
    successState.style.display = 'block';
};

function showError() {
    loadingState.style.display = 'none';
    errorState.style.display = 'block';
    successState.style.display = 'none';
};

if ('fetch' in window)

// wanneer de commentsectie leeg is, dan laat hij een bericht zien dat de comment sectie
// als de commentsectie leeg is, dan laat hij de emptystate zien
// wanneer er wel een comment in de sectie zit (else) dan wordt staat emptystate uit