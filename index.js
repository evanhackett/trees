var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


function drawBranch(x, y, width, height) {
    ctx.beginPath();
    ctx.fillStyle="brown";
    ctx.rect(x, y, width, height);
    ctx.fill();
}


drawBranch(100, 100, 5, 50)
