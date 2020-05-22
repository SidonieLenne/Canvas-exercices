var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
//Dégradé rouge
var redGradient = c.createRadialGradient(115,180,60,110,100,30);
redGradient.addColorStop(0,'maroon');
redGradient.addColorStop(0.5,'red');
redGradient.addColorStop(1,'salmon');
//Dégradé jaune
var yellowGradient = c.createRadialGradient(110,190,60,80,200,30);
yellowGradient.addColorStop(0,'Orange');
yellowGradient.addColorStop(0.5,'gold');
yellowGradient.addColorStop(1,'orange');
//Dégradé vert
var greenGradient = c.createRadialGradient(100,200,60,80,190,30);
greenGradient.addColorStop(0,'green');
greenGradient.addColorStop(1,'limegreen');
//Dégradé bleu centre
var blueGradient = c.createRadialGradient(100,210,20,100,170,20);
blueGradient.addColorStop(0,'blue');
blueGradient.addColorStop(0.5,'dodgerblue');
blueGradient.addColorStop(1,'lightskyblue');

//JAUNE en dessous rouge
c.beginPath();
c.arc(100,200,50,1.5*Math.PI,0.4*Math.PI);
c.fillStyle=yellowGradient;
c.fill();
//ROUGE en dessous vert
c.beginPath();
c.arc(100,200,50,0.9*Math.PI,1.8*Math.PI);
c.fillStyle=redGradient;
c.fill();
//VERT en dessous de rouge et de jaune
c.beginPath();
c.arc(100,200,50,0.2*Math.PI,1.1*Math.PI);
c.fillStyle=greenGradient;
c.fill();
//ROUGE HAUT
c.beginPath();
c.arc(100,200,50,1.1*Math.PI,1.9*Math.PI);
c.fillStyle = redGradient;
c.fill();
//VERT GAUCHE
c.beginPath();
c.arc(100,200,50,0.5*Math.PI,1.25*Math.PI);
c.fillStyle=greenGradient;
c.fill();
//JAUNE DROITE
c.beginPath();
c.arc(100,200,50,1.9*Math.PI,0.6*Math.PI);
c.fillStyle=yellowGradient;
c.fill();
//CENTRE
c.beginPath();
c.arc(100,200,20,0,2*Math.PI);
c.lineWidth=3;
c.fillStyle=blueGradient;
c.strokeStyle='white';
c.fill();
c.stroke();
//TEXTE
c.font='70px segoe ui';
c.fillStyle='dimgrey';
c.fillText('chrome',160,220);