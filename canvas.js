var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c = canvas.getContext('2d');

var circleArray = [];

var colorArray = defaultColorArray = ['#DDD8C4', '#8DAA9D', '#522B47', '#7B0828', '#0F0E0E'];

const radiusCutoff = 1100;

let keyEl = document.querySelectorAll('.key');
console.log(keyEl);

window.addEventListener('resize', 
    function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
);

function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 1;    
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.opacity = 1;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.lineWidth = 10;
        c.fillStyle = 'rgba(255, 255, 255, this.opacity)'; // trying to still figure out how to make the opacity go down over time
        c.strokeStyle = this.color;
        c.stroke();
    }

    this.update = function() {
        this.radius += 8;
        this.opacity -= 0.01;
        this.draw();
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();

function updateColors(event) {    
    var colors = document.querySelectorAll('input[type="color"]');
    console.log(colors);

    for (let i = 0; i < colorArray.length; i++) {
        colorArray[i] = colors[i].value;
    }
}

document.getElementById('sidebar-close').addEventListener('click', updateColors);