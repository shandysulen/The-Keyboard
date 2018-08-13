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
    console.log(keyCharacter + ": " + keycode);
    const audio = document.querySelector(`audio[data-key="${keycode}"]`);
    const key = document.querySelector(`.key[data-key="${keycode}"]`);

    if (!audio) { return; } // stop function if key is not recognized

    if (e.type == 'keydown') {
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

var kit = 1;
var kitList = ["Classic Punk", "Uncultured Swine", "Trapaholic"];
var right_arrow = document.getElementById('right-arrow');
var left_arrow = document.getElementById('left-arrow');
var kit_title = document.getElementById('kit-title');

function updateArrows() {
    if (kit == kitList.length) {                
        right_arrow.disabled = true; // from 4 -> 5, disable right button
        right_arrow.classList.add('disable_button');
    } else if (kit == 1) {
        left_arrow.disabled = true; // from 4 -> 5, disable right button
        left_arrow.classList.add('disable_button');
    } else {
        left_arrow.classList.remove('disable_button');
        left_arrow.disabled = false;
        right_arrow.classList.remove('disable_button');
        right_arrow.disabled = false;
    }
    
    console.log("Current kit: " + kit);
}

function updateKeys(a_title, a_sound, s_title, s_sound, d_title, d_sound, f_title, f_sound, g_title, g_sound, h_title, h_sound, j_title, j_sound, k_title, k_sound, l_title, l_sound) {

    // Update key text
    document.querySelector('div[data-key="65"] .sound').innerHTML = a_title;
    document.querySelector('div[data-key="83"] .sound').innerHTML = s_title;
    document.querySelector('div[data-key="68"] .sound').innerHTML = d_title;
    document.querySelector('div[data-key="70"] .sound').innerHTML = f_title;
    document.querySelector('div[data-key="71"] .sound').innerHTML = g_title;
    document.querySelector('div[data-key="72"] .sound').innerHTML = h_title;
    document.querySelector('div[data-key="74"] .sound').innerHTML = j_title;
    document.querySelector('div[data-key="75"] .sound').innerHTML = k_title;
    document.querySelector('div[data-key="76"] .sound').innerHTML = l_title;

    // Update key sound
    document.querySelector(`audio[data-key="65"]`).src = a_sound;
    document.querySelector(`audio[data-key="83"]`).src = s_sound;
    document.querySelector(`audio[data-key="68"]`).src = d_sound;
    document.querySelector(`audio[data-key="70"]`).src = f_sound;
    document.querySelector(`audio[data-key="71"]`).src = g_sound;
    document.querySelector(`audio[data-key="72"]`).src = h_sound;
    document.querySelector(`audio[data-key="74"]`).src = j_sound;
    document.querySelector(`audio[data-key="75"]`).src = k_sound;
    document.querySelector(`audio[data-key="76"]`).src = l_sound;

    // Change font size of key if too long
    var sounds = document.querySelectorAll('.sound');
    sounds.forEach(sound => {
        if (sound.innerHTML.length >= 9) {            
            sound.style.fontSize = '15px';
        } else {
            sound.style.fontSize = '2.0rem';
        }
    });
}

function chooseKit() {    

    kit_title.innerHTML = `${kitList[kit-1]} <small>(${kit}/${kitList.length})</small>`;

    if (kit == 1) {        
        updateKeys("Kick", "./sounds/1/Kick.wav", "Tom Lo", "./sounds/1/TomLow.wav", "Tom Hi", "./sounds/1/TomHigh.wav", "HiHat", "./sounds/1/Hihat.wav", "Snare", "./sounds/1/Snare.wav", "Rim", "./sounds/1/Rim.wav", "Openhat", "./sounds/1/Openhat.wav", "Ride", "./sounds/1/Ride.wav", "Crash", "./sounds/1/Crash.wav");     
    } else if (kit == 2) {        
        updateKeys("Bongo Lo", "./sounds/2/BongoLow.wav", "Bongo Hi", "./sounds/2/BongoHigh.wav", "Marimba C", "./sounds/2/MarimbaC.wav", "Shaker", "./sounds/2/Shaker.wav", "Timbales Lo", "./sounds/2/TimbalesLow.wav", "Timbales Hi", "./sounds/2/TimbalesHigh.wav", "Wood Block", "./sounds/2/WoodBlock.wav", "Marimba F", "./sounds/2/MarimbaF.wav", "Clave", "./sounds/2/Clave.wav");        
    } else if (kit == 3) {        
        updateKeys("Kick", "./sounds/3/DolphinKick.wav", "D# 808", "./sounds/3/DSharpKnocker.wav", "F# 808", "./sounds/3/FSharpKnocker.wav", "Openhat", "./sounds/3/OpenhatFierce.wav", "Hihat", "./sounds/3/HihatFierce.wav", "Snare", "./sounds/3/SnareFierce.wav", "D# Brass", "./sounds/3/DSharpBrass.wav", "F# Brass", "./sounds/3/FSharpBrass.wav", "Chant", "./sounds/3/Chant.wav");        
    }
    
}

function updateKit(event) {
    console.log('entered update kit');
    
    if (event.srcElement.id == "right-arrow") { // click on right arrow
        if (kit < 5) {
            kit += 1;
        } else {
            console.log("Can't go above 5");
        }
    } 
    
    if (event.srcElement.id == "left-arrow") { // click on left arrow
        console.log('you clicked left');
        if (kit > 1) {
            kit -= 1;
        } else {            
            console.log("Can't go below 1");
        }
    }

    updateArrows();

    chooseKit();
}

left_arrow.addEventListener('click', updateKit);
right_arrow.addEventListener('click', updateKit);

updateArrows();
chooseKit();

function openSidebar() {
    document.getElementById("sidebar-open").disabled = true;
    document.getElementById("sidebar-open").classList.add('disable_button');
    document.getElementById("sidebar").style.width = "180px";
    document.querySelector("main").style.marginLeft = "190px";
}

function closeSidebar() {
    document.getElementById("sidebar-open").disabled = false;
    document.getElementById("sidebar-open").classList.remove('disable_button');
    document.getElementById('sidebar-open').disabled = false;
    document.getElementById("sidebar").style.width = "0";
    document.querySelector("main").style.marginLeft = "10px";
    document.querySelector("footer h6").style.marginLeft = "0";
}

document.getElementById('sidebar-open').addEventListener('click', openSidebar);
document.getElementById('sidebar-close').addEventListener('click', closeSidebar);

var night_mode_enable = false;

function toggleNightMode(event) {    
    night_mode_enable = !night_mode_enable;
    
    if (night_mode_enable) {
        document.querySelector('body').classList.add('night_mode_background');  
        document.querySelector('main h1').classList.add('night_mode_color');      
        document.querySelector('footer h6').classList.add('night_mode_color');      
        kit_title.classList.add('night_mode_color');
    } else {        
        document.querySelector('body').classList.remove('night_mode_background');  
        document.querySelector('main h1').classList.remove('night_mode_color');      
        document.querySelector('footer h6').classList.remove('night_mode_color');      
        kit_title.classList.remove('night_mode_color');
    }
}

document.querySelector('.slider').addEventListener('click', toggleNightMode);