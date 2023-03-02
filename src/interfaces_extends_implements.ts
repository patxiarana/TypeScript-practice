//  Interfaces


interface Person {
    id : number;
    name:string;
    }

/*interface Employee extends Person  {
dept: string ;
}
 */


interface Customer  extends Person{
    country: string ;
    }

interface Animal {
    name: string ;
    getDogs : () => void ;
    getCats ?: () => void ;

}

class Zoo implements Animal {
    name = "Zoo";
    getDogs (): void {
        //
    } 
   /* getCats (): void {
        //
    } */
}