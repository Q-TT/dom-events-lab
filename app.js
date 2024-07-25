/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display")
const buttonOperator = document.querySelector(".button operator")



/*-------------------------------- Variables --------------------------------*/
let firstIput = null
let secondInput = null
let operator = null
let result = null

calculator.addEventListener('click', (event) => {

    if (event.target.className === "button number") {
        if(!operator) {
            if(display.innerText.length < 15) {
                display.innerText += event.target.innerText
                firstIput = +display.innerText
            }
        } else {
            if(display.innerText.length < 15) {
                display.innerText += event.target.innerText
                secondInput = +display.innerText
            }
        }
        console.log({firstIput, secondInput, operator})
    }
    if (event.target.className === "button operator") {
        operator = event.target.innerText
        display.innerText = ""
        console.log(operator)
    }

    if (event.target.innerText === "=" && firstIput && secondInput && operator) {
        if (operator === "/") {
            result = firstIput / secondInput
        }
        if (operator === "*") {
            result = firstIput * secondInput
        }
        if(operator === "-") {
            result = firstIput - secondInput
        }
        if (operator === "+") {
            result = firstIput + secondInput
        }
        firstIput = result
        if (result.toString().length < 15) {
            display.innerText = result
        } else {
            display.innerText = result.toPrecision(11)
        }
        console.log(result)
    }

    if (event.target.innerText === "C") {
        result = null
        firstIput = null
        secondInput = null
        operator = null
    }
});






/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
