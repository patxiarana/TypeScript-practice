class Employee {
    //Atributos 
    id !: number ;
    name !: string ; 
    dept !: string ;

    constructor (id:number, name:string, dept:string) {
        this.id = id ,
        this.name = name ,
        this.dept = dept ,

        this.showInfo() ;
    }
    //Metodos 
    showInfo() : void {
        console.log(`${this.name}`)
    }

}

const emp = new Employee(4, "juan", "IT");
