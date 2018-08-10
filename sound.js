var keysDown = {
    "A": false, // a
    "S": false, // s
    "D": false, // d
    "F": false, // f
    "G": false, // g
    "H": false, // h
    "J": false, // j
    "K": false, // k
    "L": false // l
}

function playSound(e) {

    // make space in circles array by removing front circles
    for (let i = 0; i < circleArray.length; i++){
        if (circleArray[i].radius >= radiusCutoff){
            circleArray.shift();
        }
    }

    const keycode = (e.type == 'click') ? e.path[1].dataset.key : e.keyCode; // get keycode from either click or keydown event
    const keyCharacter = String.fromCharCode(keycode);
    console.log(keyCharacter);
    const audio = document.querySelector(`audio[data-key="${keycode}"]`);
    const key = document.querySelector(`.key[data-key="${keycode}"]`);

    if (!audio) { return; } // stop function if key is not recognized

    if (keyCharacter == "A") {
        if (keysDown.A) { return; } // stop function if 'a' key is already pressed
        keysDown.A = true;
        console.log(keysDown);
    } else if (keyCharacter == "S") {
        if (keysDown.S) { return; } // stop function if 's' key is already pressed
        keysDown.S = true;
    } else if (keyCharacter == "D") {
        if (keysDown.D) { return; } // stop function if 'd' key is already pressed
        keysDown.D = true;
    } else if (keyCharacter == "F") {
        if (keysDown.F) { return; } // stop function if 'f' key is already pressed
        keysDown.F = true;
    } else if (keyCharacter == "G") {
        if (keysDown.G) { return; } // stop function if 'g' key is already pressed
        keysDown.G = true;
    } else if (keyCharacter == "H") {
        if (keysDown.H) { return; } // stop function if 'h' key is already pressed
        keysDown.H = true;
    } else if (keyCharacter == "J") {
        if (keysDown.J) { return; } // stop function if 'j' key is already pressed
        keysDown.J = true;
    } else if (keyCharacter == "K") {
        if (keysDown.K) { return; } // stop function if 'k' key is already pressed
        keysDown.K = true;
    } else if (keyCharacter == "L") {
        if (keysDown.L) { return; } // stop function if 'l' key is already pressed
        keysDown.L = true;
    }

    keyRect = key.getBoundingClientRect();
    x = keyRect.x + keyRect.width / 2;
    y = keyRect.y + keyRect.height / 2;

    circleArray.push(new Circle(x, y));
    console.log(circleArray);

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') { return; } // skip if it's not transform property
    this.classList.remove('playing');
}

function toggleKey(e) {
    const keycode = e.keyCode;
    const keyCharacter = String.fromCharCode(keycode);
    
    if (keyCharacter == "A") {        
        keysDown.A = false;
    } else if (keyCharacter == "S") {        
        keysDown.S = false;
    } else if (keyCharacter == "D") {        
        keysDown.D = false;
    } else if (keyCharacter == "F") {        
        keysDown.F = false;
    } else if (keyCharacter == "G") {        
        keysDown.G = false;
    } else if (keyCharacter == "H") {        
        keysDown.H = false;
    } else if (keyCharacter == "J") {        
        keysDown.J = false;
    } else if (keyCharacter == "K") {        
        keysDown.K = false;
    } else if (keyCharacter == "L") {        
        keysDown.L = false;
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSound));

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', toggleKey);