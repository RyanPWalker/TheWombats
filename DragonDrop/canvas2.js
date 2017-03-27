var canvas;
var ctx;
var x = 150;
var y = 150;
var r = 50;
var WIDTH  = 800;
var HEIGHT = 550;
var dragok = false;

function rect(x,y,w,h) {
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.closePath();
	ctx.fill();
}

/*function circle(x,y,r) {
	ctx.fillStyle = "#00A308";
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
}*/

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	//ctx.clearCircle(0, 0, r, 0, Math.PI*2, true);
}

function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	return setInterval(draw, 10);
}

function draw() {
	clear();
	ctx.fillStyle = "#32a4e7";
	rect(0,0,WIDTH,HEIGHT);
	ctx.fillStyle = "#ffff00";
	rect(x - 15, y - 15, 150, 150);
}

function myMove(e){
	if (dragok) {
  		x = e.pageX - canvas.offsetLeft;
  		y = e.pageY - canvas.offsetTop;
	}
}

function myDown(e){
	if (e.pageX < x + 75 + canvas.offsetLeft && e.pageX > x - 75 +
	canvas.offsetLeft && e.pageY < y + 75 + canvas.offsetTop &&
	e.pageY > y - 75 + canvas.offsetTop) {
		x = e.pageX - canvas.offsetLeft;
		y = e.pageY - canvas.offsetTop;
		dragok = true;
		canvas.onmousemove = myMove;
	}
}

function myUp(){
	dragok = false;
	canvas.onmousemove = null;
}

init();
canvas.onmousedown = myDown;
canvas.onmouseup	 = myUp;
