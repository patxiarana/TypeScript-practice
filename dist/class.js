"use strict";
class Employee {
    constructor() {
        this.showInfo();
    }
    //Metodos 
    showInfo() {
        console.log(`${this.name}`);
    }
}
const emp = new Employee();
