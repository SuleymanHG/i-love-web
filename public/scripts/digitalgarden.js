// Audio play
let audio = document.querySelector('audio')
let playbutton = document.querySelector('.playbutton')
let isplaying = false

playbutton.addEventListener('click', () => {

audio.play();
 if (isplaying){
    audio.pause();
    isplaying = false
 } else{
    audio.play();
    isplaying =  true
 }

})


let play = document.querySelector('.playbutton');
let pause = document.querySelector('.pausebutton');

play.addEventListener('click', openMenu)

function openMenu(){
    play.classList.toggle('active')
    pause.classList.toggle('active')
}