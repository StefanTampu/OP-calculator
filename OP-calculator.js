//Operation variables
let a;
let b;
let operation;

const computation = document.getElementById("computation");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        computation.textContent = ` ${button.id}`;
    })
})

const answer = document.getElementById("answer");
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