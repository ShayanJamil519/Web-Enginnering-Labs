// Q1
let arr = [24, 61, 78, 92, 88, 30]

const fact = (n) => {
    if (n === 1) return 1;
    return n * fact(n - 1) + "   "
}

const quo = (n) => {
    return (n / 2 + " ");
}

const sine = (n) => {
    return Math.sin(n) + "  "
}

let factorial = arr.map(fact)
let quotient = arr.map(quo)
let sin = arr.map(sine)

document.getElementById("result1").innerHTML = `Factorial of Array Elements : ${factorial}  </br> Quotient of Array Elements :  ${quotient} </br> Sin of Array Elements :  ${sin} </br>`;

// Q2
let users = [
    { propertyNo: 1, location: "North Nazimabad", price: 100000, owner: "Shayan" },
    { propertyNo: 2, location: "Gulshan e Iqbal", price: 200000, owner: "Rayyan" },
    { propertyNo: 3, location: "Bahria Town", price: 300000, owner: "Obaid" },
    { propertyNo: 3, location: "Defense", price: 300000, owner: "Aftab" }
]
let para = document.getElementById("result2")

users.map((user) => {

    let text = document.createTextNode(`Property No: ${user.propertyNo} || Location: ${user.location} || Price: ${user.price} || Owner: ${user.owner}\n`)
    para.appendChild(text)
    para.style = "white-space:pre;"
})

// Q3
let tbody = document.querySelector('tbody')
let inputs = document.getElementsByTagName('input')
let button = document.getElementById('submit')

button.onclick = () => {
    let tr = document.createElement('tr')

    for (let i of inputs) {
        let td = document.createElement('td')
        td.innerHTML = i.value
        tr.appendChild(td)
    }

    let tdlast = document.createElement('td')
    tdlast.innerHTML = inputs[inputs.length - 2].value * inputs[inputs.length - 1].value
    tr.appendChild(tdlast)
    tbody.appendChild(tr)

    for (let i of inputs) {
        i.value = ""
    }

    let table = document.querySelector('table')
    table.appendChild(tbody)
}

// Q4
class FAN {
    constructor(speed, type, company) {
        this.speed = speed
        this.type = type
        this.company = company
    }
}

class RoomCooler extends FAN {
    constructor(speed, type, company, size, TurboCooling) {
        super(speed, type, company)
        this.size = size
        this.TurboCooling = TurboCooling

    }
    show() {
        document.getElementById("result3").innerHTML = `
        Speed : ${this.speed} </br>
        Type : ${this.type} </br>
        Company : ${this.company} </br>
        Size : ${this.size} </br>
        Turbo Cooling : ${this.TurboCooling} 
        `
    }
}

const rc = new RoomCooler(500, "A", "Pak Fans", "24x12", "High")
rc.show()