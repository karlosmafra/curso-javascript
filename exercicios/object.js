var amigo = {
    nome:'José',
    sexo:'M',
    peso: 80.5,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(5.1)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)