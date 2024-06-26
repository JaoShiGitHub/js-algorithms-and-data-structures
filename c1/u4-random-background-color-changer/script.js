// Syntax errors: Fix the syntax errors in the darkColorsArr array 
// and you should see the content and styles show up on the page.

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
  // ReferenceError: Fix CamperBot's error in the math.random() line and open up the console again.
  // console.log(darkColorsArr.length * math.random())

  // - Fixed -
  console.log(darkColorsArr.length * Math.random());
}

getRandomIndex();
