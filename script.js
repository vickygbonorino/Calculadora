
//Para mostrar en la pantalla el valor del botón de la calculadora presionado

function agregar (valor){
    document.getElementById('pantalla').value += valor
}

//Para borrar con botón C
function borrar() {
    document.getElementById('pantalla'). value = ''
}

//Toma el valor y ejecuta los cálculos
function calcular() {
    const valorPantalla = document.getElementById ('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}