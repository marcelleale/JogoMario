const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => { 

        mario.classList.remove('jump');

    }, 800);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition);

    if(pipePosition <= 120 && marioPosition < 80 && pipePosition > 0){

        pipe.style.animation = 'none';
        pipe.style.left = `${marioPosition}px`; //mesma posição do 120px;
        
        mario.style.animation = 'none';
        mario.style.bottom= `${marioPosition}`;

        mario.src = 'imagens/mario-lose.png';
        mario.style.width = '110px';
        mario.style.bottom = '70px';

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);