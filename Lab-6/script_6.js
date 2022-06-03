// Header
let header = document.createElement('header')
header.style.cssText = `
display:flex;
justify-content:space-evenly;
align-items:center;
height:50px;
background-color: white;
color:rgb(4, 4, 63);
font-size: 20px;
`

// Logo
let logoDiv = document.createElement('div')
logoDiv.style.cssText = `
display:flex;
align-items:center;
`
let logoDivIcon = document.createElement('i')
logoDivIcon.setAttribute('class', 'fa-solid fa-user')
logoDivIcon.style.cssText = `
padding: 7px;
background-color: #04043f;
color: white;
border-radius: 50%;
`
logoDiv.appendChild(logoDivIcon)

let logoText = document.createElement('h2')
logoText.innerHTML = 'Log In'
logoText.style.cssText = `
margin-left:10px;
`
logoDiv.appendChild(logoText)
header.appendChild(logoDiv)

// Navbar Element
let navElem = document.createElement('nav')
let navList = document.createElement('ul')
navList.style.cssText = `
display:flex;
justify-content:space-around;
align-items:center;
list-style: none;
`
navElem.appendChild(navList)

let navItems = [
    { href: '#section1', text: 'Home' },
    { href: '#section1', text: 'About Us' },
    { href: '#section2', text: 'Sale' },
    { href: '#section3', text: 'Properties' },
]

let navItem, navLink

for (let i = 0; i < navItems.length; i++) {
    navItem = document.createElement('li')
    navLink = document.createElement('a')
    navLink.href = navItems[i].href
    navLink.innerHTML = navItems[i].text

    navItem.appendChild(navLink)
    navList.appendChild(navItem)

    navItem.style.cssText = `
    margin:10px;
    `
    navLink.style.cssText = `
    text-decoration:none;
    `
}

header.appendChild(navElem)
document.body.appendChild(header)

// Home
let section1 = document.createElement('section')
section1.setAttribute('id', 'section1')
section1.style.cssText = `
position: relative;
background: url("../assets/homepage_house.jpg") no-repeat center center/cover;
width: 100%;
min-height: 90vh;
`
let div1 = document.createElement('div')
div1.style.cssText = `
position: absolute;
top: 1%;
right: 20%;
background-color: rgb(4, 4, 63);
color: white;
padding: 15px 20px;
display: flex;
border-radius:5px;
`

div1.innerHTML = `<i class="fa-solid fa-phone"></i>`
let div1Para = document.createElement('p')
div1Para.innerHTML = 'Call Us : 001122334455'
div1Para.style.cssText = `
margin-left:10px;
`
div1.appendChild(div1Para)
section1.appendChild(div1)


let div2 = document.createElement('div')
div2.style.cssText = `
position: absolute;
top: 50%;
left: 20%;
width: 17rem;
background-color: rgb(4, 4, 63);
color: white;
padding: 30px 25px 15px 25px;
border-radius:5px;
`

let div2H2 = document.createElement('h2')
div2H2.innerHTML = "Stunnig 6 Bed House In The Heart Of The City"
div2H2.style.cssText = `
margin-bottom: 10px;
`
div2.appendChild(div2H2)

let div2P = document.createElement("p")
div2P.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
div2.appendChild(div2P)

let div2Hr = document.createElement('hr')
div2Hr.style.cssText = `
width: 100%;
height: 3px;
background-color: white;
margin: 10px 0px;
`
div2.appendChild(div2Hr)

let div2H3 = document.createElement('h3')
div2H3.innerHTML = "$ 2,000,000"
div2H3.style.cssText = `
text-align: center;
font-size: 22px;
margin-bottom: 15px;
`
div2.appendChild(div2H3)

let div2Button = document.createElement('button')
div2Button.innerHTML = "ALL SALES"
div2Button.style.cssText = `
padding: 12px;
width: 100%;
background-color: transparent;
border: 2px solid white;
color: white;
font-size: 18px;
`
div2.appendChild(div2Button)

section1.appendChild(div2)
document.body.appendChild(section1)


// Houses
let section2 = document.createElement('section')
section2.setAttribute('id', 'section2')
section2.style.cssText = `
padding: 8rem 7rem 4rem 7rem;

`

let section2H2 = document.createElement('h2')
section2H2.innerHTML = "LATEST PROPERTIES FOR SALE"
section2H2.style.cssText = `
text-align:center;
color:rgb(4, 4, 63);
margin-bottom: 40px;
font-size: 35px;
`
section2.appendChild(section2H2)


let section2HousesContainer = document.createElement('div')
section2HousesContainer.style.cssText = `
display:flex;
gap:10px;
justify-content:space-around;
`
section2.appendChild(section2HousesContainer)

let houses = [
    { src: "../assets/house_1.jpg", name: "DOWN AVENUE", price: '$ 500,000' },
    { src: "../assets/house_2.jpg", name: "QUEENS WAY", price: '$ 450,000' },
    { src: "../assets/house_3.jpg", name: "RANDALL CLOSE", price: '$ 790,000' },
]

for (let i = 0; i < houses.length; i++) {
    let house = document.createElement('div')
    house.style.cssText = `
    width:300px;
    height:auto;
    // border:2px solid red;
    `
    let houseImg = document.createElement('img')
    houseImg.style.cssText = `
    width:100%;
    height:37%;
    object-fit:contain;
    `

    houseImg.src = houses[i].src
    house.appendChild(houseImg)

    let houseName = document.createElement('h2')
    houseName.innerHTML = houses[i].name
    houseName.style.cssText = `
    margin:15px 0 8px 0;
    color:rgb(52 52 209);
`
    house.appendChild(houseName)

    let housePrice = document.createElement('h4')
    housePrice.innerHTML = houses[i].price
    housePrice.style.cssText = `
color:rgb(52 52 209);
font-size: 20px;
`
    house.appendChild(housePrice)

    let houseDesc = document.createElement('p')
    houseDesc.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    houseDesc.style.cssText = `
    margin: 15px 0px;
    color: #04043f;
`
    house.appendChild(houseDesc)

    let houseButton = document.createElement('button')
    houseButton.innerHTML = "Read More"
    houseButton.style.cssText = `
    font-weight: 500;
    padding: 8px 30px;
    border: 3px solid rgb(52 52 209);
    color: rgb(52 52 209);
    font-size: 16px;
    background-color: transparent;
    margin: 15px 0px 0 0;
    border-radius: 5px;
`
    house.appendChild(houseButton)
    section2HousesContainer.appendChild(house)

}

document.body.appendChild(section2)

// Address
let section3 = document.createElement('section')
section3.setAttribute('id', 'section3')
section3.style.cssText = `
width:100%
`

let section3H2 = document.createElement('h2')
section3H2.innerHTML = "LATEST RENTAL PROPERTIES"
section3H2.style.cssText = `
text-align:center;
color:rgb(4, 4, 63);
margin-bottom: 5rem;
font-size: 30px;
`
section3.appendChild(section3H2)


let section3Container = document.createElement('div')
section3Container.style.cssText = `
    background-color: rgb(4, 4, 63);
    position: relative;
    justify-content: space-around;
    padding: 4rem 0 2rem 30rem;
`
section3.appendChild(section3Container)

let section3Img = document.createElement('img')
section3Img.src = houses[0].src
section3Img.style.cssText = `
position: absolute;
width: 230px;
height: 217px;
bottom: 0;
left: 20%;
`
section3Container.appendChild(section3Img)

let section3Content = document.createElement('div')
section3Content.style.cssText = `
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 3rem;
`
section3Container.appendChild(section3Content)

let section3ContentH3 = document.createElement('h3')
section3ContentH3.innerHTML = "CHASE AVENUE"
section3Content.appendChild(section3ContentH3)

let section3ContentH4 = document.createElement('h4')
section3ContentH4.innerHTML = "$ BedRooms"
section3ContentH4.style.cssText = `
margin:15px 0;
color:yellow;
`
section3Content.appendChild(section3ContentH4)

let section3ContentPara = document.createElement('p')
section3ContentPara.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed dolorem tenetur odit quo sunt ab!"
section3Content.appendChild(section3ContentPara)


section3Container.appendChild(section3Content)
section3.appendChild(section3Container)

document.body.appendChild(section3)