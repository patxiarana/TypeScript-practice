class Employee {
    //Atributos 
    id !: number ;
    name !: string ; 
    dept !: string ;

    constructor () {
        this.showInfo() ;
    }
    //Metodos 
    showInfo() : void {
        console.log(`${this.name}`)
    }

}

const emp = new Employee();
