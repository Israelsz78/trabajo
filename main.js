var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "blue";
ctx.fillRect(90, 90, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(170, 170, 100, 100);

//linea 
ctx.beginPath();
ctx.moveTo(185,10);
ctx.lineTo(185, 65);
ctx.lineTo(125, 65);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(312,365);
ctx.lineTo(400,460);
ctx.lineTo(300,460);
ctx.fill();
ctx.moveTo(400,400);
ctx.lineTo(280,260);
ctx.stroke();
ctx.closePath();

//circulo
ctx.fillStyle = "blue"
ctx.strokeStyle = "red"
ctx.beginPath();
ctx.arc(435, 110, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "red"
ctx.beginPath();
ctx.arc(295, 110, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();