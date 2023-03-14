function verificar() {
    var data = document.querySelector('input#data')
    var ano = Number(data.value)
    var hoje = new Date()
    var atual = hoje.getFullYear()
    var res = document.querySelector('div#res')
    if (ano > atual || ano <= 0) {
        alert('[ERRO]: Ano de nascimento inválido.')
    } else {
        var idade = atual - ano
        var sexo = document.getElementsByName('sexo')
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gen = 'um homem'
            if (idade < 12) {
                img.setAttribute('src', 'imagens/vincent.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/sam.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/demetrius.png')
            } else {
                img.setAttribute('src', 'imagens/george.png')
            }
        } else {
            gen = 'uma mulher'
            if (idade < 12) {
                img.setAttribute('src', 'imagens/jas.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/abigail.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/caroline.png')
            } else {
                img.setAttribute('src', 'imagens/evelyn.png')
            }
        }
        
        res.innerHTML = `Você é ${gen} de ${idade} anos.`
        res.appendChild(img)
    }
}

9769