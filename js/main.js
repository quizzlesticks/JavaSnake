const context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 400;
context.canvas.width = 1220;

context.fillStyle = "#201A23";

context.fillRect(0,0,context.canvas.height,context.canvas.width);

const loop = function () {
	window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
