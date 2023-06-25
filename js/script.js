
window.alert('aperte para pular, se perder vai ter que sentar!')

const mario = document.querySelector('.mario');


const pipe = document.querySelector('.pipe');

const jump = () => {
mario.classList.add('jump');

setTimeout(()  =>{

    mario.classList.remove('jump');
}, 500);

}

const loop = setInterval(()  => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

    pipe.style.animation = "none";
    pipe.style.left = '${pipePosition}px';

    mario.style.animation = "none";
    mario.style.bottom = '${marioPosition}px';

    mario.src = 'https://gifdb.com/images/high/the-weeknd-spin-hand-8oe94idnpu3yvpf1.gif'
    mario.style.width = '500px'

    clearInterval(loop);


   }

} , 10);


document.addEventListener('keydown', jump);