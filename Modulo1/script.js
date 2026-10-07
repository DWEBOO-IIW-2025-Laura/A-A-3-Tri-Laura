const nome = "Laura";
const AnodeNascimento = 2010;
const cidade = "Assis Chateubriand"; 

const data = new Date ();
const AnoAtual = data.getFullYear();

const idade =  AnoAtual - AnodeNascimento

const textoResultado = `Olá, meu nome é ${nome}, tenho ${idade} anos e nasci em ${cidade}`;

const saida = document.getElementById("saida");
saida.innerText = textoResultado