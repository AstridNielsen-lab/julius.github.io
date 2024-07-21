const express = require('express');
const { OpenAI } = require('openai');
require('dotenv').config();

const router = express.Router();
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// Rota para receber perguntas e retornar respostas da OpenAI
router.post('/', async (req, res) => {
  const { userInput } = req.body;

  // Verifica se o input do usuário foi fornecido
  if (!userInput) {
    return res.status(400).json({ error: 'Pergunta não fornecida' });
  }

  try {
    // Faz a chamada para a API da OpenAI
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Modelo correto para o GPT-3.5 Turbo
      messages: [{ role: 'user', content: userInput }],
      max_tokens: 150,
    });
    
    // Obtém a resposta da API
    const answer = response.choices[0].message.content.trim();
    
    // Envia a resposta para o cliente
    res.json({ answer });
  } catch (error) {
    console.error('Erro ao acessar a API OpenAI:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
