var nums = []
var res = document.querySelector('div#res')
function adicionar() {
    var n = document.querySelector('input#num')
    var num = Number(n.value)
    if (nums.indexOf(num) != -1) {
        alert('Valor já adicionado')
    } else {
        if (num < 1 || num > 100 || n.value.length == 0) {
            alert('[ERRO]: Valor inválido')
        } else {
            res.innerHTML = ""
            var tab = document.querySelector('select#lista')
            var item = document.createElement('option')
            item.innerHTML = `Valor ${num} adicionado.`
            tab.appendChild(item)
            nums.push(num)
        }
    }
    n.value = ""
    n.focus()
}

function analisar() {
    if (nums.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {

    res.innerHTML = `<p>Foram adicionados ${nums.length} valores.</p>`

    var maior = nums[0]
    for (i in nums) {
        if (nums[i] > maior) {
            maior = nums[i]
        }
    }
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`

    var menor = nums[0]
    for (i in nums) {
        if (nums[i] < menor) {
            menor = nums[i]
        }
    }
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`

    var soma = 0
    for (i in nums) {
        soma += nums[i]
    }
    res.innerHTML += `<p>A soma de todos os valores é igual a ${soma}.</p>`

    res.innerHTML += `<p>A média dos valores é igual a ${soma / nums.length}.</p>`
    }
}