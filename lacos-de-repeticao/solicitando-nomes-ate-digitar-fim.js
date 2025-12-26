/*
  Você está criando um sistema de cadastro em que a pessoa usuária pode cadastrar quantos nomes
  quiser, um  por vez. O processo deve continuar até que seja encontrado a palavra "fim" (com letras minúsculas).

  Crie um programa que com base em uma entrada pré-definida de nomes, exiba cada um deles, e
  encerre somente quando encontrar o valor "fim".

  Exemplo de Entrada:
  `const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];`

  Saída esperada:
  ```
  Nome: Ana
  Nome: Bruno
  Nome: Carla
  ```
*/

// Solução com for

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];

for (let i = 0; i < entradas.length; i++) {
  if (entradas[i] === "fim") {
    return;
  }
  console.log(`Nome: ${entradas[i]}`);
}

// Solução com While

let i = 0;

while (entradas[i] !== "fim") {
  console.log("Nome:", entradas[i]);
  i++;
}
