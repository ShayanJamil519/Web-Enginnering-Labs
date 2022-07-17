import Employee from "./Employee.js";

export default class PartTimeEmployee extends Employee {

    constructor(name, empno, address, salary, designation, workingHours, probationPeriod) {
        super(name, empno, address, salary, designation, workingHours)
        this.probationPeriod = probationPeriod

    }

    showPartTimeEmployeeData() {
        document.getElementById("result3").innerHTML = `
        Partime Employee Details : </br>
        Name: ${this.name} </br>
        Employee Number: ${this.empno} </br>
        Address : ${this.address} </br>
        Salary: ${this.salary} </br>
        Designation: ${this.designation} </br>
        No. of working hours: ${this.workingHours} hrs </br>
        Probation Period : ${this.probationPeriod} months </br>
        `

    }



}