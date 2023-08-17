//1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
let ingresaNumero= parseInt(prompt("Ingresa un número"));
let contador= 1
while( contador <= ingresaNumero){
    if(contador % 5 ===0){
        console.log(contador);
    }
    contador++;
}

//2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
let num1Valido = false;
let num2Valido = false;
let num1, num2;
const message = "¡Lotería!";

while (!num1Valido) {
  num1 = parseInt(prompt("Ingrese el primer número entre el 1 y 50"));
  if (isNaN(num1) || (num1 < 1 && num1 > 50)) {
    console.log(
      "El valor ingresado esta fuera del rango o no es un número.Intente de nuevo porfavor"
    );
  } else {
    num1Valido = true;
  }
}

while (!num2Valido) {
  num2 = parseInt(prompt("Ingrese el segundo número entre el 1 y 50"));
  if (isNaN(num2) || (num2 < 1 && num2 > 50)) {
    console.log(
      "El valor ingresado esta fuera del rango o no es un número.Intente de nuevo porfavor"
    );
  } else {
    num2Valido = true;
  }
}

for (let i = 1; i <= 50; i++) {
  if (i === num1 || i === num2) {
    console.log("¡Lotería!");
  } else {
    console.log(i);
  }
}

//3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

const numeros = [];

while (true) {
  solicitarNumero = parseFloat(prompt("Ingrese un número: "));

  if (isNaN(solicitarNumero)) {
    console.log("¡Ingrese un valor numérico válido!");
  } else {
    if (solicitarNumero === 0) {
      break;
    } else {
      numeros.push(solicitarNumero);
    }
  }
}
console.log("Números capturados:");
numeros.forEach((num) => {
  console.log(num);
});

//4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

let resultado;
let capturas = [];

while(true){
    solicitarLetrasPalabras= prompt("Ingrese una letra o palabra, deje el campo vacio para salir");
    if (solicitarLetrasPalabras===""){
        let resultado = capturas.join(" ");
        console.log("Resultado:");
        console.log(resultado);
        break;
    }else{
        capturas.push(solicitarLetrasPalabras);
    }
}

//5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
while (true) {
    const diaSemana = prompt("Ingrese un día de la semana:").toLowerCase();

    switch (diaSemana) {
        case "lunes":
            alert("Vamos a empezar bien");
            break;
        case "martes":
            alert("Lo estas haciendo bien");
            break;
        case "miercoles":
        case "miércoles":
            alert("Lo hiciste mejor que ayer");
            break;
        case "jueves":
            alert("confía en ti");
            break;
        case "viernes":
            alert("Mira todo lo que haz hecho en la semana y mira lo capaz que eres!");
            break;
        case "sabado":
        case "sábado":
            alert("Disfruta tu día al máximo");
            break;
        case "domingo":
            alert("¡Ve a descansar!");
            break;
        default:
            alert("Por favor, ingrese un día válido.");
            continue; 
    }

    if (diaSemana === "domingo") {
        break;
    }
}
