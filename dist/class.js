"use strict";
class Employee {
    constructor(id, name, dept) {
        this.id = id,
            this.name = name,
            this.dept = dept,
            this.showInfo();
    }
    //Metodos 
    showInfo() {
        console.log(`${this.name}`);
    }
}
const emp = new Employee(4, "juan", "IT");
