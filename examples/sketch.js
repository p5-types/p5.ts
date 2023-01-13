//@ts-check
/// <reference path="../types/p5/index.d.ts" />
/// <reference path="../types/p5/global.d.ts" />

const p5 = require("../types/p5");


function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
}
/**
 *
 * @param {p5.Vector} p1
 * @param {p5.Vector} p2
 * @param {p5.Vector} p3
 * @param {number} depth
 * @returns
 */
function iter(p1, p2, p3, depth) {
	if (depth === 0) {
		return;
	}
	point(p1.x, p1.y);
	point(p2.x, p2.y);
	point(p3.x, p3.y);
	const p12 = p1.copy().add(p2).div(2);
	const p13 = p1.copy().add(p3).div(2);
	const p23 = p2.copy().add(p3).div(2);
	iter(p1, p12, p13, depth - 1);
	iter(p12, p2, p23, depth - 1);
	iter(p13, p23, p3, depth - 1);
}

function draw() {
	background(100);
	const p1 = createVector(0, 0);
	const p2 = createVector(width, 0);
	const p3 = createVector(0, height);
	iter(p1, p2, p3, 10);
}
