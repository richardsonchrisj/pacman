//Position of PAC-MAN
var pos = 0;

//Width of the webpage. This is later used to calculate when PAC-MAN needs to turn around. 
let pageWidth = window.innerWidth;

//This array contains all the PAC-MAN movement images
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

// PAC-MAN's direction:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// Determines which PAC-MAN image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PAC-MAN image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}
// setInterval() method calls the Run() function above every 200 milliseconds. 
setInterval(Run, 200);

// Determines the direction of PAC-MAN based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {

  pageWidth = window.innerWidth;
  //Reverse direction upon hitting screen edge
  if (direction) {
    if (pos < 0) {
      direction = 0;
    }
  }

  if (!direction) {
    if (pos > pageWidth - imgWidth) {
      direction = 1;
    }
  }
  return direction;
}