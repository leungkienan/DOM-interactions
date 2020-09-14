// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener("DOMContentLoaded", start);

function start() {
  bindEventListeners(document.getElementsByClassName("board")[0].children);
}

function bindEventListeners(dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener("contextmenu", makeGreen);
    dots[i].addEventListener("click", makeBlue);
    dots[i].addEventListener("dblclick", hide);
  }
}

function makeGreen(evt) {
  evt.preventDefault();
  evt.target.classList.toggle("green");
  updateCounts();
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(evt) {
  evt.target.classList.toggle("blue");
  updateCounts();
}
// CREATE FUNCTION hide HERE
function hide(evt) {
  evt.target.classList.toggle("invisible");
  updateCounts();
}

function updateCounts() {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0,
  };

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  // count the amount of dots that have a colour
  // if theres a blue dot, the blue counter will be 1, if two, then blue count = 2 etc
  // if dot is removed, the counter will show that

  // console.log(document.getElementsByClassName("board")[0].children); 

  for (
    var i = 0;
    i < document.getElementsByClassName("board")[0].children.length; 
    // this will check if 'i' is less than the size of the board aka 9 spaces.
    i++
  ) {
    console.log(
      document.getElementsByClassName("board")[0].children[i].className
    ); //checking if the board is present. 

    if (
      document.getElementsByClassName("board")[0].children[i].className ===
      i + " blue" // this checks if the circle has the class name blue attached to it 
    ) {
      totals["blue"] += 1;
      // increments the total.blue by 1. 
    }
    if (
      document.getElementsByClassName("board")[0].children[i].className ===
      i + " green"
    ) {
      totals["green"] += 1;
    }
    if (
      document.getElementsByClassName("board")[0].children[i].className ===
      i + " invisible"
    ) {
      totals["invisible"] += 1;
    }
  }

  // Once you've done the counting, this function will update the display
  displayTotals(totals);
}

function displayTotals(totals) {
  for (var key in totals) {
    document.getElementById(key + "-total").innerHTML = totals[key];
  }
}
