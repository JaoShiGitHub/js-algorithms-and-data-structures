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
