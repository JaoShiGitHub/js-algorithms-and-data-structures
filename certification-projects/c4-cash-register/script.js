const cashInputValue = document.getElementById("cash");
const displayChangeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const showPrice = document.getElementById("price");

const price = 1.87;
showPrice.textContent = price;

// cash-in-drawer
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
  const changeDue = cash - price;
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

  if (cidTotal === changeDue) {
    cidStatus.status = "CLOSED";
  }

  for (let i = 0; i < reversedCid.length; i++) {
    if (changeDue > 0 && changeDue >= denominations[i]) {
      let cidTotal = reversedCid[i][1];
      for (let j = 0; cidTotal > 0 && changeDue >= denominations[i]; j++) {
        cidTotal -= denominations[i];
        changeDue = (changeDue -= denominations[i]).toFixed(2);
      }
    }
  }

  console.log("cid", cidTotal);
};

purchaseBtn.addEventListener("click", handleCheckCash);

cashInputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCheckCash();
  }
});
