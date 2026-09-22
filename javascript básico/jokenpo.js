const opcoes = ["pedra", "papel", "tesoura"];

// Escolha do usuário e do computador
const escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura:").toLowerCase();
const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

console.log(`Você escolheu: ${escolhaUsuario}`);
console.log(`O computador escolheu: ${escolhaComputador}`);

// Determinando o vencedor
if (escolhaUsuario === escolhaComputador) {
    console.log("Empate!");
} else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
) {
    console.log("Você venceu!");
} else {
    console.log("O computador venceu!");
}