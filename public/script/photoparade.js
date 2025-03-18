const photoParade = document.querySelector('.publicaties-1')
const photoParadeTwo = document.querySelector('.publicaties-2')
const andereLeden = document.querySelector('.foto-parade')


if (photoParade) {
    photoParade.addEventListener('mouseover', () => {
        photoParade.style.animationPlayState = 'paused';
    });

    photoParade.addEventListener('mouseleave', () => {
        photoParade.style.animationPlayState = 'running';
    });
}

if (photoParadeTwo) {
    photoParadeTwo.addEventListener('mouseover', () => {
        photoParadeTwo.style.animationPlayState = 'paused';
    });

    photoParadeTwo.addEventListener('mouseleave', () => {
        photoParadeTwo.style.animationPlayState = 'running';
    });
}

if (andereLeden) {
    andereLeden.addEventListener('mouseover', () => {
        andereLeden.style.animationPlayState = 'paused';
    });

    andereLeden.addEventListener('mouseleave', () => {
        andereLeden.style.animationPlayState = 'running';
    });
}