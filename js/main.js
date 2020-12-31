const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

canvas.height = 400;
canvas.width = 1220;

context.fillStyle = "#201A23";

context.fillRect(0,0,canvas.width,canvas.height);

const loop = function() {
	window.requestAnimationFrame(loop);
}

const drawGrid = function() {
	for (let i=0; i<=canvas.height/20;i++) {
		context.beginPath();
		context.strokeStyle = 'white';
		if(i==0) {
			context.moveTo(0,20*i+1);
			context.lineTo(canvas.width,20*i+1);
		} else if(i==canvas.height/20) {
			context.moveTo(0,20*i-1);
			context.lineTo(canvas.width,20*i-1);
		} else {
			context.moveTo(0,20*i);
			context.lineTo(canvas.width,20*i);
		}
		context.stroke();
	}
	for (let i=0; i<=canvas.width/20;i++) {
		context.beginPath();
		context.strokeStyle = 'white';
		if(i==0) {
			context.moveTo(20*i+1,0);
			context.lineTo(20*i+1,canvas.height);
		} else if(i==canvas.width/20) {
			context.moveTo(20*i-1,0);
			context.lineTo(20*i-1,canvas.height);
		} else {
			context.moveTo(20*i,0);
			context.lineTo(20*i,canvas.height);
		}
		context.stroke();
	}
}

drawGrid();
window.requestAnimationFrame(loop);
