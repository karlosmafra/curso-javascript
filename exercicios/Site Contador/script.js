function contar() {
    var res = document.querySelector('div#res')
    var n1 = document.querySelector('input#in')
    var n2 = document.querySelector('input#fim')
    var n3 = document.querySelector('input#pas')
    var ini = Number(n1.value)
    var fim = Number(n2.value)
    var pas = Number(n3.value)
    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0 || pas <= 0) {
        window.alert('ERRO')
    } else if (ini < fim) {
        res.innerHTML = 'Contando: <br/>'
        for (c = ini;c <= fim;c += pas) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += '\u{1F3C1}'
    } else {
        res.innerHTML = 'Contando: <br>'
        for (c = ini;c >= fim;c -= pas) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += '\u{1F3C1}'
    }
}