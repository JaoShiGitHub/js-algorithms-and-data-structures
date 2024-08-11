const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

const invalidText = "Invalid US number:";
const validText = "Valid US number:";

const handleCheckPhoneNumber = (phoneNumber) => {
  const regex = /^(1\s?)?(?:\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  if (regex.test(phoneNumber)) {
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
    handleCheckPhoneNumber(input);
  }
};

const handleClear = () => {
  result.textContent = "";
};

checkBtn.addEventListener("click", handleClickCheck);
clearBtn.addEventListener("click", handleClear);
