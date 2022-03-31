const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (even) => {
        inputNumber(even.target.value)
        if (calculationOperator === ''){
            updateScreen(currentNumber)
        } else {
            updateScreen(prevNumber + calculationOperator + currentNumber)
        }
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
let result = ''

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
    
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (even) => {
        inputOperator(even.target.value)
        if (calculationOperator !== ''){
            updateScreen(prevNumber + calculationOperator)
        }
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const clear = document.querySelector('.clear')

clear.addEventListener('click', () => {
    del()
    if (calculationOperator === ''){
        updateScreen(currentNumber)
    } else {
        updateScreen(prevNumber + calculationOperator + currentNumber)
    }
    
})

const del = () => {
    if (calculationOperator !== ''){
        if (currentNumber === ''){
            calculationOperator = ''
            currentNumber = prevNumber
        } else if (currentNumber !== '' || currentNumber === result){
            currentNumber = currentNumber.slice(0, - 1)
        }
    } else if (calculationOperator === ''){
        if (currentNumber.length === 1) {
            currentNumber = '0'
        } else if (currentNumber.length > 1) {
            currentNumber = currentNumber.slice(0, - 1)
        }
    }
}

const clearAll = document.querySelector('.all-clear')

clearAll.addEventListener('click', () => {
    AC()
    updateScreen(currentNumber)
})

const AC = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    if (calculationOperator === ''){
        updateScreen(currentNumber)
    } else {
        updateScreen(prevNumber + calculationOperator + currentNumber)
    }
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}


