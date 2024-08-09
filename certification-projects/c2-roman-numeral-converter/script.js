document.addEventListener("DOMContentLoaded", () => {
  const convertBtn = document.getElementById("convert-btn");
  const output = document.getElementById("output");
  const number = document.getElementById("number");

  let romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  const convertNumber = () => {
    const input = number.value;
    let numberInput = parseInt(input);

    // Clear previous output
    output.textContent = "";

    // Handle invalid or out-of-range numbers
    if (!input) {
      output.textContent = "Please enter a valid number";
    } else if (numberInput <= 0) {
      output.textContent = "Please enter a number greater than or equal to 1";
    } else if (numberInput > 3999) {
      output.textContent = "Please enter a number less than or equal to 3999";
    } else {
      // Perform the conversion
      let numbersConverted = [];
      for (let key of Object.keys(romanNumerals).map(Number).reverse()) {
        while (numberInput >= key) {
          numbersConverted.push(romanNumerals[key]);
          numberInput -= key;
        }
      }
      output.textContent = numbersConverted.join("");
    }
  };

  convertBtn.addEventListener("click", convertNumber);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      convertNumber();
    }
  });
});
