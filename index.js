// Declare Global Variables
let button = document.querySelector('#button-container button');
let clearButton = document.querySelector('#clear-container button');
let timesClicked = document.getElementById('times-clicked');
let countDownNumber = 10;

// If Key/Value Exists on Local Storage
// Update timesClicked to Reflect Value
if (localStorage.getItem('clicked')) {
    timesClicked.innerText = localStorage.getItem('clicked');
}


// Add Event Listener on Button When Clicked
button.addEventListener('click', () => {
  // If Key/Value Doesn't Exist on Local Storage
  // Add the Key/Value Pair
  // Set Value to 1
  // Set timesClicked to Updated Value
  if (!localStorage.getItem("clicked")) {
    localStorage.clicked = 1;
    timesClicked.innerText = localStorage.getItem("clicked");
  } else {
    // If Key/Value Does Exist on Local Storage
    // Update Local Storage Value by 1
    // Set timesClicked to Updated Value
    localStorage.clicked++;
    timesClicked.innerText = localStorage.getItem("clicked");
  }

});

clearButton.addEventListener('click', () => {
    localStorage.removeItem('clicked');
    timesClicked.innerText = 0;
})
