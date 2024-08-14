const cashInputValue = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const showPrice = document.getElementById("price");

let price = 1.87;

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

function randomPrice() {
  price =
    Math.random() < 0.5
      ? Math.floor(Math.random() * 100)
      : (Math.random() * 100).toFixed(2);
  showPrice.textContent = price;
}

const total = cid.reduce((acc, currentElem) => {
  const currPrice = currentElem[1];
  return acc + currPrice;
}, 0);

const handleCheckCash = () => {
  const cash = Number(cashInputValue.value);

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
  } else if (cash > price || total === cash - price) {
    changeDue.textContent = "Status: CLOSED";
  }

  cashInputValue.value = "";
  console.log(price);
};

purchaseBtn.addEventListener("click", handleCheckCash);

cashInputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCheckCash();
  }
});

randomPrice();
