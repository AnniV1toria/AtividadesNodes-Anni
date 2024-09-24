const prompt = require ('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Anni Vitória Lux Cois ";
const anoNascimento = 2007;
let anoAtual = 2024;
const idade = 17;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade + ".");

let AnoAtual = 2024;
let Idade = 17;
const NomeCompleto = "Anni Vitória Lux Cois ";
const Faculdade = "Pedagogia";

console.log("Olá meu nome é " + NomeCompleto + ",tenho " + Idade + " anos " +  "estamos no ano de " + AnoAtual + " gostaria de fazer faculdade na área de " + Faculdade);

console.log(`oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento}`)

const listaDeViagens = new Array( 
`Amsterdam` ,
`Alemanha` ,
`Paris` ,
`Tóquio` ,
  )

console.log(listaDeViagens);

console.log(listaDeViagens[3]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(1,2);
console.log(listaDeViagens);

var nomeComprador = entrada("Qual é o seu nome? ");
var idadeComprador = entrada("Qual é a sua idade? ");

if (idadeComprador < 18) {
  
  console.log(`Olá ${nomeComprador} já que sua idade é ${idadeComprador} infelizmente não podemos permitir a compra. Chame seu resposável para finalizar a compra :) `); 
}

if (idadeComprador >= 18) {
console.log(`Bem vindo(a) ${nomeComprador} ! Dê inicio a sua compra vericando os destinos disponiveís. Os destinos disponiveís são: Amsterdam, Alemanha, Paris e Tóquio`)
  }

