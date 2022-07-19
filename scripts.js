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


play.addEventListener('click', playSequence)

function playSequence(sound) {
    let play = document.getElementById('play');
    console.log(play)
    
    function sequence() {
    let sound = document.getElementById('input').value;
    console.log(sound)

     
    if (sound != ''){
        let array = [];
        array = sound.split('');
       console.log(array) 
    }
}
function playDrum(array) {
    let wait = 0;
    
    setTimeout(() => {
     let i=0;i < array.length; i++;
    wait += 250;   
    }, 300);
    
}

}




const year = document.getElementById('year');
const date = new Date();
year.innerHTML = date.getFullYear();


