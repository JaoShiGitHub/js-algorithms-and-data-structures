const character = "#";
const count = 8;
const rows = [];
let result = "";

// Pyramid

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
