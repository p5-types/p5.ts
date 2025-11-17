/// @ts-check
/// <reference path="../../types/p5/global.d.ts" />

const p5 = require("../../types/p5");
let img;
async function setup() {
  img = await loadImage("cat.jpg");
}

/**
 *
 * @param {p5.Vector} a
 */
function foo(a) {
}
function draw() {
  ellipse(50, 50, 80, 80);
}
