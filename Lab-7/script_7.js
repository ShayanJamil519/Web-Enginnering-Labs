// Q1 Script
const Prompt1 = () => {
    let input1 = prompt('Enter number 1 : ')
    let input2 = prompt('Enter number 2: ')
    let a = parseInt(input1)
    let b = parseInt(input2)
    return {
        a,
        b,
    }
}

const add = () => {
    let { a, b } = Prompt1()
    document.getElementById(
        'result1',
    ).innerHTML = `Result : The Sum of ${a} and ${b} is : ${a + b}`
}

const sub = () => {
    let { a, b } = Prompt1()
    document.getElementById(
        'result1',
    ).innerHTML = `Result :  The Subtraction of ${a} and ${b} is : ${a - b}`
}

const mul = () => {
    let { a, b } = Prompt1()
    document.getElementById(
        'result1',
    ).innerHTML = `Result :  The Multiplication of ${a} and ${b} is : ${a * b}`
}

const div = () => {
    let { a, b } = Prompt1()
    document.getElementById(
        'result1',
    ).innerHTML = `Result :  The Division of ${a} and ${b} is : ${(a / b).toFixed(
    2,
  )}`
}