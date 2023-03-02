"use strict";
class Person {
    constructor() {
        this.zone = "Latinoamerica baby ";
        this.city = "Santiago de Compostela";
        this.country = "Argentina";
    }
    greet() {
        console.log("greeting");
    }
}
;
class Employee extends Person {
    //Atributos 
    //  private id !: number ;
    // private name !: string ; 
    // dep !: string ;
    constructor(/*private*/ id, /*private*/ name, /*private*/ dep) {
        super();
        //    this.id = id ,
        //  this.name = name ,
        //  this.dept = dept ,
        this.showInfo();
    }
    //Metodos 
    showInfo() {
        console.log(`${this.name} ${this.city}`);
    }
}
const emp = new Employee(4, "juan", "IT");
