const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
  let text = input.value;
  let regex = /[\p{P}\p{S}\p{Z}]/gu;
  if (text) {
    input.value = "";
    let check = text.replace(regex, "").toLowerCase();
    let reverseText = check.split("").reverse().join("");
    alert(
      check === reverseText
        ? `${text} is Palindrome`
        : `${text} isn't Palindrome`
    );
  } else {
    alert("Please input a value 🥺");
  }
};

checkBtn.addEventListener("click", checkPalindrome);
