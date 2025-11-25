const receitas = JSON.parse(localStorage.getItem("receitas")) || [];


// pega o id da url
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// busca receita correspondente
const receita = receitas.find(r => r.id == id);

const container = document.getElementById("conteudo");

// se não existir
if (!receita) {
  container.innerHTML = "<h2>Receita não encontrada!</h2>";
} else {
  container.innerHTML = `
    <img id="foto" src="${receita.imagem}">
    <h1>${receita.titulo}</h1>
    <p class="info">${receita.categoria} • ${receita.tempo}</p>

    <h2>Ingredientes</h2>
    <ul>
      ${receita.ingredientes.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h2>Modo de Preparo</h2>
    <ol>
      ${receita.preparo.map(p => `<li>${p}</li>`).join("")}
    </ol>
  `;
}
