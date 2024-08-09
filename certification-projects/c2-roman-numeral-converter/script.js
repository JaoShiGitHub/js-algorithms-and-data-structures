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

// else if (firstIdx > 4 && firstIdx < 5) {
//   numbersConverted.push("L");
//   for (let i = 0; i < firstIdx - 5; i++) {

//   }
// }

const twoLength = (numArr, num) => {
  const firstIdx = numArr[0];
  const secondIdx = numArr[1];

  if (num === 10) {
    numbersConverted.push(romanNumerals["10"]);
  } else if (firstIdx < 4) {
    for (let i = 0; i < firstIdx; i++) {
      numbersConverted.push("X");
    }
  } else if (num === 40) {
    numbersConverted.push(romanNumerals["40"]);
  } else if (firstIdx === 4) {
    numbersConverted.push("XL");
  } else if (num === 50) {
    numbersConverted.push(romanNumerals["50"]);
  } else if (firstIdx > 5 && firstIdx < 9) {
    numbersConverted.push("L");
    for (let i = 0; i < firstIdx - 5; i++) {
      numbersConverted.push("X");
    }
  }

  oneNumber(secondIdx);
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
    } else if (splitNumsLength === 2) {
      twoLength(
        splitNums.map((num) => parseInt(num)),
        numberInput
      );
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
