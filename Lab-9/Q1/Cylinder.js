import Circle from "./Circle.js";

export default class Cylinder extends Circle {

    constructor(radius, x, y, height) {
        super(radius, x, y)
        this.height = height
    }

    volumeofCylinder() {
        return (3.142 * Math.pow(this.radius, 2) * this.height).toFixed(2)
    }

    showData() {
        document.getElementById("result1").innerHTML = `
        Area Of Circle : ${this.areaOfCircle()} </br>
        Circumference of Circle : ${this.circumferenceOfCircle()} </br>
        Volume of Cylinder: ${this.volumeofCylinder()}
        `
    }

}