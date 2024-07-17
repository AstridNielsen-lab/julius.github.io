// Array com as cartas do Tarô Cigano
var cartas = [
  { nome: "CAVALEIRO", numero: 1, significado: "Homem trazendo novidade, coisas chegando", imagem: "img/cartas/cavaleiro.jpg" },
  { nome: "TREVO", numero: 2, significado: "Sorte, bons presságios, oportunidades", imagem: "img/cartas/trevo.jpg" },
  { nome: "NAVIO", numero: 3, significado: "Viagem, movimento, mudanças", imagem: "img/cartas/navio.jpg" },
  { nome: "CASA", numero: 4, significado: "Lar, segurança, estabilidade", imagem: "img/cartas/casa.jpg" },
  { nome: "ÁRVORE", numero: 5, significado: "Saúde, crescimento, conexão com a natureza", imagem: "img/cartas/arvore.jpg" },
  { nome: "NUVENS", numero: 6, significado: "Incerteza, confusão, problemas", imagem: "img/cartas/nuvens.jpg" },
  { nome: "COBRA", numero: 7, significado: "Trapaças, traição, perigos ocultos", imagem: "img/cartas/cobra.jpg" },
  { nome: "CAIXÃO", numero: 8, significado: "Fim de um ciclo, transformação, renascimento", imagem: "img/cartas/caixao.jpg" },
  { nome: "BUQUÊ", numero: 9, significado: "Presente, alegria, gratidão", imagem: "img/cartas/buque.jpg" },
  { nome: "FOICE", numero: 10, significado: "Mudança brusca, decisões difíceis, separação", imagem: "img/cartas/foice.jpg" },
  { nome: "CHICOTE", numero: 11, significado: "Conflito, punição, disciplina", imagem: "img/cartas/chicote.jpg" },
  { nome: "PÁSSAROS", numero: 12, significado: "Conversas, comunicação, troca de ideias", imagem: "img/cartas/passaros.jpg" },
  { nome: "CRIANÇA", numero: 13, significado: "Novos começos, inocência, juventude", imagem: "img/cartas/crianca.jpg" },
  { nome: "RAPOSA", numero: 14, significado: "Astúcia, esperteza, situações ambíguas", imagem: "img/cartas/raposa.jpg" },
  { nome: "URSO", numero: 15, significado: "Força, proteção, poder", imagem: "img/cartas/urso.jpg" },
  { nome: "ESTRELAS", numero: 16, significado: "Esperança, inspiração, guia", imagem: "img/cartas/estrelas.jpg" },
  { nome: "CEGONHA", numero: 17, significado: "Mudanças positivas, nascimento, transformação", imagem: "img/cartas/cegonha.jpg" },
  { nome: "CACHORRO", numero: 18, significado: "Lealdade, amizade, proteção", imagem: "img/cartas/cachorro.jpg" },
  { nome: "TORRE", numero: 19, significado: "Isolamento, solidão, proteção", imagem: "img/cartas/torre.jpg" },
  { nome: "JARDIM", numero: 20, significado: "Socialização, encontros, eventos", imagem: "img/cartas/jardim.jpg" },
  { nome: "MONTANHA", numero: 21, significado: "Obstáculos, desafios, resistência", imagem: "img/cartas/montanha.jpg" },
  { nome: "CAMINHOS", numero: 22, significado: "Escolhas, decisões, direções", imagem: "img/cartas/caminhos.jpg" },
  { nome: "RATOS", numero: 23, significado: "Perdas, preocupações, problemas", imagem: "img/cartas/ratos.jpg" },
  { nome: "CORAÇÃO", numero: 24, significado: "Amor, relacionamentos, paixão", imagem: "img/cartas/coracao.jpg" },
  { nome: "ALIANÇA", numero: 25, significado: "Compromisso, parcerias, união", imagem: "img/cartas/alianca.jpg" },
  { nome: "LIVROS", numero: 26, significado: "Conhecimento, estudo, aprendizado", imagem: "img/cartas/livros.jpg" },
  { nome: "CARTA", numero: 27, significado: "Notícias, comunicação escrita, mensagens", imagem: "img/cartas/carta.jpg" },
  { nome: "CIGANO", numero: 28, significado: "Homem cigano, viajante, intuição", imagem: "img/cartas/cigano.jpg" },
  { nome: "CIGANA", numero: 29, significado: "Mulher cigana, sabedoria, intuição", imagem: "img/cartas/cigana.jpg" },
  { nome: "LÍRIOS", numero: 30, significado: "Pureza, nobreza, honra", imagem: "img/cartas/lirios.jpg" },
  { nome: "SOL", numero: 31, significado: "Vitalidade, sucesso, felicidade", imagem: "img/cartas/sol.jpg" },
  { nome: "LUA", numero: 32, significado: "Intuição, mistério, ilusões", imagem: "img/cartas/lua.jpg" },
  { nome: "CHAVE", numero: 33, significado: "Oportunidades, soluções, revelações", imagem: "img/cartas/chave.jpg" },
  { nome: "PEIXES", numero: 34, significado: "Abundância, prosperidade, intuição", imagem: "img/cartas/peixes.jpg" },
  { nome: "ÂNCORA", numero: 35, significado: "Estabilidade, segurança, firmeza", imagem: "img/cartas/ancora.jpg" },
  { nome: "CRUZ", numero: 36, significado: "Sacrifício, superação, espiritualidade", imagem: "img/cartas/cruz.jpg" }
];

// Função para sortear as cartas
function sortearCartas() {
  document.querySelector('.cards').classList.toggle('shuffle');
  var cartasSorteadas = [];

  // Sortear três cartas aleatórias
  while (cartasSorteadas.length < 3) {
    var cartaSorteada = cartas[Math.floor(Math.random() * cartas.length)];

    // Verificar se a carta já foi sorteada
    if (!cartasSorteadas.includes(cartaSorteada)) {
      cartasSorteadas.push(cartaSorteada);
    }
  }

  // Exibir as cartas sorteadas no HTML
  document.getElementById("carta1").textContent = cartasSorteadas[0].nome + " - " + cartasSorteadas[0].numero;
  document.getElementById("carta2").textContent = cartasSorteadas[1].nome + " - " + cartasSorteadas[1].numero;
  document.getElementById("carta3").textContent = cartasSorteadas[2].nome + " - " + cartasSorteadas[2].numero;

  // Adicionar as imagens das cartas
  document.getElementById("imagemCarta1").src = "img/cartas/" + cartasSorteadas[0].nome + ".jpg";
  document.getElementById("imagemCarta2").src = "img/cartas/" + cartasSorteadas[1].nome + ".jpg";
  document.getElementById("imagemCarta3").src = "img/cartas/" + cartasSorteadas[2].nome + ".jpg";

  // Exibir os significados das cartas
  document.getElementById("significado1").textContent = cartasSorteadas[0].significado;
  document.getElementById("significado2").textContent = cartasSorteadas[1].significado;
  document.getElementById("significado3").textContent = cartasSorteadas[2].significado;
}

// Associar a função de sorteio ao botão "Sortear"
document.getElementById("sortearBtn").addEventListener("click", sortearCartas);
