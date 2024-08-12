const cashInputValue = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

let price = 1.87;
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

function randomPrice() {
  return Math.random() < 0.5
    ? Math.floor(Math.random() * 100)
    : (Math.random() * 100).toFixed(2);
}

const handleCheckCash = () => {
  const cash = Number(cashInputValue.value);

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price) {
    alert("No change due - customer paid with exact cash");
  }
};

purchaseBtn.addEventListener("click", handleCheckCash);
