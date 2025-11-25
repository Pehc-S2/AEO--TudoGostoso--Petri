const receitas = JSON.parse(localStorage.getItem("receitas")) || [];

const lista = document.getElementById("lista-receitas");
const campoBusca = document.getElementById("busca");
const filtroCategoria = document.getElementById("filtro-categoria");

// Select de categorias
function carregarCategorias() {
    const categorias = [...new Set(receitas.map(r => r.categoria))];

    categorias.forEach(cat => {
        filtroCategoria.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
}

// Renderiza receitas
function renderizarReceitas() {
    lista.innerHTML = "";

    let receitasFiltradas = receitas.filter(receita =>
        receita.titulo.toLowerCase().includes(campoBusca.value.toLowerCase())
    );

    if (filtroCategoria.value !== "") {
        receitasFiltradas = receitasFiltradas.filter(receita =>
            receita.categoria === filtroCategoria.value
        );
    }

    if (receitasFiltradas.length === 0) {
        lista.innerHTML = "<p>Nenhuma receita encontrada.</p>";
        return;
    }

    receitasFiltradas.forEach(receita => {
        lista.innerHTML += `
      <div class="card" onclick="abrirDetalhes(${receita.id})">
        <img src="${receita.imagem}">
        <div class="card-info">
          <h3>${receita.titulo}</h3>
          <p>${receita.categoria} • ${receita.tempo}</p>
        </div>
      </div>
    `;
    });
}

// Eventos ao digitar ou trocar filtro
campoBusca.addEventListener("input", () => renderizarReceitas());
filtroCategoria.addEventListener("change", () => renderizarReceitas());

carregarCategorias();
renderizarReceitas();

function abrirDetalhes(id) {
    window.location.href = `detalhe.html?id=${id}`;
}


