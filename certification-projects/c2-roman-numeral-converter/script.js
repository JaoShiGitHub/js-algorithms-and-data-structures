const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const number = document.getElementById("number")

const convertNumber = () => {
  const input = number.value;
  const numberInput = parseInt(input);

  if (!input) {
    output.textContent = "Please enter a valid number";
  }

  if (numberInput <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (numberInput <= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  }
}

convertBtn.addEventListener("click", convertNumber)

convertBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertNumber();
  }
});
