var agora = new Date()
var hora = agora.getHours()
var frase = document.querySelector('div#frase')
var fundo = document.querySelector('body')
var foto = document.querySelector('div#foto')
frase.innerHTML = `Agora são ${hora} horas.`

if (hora < 6) {
    fundo.style.backgroundColor = '#101010'
} else if (hora < 12) {
    fundo.style.backgroundColor = '#ADD8E6'
} else if (hora < 18) {
    fundo.style.backgroundColor = '#FFFACD'
} else {
    fundo.style.backgroundColor = '#090619'
}