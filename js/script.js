/* ===========================================================
   APRENDE JAVASCRIPT
   Aprendiz: Stiven Conrado Romero — Ficha 3230489
   =========================================================== */

/* ---------- Elementos de la página (todos juntos) ---------- */

// Tema 1 — index.html
const botonSaludo = document.getElementById("btnSaludo");
const salidaSaludo = document.getElementById("salidaSaludo");

// Tema 2 — fundamentos.html
const botonGuardarNombre = document.getElementById("btnGuardarNombre");
const botonCambiarNombre = document.getElementById("btnCambiarNombre");
const salidaNombre = document.getElementById("salidaNombre");

// Tema 3 — fundamentos.html
const campoTipo = document.getElementById("campoTipo");
const botonQueTipo = document.getElementById("btnQueTipo");
const salidaTipo = document.getElementById("salidaTipo");
const botonTipoNumero = document.getElementById("btnTipoNumero");
const botonTipoBooleano = document.getElementById("btnTipoBooleano");
const botonTipoNulo = document.getElementById("btnTipoNulo");
const salidaTipoFijo = document.getElementById("salidaTipoFijo");

// Tema 4 — fundamentos.html
const botonSumar = document.getElementById("btnSumar");
const botonRestar = document.getElementById("btnRestar");
const botonReiniciar = document.getElementById("btnReiniciar");
const marcadorContador = document.getElementById("marcadorContador");

// Tema 5 — control.html
const campoNota = document.getElementById("campoNota");
const botonClasificar = document.getElementById("btnClasificar");
const salidaNota = document.getElementById("salidaNota");

// Tema 6 — control.html
const campoTabla = document.getElementById("campoTabla");
const botonGenerarTabla = document.getElementById("btnGenerarTabla");
const salidaTabla = document.getElementById("salidaTabla");
const campoCuenta = document.getElementById("campoCuenta");
const botonCuentaRegresiva = document.getElementById("btnCuentaRegresiva");
const salidaCuenta = document.getElementById("salidaCuenta");

// El año del pie de página (en las tres páginas)
const anio = document.getElementById("anio");


/* ---------- TEMA 1: qué es JavaScript ---------- */
// Muestra la fecha y la hora exactas del momento en que se presiona.
// Es algo que el HTML por sí solo no puede hacer: contenido que
// cambia según el instante en que se visita la página.

if (botonSaludo) {

  botonSaludo.addEventListener("click", function () {
    const ahora = new Date();
    const momento = ahora.toLocaleString("es-CO");

    salidaSaludo.textContent =
      "Hola. Esta línea la escribió JavaScript el " + momento + ".";
  });

}


/* ---------- TEMA 2: variables ---------- */
// Pide un nombre con prompt, lo guarda en una variable y lo muestra
// en un saludo. Un segundo botón demuestra que una variable let
// puede recibir un valor nuevo.

if (botonGuardarNombre) {

  let nombreVisitante = "";

  botonGuardarNombre.addEventListener("click", function () {
    nombreVisitante = prompt("¿Cómo se llama?");
    salidaNombre.textContent = "Hola, " + nombreVisitante;
  });

  botonCambiarNombre.addEventListener("click", function () {
    nombreVisitante = prompt("Escriba el nuevo nombre:");
    salidaNombre.textContent = "Ahora el saludo dice: Hola, " + nombreVisitante;
  });

}


/* ---------- TEMA 3: datos y tipos de datos ---------- */
// Muestra el valor que escribió el visitante junto con su typeof.
// Como todo lo que llega de un input es texto, tres botones fijos
// prueban un número, un booleano y un valor nulo aparte.

if (botonQueTipo) {

  botonQueTipo.addEventListener("click", function () {
    const valor = campoTipo.value;
    salidaTipo.textContent = "\"" + valor + "\" es de tipo " + typeof valor;
  });

  botonTipoNumero.addEventListener("click", function () {
    const valorFijo = 42;
    salidaTipoFijo.textContent = valorFijo + " es de tipo " + typeof valorFijo;
  });

  botonTipoBooleano.addEventListener("click", function () {
    const valorFijo = true;
    salidaTipoFijo.textContent = valorFijo + " es de tipo " + typeof valorFijo;
  });

  botonTipoNulo.addEventListener("click", function () {
    const valorFijo = null;
    salidaTipoFijo.textContent =
      valorFijo + " es de tipo " + typeof valorFijo + " (rareza histórica del lenguaje)";
  });

}


/* ---------- TEMA 4: la operación de asignación ---------- */
// Un contador con tres botones. Cada clic modifica una variable
// declarada AFUERA de las funciones y actualiza el número en pantalla.

if (botonSumar) {

  let contador = 0;

  botonSumar.addEventListener("click", function () {
    contador++;
    marcadorContador.textContent = contador;
  });

  botonRestar.addEventListener("click", function () {
    contador--;
    marcadorContador.textContent = contador;
  });

  botonReiniciar.addEventListener("click", function () {
    contador = 0;
    marcadorContador.textContent = contador;
  });

}


/* ---------- TEMA 5: condicionales ---------- */
// Clasificador de notas: valida que lo escrito sea un número entre
// 0 y 5 y responde el nivel de desempeño con una cadena if/else if/else.

if (botonClasificar) {

  botonClasificar.addEventListener("click", function () {
    const nota = Number(campoNota.value); // el campo entrega TEXTO: hay que convertir
    let nivel = "";

    if (Number.isNaN(nota) || nota < 0 || nota > 5) {
      salidaNota.textContent = "Escriba un número entre 0 y 5.";
    } else if (nota >= 4.6) {
      nivel = "Superior";
    } else if (nota >= 4.0) {
      nivel = "Alto";
    } else if (nota >= 3.0) {
      nivel = "Básico";
    } else {
      nivel = "Bajo";
    }

    if (nivel !== "") {
      salidaNota.textContent = "Nota " + nota + " → Nivel: " + nivel;
    }
  });

}


/* ---------- TEMA 6: ciclos ---------- */
// Tabla de multiplicar con un for, y una cuenta regresiva con un
// while como segundo ejemplo.

if (botonGenerarTabla) {

  botonGenerarTabla.addEventListener("click", function () {
    const numero = Number(campoTabla.value);

    if (Number.isNaN(numero)) {
      salidaTabla.textContent = "Escriba un número válido.";
      return;
    }

    let resultado = ""; // el acumulador, FUERA del ciclo

    for (let i = 1; i <= 10; i++) {
      resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    salidaTabla.textContent = resultado; // en un <pre> para respetar los saltos
  });

}

if (botonCuentaRegresiva) {

  botonCuentaRegresiva.addEventListener("click", function () {
    let restante = Number(campoCuenta.value);

    if (Number.isNaN(restante) || restante < 0) {
      salidaCuenta.textContent = "Escriba un número entero positivo.";
      return;
    }

    let resultado = ""; // el acumulador, FUERA del ciclo

    while (restante >= 0) {
      resultado += restante + " ";
      restante--;
    }

    salidaCuenta.textContent = resultado + "¡Despegue!";
  });

}


/* ---------- El año del pie de página (todas las páginas) ---------- */
if (anio) {
  anio.textContent = new Date().getFullYear();
}