import 'script-loader!p5/lib/p5.min.js'
import 'script-loader!p5/lib/addons/p5.dom.min.js'

const x = 100;
const y = 100;

export function setup() {
  createCanvas(200, 200);
  select('canvas')!.position(100, 100);
}

export function draw() {
  background(0);
  fill(255);
  ellipse(x, y, 50, 50);
}
