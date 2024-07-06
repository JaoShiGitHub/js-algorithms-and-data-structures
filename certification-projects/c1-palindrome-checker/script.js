const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
  let text = input.value;
  let regex = /[\p{P}\p{S}\p{Z}]/gu;
  let check = text.replace(regex, "").toLowerCase();
  let reverseText = check.split("").reverse().join("");

  const isPalindrome = `<p><span class="check-input">${text}</span> is palindrome</p>`;
  const notPalindrome = `<p><span class="check-input">${text}</span> isn't palindrome</p>`;

  if (result.hasChildNodes()) {
    result.removeChild(result.childNodes[0]);
  }

  if (text) {
    check === reverseText
      ? (result.innerHTML += isPalindrome)
      : (result.innerHTML += notPalindrome);
    input.value = "";
  } else {
    alert("Please input a value 🥺");
  }
};

checkBtn.addEventListener("click", checkPalindrome);
