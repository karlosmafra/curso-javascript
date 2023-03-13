var agora = new Date()
var hora = agora.getHours()

if (hora < 6) {
    console.log('Boa madrugada!')
} else if (hora < 13) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

var dia = agora.getDay()

switch (dia) {
    case 0:
        console.log('Bom domingo!')
        break
    case 1:
        console.log('Boa segunda!')
        break
    case 2:
        console.log('Boa terça!')
        break
    case 3:
        console.log('Boa quarta!')
        break
    case 4:
        console.log('Boa quinta!')
        break
    case 5:
        console.log('Boa sexta!')
        break
    case 6:
        console.log('Bom sábado!')
        break
    default:
        console.log('[ERRO] Dia inválido')
}