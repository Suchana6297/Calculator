const disp = document.querySelector(".disp");
const btn = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Define Function
const calculate = (btnValue) => {
  disp.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  disp.value = output;
};

btn.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});