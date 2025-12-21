/*
  Você está desenvolvendo um sistema metereológico para informar sobre o clima do dia. Com base
  na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:

  - Menor que 15: "Frio"
  - De 15 a 25: "Agradável"
  - Acima de 25: "Quente"

  Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente

  Exemplo de entrada:
  `const temperatura = 22;`

  Saída esperada:

  Se a temperatura for por exemplo 10:
  `Frio`

  Se for 22:
  `Agradável`

  Se for 30:
  `Quente`
*/

// Declara uma variável com a tempreatura
const temperatura = 28;

if (temperatura < 15) {
  console.log("Frio");
} else if (temperatura >= 15 && temperatura <= 25) {
  console.log("Agradável");
} else {
  console.log("Quente");
}
