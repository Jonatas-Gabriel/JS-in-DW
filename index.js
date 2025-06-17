const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir que o Express leia o corpo de requisições POST como texto puro.
// Isso é essencial para o nosso Utilitário de Texto.
app.use(express.text());

// --- Utilitário de Texto (POST) ---

// Rota para converter texto para minúsculas
app.post('/lowercase', (req, res) => {
  const inputText = req.body;
  
  if (!inputText) {
    return res.status(400).send('Erro: O corpo da requisição está vazio.');
  }
  
  const outputText = inputText.toLowerCase();
  res.status(200).send(outputText);
});

// Rota para converter texto para maiúsculas
app.post('/uppercase', (req, res) => {
  const inputText = req.body;

  if (!inputText) {
    return res.status(400).send('Erro: O corpo da requisição está vazio.');
  }

  const outputText = inputText.toUpperCase();
  res.status(200).send(outputText);
});


// --- Utilitário de Número (GET) ---

// Função auxiliar para processar os números da query string
const parseNumbers = (req, res) => {
  const numbersQuery = req.query.numbers;

  if (!numbersQuery) {
    res.status(400).send('Erro: Forneça os números através da query string "numbers". Ex: /minimum?numbers=10,1,100');
    return null;
  }
  
  const numberArray = numbersQuery.split(',')
                                  .map(item => parseFloat(item.trim()))
                                  .filter(num => !isNaN(num));

  if (numberArray.length === 0) {
    res.status(400).send('Erro: Nenhum número válido foi fornecido na query string.');
    return null;
  }

  return numberArray;
};

// Rota para encontrar o valor mínimo
app.get('/minimum', (req, res) => {
  const numbers = parseNumbers(req, res);
  
  if (numbers) {
    const min = Math.min(...numbers);
    res.status(200).send(min.toString());
  }
});

// Rota para encontrar o valor máximo
app.get('/maximum', (req, res) => {
  const numbers = parseNumbers(req, res);

  if (numbers) {
    const max = Math.max(...numbers);
    res.status(200).send(max.toString());
  }
});


// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor de utilitários rodando em http://localhost:${port}`);
  console.log('--- Rotas de Texto (use POST) ---');
  console.log(`http://localhost:${port}/lowercase`);
  console.log(`http://localhost:${port}/uppercase`);
  console.log('--- Rotas de Número (use GET) ---');
  console.log(`http://localhost:${port}/minimum?numbers=...`);
  console.log(`http://localhost:${port}/maximum?numbers=...`);
});