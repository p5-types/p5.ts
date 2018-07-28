import * as p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";

function s(sketch: p5) {
  let fft: p5.FFT;
  let noise: p5.Noise;
  let filter: p5.BandPass;

  sketch.setup = function setup() {
    fill(255, 40, 255);

    filter = new p5.BandPass();

    noise = new p5.Noise('white');
    // disconnect unfiltered noise,
    // and connect to filter
    noise.disconnect();
    noise.connect(filter);
    noise.start();

    fft = new p5.FFT();

    select('canvas')!.position(100, 100);
  };

  sketch.draw = function draw() {
    background(30);

    // set the BandPass frequency based on mouseX
    const freq = map(mouseX, 0, width, 20, 10000);
    filter.freq(freq);
    // give the filter a narrow band (lower res = wider bandpass)
    filter.res(50);

    // draw filtered spectrum
    const spectrum = fft.analyze();
    noStroke();
    for (let i = 0; i < spectrum.length; i++) {
      const x = map(i, 0, spectrum.length, 0, width);
      const h = -height + map(spectrum[i], 0, 255, height, 0);
      rect(x, height, width / spectrum.length, h);
    }

    isMouseOverCanvas();
  };

  function isMouseOverCanvas() {
    const mX = mouseX;
    const mY = mouseY;
    if (mX > 0 && mX < width && mY < height && mY > 0) {
      noise.amp(0.5, 0.2);
    } else {
      noise.amp(0, 0.2);
    }
  }
}

new p5(s);
