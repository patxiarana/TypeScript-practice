/*
function greet (name: string):void {
    console.log(`hello..${name.toUpperCase()} !!`)
}

greet('true')

function getNumber(): number {
    return Math.floor(Math.random() *100)
}

console.log(getNumber())  */

/*
function printPosition (position :{lat : number, long : number | string}) : void {
    console.log(`postions is lat${position.lat} and long ${position.long}`)
}
printPosition({lat :4, long: 4 } )
*/


function greet (name: string = 'user'):void {
    console.log(`hello..${name.toUpperCase()} !!`)
}

greet()