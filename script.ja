/**
 * ATIVIDADE PRÁTICA - FUNDAMENTOS DA PROGRAMAÇÃO WEB
 * Objetivo: Validação de formulário e simulação de envio
 */

// Aguarda o DOM (estrutura do HTML) carregar totalmente antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona o formulário pelo ID definido no HTML [cite: 59]
    const form = document.getElementById('meuFormulario');

    // Escuta o evento de "submit" (quando o usuário clica no botão enviar)
    form.addEventListener('submit', function(event) {
        
        // Impede o comportamento padrão de recarregar a página [cite: 61]
        event.preventDefault();

        // Captura os valores dos inputs e remove espaços em branco extras com .trim()
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // --- VALIDAÇÃO OBRIGATÓRIA (Requisito seção 5 do roteiro) --- [cite: 59]
        
        // Verifica se todos os campos estão preenchidos
        if (nome === "" || email === "" || mensagem === "") {
            alert("Erro: Todos os campos (nome, e-mail e mensagem) devem ser preenchidos.");
            return; // Interrompe a execução se houver erro
        }

        // Validação de formato de e-mail (Requisito: usuario@dominio.com) 
        // O regex abaixo verifica se existe texto antes do @, depois do @ e um ponto (.)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Erro: Por favor, informe um e-mail em formato válido (exemplo: usuario@dominio.com).");
            return;
        }

        // --- SIMULAÇÃO DE ENVIO (Requisito seção 5 do roteiro) --- [cite: 61]
        
        // Exibe mensagem de confirmação através de um alerta
        alert("Mensagem enviada com sucesso! Em breve entraremos em contato, " + nome + ".");
        
        // Limpa os campos do formulário após o sucesso [cite: 61]
        form.reset();
    });
});