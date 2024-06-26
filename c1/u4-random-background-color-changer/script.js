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

// 4. TypeError: Fix by updating the document.queryselector method to the correct method name
// 5. Null: Fix the document.querySelector("bg-hex-code") line so that it correctly selects the element
// const body = document.queryselector("body");
// const bgHexCodeSpanElement = document.querySelector("bg-hex-code");

// - Fixed -
const body = document.querySelector("body");
// - Fixed -
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

console.log(bgHexCodeSpanElement);


function changeBackgroundColor() {
  // 6. The background color is not changing and the text shows undefined because the color variable is not being set correctly.
  // const color = darkColorsArr[getRandomIndex];
  // - Fixed -
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

// 7. The button element is null. Fix that button element to correct id name.
// const btn = document.querySelector("#click-btn");
// - Fixed -
const btn = document.querySelector("#btn");
console.log(btn);

// 8. The background color doesn't change when it is clicked. The onclick property should be assigned a function reference.
// btn.onclick = changeBackgroundColor();
// - Fixed -
btn.onclick = changeBackgroundColor;
