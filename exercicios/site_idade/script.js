var data = document.querySelector('input#data')
var ano = Number(data.value)
var hoje = new Date()
var atual = hoje.getFullYear()
function verificar() {
    alert(atual)
}