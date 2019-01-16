// THEY ARE ALL THE SAME DONT OVER THINK
// this is being run in p5
function setup () {
  createCanvas(600, 400);
  background(0);
  let button = createButton('press');
  button.mousePressed(changeBackground);

  function changeBackground() {
    background(random(255));
  }
}

// ABOVE IS THE SAME AS BELOW

function setup () {
  createCanvas(600, 400);
  background(0);
  let button = createButton('press');
  // now the function is anonymous but works the same for this scope only
  button.mousePressed(function changeBackground() {
    background(random(255));
  });
}

// WHICH IS THE SAME AS BELOW

function setup () {
  createCanvas(600, 400);
  background(0);
  let button = createButton('press');
  // now the function is anonymous AND A FAT ARROW
  button.mousePressed(() => {
    background(random(255));

  });

  // WHICH FREAKING WORKS THE SAME AS BELOW!!!!!

  function setup () {
    createCanvas(600, 400);
    background(0);
    let button = createButton('press');
    // now the function is anonymous AND A FAT ARROW
    button.mousePressed(() => background(random(255)));
