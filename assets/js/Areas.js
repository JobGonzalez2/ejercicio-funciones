/**
 * Calcula el área de un triángulo y muestra el resultado en la página.
 */

function areaTriangulo() {
    let b = Number(baseTri.value);
    let h = Number(alturaTri.value);

    if (b <= 0 || h <= 0) {
        resTri.innerHTML = "Ingrese valores válidos.";
        return;
    }

    let area = (b * h) / 2;
    resTri.innerHTML = "Área del triángulo: " + area;
}

/**
 * calcuala el area de un paralelogramo y muestra el resultado en la página.
 */

function areaParalelogramo() {
    let b = Number(basePara.value);
    let h = Number(alturaPara.value);

    if (b <= 0 || h <= 0) {
        resPara.innerHTML = "Ingrese valores válidos.";
        return;
    }

    let area = b * h;
    resPara.innerHTML = "Área del paralelogramo: " + area;
}

/**
 * Calcula el área de un rectángulo y muestra el resultado en la página.
 */
function areaRectangulo() {
    let b = Number(baseRect.value);
    let h = Number(altoRect.value);

    if (b <= 0 || h <= 0) {
        resRect.innerHTML = "Ingrese valores válidos.";
        return;
    }

    let area = b * h;
    resRect.innerHTML = "Área del rectángulo: " + area;
}

/**
 * Calcula el área de un cuadrado y muestra el resultado en la página.
 */
function areaCuadrado() {
    let lado = Number(document.getElementById("ladoCuadrado").value);

    if (lado <= 0) {
        resCuadrado.innerHTML = "Ingrese un valor válido.";
        return;
    }

    let area = lado * lado;
    resCuadrado.innerHTML = "Área del cuadrado: " + area;
}
/**
 * Calcula el área de un rombo y muestra el resultado en la página.
 */
function areaRombo() {
    let D = Number(Dmayor.value);
    let d = Number(Dmenor.value);

    if (D <= 0 || d <= 0) {
        resRombo.innerHTML = "Ingrese valores válidos.";
        return;
    }

    let area = (D * d) / 2;
    resRombo.innerHTML = "Área del rombo: " + area;
}

_/**
 * Calcula el área de un cometa y muestra el resultado en la página.
 */
function areaCometa() {
    let D = Number(document.getElementById("DmayorCometa").value);
    let d = Number(document.getElementById("DmenorCometa").value);

    if (D <= 0 || d <= 0) {
        document.getElementById("resCometa").innerHTML =
            "Ingrese valores válidos mayores a 0.";
        return;
    }

    let area = (D * d) / 2;

    document.getElementById("resCometa").innerHTML =
        "Área del cometa: " + area;
}
/**
 * calcula el area del trapecio 
 */

function areaTrapecio() {
    let B = Number(bMayor.value);
    let b = Number(bMenor.value);
    let h = Number(alturaTrap.value);

    if (B <= 0 || b <= 0 || h <= 0) {
        resTrap.innerHTML = "Ingrese valores válidos.";
        return;
    }

    let area = ((B + b) * h) / 2;
    resTrap.innerHTML = "Área del trapecio: " + area;
}

/**
 * calcula el area del circulo
 */
function areaCirculo() {
    let r = Number(radioCirc.value);

    if (r <= 0) {
        resCirc.innerHTML = "Ingrese un valor válido.";
        return;
    }

    let area = Math.PI * Math.pow(r, 2);
    resCirc.innerHTML = "Área del círculo: " + area.toFixed(2);
}
