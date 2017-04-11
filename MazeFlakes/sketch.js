var game = [];
var playerSize, posI, posJ;
var gameSize, gameTileSize;
var nbtrace, traceTimer, traces = [];
var retry, retryTimer, victory, victoryTimer;
var wallColor, tp1, tp2, tp3;
var offset, timerSpeed;
/******************************************************************************/

function setup() {
 rectMode(CENTER);
 ellipseMode(CENTER);
 retry = false;
 victory = false;
 gameSize = 36;
 if (windowWidth > 800) {
  createCanvas(windowWidth, (windowHeight / 3 * 2));
  gameTileSize = (windowHeight / 3 * 2) / 36;
  offset = (windowWidth - (windowHeight / 3 * 2)) / 2;
  timerSpeed = 21;
 } else {
  createCanvas(windowWidth, (windowHeight));
  gameTileSize = windowWidth / 36;
  offset = 0;
  timerSpeed = 18;
 }
 posI = 1;
 posJ = 1;
 VI = +1;
 VJ = 1;
 playerSize = gameTileSize * 0.8;
 wallColor = 0;
 tp1 = 199;
 tp2 = 0;
 tp3 = 57;
 /******************************************************************************/
 game = [
  "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W",
  "W", "SP", "F2", "W", "W", "W", "W", "F", "F", "F", "W", "F", "F", "F", "W", "F", "F", "T6", "W", "W", "F", "F", "F", "W", "F", "F", "F", "W", "F", "F", "F", "W", "W", "F", "T2", "W",
  "W", "W", "F2", "W", "W", "W", "W", "F", "W", "F", "W", "F", "W", "F", "F", "F", "W", "W", "W", "W", "F", "W", "F", "F", "F", "W", "F", "W", "F", "W", "F", "W", "W", "F", "W", "W",
  "W", "F2", "F2", "F2", "F", "F", "W", "F", "W", "F", "F", "F", "W", "W", "F", "W", "W", "W", "W", "F", "F", "F", "F", "W", "W", "F", "F", "F", "F", "W", "F", "W", "W", "F", "F", "W",
  "W", "F", "W", "W", "W", "F", "W", "F", "W", "F", "W", "W", "F", "F", "F", "W", "W", "W", "W", "F", "W", "F", "W", "F", "F", "F", "W", "F", "W", "W", "F", "F", "F", "W", "F", "W",
  "W", "F", "W", "W", "W", "F", "W", "F", "W", "F", "F", "F", "F", "W", "F", "W", "W", "W", "W", "F", "W", "F", "W", "F", "W", "F", "W", "F", "F", "W", "W", "W", "F", "F", "F", "W",
  "W", "F", "W", "F", "F", "F", "W", "F", "F", "W", "F", "W", "F", "F", "F", "W", "W", "W", "W", "F", "W", "F", "F", "F", "W", "F", "W", "W", "F", "W", "F", "F", "F", "W", "W", "W",
  "W", "F", "F", "F", "W", "F", "W", "W", "F", "F", "F", "F", "W", "W", "W", "W", "W", "W", "W", "F", "F", "W", "W", "F", "F", "F", "W", "W", "F", "F", "F", "W", "W", "W", "T5", "W",
  "W", "W", "F", "W", "F", "F", "W", "W", "F", "W", "W", "F", "W", "W", "W", "W", "W", "W", "W", "W", "F", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "F", "F", "F", "F", "W",
  "W", "W", "F", "F", "F", "W", "F", "F", "F", "W", "W", "F", "F", "F", "F", "F", "F", "W", "W", "W", "F", "W", "W", "W", "W", "W", "W", "W", "F", "F", "F", "F", "W", "F", "W", "W",
  "W", "F", "F", "W", "F", "W", "F", "W", "F", "W", "W", "W", "F", "W", "W", "W", "F", "W", "T3", "F", "F", "W", "W", "W", "W", "W", "W", "F", "F", "W", "W", "F", "W", "F", "W", "W",
  "W", "F", "W", "W", "F", "W", "F", "W", "F", "W", "F", "F", "F", "W", "W", "F", "F", "W", "W", "W", "W", "W", "F", "F", "F", "F", "F", "F", "W", "W", "W", "F", "W", "F", "W", "W",
  "W", "F", "F", "F", "F", "W", "F", "F", "F", "F", "F", "W", "W", "W", "W", "F", "W", "W", "W", "F", "F", "F", "F", "W", "W", "F", "W", "F", "W", "W", "W", "F", "W", "F", "W", "W",
  "W", "W", "W", "F", "W", "W", "W", "W", "W", "W", "W", "F", "F", "F", "F", "F", "W", "W", "W", "F", "W", "F", "W", "F", "F", "F", "W", "F", "W", "W", "F", "F", "F", "F", "W", "W",
  "W", "F", "F", "F", "F", "F", "W", "W", "F", "F", "F", "F", "W", "W", "W", "W", "W", "W", "W", "F", "F", "F", "W", "F", "W", "F", "F", "F", "F", "W", "F", "W", "W", "W", "F", "W",
  "W", "F", "W", "W", "W", "F", "W", "T7", "F", "W", "W", "W", "F", "F", "F", "T1", "W", "W", "W", "F", "W", "W", "W", "F", "W", "F", "W", "W", "F", "W", "F", "W", "W", "F", "F", "W",
  "W", "F", "F", "F", "W", "F", "F", "W", "W", "F", "F", "F", "F", "W", "W", "W", "W", "W", "W", "F", "F", "F", "F", "F", "F", "F", "W", "F", "F", "F", "F", "W", "F", "F", "W", "W",
  "W", "W", "W", "F", "W", "W", "F", "W", "W", "F", "W", "W", "W", "W", "W", "T4", "F", "F", "W", "W", "W", "W", "F", "W", "W", "F", "W", "F", "W", "W", "W", "W", "W", "F", "F", "W",

  "W", "W", "F", "F", "W", "W", "F", "W", "F", "F", "W", "W", "W", "W", "W", "W", "W", "F", "F", "F", "W", "W", "F", "F", "F", "F", "W", "F", "W", "F", "F", "F", "W", "W", "F", "W",
  "W", "W", "F", "W", "W", "W", "F", "F", "F", "W", "W", "F", "F", "F", "W", "W", "W", "W", "W", "F", "F", "F", "F", "W", "W", "F", "W", "F", "W", "F", "W", "F", "W", "W", "F", "W",
  "W", "W", "F", "F", "F", "W", "F", "W", "F", "W", "W", "F", "W", "F", "W", "G", "G", "G", "W", "W", "W", "W", "W", "W", "W", "F", "W", "F", "W", "F", "W", "F", "F", "F", "F", "W",
  "W", "W", "W", "W", "F", "F", "F", "F", "F", "W", "F", "F", "W", "F", "W", "G", "G", "G", "F", "F", "W", "F", "F", "W", "W", "F", "F", "F", "W", "F", "F", "W", "W", "W", "F", "W",
  "W", "F", "F", "F", "W", "W", "W", "W", "W", "W", "F", "W", "W", "F", "W", "G", "G", "G", "W", "F", "W", "W", "F", "W", "W", "W", "W", "W", "W", "F", "W", "F", "F", "F", "F", "W",
  "W", "F", "W", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "W", "F", "W", "F", "F", "F", "W", "F", "F", "F", "W", "F", "F", "F", "W", "F", "F", "F", "W", "F", "W", "W",
  "W", "F", "W", "F", "W", "W", "F", "W", "W", "F", "W", "W", "F", "W", "W", "F", "W", "W", "W", "F", "W", "F", "W", "F", "F", "F", "W", "F", "F", "F", "W", "W", "W", "F", "W", "W",
  "W", "F", "W", "F", "F", "F", "F", "W", "F", "F", "F", "F", "F", "W", "W", "F", "F", "F", "W", "F", "F", "F", "W", "W", "F", "W", "W", "F", "W", "W", "W", "W", "F", "F", "W", "W",
  "W", "F", "W", "W", "W", "W", "F", "W", "F", "W", "W", "F", "W", "F", "W", "F", "W", "F", "W", "W", "W", "F", "W", "W", "F", "W", "W", "F", "W", "W", "W", "F", "F", "W", "F", "W",
  "W", "F", "W", "W", "W", "W", "F", "F", "F", "W", "F", "F", "W", "F", "F", "F", "W", "F", "W", "W", "W", "F", "F", "F", "F", "W", "W", "F", "W", "F", "W", "W", "F", "W", "F", "W",
  "W", "F", "F", "W", "W", "W", "W", "W", "W", "W", "F", "W", "W", "W", "W", "F", "W", "F", "W", "W", "W", "W", "W", "W", "F", "F", "W", "F", "F", "F", "F", "W", "F", "F", "F", "W",
  "W", "W", "F", "W", "W", "W", "W", "W", "W", "F", "F", "W", "W", "W", "F", "F", "F", "W", "W", "W", "F", "F", "W", "W", "W", "F", "W", "W", "F", "W", "F", "W", "F", "W", "W", "W",
  "W", "W", "F", "F", "F", "F", "F", "W", "W", "T8", "W", "W", "W", "W", "F", "W", "F", "W", "F", "W", "F", "W", "W", "F", "F", "F", "F", "W", "F", "F", "F", "W", "F", "F", "W", "W",
  "W", "W", "W", "W", "W", "W", "F", "F", "T9", "W", "W", "W", "W", "W", "W", "W", "F", "F", "F", "W", "F", "W", "F", "F", "W", "W", "F", "F", "W", "W", "F", "W", "W", "F", "W", "W",
  "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "F", "F", "F", "W", "W", "F", "W", "W", "W", "F", "W", "W", "F", "W", "F", "F", "F", "W",
  "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "F", "W", "F", "F", "F", "F", "F", "W", "F", "F", "F", "F", "W", "F", "W", "F", "W",
  "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "F", "F", "F", "W", "W", "W", "F", "F", "F", "W", "W", "F", "F", "F", "W", "T10", "W",
  "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"
 ];
 nbtrace = 0;
 traceTimer = 10;
}
/******************************************************************************/
function draw() {
 background(1, 1, 1);
 noStroke();
 strokeWeight(0);
 for (i = 0; i < gameSize; i++) {
  for (j = 0; j < gameSize; j++) {
   switch (game[i * gameSize + j]) {
    case "W":
     fill(wallColor);
     strokeWeight(1);
     stroke(50);
     break;
    case "F":
     fill(wallColor);
     break;
    case "F2":
     fill(255, 198, 75);
     break;
    case "SP":
     fill((tp1), (tp2), (tp3));
     break;
    case "G":
     fill(255, 255, 0);
     break;
    case "T1":
     fill((tp1), (tp2), (tp3));
     break;
    case "T2":
     fill((tp1), (tp2), (tp3));
     break;
    case "T3":
     fill((tp1), (tp2), (tp3));
     break;
    case "T4":
     fill((tp1), (tp2), (tp3));
     break;
    case "T5":
     fill((tp1), (tp2), (tp3));
     break;
    case "T6":
     fill((tp1), (tp2), (tp3));
     break;
    case "T7":
     fill((tp1), (tp2), (tp3));
     break;
    case "T8":
     fill((tp1), (tp2), (tp3));
     break;
    case "T9":
     fill((tp1), (tp2), (tp3));
     break;
    case "T10":
     fill((tp1), (tp2), (tp3));
     break;
    case "B":
     fill(255, 87, 51);
     break;

   }
   rect(j * gameTileSize + offset, i * gameTileSize, gameTileSize, gameTileSize);
  }
 }
 Lamp(posI, posJ - 1);
 Lamp(posI, posJ + 1);
 Lamp(posI - 1, posJ);
 Lamp(posI + 1, posJ);

 fill(255, 87, 51);
 ellipse(posJ * gameTileSize + offset, posI * gameTileSize, playerSize);

 if (retry === true) {
  Retry();
  retryTimer--;
 }
 if (victory === true) {
  Victory();
 }

 if (posI != 1 || posJ != 1) {
  if (traceTimer < 0) {
   if (nbtrace > 0) {
    game[traces[0]] = "F2";
    nbtrace--;
    for (var i = 0; i < nbtrace; i++) {
     traces[i] = traces[i + 1];
    }
   } else {
    retry = true;
    retryTimer = 40;
   }
   traceTimer = (timerSpeed - nbtrace);
  }
 }
 traceTimer--;
}
/******************************************************************************/
function Victory() {
 background(255, 255, 0);
 textSize(100);
 fill(0, 102, 153);
 fill(0);
 textFont("impact");
 textAlign(CENTER);
 text("VICTORY", windowWidth / 2, (windowHeight / 3));
 textSize(50);
 text("CMD+R", windowWidth / 2, windowHeight / 3 + 50);
 textSize(25);
 text("to restart", windowWidth / 2, windowHeight / 3 + 75);
}
/******************************************************************************/
function Retry() {
 background(255, 0, 0);
 textSize(100);
 fill(0, 102, 153);
 fill(0);
 textFont("impact");
 textAlign(CENTER);
 text("TRY AGAIN", windowWidth / 2, (windowHeight / 3));
 posI = 1;
 posJ = 1;
 if (retryTimer === 0) {
  retry = false;
 }
}
/******************************************************************************/
function Lamp(i, j) {
 switch (game[i * gameSize + j]) {
  case "W":
   fill(wallColor);
   break;
  case "G":
   fill(255, 255, 0);
   break;
  case "F":
   fill(255, 198, 75);
   break;
  case "F2":
   fill(255, 198, 75);
   break;
  case "T1":
   fill((tp1), (tp2), (tp3));
   break;
  case "T2":
   fill((tp1), (tp2), (tp3));
   break;
  case "T3":
   fill((tp1), (tp2), (tp3));
   break;
  case "T4":
   fill((tp1), (tp2), (tp3));
   break;
  case "T5":
   fill((tp1), (tp2), (tp3));
   break;
  case "T6":
   fill((tp1), (tp2), (tp3));
   break;
  case "T7":
   fill((tp1), (tp2), (tp3));
   break;
  case "T8":
   fill((tp1), (tp2), (tp3));
   break;
  case "T9":
   fill((tp1), (tp2), (tp3));
   break;
  case "T10":
   fill((tp1), (tp2), (tp3));
   break;
  case "B":
   fill(255, 87, 51);
   break;
  case "SP":
   fill((tp1), (tp2), (tp3));
   break;

 }
 rect(j * gameTileSize + offset, i * gameTileSize, gameTileSize, gameTileSize);

}
/******************************************************************************/
function keyReleased() {
 switch (keyCode) {
  case LEFT_ARROW:
   NextPosition(posI, posJ - 1);
   break;
  case RIGHT_ARROW:
   NextPosition(posI, posJ + 1);
   break;
  case UP_ARROW:
   NextPosition(posI - 1, posJ);
   break;
  case DOWN_ARROW:
   NextPosition(posI + 1, posJ);
   break;
  default:
   break;
 }
}

function goLeft() {
 NextPosition(posI, posJ - 1);
}

function goRight() {
 NextPosition(posI, posJ + 1);
}

function goUp() {
 NextPosition(posI - 1, posJ);
}

function goDown() {
 NextPosition(posI + 1, posJ);
}
/******************************************************************************/
function NextPosition(NextI, NextJ) {
 switch (game[NextI * gameSize + NextJ]) {
  case "W":

   break;
  case "F":
   game[posI * gameSize + posJ] = "B";
   traces[nbtrace] = posI * gameSize + posJ;
   nbtrace++;

   posJ = NextJ;
   posI = NextI;

   break;
  case "F2":
   game[posI * gameSize + posJ] = "B";
   traces[nbtrace] = posI * gameSize + posJ;
   nbtrace++;

   posJ = NextJ;
   posI = NextI;

   break;
  case "G":
   posJ = NextJ;
   posI = NextI;
   victory = true;
   break;
  case "T1":
   posJ = 33;
   posI = 1;
   break;
  case "T2":
   //  posJ = 14;
   //  posI = 15;
   break;
  case "T3":
   posJ = 16;
   posI = 17;
   break;
  case "T4":
   //  posJ = 19;
   //  posI = 10;
   break;
  case "T5":
   posJ = 16;
   posI = 1;
   break;
  case "T6":
   //  posJ = 34;
   //  posI = 8;
   break;
  case "T7":
   posJ = 9;
   posI = 29;
   break;
  case "T8":
   // posJ = ;
   // posI = ;
   break;
  case "T9":
   posJ = 34;
   posI = 33;
   break;
  case "T10":
   // posJ = ;
   // posI = ;
   break;
  case "B":

   break;
  default:

   break;
 }
}