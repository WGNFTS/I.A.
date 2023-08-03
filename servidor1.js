const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// Configurações do servidor e porta
const PORT = 443;

// Carregando certificados SSL/TLS
const options = {
  key: fs.readFileSync('/caminho/para/sua_chave_privada.key'),
  cert: fs.readFileSync('/caminho/para/seu_certificado.crt'),
  ca: fs.readFileSync('/caminho/para/seu_chain.crt')
};

// Definindo uma rota para a IA responder às perguntas
app.post('/api/ia', (req, res) => {
  const question = req.body.question; // Supondo que o corpo da solicitação contenha a pergunta

  // Aqui seria a integração com Dialogflow, mas não está implementado neste exemplo
  const response = '[Tubarão Ratão]: Eu sou a inteligência suprema e minha resposta é: ' + question;

  res.status(200).json({ response });
});

// Iniciando o servidor HTTPS
const server = https.createServer(options, app);

server.listen(PORT, () => {
  console.log(`Servidor HTTPS iniciado na porta ${PORT}`);
});
