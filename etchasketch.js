const canvas = document.getElementById('pad');
const ctx = canvas.getContext('2d');

let centerX, centerY;
const step = 4;

function resizeCanvas() {
    const size = Math.min(window.innerWidth - 40, 400);
    canvas.width = size;
    canvas.height = size;

    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.arc(centerX, centerY, 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function move(direction) {
    if (direction === 'up') centerY -= step;
    else if (direction === 'down') centerY += step;
    else if (direction === 'left') centerX -= step;
    else if (direction === 'right') centerX += step;

    ctx.lineTo(centerX, centerY);
    ctx.stroke();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') centerY -= step;
    else if (event.key === 'ArrowDown') centerY += step;
    else if (event.key === 'ArrowLeft') centerX -= step;
    else if (event.key === 'ArrowRight') centerX += step;
    else return;

    ctx.lineTo(centerX, centerY);
    ctx.stroke();
});

const button = document.getElementById('button');

button.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
});

