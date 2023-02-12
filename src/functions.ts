/*
function greet (name: string):void {
    console.log(`hello..${name.toUpperCase()} !!`)
}


greet('true')*/

function getNumber(): number {
    return Math.floor(Math.random() *100)
}

console.log(getNumber())