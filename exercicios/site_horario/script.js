function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var frase = document.querySelector('div#frase')
    var fundo = document.querySelector('body')
    var img = document.querySelector('img#imagem')
    frase.innerHTML = `Agora são ${hora} horas.`

    if (hora < 6) {
        fundo.style.backgroundColor = '#101010'
        img.src = 'imagens/dawn.png'
    } else if (hora < 12) {
        fundo.style.backgroundColor = '#ADD8E6'
        img.src = 'imagens/morning.png'
    } else if (hora < 18) {
        fundo.style.backgroundColor = '#eeac8f'
        img.src = 'imagens/afternoon.png'
    } else {
        fundo.style.backgroundColor = '#090619'
        img.src = 'imagens/night.png'
    }
}