function carregar() { 
    var msg = document.querySelector('div#msg') 
    var img = document.querySelector('img#img')
    var tit = document.querySelector('h1#titulo')
    var agora = new Date() 
    var hora = agora.getHours()
    //var minutos = agora.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas` 
    if (hora < 6) {
        img.src = 'dawn.jpg'
        document.body.style.background = '#0F1011'
        tit.innerHTML = 'Boa madrugada!'
    } 
    else if (hora < 13) {
        img.src = 'morning.jpg'
        document.body.style.background = 'rgb(18, 197, 197)'
        tit.innerHTML = 'Bom dia!'
    }
    else if (hora < 18) {
        img.src = 'afternoon.jpg'
        document.body.style.background = '#F1BD77'
        tit.innerHTML = 'Boa tarde!'
    } 
    else {
        img.src = 'night.jpg'
        document.body.style.background = '#0A0F25'
        tit.innerHTML = 'Boa noite!'
    } 
}