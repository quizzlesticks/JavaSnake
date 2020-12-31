const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

canvas.height = 400;
canvas.width = 1220;

const settings = {
	game_speed: 500
};

const player = {
	width: 20,
	x: 0,
	y: 0,
	up: false,
	down: false,
	left: false,
	right: true,
	keyListener: function(event) {
		switch(event.code) {
			case "ArrowUp":
				player.up = true;
				player.down = false;
				player.left = false;
				player.right = false;
				break;
			case "ArrowDown":
				player.up = false;
				player.down = true;
				player.left = false;
				player.right = false;
				break;
			case "ArrowLeft":
				player.up = false;
				player.down = false;
				player.left = true;
				player.right = false;
				break;
			case "ArrowRight":
				player.up = false;
				player.down = false;
				player.left = false;
				player.right = true;
				break;
		}
	},
	draw: function(boo) {
		if(boo){
			if(player.up){
				player.y -= player.width;
			} else if(player.down){
				player.y += player.width;
			} else if(player.right){
				player.x += player.width;
			} else {
				player.x -= player.width;
			}
		}
		context.fillStyle = "#0000FF";
		context.fillRect(player.x,player.y,player.width,player.width);
	}
};


let prev_time;
const loop = function(time) {
	if (prev_time === undefined)
		prev_time = time;
	if(time - prev_time > settings.game_speed)
	{
		drawBoard();
		player.draw(true);
		prev_time = time;
	}
	window.requestAnimationFrame(loop);
};

const drawBoard = function() {
	context.fillStyle = "#201A23";
	context.fillRect(0,0,canvas.width,canvas.height);
	for (let i=0; i<=canvas.height/player.width;i++) {
		context.beginPath();
		context.strokeStyle = 'white';
		if(i==0) {
			context.moveTo(0,player.width*i+1);
			context.lineTo(canvas.width,player.width*i+1);
		} else if(i==canvas.height/player.width) {
			context.moveTo(0,player.width*i-1);
			context.lineTo(canvas.width,player.width*i-1);
		} else {
			context.moveTo(0,player.width*i);
			context.lineTo(canvas.width,player.width*i);
		}
		context.stroke();
	}
	for (let i=0; i<=canvas.width/player.width;i++) {
		context.beginPath();
		context.strokeStyle = 'white';
		if(i==0) {
			context.moveTo(player.width*i+1,0);
			context.lineTo(player.width*i+1,canvas.height);
		} else if(i==canvas.width/player.width) {
			context.moveTo(player.width*i-1,0);
			context.lineTo(player.width*i-1,canvas.height);
		} else {
			context.moveTo(player.width*i,0);
			context.lineTo(player.width*i,canvas.height);
		}
		context.stroke();
	}
};
drawBoard();
player.draw(false);
window.addEventListener("keydown", player.keyListener);
window.requestAnimationFrame(loop);
