export default class Circle {

    constructor(radius, x, y) {
        this.radius = radius
        this.x = x
        this.y = y
    }


    areaOfCircle() {
        return (3.142 * Math.pow(this.radius, 2)).toFixed(2)
    }

    circumferenceOfCircle() {
        return (2 * 3.142 * this.radius).toFixed(2)
    }

}