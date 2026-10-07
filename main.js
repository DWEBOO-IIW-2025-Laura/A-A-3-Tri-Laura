console.log("com sole ponto tronco");

let nomeletiavel = "valor da letiável";
let outraletiavel = "valor da outra letiável";
let letiavelNum = "1980";
let cheiroNaSala = false
let letiavelIndefinida;

console.log(nomeletiavel);
console.log(outraletiavel);
console.log(letiavelNum);
console.log(cheiroNaSala);
console.log(letiavelIndefinida);

const texto = "Pense em um texto lindo aqui";
const num = 42;
const ativo = true;

//dia 07-10

console.log(typeof texto);
console.log(typeof num);
console.log(typeof ativo);

const aluno = "Rafaella";
const conceito1T = 8.5;
const conceito2T = 2.0;
const conceito3T = 5.0;

const media = (conceito1T + conceito2T + conceito3T) / 3;
const resultado = media >=7 ? "Aprovado" : "Reprovado";

console.log(`O aluno ${aluno} obteve media ${media.toFixed(2)} e foi ${resultado}`);
document.getElementById("saida").textContent = `O aluno ${aluno} obteve media ${media.toFixed(2)} e foi ${resultado}`