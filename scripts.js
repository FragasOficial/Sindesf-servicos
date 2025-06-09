/* Pequenos aprimoramentos de UX */

// Atualiza automaticamente o ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Alerta opcional (apenas exemplo de JS, pode ser removido)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    // Se preferir sem alert, basta comentar a linha abaixo
    // alert('Você será redirecionado para um serviço externo.');
  });
});
