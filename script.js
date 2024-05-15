"use strict";

async function loadAllImages() {
  if (depth >= this.maxDepth) return;

  node.nodeLeft = new Node(2 * node.value);
  this.constructBinaryTree(node.nodeLeft, depth + 1)
  node.nodeRight = new Node((2 * node.value) + 1);
  this.constructBinaryTree(node.nodeRight, depth + 1)
}

function main() {
  window.location.reload();
}

function bar() {
  if(x > cwidth - boxWidth) dx = -dx;
  if(x < 0) dx = -dx;
  if(y > cheight - boxHeight) dy = -dy;
  if(y < 0) dy = -dy;
}