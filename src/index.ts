// import type { addEmitHelpers } from "typescript";

function suma(a: number, b: number): number {
  return a + b;
}
console.log(suma(2, 65));

let persona: string = "Miguel";
console.log(persona);

const sumar = (a: number, b: number): number => {
  return a + b;
};

console.log(sumar(23, 23));

const humano = {
  name: "pepe",
  age: 23,
};
const a: boolean = false;
let b: any = "hola camilo"; // typo any --> es que IGNORA el tipado de typescript.

/*
!!! cuando se espera un dicionario piede un dicionario
    |
    | 
    ↓ */
function SaludarDiccionarios({ name, age }: { name: string; age: number }) {
  console.log(`hola ${name}, tienes ${age} años`);
}

SaludarDiccionarios({
  name: "juan",
  age: 23,
});

const r = true;
r ? "es verdadero" : "es falso";

/**
 * | esto es un funcion que llama a otra.
 * |                          |
 * |                    la funcion
 * |                          |
 * |                          | el tipo de valor quer vamos a pasarle
 * |                          |   |
 * |                          |   |  el tipo de valor que va a retornar
 * |                          ↓   ↓                  ↓*/
const soyUnaFromFunction = (fn: (name: string) => void) => {
  fn("miguel");
};

const sayHi = (name: string) => {
  console.log(`Hola ${name}`);
};

soyUnaFromFunction(sayHi);



const rest =(a: number, b: number) =>{
  return a - b 
}

//esto no va devolver nada 
//never 
function throwError(message:string): never {
  throw new Error(message);
}




function logMassege(message:string): void  {
  console.log(message)
}

// const avengers = ["Hulk", "Tony Start"]


// avengers.forEach(a=>{
//   console.log(a.toString())
// })



let hero = {
  name : "thor",
  age: 36,
  power: 1500
}

const createhero = (name: string, age: number)=>{
  return{
    name, age
  }

}


const thor = createhero('thor',20)


type Hero = {
  name: string,
  age:number
}


const address ={
  planet: "Earth",
  city : "colombia"
} 

type Address = typeof address


const addressTwitch : Address = {
  planet :"Tierrar",
  city: "colombia"
}
//type from funtion return 

function createAddress() {
  return{
    planet: "Tierra",
    city : "colombia"
  }
}
type Addres = ReturnType<typeof createAddress>



//Arrays 




const languages:(string | number)[]= [] 




// languages.push("hola mundo")
// languages.push(4)
// languages.push("hola mundo")
// languages.push("hola mundo")
// languages.push("hola mundo")
// languages.push("hola mundo")
// languages.push("hola mundo")
// languages.push("hola mundo")
// languages.push("hola mundo")
// languages.push("hola mundo")

/*
['X', 'O' , 'x'],
['X', 'O' , 'x'],
['X', 'O' , 'x'],


*/


type CellValue = 'X' | 'O' | ''
//tuplas
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]
const gameBoard: CellValue [][]=[
  ['X', 'O' , 'X', ],
  ['X', 'O' , 'X'],
  ['X', 'O' , 'X']  

]

//Tuplas 
// type State = [string, (name: string) =>void]
// const [ hero, setHero] =State("thor")
//type RGB = [number, number, number ] // 0 - 255
//const rgb : RGB = [ 2,3,4 ]


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */