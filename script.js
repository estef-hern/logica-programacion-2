let celsius;

while (true) {
    let entrada = prompt("Ingrese la temperatura en C°: ");

    if (entrada === null) {
        console.log("Operación cancelada.");
        break;
    }

    let numero = Number(entrada);

    if (entrada.trim() === "" || isNaN(numero)) {
        console.log("Error: Debe ingresar un número válido");
    } else {
        celsius = numero;
        break;
    }
}

if (celsius !== undefined) {
    let fahrenheit = (celsius * 1.8) + 32;
    let kelvin = celsius + 273.15;

    console.log("Grados Kelvin: " + kelvin);
    console.log("Grados Fahrenheit: " + fahrenheit);
}







