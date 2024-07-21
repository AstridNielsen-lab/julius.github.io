const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

const app = express();
const port = 3000; // Ou qualquer outra porta que você escolher

app.use(bodyParser.json());

// Obtenha a chave da API das variáveis de ambiente
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/api/openai', async (req, res) => {
    const userInput = req.body.userInput;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: userInput
                }
            ],
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const botMessage = response.data.choices[0].message.content.trim();
        res.send(botMessage);
    } catch (error) {
        console.error('Erro ao se comunicar com a API da OpenAI:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
