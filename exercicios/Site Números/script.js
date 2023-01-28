var number = document.querySelector('input#number')
var lista = document.querySelector('select#lista')
var res = document.querySelector('div#res')
var nums = []

function adicionar() {
    var num = Number(number.value)
    if (num < 1 || num > 100 || nums.indexOf(num) != -1) {
        window.alert('Erro: número inválido ou já presente na lista.')
    }
    else {
        var item = document.createElement('option')
        item.text = `Número ${num} adicionado`
        lista.appendChild(item)
        nums.push(num)
    }
    res.innerHTML = ''
    number.value = ''
    number.focus()
}

function calcular() {
    if (nums.length == 0) {
        window .alert('Erro: adicione os números.')
    }
    else {
        nums.sort()
        var tamanho = nums.length
        var soma = 0
        for (var c in nums) {
            soma += nums[c]
        }
        var media = soma / tamanho
        var maior = nums[0]
        var menor = nums[0]
        for (let pos in nums) {
            if (nums[pos] > maior) {
                maior = nums[pos]
            }
            else if (nums[pos] < menor) {
                menor = nums[pos]
            }
        }
        res.innerHTML = `
        <br/> Ao todo há ${tamanho} elementos <br/> <br/>
        O maior valor informado foi ${maior} <br/> <br/>
        O menor valor informado foi ${menor} <br/> <br/>
        A soma dos números é igual a ${soma} <br/> <br/>
        A média dos números é igual a ${media} <br/> <br/>
        `
    }
}