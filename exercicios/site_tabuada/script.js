function calcular() {
    var num = document.querySelector('input#num')
    if (num.value.length == 0) {
        alert('Digite um número')
    } else {
        var n = Number(num.value)
        var tab = document.querySelector('select#tab')
        tab.innerHTML = ""  
        for (m = 1;m <= 10;m++) {
            var item = document.createElement('option')
            item.innerHTML = `${n} x ${m} = ${n * m}`
            tab.appendChild(item)
        }
    }
}