// --- BUSCANDO ELEMENTOS NA ÁRVORE DOM E GUARDANDO EM VARIÁVEIS ---
        
        // Elementos do Contador
        const btnIncrementar = document.getElementById('btn-incrementar');
        const btnDecrementar = document.getElementById('btn-decrementar');
        const contadorDisplay = document.getElementById('contador-display');
        let contador = 0;

        // Elementos do Texto Dinâmico e Caracteres
        const inputTexto = document.getElementById('input-texto');
        const contadorCaracteres = document.getElementById('contador-caracteres');
        const containerParagrafos = document.getElementById('container-paragrafos');

        // Elementos da Lista
        const tipoLista = document.getElementById('tipo-lista');
        const btnAddLista = document.getElementById('btn-add-lista');
        const containerListas = document.getElementById('container-listas');

        // Elemento Reset
        const btnResetar = document.getElementById('btn-resetar');

        // --- EVENTOS E ESTRUTURAS DE CONTROLE ---

        // 1. Contador de cliques (Incrementar)
        btnIncrementar.addEventListener('click', () => {
            contador++;
            contadorDisplay.innerText = contador;
        });

        // 1. Contador de cliques (Decrementar com validação)
        btnDecrementar.addEventListener('click', () => {
            if (contador > 0) {
                contador--;
                contadorDisplay.innerText = contador;
            } else {
                alert("O contador já está em zero!");
            }
        });

        // 3. Contador de caracteres (Ignorando espaços)
        inputTexto.addEventListener('input', (evento) => {
            const textoDigitado = evento.target.value;
            // O regex /\s/g encontra todos os espaços e os remove antes de contar o tamanho
            const textoSemEspacos = textoDigitado.replace(/\s/g, '');
            contadorCaracteres.innerText = textoSemEspacos.length;
        });

        // 2. Adicionar texto dinâmico (Ao pressionar Enter)
        inputTexto.addEventListener('keydown', (evento) => {
            if (evento.key === 'Enter') {
                const texto = inputTexto.value.trim(); // Pega o valor e remove espaços em branco extras
                
                if (texto !== "") {
                    // Cria o elemento <p> e adiciona o texto
                    const novoParagrafo = document.createElement('p');
                    novoParagrafo.innerText = texto;
                    
                    // Insere na div container
                    containerParagrafos.appendChild(novoParagrafo);
                    
                    // Limpa o input e zera o contador de caracteres
                    inputTexto.value = "";
                    contadorCaracteres.innerText = "0";
                }
            }
        });

        // 4. Adicionar novo item (Lista Ordenada/Não Ordenada)
        btnAddLista.addEventListener('click', () => {
            const escolha = tipoLista.value; // 'ul' ou 'ol'
            
            // Cria o elemento correspondente à escolha (ul ou ol)
            const novaLista = document.createElement(escolha);
            
            // Cria alguns itens de lista (li) de exemplo para popular a lista criada
            for (let i = 1; i <= 3; i++) {
                const itemLista = document.createElement('li');
                itemLista.innerText = `Item ${i}`;
                novaLista.appendChild(itemLista);
            }
            
            // Insere a lista finalizada na tela
            containerListas.appendChild(novaLista);
        });

        // 5. Botão de reset (Limpando as interações)
        btnResetar.addEventListener('click', () => {
            // Zera as variáveis numéricas
            contador = 0;
            contadorDisplay.innerText = contador;
            
            // Limpa o campo de texto
            inputTexto.value = "";
            contadorCaracteres.innerText = "0";
            
            // Limpa os elementos HTML filhos (apagando da tela)
            containerParagrafos.innerHTML = "";
            containerListas.innerHTML = "";
        });