'use strict';
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


const SCALE_FACTOR = 1;
const MAX_DEPTH = 9;
//const ANGLE = Math.PI / 2;
const LENGTH_SCALE = .7;
const NUMBRANCHES = 4;

function drawLine(x1, y1, x2, y2) {
    let red = Math.floor(Math.random()*215)
    if (red < 40) red += 40
    let green = Math.floor(Math.random()*255)
    if (green < 100) green += 100
    let blue = Math.floor(Math.random()*175)
    if (blue < 20) blue += 20


    ctx.strokeStyle = `rgb(${red}, ${green}, ${blue})`

  ctx.beginPath();
  ctx.moveTo(x1 * SCALE_FACTOR, y1 * SCALE_FACTOR);
  ctx.lineTo(x2 * SCALE_FACTOR, y2 * SCALE_FACTOR);
  ctx.stroke();
}

//drawLine(400,800, 400, 500);
//tree(1, 400, 500, 3*Math.PI/2);
tree(1, 400, 600, -90);
tree(1, 100, 600, -90);

function tree(depth, xstart, ystart, angle) {
//  angle -= ANGLE/2;
    const angleOffsetOptions = [40, -40, 15, -15].map(x => x + getRandomInt(-15, 15))
    let angleOffset = 35
  for (var i = 0; i < NUMBRANCHES; i++) {

    if (Math.random() < .25) continue;

    var length = 100 / (LENGTH_SCALE * depth);
    var xend = Math.cos(angle * (Math.PI / 180)) * length + xstart;
    var yend = Math.sin(angle * (Math.PI / 180)) * length + ystart;

    drawLine(xstart, ystart, xend, yend);

    angleOffset = angleOffsetOptions[i]
    if (depth < MAX_DEPTH) {
      tree(depth+1, xend, yend, angle + angleOffset);
    }

    //angle += ANGLE / NUMBRANCHES;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
