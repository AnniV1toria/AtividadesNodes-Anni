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

const idadeComprador = 19;

if (idadeComprador < 18) {
  console.log("Compra negada!! Idade não permitida. Chame seu responsável")
}

if (idadeComprador >= 18) {
console.log("Parabéns! Compra realizada com sucesso. Boa viagem!")
  }
