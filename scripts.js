document.body.addEventListener('keyup', (event) => {
    playSound((event.code.toLowerCase()));
})

document.getElementById('play').addEventListener('click', () => {
    let song = document.getElementById('input').value;
    console.log(song);

    if (song != '') {
        let array = [];
        array = song.split('');
        playSequence(array);
        console.log(array)
    }
})

function playSound(sound) {
    let audioElement = document.getElementById(`s_${sound}`);
    let audioKey = document.querySelector(`button[data-key="${sound}"]`);
    console.log(audioKey)

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (audioKey) {
        audioKey.classList.add('active');
        setTimeout(() => {
            audioKey.classList.remove('active');
        }, 300);
    }
}

function playSequence(array) {
    let wait = 0;

    for (let soundItem of array) {
        setTimeout(() => {
            playSound(`key${soundItem}`);
        }, wait);

        wait += 250;
    }
}

const year = document.getElementById('year');
const date = new Date();
year.innerHTML = date.getFullYear();