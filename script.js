//Variaveis
let nomeAluno;
let sobrenomeAluno;
let anoNascimentoAluno;
let idadeAluno;

//Constantes
const NOME_ESCOLA = "Senai";
const ANO_ATUAL = "2023";

//Prompt 
nomeAluno = prompt("digite seu primeiro nome:");
sobrenomeAluno = prompt("digite seu sobrenome");
let nomeCompletoAluno = nomeAluno + " " + sobrenomeAluno;
anoNascimentoAluno = parseInt(prompt("Digite o ano de seu nascimento"));
idadeAluno = ANO_ATUAL - anoNascimentoAluno

alert("seu nome é " + nomeCompletoAluno + " e voce estuda no" + " " + NOME_ESCOLA + ", sua idade é " + idadeAluno + " ano(s)." );