// Import HTML elements

const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

//Fuction to calculate the age

function calculateAge() {
  // retrieve the entered date of birth
  const birthdayValue = birthdayEl.value;

  // Check if the date of birth is empty
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    //Calculate the age using the the getAge function
    const age = getAge(birthdayValue);

    // Display the calculated age in the result element
    resultEl.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

// Function to calculate age based on the provided birthdate
function getAge(birthdayValue) {
  // Get the current date
  const currentDate = new Date();
  // Convert the provided birthdate into a Date object
  const birthdayDate = new Date(birthdayValue);
  // Calculate the year difference between current year and birth yea
  const age = currentDate.getFullYear() - birthdayDate.getFullYear();
  // Calculate the month difference
  const month = currentDate.getMonth() - birthdayDate.getMonth;

  // Adjust the age if the birth month hasn't occurred yet this year
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  // Return the calculated age
  return age;
}

// Add a click event listener to the button to trigger age calculation
btnEl.addEventListener("click", calculateAge);
