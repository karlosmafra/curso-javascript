function exibir(res) {
    console.log("O resultado da operação é igual a " + res)
}

function somar(a, b, callback) {
    var res = a + b
    callback(res)
}

function multiplicar(a, b) {
    var res = a * b
    exibir(res)
}

somar(4, 2, exibir)

multiplicar(4, 2)