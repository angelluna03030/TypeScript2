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
