var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
//BRAS
c.beginPath();
c.moveTo(100,200);
c.lineTo(300,200);
c.closePath();
c.strokeStyle='darkGoldenRod';
c.lineJoin='round';
c.lineWidth='30';
c.stroke();
//TETE
c.beginPath();
c.arc(200,150,50,220,Math.PI*2,true);
c.closePath();
c.fillStyle='darkGoldenRod';
c.fill();
//CORPS
c.fillStyle="darkGoldenRod";
c.fillRect(160,200,80,150);
//JAMBE GAUCHE
c.beginPath();
c.moveTo(175,350);
c.lineTo(175,380);
c.closePath();
c.strokeStyle='darkGoldenRod';
c.lineJoin='round';
c.lineWidth='30';
c.stroke();
//JAMBE GAUCHE
c.beginPath();
c.moveTo(225,350);
c.lineTo(225,380);
c.closePath();
c.strokeStyle='darkGoldenRod';
c.lineJoin='round';
c.lineWidth='30';
c.stroke();
//ENTREJAMBE
c.beginPath();
c.moveTo(200,350);
c.lineTo(200,380);
c.closePath();
c.strokeStyle='white';
c.lineJoin='round';
c.lineWidth='20';
c.stroke();
//BOUTON HAUT
c.beginPath();
c.arc(200,230,7,20,Math.PI*2,true);
c.closePath();
c.fillStyle='purple';
c.fill();
//BOUTON HAUT
c.beginPath();
c.arc(200,260,7,20,Math.PI*2,true);
c.closePath();
c.fillStyle='purple';
c.fill();
//BOUCHE BAS
c.beginPath();
c.moveTo(180, 170);
c.quadraticCurveTo(200,185,220,170);
c.strokeStyle= 'red';
c.lineWidth='1';
c.stroke();
//BOUCHE HAUT
c.beginPath();
c.moveTo(180, 170);
c.quadraticCurveTo(200,175,220,170);
c.strokeStyle= 'red';
c.lineWidth='1';
c.stroke();
//OEIL GAUCHE
c.beginPath();
c.arc(180,140,8,20,Math.PI*2,true);
c.closePath();
c.fillStyle='white';
c.fill();
//OEIL DROIT
c.beginPath();
c.arc(220,140,8,20,Math.PI*2,true);
c.closePath();
c.fillStyle='white';
c.fill();
//SOURCIL GAUCHE
c.beginPath();
c.arc(180,130,10,1.25*Math.PI,1.75*Math.PI,false);
c.strokeStyle='white';
c.stroke();
//SOURCIL GAUCHE
c.beginPath();
c.arc(220,130,10,1.25*Math.PI,1.75*Math.PI,false);
c.strokeStyle='white';
c.stroke();