// http://localhost:3000/pages/receita.html

async function adicionarRefeicao() {
    const refeicao = document.getElementById('refeicao').value.trim();

    if (!refeicao) {
        alert("Preencha todos os campos!");
        return;
    }

    if (refeicao.length < 4) {
        alert("O nome da refeição precisa ter pelo menos 4 caracteres");
        return;
    }

    if (refeicao.length > 4) {
        alert("Refeição cadastrada com sucesso!");
        document.getElementById("form-refeicao").reset();
    }
}

//

function adicionarCategoria() {
    const categoria = document.getElementById('categoria').value.trim();

    if (!categoria) {
        alert("Preencha todos os campos!");
        return;
    }

    if (categoria.length < 4) {
        alert("O nome da refeição precisa ter pelo menos 4 caracteres");
        return;
    }

    if (categoria.length > 4) {
        alert("Categoria cadastrada com sucesso!");
        document.getElementById("form-categoria").reset();
    }
}

