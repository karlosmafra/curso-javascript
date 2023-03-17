function contar() {
    var ini = document.querySelector('input#ini')
    var fim = document.querySelector('input#fim')
    var pas = document.querySelector('input#pas')
    var res = document.querySelector('div#res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = "Preencha todos os valores."
    } else if (pas.value <= 0) {
        res.innerHTML = "Passo inválido."
    } else {
        var n1 = Number(ini.value)
        var nf = Number(fim.value)
        var p = Number(pas.value)
        res.innerHTML = ""
        for (n1;n1 <= nf;n1 += p) {
            res.innerHTML += `${n1} &#x1F449 `
        }
        res.innerHTML += '&#x1F3C1'
    }
}