// 1. Syntax errors: Fix the syntax errors in the darkColorsArr array 
//   and you should see the content and styles show up on the page.

// const darkColorsArr = [
//   "#2C3E50",
//   "#34495E",
//   "#2C2C2C"
//   "#616A6B"
//   "#4A235A"
//   "#2F4F4F",
//   "#0E4B5A",
//   "#36454F",
//   "#2C3E50",
//   "#800020",
// ];

// - Fixed -
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
  // 2. ReferenceError: Fix CamperBot's error in the math.random() line and open up the console again.
  // 3. Print a whole number between 0 and 9.
  // console.log(darkColorsArr.length * math.random())

  // - Fixed -
  console.log(Math.floor(darkColorsArr.length * Math.random()))
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

// getRandomIndex();

// 4. TypeError: Fix by updating the document.queryselector method to the correct method name
// 5. Null: Fix the document.querySelector("bg-hex-code") line so that it correctly selects the element
// const body = document.queryselector("body");
// const bgHexCodeSpanElement = document.querySelector("bg-hex-code");

// - Fixed -
const body = document.querySelector("body");
// - Fixed -
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

console.log(bgHexCodeSpanElement);
