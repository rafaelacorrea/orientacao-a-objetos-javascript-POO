import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Rafaela", 11122233345);

const cliente2 = new Cliente("Frank", 11122233452);


const contaCorrenteRafaela = new ContaCorrente(cliente1, 1001);
contaCorrenteRafaela.depositar(500);

const contaCorrenteFrank = new ContaCorrente(cliente2, 1002);

let valor = 200;
contaCorrenteRafaela.transferir(valor, contaCorrenteFrank);

console.log(contaCorrenteRafaela);
console.log(`Numeros de contas criadas no ByteBank: ${ContaCorrente.numeroDeContas} contas criadas até o momento.`);