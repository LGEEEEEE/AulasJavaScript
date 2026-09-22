// Gera um número aleatório de 1 a 20
const numeroSecreto = Math.floor(Math.random() * 20) + 1;
let palpite = 0;

console.log("--- Jogo de Adivinhação ---");

while (palpite !== numeroSecreto) {
    palpite = Number(prompt("Adivinhe o número (de 1 a 20):"));

    if (palpite < numeroSecreto) {
        console.log("O número secreto é MAIOR!");
    } else if (palpite > numeroSecreto) {
        console.log("O número secreto é MENOR!");
    } else {
        console.log("Parabéns! Você acertou o número secreto!");
    }
}