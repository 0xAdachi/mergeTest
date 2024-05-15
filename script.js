"use strict";
let something = 35;

function feature1() {
  // do some other code
  something += 34;
  let x = 5;
  let y = 4;
  console.log(x+y);
}

function foo() {
  let something = 7;
  return something;
}

function main() {
 loadAllImages();
}

async function loadAllImages() {
  try {
    await loadImage(bgImg, "./assets/bg.png");
    await loadImage(playerImg, "./assets/adachi.png");
    await loadImage(pipeImg, "./assets/shimamura.png");
    animationLoop();
    scoreboard.style.visibility = "visible";
    loadingScreen.style.display = "none";
  } catch (error) {
    console.error("Loading Images Failed", error);
  }
}