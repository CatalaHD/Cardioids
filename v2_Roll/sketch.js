// Code by Aleix Ferre
// Sketch: https://editor.p5js.org/thecatalahd/sketches/-9TtrR8II
// Cardioid generated by a rolling circle on a circle with the same radius
// See wikipedia:
// https://en.wikipedia.org/wiki/Cardioid

let points = [];
let angle;

let txtSize = 32;
let r = 100;

// Personalizable values
let multiplier = 2;

function setup() {
  angle = TWO_PI;
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(255);

  textAlign(CENTER);
  textSize(txtSize);
  fill(0);
  noStroke();
  text("Cardioid Visualization #2", width / 2, txtSize);

  textSize(floor(txtSize / 2));
  text("Cardioid generated by a rolling circle on a circle with the same radius", width / 2, txtSize * 2);


  translate(width / 2, height / 2);

  noFill();
  stroke(0, 0, 255);
  strokeWeight(2);

  circle(0, 0, r * 2);

  stroke(255, 0, 0);

  let v = getPoint(angle);

  push();
  translate(v.x * 2, v.y * 2);

  stroke(0);

  circle(0, 0, r * 2);

  strokeWeight(8);

  let v2 = getPoint(angle * multiplier - PI);

  points.push(createVector(v.x * 2 + v2.x, v.y * 2 + v2.y));

  stroke(255, 0, 0);
  point(v2.x, v2.y);
  pop();

  // Mostrar la forma amb els punts
  beginShape();
  for (let i = 0; i < points.length; i++) {
    vertex(points[i].x, points[i].y);
  }
  endShape();

  angle -= 0.03;

  if (angle < 0) {
    angle = TWO_PI;
    points = [];
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function getPoint(a) {

  let v = createVector();

  v.x = r * cos(a);
  v.y = r * sin(a);

  return v;

}