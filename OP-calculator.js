//Operation variables
let firstNum = "";
let secondNum = "" ;
let operator = null;

const computation = document.getElementById("computation");
const answer = document.getElementById("answer");
const operatorBtns = document.querySelectorAll(".operator-btn");
const numberBtns = document.querySelectorAll("number-btn");
const plusMinus = document.getElementById("&plusmn;");
const dot = document.getElementById("dot");
const backSpace = document.getElementById("back-spc");
const cancel = document.getElementById("cancel");
const equals = document.getElementById("equals");
const buttons = document.querySelectorAll("button");

const createNumber = (a,b) => {
    a.concat(b);
}

numberBtns.forEach((button) => {
    button.addEventListener("click", () => {})
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        computation.textContent = `${button.id}`;
    })
})


answer.textContent = "0";



//Operational functions

const add = arr => arr.reduce((a,b) => a+b, 0);

const subtract = arr => arr.reduce((a,b) => a-b);

const multiply = arr => arr.reduce((a,b) => a*b, 1);

const divide = arr => arr.reduce((a,b) => a/b);

const operate = (a, b, operation) => {
    let result;    
    if (operation === "add"){
        result = add([a, b]);
    } else if (operation === "subtract"){
        result = subtract([a, b]);
    } else if (operation === "multiply"){
        result = multiply([a, b]);
    } else if (operation === "divide"){
        result = divide([a, b])
    }
    console.log(result);
}