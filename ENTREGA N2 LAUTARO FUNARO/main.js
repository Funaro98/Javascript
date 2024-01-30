// Declaración de variables
let precioContado, precioCuotas, cantidadCuotas, totalCuotas, mensajeResultado;

// Función para calcular el valor total pagado en cuotas con inflación
function calcularCuotas(precioCuotas, cantidadCuotas) {
    const tasaInflacionMensual = 0.15;
    let precioCuotaMensual = precioCuotas / cantidadCuotas;
    let precioTotalDevaluado = 0;

    for (let i = 1; i <= cantidadCuotas; i++) {
        let cuotaMensualdevaluada = precioCuotaMensual * Math.pow((1 - tasaInflacionMensual), i);
        precioTotalDevaluado += cuotaMensualdevaluada;
    }

    return precioTotalDevaluado;
}

// Obtener el valor de contado ingresado por el usuario
precioContado = parseFloat(prompt("Ingrese el valor de contado del artículo:"));

// Obtener el valor en cuotas y la cantidad de cuotas ingresadas por el usuario
precioCuotas = parseFloat(prompt("Ingrese el valor en cuotas del artículo:"));
cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas a pagar:"));

// Calcular las cuotas
totalCuotas = calcularCuotas(precioCuotas, cantidadCuotas);

// Función para comparar precios
function compararPrecios(precioTotalDevaluado, precioContado) {
    let mensajeResultado;
    if (precioTotalDevaluado < precioContado) {
        mensajeResultado = (`Te conviene pagar en cuotas (el valor de cada cuota es ${totalCuotas.toFixed(2)})`);
    } else {
        mensajeResultado = (`Pagar en efectivo "${precioContado}" es la mejor opción`);
    }

    return mensajeResultado;
}

// Comparar precios
mensajeResultado = compararPrecios(totalCuotas, precioContado);

// Filtrar opciones de cuotas que sean mejores que el pago de contado
const opcionesMejoresQueContado = [3, 6, 9, 12].filter(opcion => {
    const totalCuotasOpcion = calcularCuotas(precioCuotas, opcion);
    return totalCuotasOpcion < precioContado;
});

// Mostrar los resultados en la consola
console.log("Total con descuento de contado: $" + precioContado.toFixed(2));
console.log("Total pagado en cuotas con inflación: $" + totalCuotas.toFixed(2));
console.log(mensajeResultado);

// Mostrar las opciones de cuotas mejores que el pago de contado
if (opcionesMejoresQueContado.length > 0) {
    console.log("Cuotas que son mejores que el pago de contado:", opcionesMejoresQueContado.join(', '));
} else {
    console.log("No hay cuotas mejores que el pago de contado.");
}

// Mostrar el resultado como alerta
alert(mensajeResultado);
