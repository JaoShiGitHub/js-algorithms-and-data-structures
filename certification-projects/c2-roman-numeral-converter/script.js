const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const number = document.getElementById("number")


const convertNumber = () => {
  const input = number.value;

  if (input === "") {
    alert("Please enter a valid number")
  }

}

convertBtn.addEventListener("click", convertNumber)

convertBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertNumber();
  }
});
