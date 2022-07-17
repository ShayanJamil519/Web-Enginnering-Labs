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


// Q2 Script
class Room {
    constructor(length, breath, height) {
        this.length = length
        this.breath = breath
        this.height = height
    }

    calculateArea() {
        document.getElementById('result2').innerHTML = `The area of room is  ${
      this.length * this.breath
    }`
    }

    calculateVolume() {
        document.getElementById('result3').innerHTML = `Total Volume of Room : ${
      this.length * this.breath * this.height
    }`
    }
}

let r1 = new Room(4, 5, 6)

document.getElementById('btn1').addEventListener('click', () => {
    r1.calculateArea()
})

document.getElementById('btn2').addEventListener('click', () => {
    r1.calculateVolume()
})

// Q3 Script

class Car {
    constructor(brandName, priceNew, color, odometer) {
        this.brandName = brandName
        this.priceNew = priceNew
        this.color = color
        this.odometer = odometer
    }
    getPriceAfterUse = () => {
        let priceAfterUse = this.priceNew * (1 - (this.odometer / 600000))
        return Math.floor(priceAfterUse)
    }
    updateMileage = (traveledDistance) => {
        this.odometer += traveledDistance
    }
    outputDetails = () => {
        document.getElementById("result4").innerHTML = `Brand Name: ${this.brandName} <br> Price New: ${this.priceNew} <br> Price After Use: ${this.getPriceAfterUse()} <br> Color Name: ${this.color} <br> Odometer: ${this.odometer}`
    }
}

let c1 = new Car("Toyota", 1000000, "black", 0)
c1.updateMileage(2000)

document.getElementById('btn3').addEventListener('click', () => {
    c1.outputDetails()
})