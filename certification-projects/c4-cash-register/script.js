const cashInputValue = document.getElementById("cash");
const displayChangeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const showPrice = document.getElementById("price");

const price = 19.5;
// const price = 1.87;
showPrice.textContent = price;

// cash-in-drawer
// let cid = [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ];

// let cid = [
//   ["PENNY", 0.5],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ];

let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const cidTotal = cid
  .reduce((acc, currentElem) => {
    const currPrice = currentElem[1];
    return acc + currPrice;
  }, 0)
  .toFixed(2);

const handleCheckCash = () => {
  const cash = Number(cashInputValue.value);
  let changeDue = (cash - price).toFixed(2);
  let cidStatus = { status: "OPEN", change: [] };
  let reversedCid = [...cid].reverse();
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  cashInputValue.value = "";

  // Customer doesn't have enough money
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    cidStatus.status = "INSUFFICIENT_FUNDS";
    return (displayChangeDue.textContent = `Status: ${cidStatus.status}`);
  }
  // Customer paid with exact cash
  if (cash === price) {
    return (displayChangeDue.textContent =
      "No change due - customer paid with exact cash");
  }
  console.log("cidTotal: ", cidTotal);
  console.log("changeDue: ", changeDue);

  if (cidTotal === changeDue) {
    cidStatus.status = "CLOSED";
  }

  for (let i = 0; i < reversedCid.length; i++) {
    // if there's change left and the change is greater than 0 -> keep calculating
    if (changeDue >= denominations[i] && changeDue > 0) {
      let count = 0;
      let total = reversedCid[i][1]; // Get the cash in drawer
      while (total > 0 && changeDue >= denominations[i]) {
        // if there's cash to give && change due is >= the denomination keep updating
        total -= denominations[i];
        changeDue = parseFloat((changeDue -= denominations[i]).toFixed(2));
        console.log("changeDue: ", changeDue, "denomination: ", reversedCid[i]);

        count++;
      }
      if (count > 0) {
        cidStatus.change.push([reversedCid[i][0], count * denominations[i]]);
      }
    }
  }

  if (changeDue > 0) {
    return (displayChangeDue.textContent = `Status: INSUFFICIENT_FUNDS`);
  }

  // display result
  cidStatus.change.map(
    (money) =>
      (displayChangeDue.innerHTML += `<p>Status: ${cidStatus.status} ${money[0]}: $${money[1]}</p>`)
  );

  console.log(cidStatus.change);
};

purchaseBtn.addEventListener("click", handleCheckCash);

cashInputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCheckCash();
  }
});
