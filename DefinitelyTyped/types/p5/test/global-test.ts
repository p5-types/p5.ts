// tslint:disable-next-line:no-bad-reference
/// <reference path="../global.d.ts" />

const x = 100;
const y = 100;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0);
  fill(255);
  ellipse(x, y, 50, 50);
}
