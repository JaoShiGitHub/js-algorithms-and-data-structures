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
  cashInputValue.value = "";

  // Customer doesn't have enough money
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    displayChangeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }
  // Customer paid with exact cash
  if (cash === price) {
    displayChangeDue.textContent =
      "No change due - customer paid with exact cash";
    return;
  }

  if (cidTotal === changeDue) {
    displayChangeDue.textContent = "Status: CLOSED";
    return;
  } else {
    displayChangeDue.textContent = "Happy";
  }

  console.log("cid", cidTotal);
};

purchaseBtn.addEventListener("click", handleCheckCash);

cashInputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCheckCash();
  }
});
