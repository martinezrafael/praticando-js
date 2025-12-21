/*
  Você está desenvolvendo um sistema para verificação de compatibilidade de frutas em um processo
  de preparo de sucos. O sistema precisa verificar se o tipo de fruta informado é compatível com o tipo
  esperado, de acordo com uma receita

  - O suco pode ser feito somente com "laranja" ou "abacaxi".
  - Qualquer outra fruta que não seja "laranja" ou "abacaxi" deve gerar uma mensagem de erro,
  informando que a fruta não é compatível.

  Crie um programa que, dado o nome da fruta, verifique se ela é compatível com a receita.

  Exemplo de entrada:
  `const fruta = "Maçã"`

  Saída esperada:
  `Fruta incompátivel para a receita.`

  Ou caso seja "laranja" ou "abacaxi":
  `Fruta compátivel para a receita`
*/

const fruta = "Manga";

if (fruta === "Laranja" || fruta === "Abacaxi") {
  console.log("Fruta compátivel para a receita");
} else {
  console.log("Fruta incompátivel para a receita.");
}

//ou

if (fruta !== "Laranja" && fruta !== "Abacaxi") {
  console.log("Fruta incompátivel para a receita.");
} else {
  console.log("Fruta compátivel para a receita");
}
