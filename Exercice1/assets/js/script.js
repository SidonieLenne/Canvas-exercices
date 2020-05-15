var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
//TOIT
context.beginPath();
context.moveTo(200,100);
context.lineTo(150,150);
context.lineTo(250, 150);
context.closePath();
context.fillStyle = 'peru';
context.fill();
//MUR
context.beginPath();
context.moveTo(150, 150);
context.lineTo(250, 150);
context.lineTo(250, 250);
context.lineTo(150,250);
context.lineTo(150,150);
context.closePath();
context.fillStyle= 'lightblue';
context.fill();
//PORTE
context.beginPath();
context.moveTo(185, 210);
context.lineTo(215, 210);
context.lineTo(215, 250);
context.lineTo(185,250);
context.lineTo(185,210);
context.closePath();
context.fillStyle= 'lightgrey';
context.fill();
//FENETRE GAUCHE
context.beginPath();
context.moveTo(160, 160);
context.lineTo(180, 160);
context.lineTo(180, 180);
context.lineTo(160,180);
context.lineTo(160,160);
context.closePath();
context.fillStyle= 'ightgrey';
context.fill();
//FENETRE DROITE
context.beginPath();
context.moveTo(220, 160);
context.lineTo(220, 160);
context.lineTo(220, 180);
context.lineTo(240,180);
context.lineTo(240,160);
context.closePath();
context.fillStyle= 'ightgrey';
context.fill();