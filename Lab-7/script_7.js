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

    setLength(l) {
        this.length = l
    }
    getLength() {
        return this.length
    }
    setHeight(h) {
        this.height = h
    }
    getHeight() {
        return this.height
    }
    setBreath(b) {
        this.breath = b
    }
    getBreath() {
        this.breath
    }


    calculateArea() {
            document.getElementById('result2').innerHTML = `The area of room is  ${this.getLength()*this.getBreath()*this.getHeight()}`
        }
        // calculateArea() {
        //     document.getElementById('result2').innerHTML = `Total Area of Room : ${
        //   this.getLength() * this.getBreath()
        // }`
        // }
    calculateVolume() {
        document.getElementById('result3').innerHTML = `Total Volume of Room : ${
      this.getLength() * this.getBreath() * this.getHeight()
    }`
    }
}

// r1.calculateArea()
// r1.calculateVolume()


document.getElementById("btn1").addEventListener("click", () => {
    let r1 = new Room(4, 5, 6)
    r1.calculateArea()

})


// let btn1 = document.getElementById("btn1")
// btn1.addEventListener("click", () => {
//     let r1 = new Room(4, 5, 6)
//     r1.calculateArea()
//     console.log(
//         r1.calculateArea()

//     )
// })

let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    r1.calculateVolume()
})

// console.log(r1.calculateArea())

// ------------------------
// class Room {
//     constructor(length, breadth, height) {
//         this.length = length;
//         this.breadth = breadth;
//         this.height = height;
//     }
//     setLength(l) {
//         this.length = l;
//     }
//     getLength() {
//         return this.length;
//     }
//     setBreadth(b) {
//         this.breadth = b;
//     }
//     getBreadth() {
//         return this.breadth;
//     }
//     setHeight(h) {
//         this.height = h;
//     }
//     getHeight() {
//         return this.height;
//     }

//     calculateArea() {
//         document.write(`The area of room is  ${this.getLength()*this.getBreadth()*this.getHeight()} <br>`)
//     }
//     calculateVolume() {
//         document.write(`The volume of room is  ${this.getLength()*this.getBreadth()}`)
//     }
// }

// const r1 = new Room(10, 5, 5);
// r1.calculateArea();
// r1.calculateVolume();