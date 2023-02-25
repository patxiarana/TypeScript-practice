//  Interfaces


interface Person {
    id : number;
    name:string;
    }

interface Employee extends Person  {
dept: string ;
}



interface Customer  extends Person{
    country: string ;
    }

interface GetDog  {
    getDogs : () => void ;
    getCats : () => void ;

}