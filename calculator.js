let el_equals = document.querySelector("#equals");
let el_9 = document.querySelector("#nine");
let el_8 = document.querySelector("#eight");
let el_7 = document.querySelector("#seven");
let el_6 = document.querySelector("#six");
let el_5 = document.querySelector("#five");
let el_4 = document.querySelector("#four");
let el_3 = document.querySelector("#three");
let el_2 = document.querySelector("#two");
let el_1 = document.querySelector("#one");
let el_0 = document.querySelector("#zero");
let el_decimal = document.querySelector("#decimal");
let el_subtract = document.querySelector("#subtract");
let el_divide = document.querySelector("#divide");
let el_multiply = document.querySelector("#multiply");
let el_add = document.querySelector("#add");
let el_calculator = document.querySelector("#calculator");
let el_clear = document.querySelector("#clear");
let el_display = document.querySelector("#display");
let text = "";

(function () {
  document.addEventListener("keyup", keyhandler);
  el_9.addEventListener("click", handleButton);
  el_8.addEventListener("click", handleButton);
  el_7.addEventListener("click", handleButton);
  el_6.addEventListener("click", handleButton);
  el_5.addEventListener("click", handleButton);
  el_4.addEventListener("click", handleButton);
  el_3.addEventListener("click", handleButton);
  el_2.addEventListener("click", handleButton);
  el_1.addEventListener("click", handleButton);
  el_0.addEventListener("click", handleButton);
  el_decimal.addEventListener("click", handleButton);
  el_equals.addEventListener("click", calculate);
  el_subtract.addEventListener("click", handleButton);
  el_divide.addEventListener("click", handleButton);
  el_add.addEventListener("click", handleButton);
  el_multiply.addEventListener("click", handleButton);
  el_clear.addEventListener("click", clear);
})();

function handleButton(e) {
  keyPress(e.target.innerText);
}

function keyhandler(e) {
  switch (e.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "*":
    case "/":
    case "+":
    case "-":
    case ".":
      keyPress(e.key);
      break;
    case "=":
      calculate();
      break;
    case "Backspace":
      clear();
  }
}

function clear() {
  op = "";
  text = "0";
  el_display.value = text;
}

function keyPress(key) {
  lastchar = text[text.length - 1];
  // if (text.length === 0 && isAnOperation(key)) {
  //   return;
  // } else if (isAnOperation(lastchar) && !isAnOperation(key)) {
  //   registerKey(key);
  // }
  switch (isAnOperation(key)) {
    case true:
      if (isAnOperation(lastchar)) {
        break;
      } else {
        registerKey(key);
      }
      break;
    case false:
      registerKey(key);
      break;
  }
}

function isAnOperation(key) {
  return "*+/-.".indexOf(key) >= 0;
}

function registerKey(key) {
  if (text === "0") {
    text = key;
  } else {
    text = text + key;
  }
  el_display.value = text;
}

function calculate() {
  let numbers = text.split(/(\+)|(\*)|(\/)|(\-)/);
  let total = 0;
  let op = "";

  numbers.forEach((x) => {
    if (x === undefined) {
      return;
    }
    if ("+*/-".indexOf(x) >= 0) {
      op = x;
    } else {
      if (total === 0) {
        total = x;
      } else {
        switch (op) {
          case "*":
            total = parseFloat(total) * parseFloat(x);
            break;
          case "/":
            total = parseFloat(total) / parseFloat(x);
            break;
          case "-":
            total = parseFloat(total) - parseFloat(x);
            break;
          case "+":
            total = parseFloat(total) + parseFloat(x);
            break;
        }
      }
    }
  });
  el_display.value = total;
  text = "";
}
