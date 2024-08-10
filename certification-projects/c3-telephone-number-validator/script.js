const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

const input = userInput.value;

const handleClickCheck = () => {
  if (!input) {
    alert("Please provide a phone number");
    console.log(input);
  } else {
    alert("welcome to Telephone Number Validator");
  }
};

const handleClear = () => {
  result.textContent = "";
};

checkBtn.addEventListener("click", handleClickCheck);
clearBtn.addEventListener("click", handleClear);
