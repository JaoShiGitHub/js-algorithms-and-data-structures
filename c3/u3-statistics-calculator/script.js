// clean up the logic
const getMean = array => array.reduce((acc, el) => acc + el, 0) / array.length;

// const getMean = (array) => {
//   const sum = array.reduce((acc, el) => acc + el, 0);
//   const mean = sum / array.length;
//   return mean;
// }

const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);

const firstMiddleNumber = testArr2[testArr2.length / 2];
const secondMiddleNumber = testArr2[(testArr2.length / 2) - 1];

const evenListMedian = getMean([firstMiddleNumber, secondMiddleNumber]);
console.log(evenListMedian);

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
  document.querySelector("#mean").textContent = mean;
}
