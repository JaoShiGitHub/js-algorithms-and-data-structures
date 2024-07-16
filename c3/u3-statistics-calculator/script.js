// clean up the logic
const getMean = array => array.reduce((acc, el) => acc + el, 0) / array.length;

// const getMean = (array) => {
//   const sum = array.reduce((acc, el) => acc + el, 0);
//   const mean = sum / array.length;
//   return mean;
// }

const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const median =
    array.length % 2 === 0
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
      : sorted[Math.floor(array.length / 2)];
  return median;
}

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort((a , b) => counts[b] - counts[a])[0];
   const mode = Object.keys(counts).filter(el => counts[el] === counts[highest]);
}

// -- Test Code --
// const testArr1 = [1, 2, 3, 4, 5];
// const testArr2 = [1, 2, 3, 4, 5, 6];
// const isEven = testArr2.length % 2 === 0;
// console.log(isEven);
// const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
// console.log(oddListMedian);

// const firstMiddleNumber = testArr2[testArr2.length / 2];
// const secondMiddleNumber = testArr2[(testArr2.length / 2) - 1];

// const evenListMedian = getMean([firstMiddleNumber, secondMiddleNumber]);
// console.log(evenListMedian);

const getMedian = (array) => {
  const sorted = array.sort((a,b) =>  a - b);
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  // use method chaining instead of doing the line 15
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  // const filtered = numbers.filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
}
