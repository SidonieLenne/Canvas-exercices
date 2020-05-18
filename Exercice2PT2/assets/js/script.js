var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
//HABITACLE
c.beginPath();
c.moveTo(150,200)
c.quadraticCurveTo(200,100,250,200);
c.closePath();
c.fillStyle= 'white';
c.fill();
//SOCOUPE HAUT
c.beginPath();
c.moveTo(100, 220);
c.quadraticCurveTo(200,150,300,220)
c.closePath();
c.fillStyle= 'lightgrey';
c.fill();
//SOCOUPE BAS
c.beginPath();
c.moveTo(100,220);
c.quadraticCurveTo(200,300,300,220);
c.closePath();
c.fillStyle= 'lightgrey';
c.fill();