let num = [8, 4, 9, 2, 6]
num.push(3)
num.sort()
console.log(num)

/* console.log(num[0])
var ult = num.length - 1
console.log(num[ult])

for (pos = 0; n < num.length; n++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// console.log(num.indexOf(8))

var n = 5
var ord = num.indexOf(n)

if (ord == -1) {
    console.log(`O valor ${n} não foi encontrado`)
} else {
    console.log(`O valor ${n} está na posição ${ord}`)
}