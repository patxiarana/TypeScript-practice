"use strict";
class Person {
    constructor() { }
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
    constructor(id, name, dep) {
        super();
        this.id = id;
        this.name = name;
        this.dep = dep;
        //    this.id = id ,
        //  this.name = name ,
        //  this.dept = dept ,
        this.showInfo();
    }
    //Metodos 
    showInfo() {
        console.log(`${this.name + this.dep}`);
    }
}
const emp = new Employee(4, "juan", "IT");
