// Get the input and output elements
const inputEl = document.querySelector('#timeCount');
const outputEl = document.querySelector('#current-time');

let timerId = null; // variable to store the timer ID

// Function to start the countdown timer
function startTimer(value) {
  let countdown = Math.floor(value); // round down to nearest integer
  outputEl.textContent = countdown; // update output

  // Decrement countdown by 1 every second until it reaches 0
  timerId = setInterval(() => {
    countdown--;
    outputEl.textContent = countdown; // update output
    if (countdown === 0) {
      clearInterval(timerId); // clear the interval
      outputEl.textContent = 0; // display 0
    }
  }, 1000);
}

// Listen for enter key press on input field
inputEl.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) { // keyCode 13 is the enter key
    clearInterval(timerId); // clear previous timer if it exists
    const value = parseInt(inputEl.value); // parse input to integer
    if (!isNaN(value)) { // check if valid integer
      startTimer(value); // start the countdown timer
    } else {
      outputEl.textContent = 0; // display 0 for invalid input
    }
  }
});
