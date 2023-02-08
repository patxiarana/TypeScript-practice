//Basic types
let myTypeString: string = "hola mundo";	
let myTypeNumber: number = 33 ;
let myTypeBoolean: boolean = true ;


 // Array 

let arrNumber : number[] = [1,2,3,]
let arrNumber2: Array<number> =[1,2,3]

let arrString: string[] = ["hola","patxi","tres"]

let arrAny: any[] = ['hola', 33, false];


//Tuple 

let tuplaPlayer : [string,number,boolean] = ['messi', 10, true]

//Tuple Array 

let player: [number,string][]

player = [ 
   [1, 'martinez'],
   [10, 'messi'],
   [8 , 'Acuña']
]

//inferencia de tipo 
let myVariable; 

let myVariable1: string ;

let myVariable2 = 333


// Unions 

let myVariable3: string | number | null 

myVariable3 = 3 ;

