const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const number = document.getElementById("number");

let numbersConverted = [];

let romanNumerals = {
  1: "M",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

const oneNumber = (num) => {
  if (num < 4) {
    for (let i = 0; i < num; i++) {
      numbersConverted.push("I");
    }
  } else if (num === 4) {
    numbersConverted.push(romanNumerals["4"]);
  } else if (num === 5) {
    numbersConverted.push(romanNumerals["5"]);
  } else if (num > 5 && num < 9) {
      numbersConverted.push("V");
      for (let i = 0; i < num - 5; i++) {
      numbersConverted.push("I");
    }
  } else if (num === 9) {
      numbersConverted.push(romanNumerals["9"]);
  }
};

const convertNumber = () => {
  const input = number.value;
  const numberInput = parseInt(input);
  const splitNums = input.split("");
  const splitNumsLength = splitNums.length;

  if (!input) {
    output.textContent = "Please enter a valid number";
  } else if (numberInput <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (numberInput === 4000 || numberInput > 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    if (splitNumsLength === 1) {
      oneNumber(numberInput);
    }
  }
  output.textContent = numbersConverted.join("");
  numbersConverted = [];
};

convertBtn.addEventListener("click", convertNumber);

convertBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertNumber();
  }
});
