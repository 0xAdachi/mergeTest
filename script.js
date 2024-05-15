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
 window.location.reload();
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
  if (depth >= this.maxDepth) return;

  node.nodeLeft = new Node(2 * node.value);
  this.constructBinaryTree(node.nodeLeft, depth + 1)
  node.nodeRight = new Node((2 * node.value) + 1);
  this.constructBinaryTree(node.nodeRight, depth + 1)
}

function bar() {
  if(x > cwidth - boxWidth) dx = -dx;
  if(x < 0) dx = -dx;
  if(y > cheight - boxHeight) dy = -dy;
  if(y < 0) dy = -dy;
}