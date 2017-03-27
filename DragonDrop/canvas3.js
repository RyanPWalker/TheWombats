var drawCanvas;
var drawCtx;
var touchX
var touchY;
var x = 75;
var y = 50;
var r = 50;
var WIDTH  = 800;
var HEIGHT = 550;
var dragok = false;

function begin() {
	drawCanvas = document.getElementById("drawCanvas");
	drawCtx = drawCanvas.getContext("2d");
	drawCtx.fillStyle = "yellow";
	drawCtx.fillRect(x, y + 150, 150, 150);

  drawCanvas.addEventListener('touchstart', sketchpad_touchStart, false);
  drawCanvas.addEventListener('touchmove', sketchpad_touchMove, false);
}

// Clear the canvas context using the canvas width and height
function clearCanvas(drawCanvas, drawCtx) {
  drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
}

function drawDot(drawCtx,x,y,size) {
    // black
    r=0; g=0; b=0; a=255;

    // Select a fill style
    drawCtx.fillStyle = "red";

    // Draw a filled circle
    drawCtx.beginPath();
    drawCtx.arc(x, y, size, 0, Math.PI*2, true); 
    drawCtx.closePath();
    drawCtx.fill();
}

function sketchpad_touchStart() {
    getTouchPos();
    drawDot(drawCtx,touchX,touchY,12);

    // Prevents an additional mousedown event being triggered
    event.preventDefault();
}

function sketchpad_touchMove(e) { 
  // Update the touch co-ordinates
  getTouchPos(e);

  // During a touchmove event, unlike a mousemove event, we don't need to check if the touch is engaged, since there will always be contact with the screen by definition.
  drawDot(drawCtx,touchX,touchY,12); 

  // Prevent a scrolling action as a result of this touchmove triggering.
  event.preventDefault();
}

function getTouchPos(e) {
  if (!e)
    var e = event;

  if (e.touches) {
    if (e.touches.length == 1) { // Only deal with one finger
        var touch = e.touches[0]; // Get the information for finger #1
        touchX = touch.pageX - touch.target.offsetLeft;
        touchY = touch.pageY - touch.target.offsetTop;
    }
	}
}

begin(); // it all starts here