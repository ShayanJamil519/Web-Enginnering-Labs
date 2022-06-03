// Q1 Script
function Prompt1() {
    let input1 = prompt('Enter number 1 : ')
    let input2 = prompt('Enter number 2: ')
    let a = parseInt(input1)
    let b = parseInt(input2)
    return {
        a,
        b,
    }
}

function add() {
    let { a, b } = Prompt1()
    document.getElementById("result1").innerHTML = `Result : The Sum of ${a} and ${b} is : ${a + b}`
}

function sub() {
    let { a, b } = Prompt1()
    document.getElementById("result1").innerHTML = `Result :  The Subtraction of ${a} and ${b} is : ${a - b}`
}

function mul() {
    let { a, b } = Prompt1()
    document.getElementById("result1").innerHTML = `Result :  The Multiplication of ${a} and ${b} is : ${a * b}`
}

function div() {
    let { a, b } = Prompt1()
    document.getElementById("result1").innerHTML = `Result :  The Division of ${a} and ${b} is : ${(a / b).toFixed(2)}`
}

// Q2 Script

function Fah_To_Cel() {
    let fah = parseInt(prompt("Insert Degree Fahrenheit to convert it into Celcius ✏ "))
    let result = (fah - 32) * (5 / 9)
    document.getElementById("result2").innerHTML = `Fahrenheit Temperature = ${fah} degrees <br/> Conversion of Fahrenheit to Celcius <br/> ${fah} Degrees Fahrenheit = ${result.toFixed(2)} Degrees Celcius`
}

function Cel_To_Fah() {
    let cel = parseInt(prompt("Insert Degree Celcius to convert it into Fahrenheit ✏ "))
    let result = ((9 / 5) * cel) + 32
    document.getElementById("result2").innerHTML = `Celcius Temperature = ${cel} degrees <br/> Conversion of Celcius to Fahrenheit <br/> ${cel} Degrees Fahrenheit = ${result.toFixed(2)} Degrees Fahrenheit`
}

// Q3 Script

function Generate_Table() {
    let num = parseInt(prompt("Enter a number for creating a table : "))
    let startingRange = parseInt(prompt("Enter Starting Range for a table : "))
    let endingRange = parseInt(prompt("Enter Ending Range for a table : "))

    let elem = document.getElementById("result3")
    elem.innerHTML = `Table of ${num} : \n`

    for (let i = startingRange; i <= endingRange; i++) {
        let text = document.createTextNode(` ${num} x ${i} = ${num*i} \n`)
        elem.appendChild(text)
        elem.style = "white-space: pre;"
    }

}

function Calculate_Power() {
    let base = parseInt(prompt("Enter Value of Base"))
    let exponent = parseInt(prompt("Enter Value of Exponent"))
    let result = Math.pow(base, exponent)
    document.getElementById("result3").innerHTML = `Base = ${base}   Power=${exponent} <br/> Result : ${base}^${exponent} = ${result}`
}

function Generate_Sequence() {
    let limit = parseInt(prompt("Enter the Limit to Generate the Sequence of Numbers"))

    let elem = document.getElementById("result3")
    elem.innerHTML = `The Sequence of numbers upto ${limit} is : \n`

    for (let i = 0; i <= limit; i++) {
        let text = document.createTextNode(` ${i} , `)
        elem.appendChild(text)
        elem.style = "white-space:pre;"
    }

}

function Generate_Even_Odd_No() {
    let limit = parseInt(prompt("Enter the Limit to Generate the Sequence of Even/Odd Numbers"))
    let query = prompt("Press E/e for Even Sequence and O/o for Odd Sequence")

    let elem = document.getElementById("result3")

    if (query === "E" || query === "e") {
        elem.innerHTML = `Sequence of Even Numbers upto ${limit} is : \n`
        for (let i = 0; i <= limit; i++) {
            if (i % 2 === 0) {
                let text = document.createTextNode(` ${i} , `)
                elem.appendChild(text)
                elem.style = "white-space:pre;"
            }
        }
    }

    if (query === "O" || query === "o") {
        elem.innerHTML = `Sequence of Odd Numbers upto ${limit} is : \n`
        for (let i = 0; i <= limit; i++) {
            if (!(i % 2 === 0)) {
                let text = document.createTextNode(` ${i} , `)
                elem.appendChild(text)
                elem.style = "white-space:pre;"
            }
        }
    }





}