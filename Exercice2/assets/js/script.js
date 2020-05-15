var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
//TOIT
c.fillStyle="peru";
c.rotate(45 * Math.PI/180);
c.fillRect(212,-70,70,70);
//MUR
c.rotate(-45 * Math.PI/180);
c.fillStyle="lightblue";
c.fillRect(150,150,100,100);
//PORTE
c.fillStyle="lightgrey";
c.fillRect(185,210, 30,40);
//FENETRE GAUCHE
c.fillStyle="lightgrey";
c.fillRect(160,160,20,20);
//FENETRE DROITE
c.fillStyle="lightgrey";
c.fillRect(220,160,20,20);


