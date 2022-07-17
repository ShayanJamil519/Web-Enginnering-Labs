import Employee from "./Employee.js";

export default class PermanentEmployee extends Employee {

    constructor(name, empno, address, salary, designation, workingHours, annualSalaryIncrement) {
        super(name, empno, address, salary, designation, workingHours)
        this.annualSalaryIncrement = annualSalaryIncrement


    }


    showPermanentEmployeeData() {
        document.getElementById("result2").innerHTML = `
        Permanent Employee Details : </br>
        Name: ${this.name} </br>
        Employee Number: ${this.empno} </br>
        Address : ${this.address} </br>
        Salary: ${this.salary} $ </br>
        Designation: ${this.designation} </br>
        No. of working hours: ${this.workingHours} hrs </br>
        Annual Salary Increment: ${this.annualSalaryIncrement} $ </br>
        `
    }


}