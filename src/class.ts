class Employee {
     //Atributos 
   //  private id !: number ;
     // private name !: string ; 
       // dep !: string ;
   
    constructor (private id:number, private name:string, private dep:string) {
    //    this.id = id ,
      //  this.name = name ,
      //  this.dept = dept ,

        this.showInfo() ;
    }
    //Metodos 
   private  showInfo() : void {
        console.log(`${this.name + this.dept}`)
    }

}

const emp = new Employee(4,"juan","IT");
