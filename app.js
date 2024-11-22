// function esTipoDato(valor) {
//   // La función recibe un argumento llamado valor.
//   // Retorna el tipo de dato de este valor.
//   // Por ejemplo: "string", "number", "boolean", "object", etc.
//   // Tu código:

//   return typeof valor;
// }

// console.log(esTipoDato("hola"));
// console.log(esTipoDato(2.6));
// console.log(esTipoDato({}));
// console.log(esTipoDato(["hola"]));
// console.log(esTipoDato(undefined));
// console.log(esTipoDato(false));

// function esNumeroEntero(numero) {
//   // La función recibe un argumento llamado numero.
//   // Verifica si este es un número entero o no.
//   // Retorna true si lo es, de lo contrario, retorna false.
//   // Por ejemplo:
//   // 24 ---> true
//   // -1212 ---> true
//   // 121.212 ---> false
//   // Tu código:

//   return Number.isInteger(numero);
// }

// console.log(esNumeroEntero(4));
// console.log(esNumeroEntero(-4));
// console.log(esNumeroEntero(4.6));

// function esNuloOIndefinido(valor) {
//   // La función recibe un argumento llamado valor.
//   // Si este valor es null o undefined, retorna true.
//   // De lo contrario, retorna false.
//   // Por ejemplo:
//   // null ---> true
//   // undefined ---> true
//   // 22 ---> false
//   // "texto" ---> false
//   // Tu código:

//   if (valor === null || valor === undefined) {
//     return true;
//   }
//   return false;
// }

// console.log(esNuloOIndefinido(null));
// console.log(esNuloOIndefinido(undefined));
// console.log(esNuloOIndefinido(5));
// console.log(esNuloOIndefinido("a"));

// const returnDato = (dato) => {
//   return dato;
// };

// console.log(returnDato("a"));
// console.log(returnDato(5));
// console.log(returnDato(true));
// console.log(returnDato("perro"));

// function tienenMismaLongitud(str1, str2) {
//   // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
//   // Retorna true si los dos strings tienen la misma longitud.
//   // De lo contrario, retorna false.
//   // Por ejemplo:
//   // "SoyHenry", "HenrySoy" ---> true
//   // "hi", "there" ---> false
//   // Tu código:

//   if (str1.length == str2.length) {
//     return true;
//   }
//   return false;
// }
// console.log(tienenMismaLongitud("x", "s"));

// //! Declaramos la funcio expresada
// const myFunction = () => {
//   //*
//   for (let i = 0; i <= 10; i++) {
//     console.log(`Esta es la vuelta del bucle nro: #${i}`);
//   }
// };

// myFunction();

// function menosQueNoventa(num) {
//   // La función recibe un argumento llamado num.
//   // Retorna true si el argumento "num" es menor que noventa.
//   // De lo contrario, retorna false.
//   // Por ejemplo:
//   // 50 ---> true
//   // 91 ---> false
//   // Tu código:

//   if (num < 90) return true;

//   return false;
// }

// console.log(menosQueNoventa(89));

// const factorial = (n) => {
//   if (n === 0 || n === 1) return 1;

//   return n * factorial(n - 1);
// };

// console.log(factorial(6));

// console.log("hola");

// function esPositivo(num) {
//   // La función recibe un argumento llamado num el cual es un numero entero.
//   // Retorna como resultado un string que indica si el número es positivo o negativo.
//   // Por ejemplo:
//   // Si el número es positivo ---> "Es positivo".
//   // Si el número es negativo ---> "Es negativo".
//   // Si el número es 0, devuelve false.
//   // Tu código:
//   if (num < 0) return `El numero es "Negrativo"`;
//   if (num == 0) return `El numero es "0"`;

//   return `El numero es "Positivo"`;
// }

// console.log(esPositivo(-0));

// function esVocal(letra) {
//   // La función recibe un argumento llamado letra el cual es un string.
//   // Retorna como resultado un string que indica si el argumento letra es una vocal.
//   // de lo contrario retorna el string "Dato incorrecto"
//   // Por ejemplo:
//   // "a" ---> "Es vocal"
//   // "u" ---> "Es vocal"
//   // "n" ---> "Dato incorrecto"
//   // "texto largo" ---> "Dato incorrecto"
//   // Tu código:

//   const vocales = ["a", "e", "i", "o", "u"];

//   if (vocales.includes(letra)) return `${letra} es una vocal`;

//   return `${letra} no es una vocal`;
// }

// console.log(esVocal("u"));
// function suma(x, y) {
//   // La función recibe dos argumentos llamados "x" e "y" que son números.
//   // Retorna el resultado de la suma de estos argumentos.
//   // Por ejemplo:
//   // 5, 5 ---> 10
//   // -5, 5 ---> 0
//   // Tu código:

//   let resultado = x + y;

//   return resultado;
// }
// console.log(suma(-5, 4));

// function obtenerResto(x, y) {
//   // La función recibe dos argumentos llamados "x" e "y" que son números.
//   // Retorna el resultado del resto de la division de estos argumentos.
//   // Por ejemplo:
//   // 10, 5 ---> 0
//   // 16, 5 ---> 1
//   // Tu código:

//   let resultado = x % y;

//   return resultado;
// }
console.clear();
// console.log(obtenerResto(16, 5));
// function agregarSimboloExclamacion(str) {
//   // La función recibe un argumento llamado str el cual es un string.
//   // Agrega un símbolo de exclamación al final del string str y retórnalo.
//   // Por ejemplo:
//   // "hello world" ---> "hello world!"
//   // Tu código:

//   let strSeparado = str.split("");
//   strSeparado.push("!");
//   let strFinal = strSeparado.join("");

//   console.log(strFinal);

//   return strFinal;
// }

// console.log(agregarSimboloExclamacion("hola mundo"));
// function obtenerAreaRectangulo(alto, ancho) {
//   // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
//   // Retornar el área de un rectángulo teniendo su alto y ancho.
//   // Por ejemplo:
//   // 2, 2 ---> 4
//   // 0, 2 ---> 2
//   // Tu código:
//   return `${alto * ancho}m²`;
// }

// console.log(obtenerAreaRectangulo(5, 10));

// function deEuroAdolar(euro) {
//   // La función recibe un argumento llamado euro el cual es un numero.
//   // Debes calcular el valor recibido como argumento pasándolo a dólares.
//   // Suponiendo que 1 euro equivale a 1.20 dólares.
//   // Retornar el valor en dolares.
//   // Por ejemplo:
//   // 1 ---> 1.20
//   // 0 ---> 0
//   // Tu código:

//   let dolar = 1.2;

//   return `${euro * dolar}U$D`;
// }

// console.log(deEuroAdolar(10));

// function elevarAlCuadrado(num) {
//   // La función recibe un argumento llamado num el cual es un numero.
//   // Debes Retorna el valor de "num" elevado al cuadrado.
//   // Por ejemplo:
//   // 6 ---> 36
//   // 0 ---> 0
//   // Tu código:

//   return Math.pow(num, 2);
// }

// console.log(elevarAlCuadrado(16));

// function esVerdadero(valor) {
//   // Si "valor" es verdadero, retorna "Soy verdadero".
//   // Caso contrario, retorna "Soy falso".
//   // Tu código:

//   if (valor) {
//     return "Soy verdadero";
//   }

//   return "Soy falso";
// }

// console.log(esVerdadero(0));
// function tieneTresDigitos(num) {
//   // Si el número recibido tiene tres dígitos, retorna true.
//   // Caso contrario, retorna false.
//   // Tu código:

//   //! Tambien se puede hacer asi
//   //* if (num >= 100 && num <= 999) return true;

//   let countNumber = num.toString().split("");

//   if (countNumber.length === 3) {
//     return true;
//   }

//   return false;
// }

// console.log(tieneTresDigitos(352));

function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:

  if (a % 2 == 0 && a % 3 === 0) return true;

  if (a % 2 == 0 && a % 3 !== 0)
    return `${a} Es par pero no es divisible por 3`;

  if (a % 2 !== 0 && a % 3 === 0)
    return `${a} Es divisible por 3 pero no es par`;

  return false;
}

console.log(esParYDivisiblePorTres(8));
