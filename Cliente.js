export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){//Construtores são utilizados para inicializar os atributos.
        this.nome = nome;
        this._cpf = cpf;
    }
}