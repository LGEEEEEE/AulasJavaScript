const linhas = Number(prompt("Digite o número de linhas para o triângulo:"));

console.log("Triângulo de asteriscos:");
for (let i = 1; i <= linhas; i++) {
    console.log("*".repeat(i));
}