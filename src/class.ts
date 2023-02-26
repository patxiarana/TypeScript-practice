class Employee {
    //Atributos 
    id !: number ;
    name !: string ; 
    dept !: string ;

    constructor (id:number, name:String, dept:String) {
        this.showInfo() ;
    }
    //Metodos 
    showInfo() : void {
        console.log(`${this.name}`)
    }

}

const emp = new Employee(4, "juan", "IT");
