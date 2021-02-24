var step = 1;
let button;

//This line creates a new variable named "step" and says that it
//should have a value of 1 at the very beginning of the program.

function setup() {
  createCanvas(600, 600);
  button = createButton('Linear Grow');
  button.position(500, 570);
  button.mousePressed(growButton);
  
}

function draw() {
  background(color('#0F4C81'));
  x = 2 * step;
  fill(color('#B5C7D3'));
  // text("Click anywhere in this window.", 10, 20);
  text("Step = " + step + ", Diameter = " + x, 10, 590);
  fill(color("#F93156,50%,50%,0.5"));
  noStroke();
  ellipse(300, 300, x, x);
  // ellipse(x, x, 100, 100);
  //In p5, this is how you write text on the screen.  Notice that
  //the variables (they're named "step" and "x") are outside of
  //the quotes, but everything else is inside of the quotes.
}

function growButton() {
  step = step + 1;
  //Each time you click on the screen, the variable named "step"
  //grows by 1.  Then, the "draw" function makes a new circle
  //with a bigger diameter.
}

/*
THINGS TO TRY:
1) How can you change line 12 so that the circle gets bigger 
   really quickly?  How can you make the circle get bigger very
   gradually?
2) What happens if you change the number at the end of line 22?
3) See what happens if you change line 13 so that it looks like
   this: ellipse(x, x, 50, 100);
   What happens?  Why?
*/