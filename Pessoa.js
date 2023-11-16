class Pessoa{
    _registro = 0
    constructor (nome, idade,materia){
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    setarRegistro (novoRegistro){
        if (typeof novoRegistro == "number") {
            this.registro = novoRegistro
        } 
    }

    get registro(){
        return this._registro
    }
    set registro (x){
        if (typeof x == "number"){
            this._registro = x
        }
    }
}


class Aluno extends Pessoa{
    constructor (nome, idade, materia, id){
        super (nome, idade, materia)
        this.id = id
    }


aviso () {
    alert (`${this.nome} selecione o curso desejado `)
    }

    aviso2 (){
        super.aviso ()
    }
}


let p1 = new Aluno ("Andrade", 92, "informatica", 18)
p1.registro = 34

p1.aviso()

p1.aviso()

console.log(`nome ${p1.nome} idade ${p1.idade} materia ${p1.materia} id ${p1.id} registro ${p1.registro}`)

function divisao(a, b) {
    try {
        if (b == 0) {
            throw new Error ("Nao e permitido dividir por zero.");
        }
        const resultado = a / b;
        return resultado;
    } 
    catch (erro) {
        console.log("ocorreu um errro:" + erro.message);
    }
    finally {
        console.log ("Bloco finally sempre e executado, independentemente")
    }
}

console.log(divisao(10, 2));
console.log(divisao(0, 0));