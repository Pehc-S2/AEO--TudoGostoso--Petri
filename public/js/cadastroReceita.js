function adicionarReceita() {
    const titulo = document.getElementById("titulo").value.trim();
    const categoria = document.getElementById("categoria").value.trim();
    const tempo = document.getElementById("tempo").value.trim();
    const imagem = document.getElementById("imagem").value.trim();
    const ingredientes = document.getElementById("ingredientes").value.trim();
    const preparo = document.getElementById("preparo").value.trim();

    if (!titulo || !categoria || !tempo || !imagem || !ingredientes || !preparo) {
        alert("Preencha todos os campos!");
        return;
    }

    const receita = {
        id: Date.now(), // gera ID único
        titulo,
        categoria,
        tempo,
        imagem,
        ingredientes: ingredientes.split(","),
        preparo: preparo.split("\n")
    };

    // Recupera lista atual ou cria nova
    const lista = JSON.parse(localStorage.getItem("receitas")) || [];

    // adiciona nova receita
    lista.push(receita);

    // salva de volta no LocalStorage
    localStorage.setItem("receitas", JSON.stringify(lista));

    alert("Receita cadastrada com sucesso!");
    document.getElementById("form-receita").reset();
    
}
