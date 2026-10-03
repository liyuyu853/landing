console.log("behavior.js is running");


const email = document.querySelector(".email");
const copyButton = document.querySelector(".copy-email");
function copyEmail() {
  navigator.clipboard.writeText(email.textContent);
  copyButton.textContent = "Copied!";
  setTimeout(function () {
    copyButton.textContent = "Copy email";
  }, 2000);
}
copyButton.addEventListener("click", copyEmail);
