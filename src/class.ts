class  Person {
    constructor() { }
    public zone = "Latinoamerica baby "
      protected city = "Santiago de Compostela"
      private country = "Argentina"
    greet() : void {
        console.log("greeting")
    }

} ;

class Employee extends Person {
     //Atributos 
   //  private id !: number ;
     // private name !: string ; 
       // dep !: string ;
   
    constructor (/*private*/ id:number, /*private*/ name:string, /*private*/ dep:string) {
        super()
        //    this.id = id ,
      //  this.name = name ,
      //  this.dept = dept ,
     
        this.showInfo() ;
    }
    //Metodos 
   private  showInfo() : void {
        console.log(`${this.name} ${this.city}`)
    }

}

const emp = new Employee(4,"juan","IT");
