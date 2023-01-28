var num = document.querySelector('input#num')
var tab = document.querySelector('select#tab')
function calcular() {
    if (num.value.length == 0) {
        window.alert('ERRO: Digite um número')
    } else {
        tab.innerHTML = ''
        var n = Number(num.value)
        for (m = 1;m <= 10;m++) {
            var res = n * m
            var item = document.createElement('option')
            item.text = `${n} x ${m} = ${res}`
            tab.appendChild(item)
        }
    }
}