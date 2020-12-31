const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

canvas.height = 400;
canvas.width = 1220;

context.fillStyle = "#201A23";

context.fillRect(0,0,canvas.width,canvas.height);

const loop = function () {
	window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
