
function fatorial(n) {
    var fat = 1
    for (c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))



function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(5,8))



function fatorialR(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * fatorialR(n - 1)
    }
}

console.log(fatorialR(5))