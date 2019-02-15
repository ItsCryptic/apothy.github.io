//Variables
var canvas = document.getElementById("peanutbutter");
var ctx = canvas.getContext("2d");
var changeY;
var x;
var y;
var changeX;
var gameRun;
var Paddle1Y;
var score;
var Paddle2Y;
var audio;
//var leaderboard = {};
NewGFame();
function gameWin() {
  ctx.clearRect(0, 0, 500, 400);
  gameRun = false;
  clearInterval();
  //Show final score
  ctx.fillStyle = '#7f4bc8';
  ctx.fillRect(0, 0, 500, 400);
  ctx.fillStyle = '#000000';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('You have won!',
  	canvas.width / 2, canvas.height / 2);
  //var person = prompt("Please enter your username.", "");
  //alert("Your username is " + person);
  //if !(person == "") {
    //leaderboard[person] = score;
    //}
  
  }
function stopGame() {
  ctx.clearRect(0, 0, 500, 400);
  gameRun = false;
  clearInterval();
  //Show final score
  ctx.fillStyle = '#7f4bc8';
  ctx.fillRect(0, 0, 500, 400);
  ctx.fillStyle = '#000000';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('You have lost, try again.',
  canvas.width / 2, canvas.height / 2);
  audio.pause();
}
document.getElementById("StopGFame").onclick = function() {
  stopGame();
}
function drawPaddle1() {
  //Paddle 1 (Padde (The better one))
  ctx.beginPath();
  ctx.rect(0, Paddle1Y, 25, 75);
  ctx.fillStyle = "#7a4108";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle2() {
  //Paddle 2 (Padde)
  ctx.beginPath();
  ctx.rect(475, y, 25, 75);
  ctx.fillStyle = "#7a4108";
  ctx.fill();
  ctx.closePath();
}
function drawBalls() {
  //Balls
  ctx.beginPath();
  //ctx.arc(x, y, 25, 0, 360);
  ctx.arc(x, y, 25, 0, 360);
  ctx.fillStyle = '#0419ff';
  ctx.fill();
  ctx.closePath();
}
//Buttons/Game setup stuff
document.getElementById("NewGFame").onclick = function() {
  NewGFame();
}
document.addEventListener("keydown", keyDownHandler, false);
function NewGFame() {
  changeY = Math.random()* 3 + 1;
  changeX = Math.random()* 3  + 1;
  x = 250;
  y = 25;
  gameRun = true;
  Paddle1Y = 100;
  Paddle2Y = y;
  score = 0;
  audio = new Audio();
  audio.src = "GameBeat.mp3";
  audio.play();
}
function drawScfore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#7f4bc8";
  ctx.fillText("Score: " + score, 30, 20);
}
function keyDownHandler(ev) {
  if (Paddle1Y > 0 && ev.keyCode == 38) {
    Paddle1Y = Paddle1Y - 25;
  }
  if (Paddle1Y < 325 && ev.keyCode == 40) {
    Paddle1Y = Paddle1Y + 25;
  }
}
