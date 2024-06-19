// C1,U2: Review JavaScript Fundamentals by Building a Gradebook App

// S1: Calculate the average score for the class
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/review-js-fundamentals-by-building-a-gradebook-app/step-1
// • for loop
// • array.length

function getAverage(scores) {
  let summed = 0;
  for (let i = 0; i < scores.length; i++) {
    summed = scores[i] + summed;
  }
  return summed / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// S2: Convert the student score to a letter grade
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/review-js-fundamentals-by-building-a-gradebook-app/step-2
// • conditional statements (if, else if, and else)
// • comparison operators (>, <, >=, <=, ===)

function getGrade(score) {
  if (score > 99) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// S3: Check if a student has a passing grade
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/review-js-fundamentals-by-building-a-gradebook-app/step-3
// 💡 Use the getGrade function to get the student's grade. Then check if the grade is passing or not.

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
