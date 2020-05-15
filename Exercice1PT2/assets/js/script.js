var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
//GLACE
c.bezierCurveTo(50,200,110,50,150,200);
c.fillStyle= 'brown';
c.fill();
//CORNET
c.beginPath();
c.moveTo(50, 200);
c.lineTo(100, 350);
c.lineTo(150, 200);
c.lineTo(50,200);
c.closePath();
c.fillStyle= 'peru';
c.fill();
