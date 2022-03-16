


var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var resultado = document.querySelector('span')

function adicao() {
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)
}

function subtracao() {
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
}

function multiplicacao() {
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)
}

function divisao() {
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
}

    