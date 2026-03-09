// Exercicio 1 - Mensagem de Boas-Vindas
function mostrarBoasVindas() {
    alert("Bem-vindo ao nosso programa!");
}

// Exercicio 2 - Saudação Personalizada
function saudarUsuario(nome) {
    alert(`Olá, ${nome}! Tenha um bom dia!`);
}

// Exercicio 3 - Dobro de um Número
function calcularDobro(numero) {
    return numero * 2;
}
const n = Number(prompt("Digite um número:"));
alert("Dobro: " + calcularDobro(n));

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

const a = Number(prompt("Nota 1:"));
const b = Number(prompt("Nota 2:"));
const c = Number(prompt("Nota 3:"));

alert("Média: " + calcularMedia(a, b, c));

// Exercicio 5 - Verificador de Par ou Ímpar
function verificarParidade(numero) {
    if (numero % 2 === 0) {
        alert("Par");
    } else {
        alert("Ímpar");
    }
}
const numero = Number(prompt("Digite um número:"));
verificarParidade(numero);
// Exercicio 6 - Maior de Dois Números
function encontrarMaior(a, b) {
    return a > b ? a : b;
}
const n1 = Number(prompt("Primeiro número:"));
const n2 = Number(prompt("Segundo número:"));

alert("Maior: " + encontrarMaior(n1, n2));
// Exercicio 7 - Tabuada com Função
function mostrarTabuada(numero) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
}

const num = Number(prompt("Digite um número para a tabuada:"));
mostrarTabuada(num);
// Exercicio 8 - Contagem Regressiva com Função
function Exercicio8(inicio) {
    let texto = "";
    for (let i = inicio; i >= 0; i--) {
        texto += i + "\n";
    }
    alert(texto);
}

const inicio = Number(prompt("Digite o número inicial:"));
contagemRegressiva(inicio);

// Exercicio 9 - Somar Elementos de um Vetor
function somarVetor(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;
}

const numeros = [10, 20, 30];
alert("Soma: " + somarVetor(numeros));
// Exercicio 10 - Encontrar o Menor Valor em um Vetor
function encontrarMenor(vetor) {
    let menor = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    return menor;
}

const valores = [8, 3, 15, 1, 9];
alert("Menor valor: " + encontrarMenor(valores));
// Exercicio 11 - Contar Pares em um Vetor
function exercicio11(vetor) {
    let contador = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}
const lista = [2, 5, 8, 7, 10];
alert("Quantidade de pares: " + contarPares(lista));

// Exercicio 12 - Situação do Aluno
function exercicio12(media) {
    return media >= 7 ? "Aprovado" : "Reprovado";
}

const media = Number(prompt("Digite a média:"));
alert(verificarAprovacao(media));

// Exercicio 13 - Calculadora Simples
function exercicio13(a, b, operacao) {

    switch (operacao) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Erro: divisão por zero";
        default:
            return "Operação inválida";
    }
}

const num1 = Number(prompt("Primeiro número:"));
const num2 = Number(prompt("Segundo número:"));
const op = prompt("Operação (+ - * /):");

alert("Resultado: " + calculadora(num1, num2, op));

// Exercicio 14 - Limpador de Tela
function exercicio14() {
    for (let i = 0; i < 50; i++) {
        console.log("");
    }
    alert("Tela limpa!");
}
// Exercicio 15 - Refatorando o Desafio
function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b !== 0 ? a / b : "Erro: divisão por zero"; }

function inicio() {
    let opcao;
    do {
        opcao = prompt(
            "1 - Somar\n" +
            "2 - Subtrair\n" +
            "3 - Multiplicar\n" +
            "4 - Dividir\n" +
            "0 - Sair"
        );

        if (opcao === "0") break;
        const a = Number(prompt("Primeiro número:"));
        const b = Number(prompt("Segundo número:"));

        switch (opcao) {
            case "1":
                alert("Resultado: " + somar(a, b));
                break;
            case "2":
                alert("Resultado: " + subtrair(a, b));
                break;
            case "3":
                alert("Resultado: " + multiplicar(a, b));
                break;
            case "4":
                alert("Resultado: " + dividir(a, b));
                break;
            default:
                alert("Opção inválida");
        }

    } while (true);
}

inicio();