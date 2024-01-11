
// Función para calcular el valor total pagado en cuotas con inflación
function calcularCuotas(precioCuotas, cantidadCuotas) {
    // Tasa de inflación anual del 150%
    const tasaInflacionAnual = 150;

    // Calcular inflación mensual
    const tasaInflacionMensual = 1.125 ;

    // Dividir el precio en cuotas por la cantidad de cuotas
    const precioCuotaMensual = precioCuotas / cantidadCuotas;

    // Cálculo del valor total con inflación
    let precioTotalInflacion = 0;
    for (let i = 1; i < cantidadCuotas; i++) {
        // Multiplicar por la inflación mensual
        precioCuotaMensual *=  tasaInflacionMensual;
        precioCuotas += precioCuotaMensual;
    }

    return precioTotalInflacion;
}

// Obtener el valor de contado ingresado por el usuario
let precioContado = parseFloat(prompt("Ingrese el valor de contado del artículo:"));

// Obtener el valor en cuotas y la cantidad de cuotas ingresadas por el usuario
let precioCuotas = parseFloat(prompt("Ingrese el valor de cuotas del artículo:"));
let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas a pagar:"));

// Calcular el valor total pagado en cuotas con inflación
let totalCuotas = calcularCuotas(precioCuotas, cantidadCuotas);

// Comparativa entre el valor total en cuotas y el valor con descuento de contado
let mensajeResultado;
if (totalCuotas > totalContado) {
    mensajeResultado = "Pagar en cuotas es más caro que pagar al contado.";
} else {
    mensajeResultado = "Pagar al contado es más conveniente que pagar en cuotas.";
}

// Mostrar los resultados en la consola
console.log("Total con descuento de contado: $" + precioContado.toFixed(2));
console.log("Total pagado en cuotas con inflación: $" + totalCuotas.toFixed(2));
console.log(mensajeResultado);

// Mostrar el resultado como alerta
alert(mensajeResultado);