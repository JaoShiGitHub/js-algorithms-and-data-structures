const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

const input = userInput.value;

const onClickCheckBtn = () => {
  if (!input) {
    alert("Please provide a phone number");
    console.log(input);
  } else {
    alert("welcome to Telephone Number Validator");
  }
};

checkBtn.addEventListener("click", () => onClickCheckBtn);
