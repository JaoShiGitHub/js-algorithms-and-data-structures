const cashInputValue = document.getElementById("cash");
const displayChangeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const showPrice = document.getElementById("price");
const showChange = document.getElementById("change");

const price = 3.26;
showPrice.textContent = `Price: ${price}`;

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
  displayChangeDue.innerHTML = "";
  const cash = Number(cashInputValue.value);
  let changeDue = (cash - price).toFixed(2);
  let cidStatus = { status: "OPEN", change: [] };
  let reversedCid = [...cid].reverse();
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  showChange.textContent = `Change: ${changeDue}`;
  cashInputValue.value = "";

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    cidStatus.status = "INSUFFICIENT_FUNDS";
    return (displayChangeDue.textContent = `Status: ${cidStatus.status}`);
  }

  if (cash === price) {
    return (displayChangeDue.textContent =
      "No change due - customer paid with exact cash");
  }

  if (cidTotal === changeDue || (price < cash && cidTotal === changeDue)) {
    cidStatus.status = "CLOSED";
  }

  for (let i = 0; i < reversedCid.length; i++) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      let count = 0;
      let total = reversedCid[i][1];
      while (total > 0 && changeDue >= denominations[i]) {
        total -= denominations[i];
        changeDue = parseFloat((changeDue -= denominations[i]).toFixed(2));
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

  if (cidStatus.change.length === 1) {
    displayChangeDue.innerHTML += `<p>Status: ${cidStatus.status} ${cidStatus.change[0][0]}: $${cidStatus.change[0][1]}</p>`;
  } else {
    displayChangeDue.innerHTML += `<p>Status: ${cidStatus.status}</p>`;
    displayChangeDue.innerHTML += cidStatus.change
      .map((money) => `<p>${money[0]}: $${money[1]}</p>`)
      .join("");
  }
  return;
};

purchaseBtn.addEventListener("click", handleCheckCash);

cashInputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCheckCash();
  }
});
