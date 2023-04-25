//Operation variables
let first;
let second;
let operator;

const computation = document.getElementById("computation");
const answer = document.getElementById("answer");
const operatorBtns = document.querySelectorAll(".operator-btn");
const numberBtns = document.querySelectorAll(".number-btn");
const plusMinus = document.getElementById("&plusmn;");
const dot = document.getElementById("dot");
const backSpace = document.getElementById("back-spc");
const cancel = document.getElementById("cancel");
const equals = document.getElementById("equals");
const buttons = document.querySelectorAll("button");


numberBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        computation.textContent += numBtn.id;
    })
})

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        if (!first){
            first = Number(computation.textContent);
        } else {
            activate();
            answer.textContent = first;
        }
        operator = operatorBtn.id;
        computation.textContent = "";
        answer.textContent = "";
        console.log(first);
    })
})

const activate = () => {
    second = Number(computation.textContent);
    console.log(first, second);
    computation.textContent = "";
    let value = operate(first, second, operator);
    answer.textContent = value;
    first = value;
    console.log(first);
}

equals.addEventListener("click", () => {
    activate();
})



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
    return result;
}