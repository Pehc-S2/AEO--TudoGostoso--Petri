// http://localhost:3000/pages/cadastro.html

const API_USUARIO = '/api/usuarios';

async function adicionarUsuario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const data_nascimento = document.getElementById('data').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!nome || !email || !data_nascimento || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    if (nome.length < 3) {
        alert("O nome precisa ter pelo menos 3 caracteres");
        return;
    }

    // Regex Serve para verificar se uma string segue um formato específico
    // Aqui: "[^\s@]+" pede pelo menos um caracter sem ser espaço ou @
    // Aqui: "@" um arroba obrigatório
    // Aqui: "\." um ponto obrigatório
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres");
        return;
    }

    if (nome.length >= 3 && senha.length >= 6) {
        alert("Usuário cadastrado com sucesso!");
        document.getElementById("form-cadastro").reset();
    }
}
