import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    cliente;
    //#saldo = 0; a # significa que o atributo saldo é privado
    _saldo = 0;
    
    set cliente(novoValor){//Usando assessores do tipo set podemos alterar a regra de como um atributo pode ou não ser modificado sem precisar alterar isso em diversos pontos do código. Usar assessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está sempre segura
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        //Para acessar o saldo da própria conta-corrente a partir da qual chamamos o método, ou seja, "esta" conta. Para isso, usamos a palavra reservada this ("este(a)" em inglês).
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor >0){
            this._saldo += valor;
            
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}