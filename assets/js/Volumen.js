function calcularCubo() {
    // Obtener valores de los inputs
    let lado1 = Number(document.getElementById("numero").value);
    let lado2 = Number(document.getElementById("numero").value);
    let lado3 = Number(document.getElementById("numero").value);

    // Validación básica
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        document.getElementById("resultado").innerHTML = 
            "Por favor ingrese valores válidos mayores a 0.";
        return;
    }

    // Calcular volumen
    let volumen = lado1 * lado2 * lado3;

    // Redondear usando Math 
    let volumenRedondeado = Math.round(volumen);

    // Mostrar resultado en el <p>
    document.getElementById("resultado").innerHTML =
        "El volumen del cubo es: " + volumenRedondeado + " unidades cúbicas.";
}

/**
 * Función para calcular el volumen de un paralelepípedo
 */

function calcularParalelepipedo() {
    let largo = Number(document.getElementById("largo").value);
    let ancho = Number(document.getElementById("ancho").value);
    let alto  = Number(document.getElementById("alto").value);

    if (largo <= 0 || ancho <= 0 || alto <= 0) {
        document.getElementById("resultado").innerHTML =
            "Por favor ingrese valores válidos mayores a 0.";
        return;
    }

    let volumen = largo * ancho * alto;
    let volumenRedondeado = Math.round(volumen);

    document.getElementById("resultado").innerHTML =
        "El volumen del paralelepípedo es: " + volumenRedondeado;
}

/**
 * Función para calcular el volumen de un cilindro
 */
function calcularCilindro() {
    let radio = Number(document.getElementById("radio").value);
    let altura = Number(document.getElementById("altura").value);

    if (radio <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Por favor ingrese valores válidos mayores a 0.";
        return;
    }

    let volumen = Math.PI * Math.pow(radio, 2) * altura;
    let volumenRedondeado = Math.round(volumen);

    document.getElementById("resultado").innerHTML =
        "El volumen del cilindro es: " + volumenRedondeado;
}
/**
 * Función para calcular el volumen de una esfera
 */
function volumenEsfera() {
    let r = Number(radioEsfera.value);

    if (r <= 0) {
        resEsfera.innerHTML = "Ingrese un valor válido.";
        return;
    }

    let volumen = (4 / 3) * Math.PI * Math.pow(r, 3);
    resEsfera.innerHTML = "Volumen de la esfera: " + volumen.toFixed(2); + " unidades cúbicas.";
    
}