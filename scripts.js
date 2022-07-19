document.body.addEventListener('keyup', (event)=> {
    playSound((event.code.toLocaleLowerCase()));
})

function playSound(sound) {
    let audioElement = document.getElementById(`s_${sound}`);
    let audioKey = document.querySelector(`button[data-key="${sound}"]`);
    console.log(audioKey)

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(audioKey) {
        audioKey.classList.add('active');
        setTimeout(() => {
            audioKey.classList.remove('active');
        }, 300);
        
    }
}




const year = document.getElementById('year');
const date = new Date();
year.innerHTML = date.getFullYear();


