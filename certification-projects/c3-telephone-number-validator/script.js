const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

const invalidText = "Invalid US number:";
const validText = "Valid US number:";

const handleCheckPhoneNumber = (phoneNumber) => {
  const number = phoneNumber.replace(/[-\s]+/g, "");
  const numLength = number.length;

  if (numLength === 10 || (numLength === 11 && number.startsWith("1"))) {
    result.textContent = `${validText} ${phoneNumber}`;
  } else {
    result.textContent = `${invalidText} ${phoneNumber}`;
  }
};

const handleClickCheck = () => {
  const input = userInput.value;

  if (!input) {
    alert("Please provide a phone number");
    console.log(input);
  } else {
    userInput.value = "";
    alert("welcome to Telephone Number Validator");
    handleCheckPhoneNumber(input);
  }
};

const handleClear = () => {
  result.textContent = "";
};

checkBtn.addEventListener("click", handleClickCheck);
clearBtn.addEventListener("click", handleClear);
