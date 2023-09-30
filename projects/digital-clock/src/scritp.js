// Selecting HTML elementis by ID
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

// Function to update the clock
function updateClock() {
  // Get the current hour, minutes and seconds from the Date object
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  // Check if the hours is greater then 12 to set the period to PM (POST meridiem)
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  // Add leading zero if values are less then 10 (fomating)
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Update the content of HTML elements with hours, minutes and seconds
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  // Schedule the call of the updateClock function every 1000 milesencons (1 second)
  setTimeout(() => {
    updateClock();
  }, 1000);
}

// Call the updateClock function to initiate clock update
updateClock();
