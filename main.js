document.addEventListener("DOMContentLoaded", function () {
  const screen = document.getElementById("display");

  const nums = document.querySelectorAll(".number");
  const operators = document.querySelectorAll(".operator");

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

  function calculate() {
    let textScreen = screen.textContent;

    //SUM

    let resultTextSum = textScreen.includes("+");

    let sums = textScreen.split("+");

    if (resultTextSum == true) {
      let num1 = sums[0];
      let num2 = sums[1];

      if (num1.includes(".") == true) {
        num1 = parseFloat(sums[0]);
      } else {
        num1 = parseInt(sums[0]);
      }
      if (num2.includes(".") == true) {
        num2 = parseFloat(sums[1]);
      } else {
        num2 = parseInt(sums[1]);
      }

      let resultSum = sum(num1, num2);

      screen.textContent = resultSum;
    }

    // SUBTRACT

    let resultTextRest = textScreen.includes("-");

    let rests = textScreen.split("-");

    if (resultTextRest == true) {
      let num1 = rests[0];
      let num2 = rests[1];

      if (num1.includes(".") == true) {
        num1 = parseFloat(rests[0]);
      } else {
        num1 = parseInt(rests[0]);
      }
      if (num2.includes(".") == true) {
        num2 = parseFloat(rests[1]);
      } else {
        num2 = parseInt(rests[1]);
      }

      let resultRest = subtraction(num1, num2);

      screen.textContent = resultRest;
    }

    //MULTIPLY

    let resultTextMultiply = textScreen.includes("*");

    let multiplys = textScreen.split("*");

    if (resultTextMultiply == true) {
      let num1 = multiplys[0];
      let num2 = multiplys[1];

      if (num1.includes(".") == true) {
        num1 = parseFloat(multiplys[0]);
      } else {
        num1 = parseInt(multiplys[0]);
      }
      if (num2.includes(".") == true) {
        num2 = parseFloat(multiplys[1]);
      } else {
        num2 = parseInt(multiplys[1]);
      }

      let resultMultiply = multiply(num1, num2);

      screen.textContent = resultMultiply;
    }

    //DIVIDE

    let resultTextDivide = textScreen.includes("/");

    let divides = textScreen.split("/");

    if (resultTextDivide == true) {
      let num1 = divides[0];
      let num2 = divides[1];

      if (num1.includes(".") == true) {
        num1 = parseFloat(divides[0]);
      } else {
        num1 = parseInt(divides[0]);
      }
      if (num2.includes(".") == true) {
        num2 = parseFloat(divides[1]);
      } else {
        num2 = parseInt(divides[1]);
      }

      let resultDivide = divide(num1, num2);

      screen.textContent = resultDivide;
    }
  }

  function del() {
    let result = screen.textContent.split("");
    result.pop();
    if (result.length == 0) {
      result.push("0");
    }
    let newResult = result.join("");
    screen.innerText = newResult;
  }
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
  operators.forEach((operator) =>
    operator.addEventListener("click", () => {
      if (operator.value == "DELETE") {
        del();
      } else if (operator.value == "RESET") {
        reset();
      } else if (operator.value == "PLUS") {
        display(operator.textContent);
      } else if (operator.value == "SUBTRACT") {
        display(operator.textContent);
      } else if (operator.value == "MULTIPLY") {
        display(operator.textContent);
      } else if (operator.value == "DIVIDE") {
        display(operator.textContent);
      } else if (operator.value == "POINT") {
        display(operator.textContent);
      } else if (operator.value == "RESULT") {
        calculate();
      }
    })
  );
});
