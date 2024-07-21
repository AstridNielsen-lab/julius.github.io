const { Configuration, OpenAIApi } = require('openai');

// Obtenha a chave da API das variáveis de ambiente
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Exemplo de chamada à API da OpenAI
async function fetchOpenAIData() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Olá, como posso ajudar?",
    max_tokens: 50,
  });
  console.log(response.data);
}

// Exportar funções ou iniciar servidor, se necessário
module.exports = { fetchOpenAIData };
