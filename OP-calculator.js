//Operation variables
let first;
let second;
let operator;

const computation = document.getElementById("computation");
const answer = document.getElementById("answer");
const operatorBtns = document.querySelectorAll(".operator-btn");
const numberBtns = document.querySelectorAll(".number-btn");
const plusMinus = document.getElementById("plus-minus");
const dot = document.getElementById("dot");
const backSpace = document.getElementById("back-spc");
const cancel = document.getElementById("cancel");
const equals = document.getElementById("equals");
const buttons = document.querySelectorAll("button");


numberBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        computation.textContent += numBtn.id;       
        if (answer.textContent){
        answer.textContent = "";
        }
    })
})

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        if (!first){
            first = Number(computation.textContent);    ///New number only becomes first if there is no answer as first already, allowing for multi-step calculations.
        } else if(computation.textContent){
            activate();                                 ///This makes sure that 0 is not taken in as second if no numbers are put in. Relevant for radical, square and plus-minus.
        }
        operator = operatorBtn.id; 
        if (operator === "radical" || operator === "sqr" || operator === "plus-minus"){
            let value = operate(first, second, operator);
            console.log(value);
            answer.textContent = value;
            first = value;
        }
        computation.textContent = "";
        console.log(first);
    })
})

//Redundant function that could be condensed?
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

cancel.addEventListener("click", () => {
    computation.textContent = "";
    answer.textContent = "";
    first = "";
    second = "";
})


//Operational functions

const add = arr => arr.reduce((a,b) => a+b, 0);

const subtract = arr => arr.reduce((a,b) => a-b);

const multiply = arr => arr.reduce((a,b) => a*b, 1);

const divide = arr => arr.reduce((a,b) => a/b);

const square = num => num*num;

const percentage = arr => arr.reduce((a,b) => (a/b)*100);

const operate = (a, b, operation) => {
    let result;    
    if (operation === "add"){
        result = add([a, b]);
    } else if (operation === "subtract"){
        result = subtract([a, b]);
    } else if (operation === "multiply"){
        result = multiply([a, b]);
    } else if (operation === "divide"){
        if (b === 0){
            result = "WHY WOULD YOU DIVIDE BY 0???"
        } else {
            result = divide([a, b]);
        }
    } else if (operation === "sqr"){
        result = square(a);
    } else if (operation === "radical"){
        result = Math.sqrt(a);
    } else if (operation === "plus-minus"){
        result = a*-1;
    } else if (operation === "percnt"){
        if (b === 0){
            result = "WHY 0????!!!"
        } else {
            result = percentage([a,b]) + "%";
        }
    }
    return result;
}