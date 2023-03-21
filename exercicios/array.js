var num = [7, 5, 8, 2, 9]
num.push(1)
num.sort()
console.log(num)
console.log(`A variável tem ${num.length} valores`)
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])

for (var pos=0;pos < num.length;pos++) {
    console.log(`A posição ${pos} contém o valor ${num[pos]}`)
}
*/
for (var pos in num) {
    console.log(`A posição ${pos} contém o valor ${num[pos]}`)
}

var pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O número 7 está na posição ${num.indexOf(7)}`)
}
