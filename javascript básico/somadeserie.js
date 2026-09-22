const n = Number(prompt("Digite a quantidade de termos:"));
let soma = 0;
let termosStr = [];
let termoAtual = "";

for (let i = 1; i <= n; i++) {
    termoAtual += "1";
    let valorNumerico = Number(termoAtual);
    soma += valorNumerico;
    termosStr.push(termoAtual);
}

// Exibe a série e o resultado formatado
console.log(termosStr.join(" + "));
console.log(`A soma é: ${soma.toLocaleString('pt-BR')}`);