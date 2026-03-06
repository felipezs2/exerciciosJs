let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    emagrecer(p=0) {
        console.log ('Engordou')
        this.peso -= p
    }
}

amigo.emagrecer(2)
console.log(`${amigo.nome} | ${amigo.sexo} | ${amigo.peso}`)