const loginForm = document.getElementById('login-form');
const outputDiv = document.getElementById('output');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;

  // Verificar login no servidor (não implementado aqui)

  // Chamada para a IA após o login
  const userInput = prompt('Digite sua pergunta:');
  fetchAIResponse(userInput);
});

function fetchAIResponse(question) {
  // Aqui seria a integração com Dialogflow, porém não está implementado neste exemplo
  const response = '[GPT]: Desculpe, mas não tenho conhecimento para responder a essa pergunta.';

  displayResponse(response);
}

function displayResponse(response) {
  outputDiv.innerHTML = `<p>${response}</p>`;
}
