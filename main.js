document.addEventListener("DOMContentLoaded", function () {
  const screen = document.getElementById("display");

  const nums = document.querySelectorAll(".number");
  const operator = document.querySelectorAll(".operator");

  function display(value) {
    let preValue = screen.textContent;

    if (preValue == "0") {
      preValue = value;
      screen.innerText = preValue;
    } else {
      screen.innerText = preValue + value;
    }
  }

  function sum(num1, num2) {
    return num1 + num2;
  }
  function subtraction(num1, num2) {
    return num1 - num2;
  }
  function multiply(num1, num2) {
    return num1 * num2;
  }
  function divide(num1, num2) {
    return num1 / num2;
  }

  function del() {}
  function reset() {
    let reset = screen.textContent.split();
    for (let i = 0; i < reset.length; i++) {
      reset.pop();
    }
    if (reset.length == 0) {
      reset.push("0");
    }
    screen.innerText = reset;
  }

  nums.forEach((num) => {
    num.addEventListener("click", () => {
      display(num.value);
    });
  });
});
