function ingresarCilindraje() { 
    let cilindraje = prompt("Cuál es el cilindraje de la moto");
    return Number(cilindraje);
}
function esAltaCilindraje(cilindraje) {
    return cilindraje > 400;
}
function iniciarPrograma() {
    let cilindraje = ingresarCilindraje(); 
    if (esAltaCilindraje(cilindraje)) { 
        alert("La moto es de alto cilindraje");
    } else {
        alert("La moto no es de alto cilindraje");
    }
}
iniciarPrograma();
