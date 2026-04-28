/**
 * SCRIPT DE INTERAÇÃO - PORTFÓLIO ACADÊMICO
 * Aluno: Vinícius Eduardo Teixeira
 * RU: 5167526
 */

// 1. Função do Menu: Abre e fecha a lista ao clicar no ícone
function toggleMenu() {
    const menu = document.getElementById("menu-list");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// 2. Função de Modo Escuro: Alterna as cores e troca o ícone
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.getElementById("theme-icon");
    
    if (document.body.classList.contains("dark-mode")) {
        icon.src = "https://img.icons8.com/ios/50/moon-symbol.png";
    } else {
        icon.src = "https://img.icons8.com/ios/50/sun--v1.png";
    }
}

// 3. Controle do Carrossel de Projetos
let projetoIndex = 0;

function mudarProjeto(direcao) {
    const projetos = document.querySelectorAll(".projeto-item");
    
    // Se não encontrar projetos, sai da função para não dar erro
    if (projetos.length === 0) return;

    // Esconde o projeto atual
    projetos[projetoIndex].classList.remove("active");
    
    // Calcula o próximo índice (vai e volta em loop)
    projetoIndex = (projetoIndex + direcao + projetos.length) % projetos.length;
    
    // Mostra o novo projeto selecionado
    projetos[projetoIndex].classList.add("active");
}

// 4. Função para Envio de E-mail via Formulário
function enviarMensagem() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }
    
    const assunto = "Contato pelo Portfólio - Vinícius Teixeira";
    const corpo = `Olá, meu nome é ${nome}.%0A%0A${mensagem}%0A%0AMeu e-mail para retorno: ${email}`;
    
    // Atualizado com o seu e-mail do Gmail
    window.location.href = `mailto:viniciuseduardoteixeira67@gmail.com?subject=${assunto}&body=${corpo}`;
    
    alert("Mensagem preparada! Verifique seu aplicativo de e-mail.");
}