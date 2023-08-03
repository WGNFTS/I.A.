const apiUrl = 'https://exemplo.com/api/ia';

function fetchAIResponse(question) {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question: question })
  })
  .then(response => response.json())
  .then(data => {
    displayResponse(data.response);
  })
  .catch(error => {
    displayResponse('[GPT]: Desculpe, mas ocorreu um erro ao processar sua pergunta.');
  });
}
