function verificar() {
    var ano = document.querySelector('input#anos')
    var res = document.querySelector('div#res')
    var data = new Date
    var hoje = data.getFullYear()
    if (ano.value.length == 0 || ano.value > hoje || ano.value < 0) {
        window.alert('[ERRO] Tente novamente')
    }
    else {
        var idd = hoje - Number(ano.value)
        var sex = document.getElementsByName('sexo')
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        var gen = ''
        if (sex[0].checked) {
            gen = 'um homem'
            if (idd < 12) {
                imagem.setAttribute('src', 'male_kid.jpg')
            } else if (idd < 21) {
                imagem.setAttribute('src', 'male_young.jpg')
            } else if (idd < 60) {
                imagem.setAttribute('src', 'male_adult.jpg')
            } else {
                imagem.setAttribute('src', 'male_old.webp')
            }
        }
        else {
            gen = "uma mulher"
            if (idd < 12) {
                imagem.setAttribute('src', 'female_kid.jpg')
            } else if (idd < 21) {
                imagem.setAttribute('src', 'female_young.jpg')
            } else if (idd < 60) {
                imagem.setAttribute('src', 'female_adult.jpg')
            } else {
                imagem.setAttribute('src', 'female_old.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idd} anos`
        res.appendChild(imagem)
    }
}