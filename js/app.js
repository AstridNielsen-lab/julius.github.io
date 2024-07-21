// Array com as cartas do Tarô Cigano
// Array com as cartas do Tarô Cigano
var cartas = [
  { nome: "CAVALEIRO", numero: 1, significado: "Chegada de notícias ou novidades importantes. Pode representar a chegada iminente de algo significativo, seja uma nova fase na vida ou uma oportunidade inesperada.", imagem: "img/cartas/cavaleiro.jpg" },
  { nome: "TREVO", numero: 2, significado: "Símbolo de sorte e oportunidades. Indica momentos auspiciosos e a possibilidade de eventos positivos que podem trazer benefícios inesperados.", imagem: "img/cartas/trevo.jpg" },
  { nome: "NAVIO", numero: 3, significado: "Representa viagens, movimento e mudanças favoráveis. Pode sugerir que um período de estagnação está acabando e que novas oportunidades estão a caminho.", imagem: "img/cartas/navio.jpg" },
  { nome: "CASA", numero: 4, significado: "Reflete o lar, segurança e estabilidade familiar. Pode indicar a necessidade de se concentrar em questões domésticas e garantir que o ambiente ao seu redor esteja harmonioso.", imagem: "img/cartas/casa.jpg" },
  { nome: "ÁRVORE", numero: 5, significado: "Representa saúde, crescimento pessoal e conexão com a natureza. Pode sugerir um período de cura ou o desenvolvimento de novos aspectos na vida pessoal e espiritual.", imagem: "img/cartas/arvore.jpg" },
  { nome: "NUVENS", numero: 6, significado: "Símbolo de desafios e confusão momentânea. Pode indicar incertezas que precisam ser superadas e que a clareza será alcançada após um período de turbulência.", imagem: "img/cartas/nuvens.jpg" },
  { nome: "COBRA", numero: 7, significado: "Representa traição e perigos ocultos. Alerta para manipulações e a necessidade de estar atento a possíveis ameaças disfarçadas.", imagem: "img/cartas/cobra.jpg" },
  { nome: "CAIXÃO", numero: 8, significado: "Simboliza o fim de um ciclo e transformação profunda. Pode indicar a necessidade de deixar algo para trás para dar lugar a uma nova fase ou renovação pessoal.", imagem: "img/cartas/caixao.jpg" },
  { nome: "BUQUÊ", numero: 9, significado: "Reflete presentes e alegrias. Indica um momento de gratidão e celebração pelas coisas boas que estão sendo recebidas na vida.", imagem: "img/cartas/buque.jpg" },
  { nome: "FOICE", numero: 10, significado: "Simboliza mudanças abruptas e decisões difíceis. Pode representar a necessidade de cortar algo que não é mais benéfico, enfrentando separações inevitáveis para crescimento futuro.", imagem: "img/cartas/foice.jpg" },
  { nome: "CHICOTE", numero: 11, significado: "Indica conflitos e a necessidade de autodisciplina. Pode sugerir um período de desafios onde a determinação e a resistência serão cruciais para superar obstáculos.", imagem: "img/cartas/chicote.jpg" },
  { nome: "PÁSSAROS", numero: 12, significado: "Representa comunicação e troca de ideias. Pode indicar a necessidade de esclarecer assuntos pendentes e buscar uma comunicação mais aberta e honesta.", imagem: "img/cartas/passaros.jpg" },
  { nome: "CRIANÇA", numero: 13, significado: "Símbolo de novos começos e inocência. Pode representar a iniciação de projetos novos e a necessidade de abordar a vida com uma mente aberta e receptiva.", imagem: "img/cartas/crianca.jpg" },
  { nome: "RAPOSA", numero: 14, significado: "Representa astúcia e flexibilidade. Indica a necessidade de usar a inteligência e o discernimento para lidar com situações complexas e proteger-se de enganos.", imagem: "img/cartas/raposa.jpg" },
  { nome: "URSO", numero: 15, significado: "Símbolo de força interior e proteção. Reflete a capacidade de liderança e a necessidade de defender a si mesmo e aos outros com coragem e integridade.", imagem: "img/cartas/urso.jpg" },
  { nome: "ESTRELAS", numero: 16, significado: "Representa esperança e inspiração. Indica a presença de orientação espiritual e a visão de um futuro positivo, onde os sonhos e aspirações podem se realizar.", imagem: "img/cartas/estrelas.jpg" },
  { nome: "CEGONHA", numero: 17, significado: "Simboliza mudanças positivas e renovação pessoal. Pode indicar o início de novos projetos e o avanço para uma fase mais gratificante na vida.", imagem: "img/cartas/cegonha.jpg" },
  { nome: "CACHORRO", numero: 18, significado: "Representa lealdade e amizade verdadeira. Indica a presença de relacionamentos fiéis e a importância de confiar nos amigos e familiares próximos.", imagem: "img/cartas/cachorro.jpg" },
  { nome: "TORRE", numero: 19, significado: "Símbolo de isolamento e introspecção. Pode indicar a necessidade de se retirar temporariamente de situações sociais para reflexão e proteção pessoal.", imagem: "img/cartas/torre.jpg" },
  { nome: "JARDIM", numero: 20, significado: "Representa socialização e eventos sociais. Indica a expansão de contatos e a importância de participar de atividades coletivas e interações sociais.", imagem: "img/cartas/jardim.jpg" },
  { nome: "MONTANHA", numero: 21, significado: "Símbolo de desafios significativos e obstáculos. Reflete a necessidade de perseverança e resiliência para superar barreiras e alcançar objetivos.", imagem: "img/cartas/montanha.jpg" },
  { nome: "CAMINHOS", numero: 22, significado: "Representa escolhas importantes e decisões. Indica a necessidade de avaliar cuidadosamente as opções disponíveis e tomar decisões com responsabilidade.", imagem: "img/cartas/caminhos.jpg" },
  { nome: "RATOS", numero: 23, significado: "Símbolo de preocupações e problemas menores. Reflete a necessidade de enfrentar problemas pequenos que podem estar causando estresse e buscar soluções para aliviar a carga emocional.", imagem: "img/cartas/ratos.jpg" },
  { nome: "CORAÇÃO", numero: 24, significado: "Representa amor e conexões emocionais profundas. Indica a presença de paixões intensas e a importância de cultivar relacionamentos significativos e autênticos.", imagem: "img/cartas/coracao.jpg" },
  { nome: "ALIANÇA", numero: 25, significado: "Símbolo de parcerias e compromissos sérios. Reflete a importância de uniões duradouras e a necessidade de firmar acordos e compromissos com seriedade.", imagem: "img/cartas/alianca.jpg" },
  { nome: "LIVROS", numero: 26, significado: "Representa conhecimento e aprendizado contínuo. Indica a busca por saberes profundos e a importância de se dedicar ao estudo e ao crescimento intelectual.", imagem: "img/cartas/livros.jpg" },
  { nome: "CARTA", numero: 27, significado: "Símbolo de comunicação clara e mensagens importantes. Reflete a chegada de notícias reveladoras e a necessidade de estar atento a novas informações e revelações.", imagem: "img/cartas/carta.jpg" },
  { nome: "CIGANO", numero: 28, significado: "Representa o homem cigano, simbolizando viagens e intuição aguçada. Indica a necessidade de seguir a intuição e estar aberto a novas experiências e jornadas.", imagem: "img/cartas/cigano.jpg" },
  { nome: "CIGANA", numero: 29, significado: "Representa a mulher cigana, simbolizando sabedoria intuitiva e conexão espiritual. Indica a importância de confiar na própria sabedoria interior e na conexão com o espiritual.", imagem: "img/cartas/cigana.jpg" },
  { nome: "LÍRIOS", numero: 30, significado: "Símbolo de pureza de intenções e honradez. Reflete a presença de nobreza de sentimentos e a necessidade de manter uma postura íntegra e verdadeira em todas as situações.", imagem: "img/cartas/lirios.jpg" },
  { nome: "SOL", numero: 31, significado: "Representa vitalidade e sucesso. Indica um período de alegria plena e realização, com a presença de energias positivas que trazem prosperidade e felicidade.", imagem: "img/cartas/sol.jpg" },
  { nome: "LUA", numero: 32, significado: "Símbolo de intuição e mistério. Reflete a necessidade de desvendar ilusões e compreender aspectos ocultos da vida, confiando na intuição para encontrar respostas.", imagem: "img/cartas/lua.jpg" },
  { nome: "CHAVE", numero: 33, significado: "Representa oportunidades e soluções práticas. Indica a capacidade de resolver problemas e abrir portas para novas possibilidades e avanços.", imagem: "img/cartas/chave.jpg" },
  { nome: "ALIANÇA", numero: 34, significado: "Símbolo de compromisso e estabilidade. Reflete a importância de manter parcerias e acordos com seriedade e comprometimento.", imagem: "img/cartas/alianca.jpg" },
   { nome: "ÂNCORA", numero: 35, significado: "A carta da Âncora simboliza estabilidade e segurança. Representa a capacidade de se firmar firmemente em suas bases e raízes, oferecendo um sentimento de ancoragem e permanência em meio às mudanças. Indica a necessidade de encontrar estabilidade em aspectos da vida pessoal ou profissional e de manter-se fiel aos próprios princípios e valores para enfrentar adversidades.", imagem: "img/cartas/ancora.jpg" },
  { nome: "CRUZ", numero: 36, significado: "A carta da Cruz simboliza sacrifício e a superação de desafios significativos. Ela reflete a capacidade de enfrentar dificuldades e obstáculos com coragem e determinação, buscando transcendência espiritual através das experiências difíceis. Indica que, apesar dos desafios e provações, há um caminho para a cura e a evolução espiritual, e que o sacrifício pessoal pode levar a uma maior compreensão e crescimento.", imagem: "img/cartas/cruz.jpg" }
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

// Função para sintetizar o texto usando a API de fala
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR'; // Define o idioma para Português

    // Seleciona a voz francesa, se disponível
    const voices = window.speechSynthesis.getVoices();
    const frenchVoice = voices.find(voice => voice.lang === 'fr-FR'); // Seleciona uma voz francesa

    if (frenchVoice) {
        utterance.voice = frenchVoice;
    } else {
        console.warn('Voz francesa não encontrada, usando a voz padrão.');
    }

    window.speechSynthesis.speak(utterance);
}

// Garantir que as vozes estejam carregadas antes de buscar a voz feminina
window.speechSynthesis.onvoiceschanged = function() {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        console.log('Vozes disponíveis:', voices.map(v => v.name));
    }
};

// Função para abrir cartas e ler o resultado
function abrirCartas() {
    const cartasSorteadas = [
        { significado: "A carta do passado revela uma importante lição aprendida." },
        { significado: "A carta do presente mostra a situação atual com detalhes reveladores." },
        { significado: "A carta do futuro prevê possíveis eventos e resultados." }
    ];

    document.getElementById("significado1").textContent = cartasSorteadas[0].significado;
    document.getElementById("significado2").textContent = cartasSorteadas[1].significado;
    document.getElementById("significado3").textContent = cartasSorteadas[2].significado;

    // Lê os resultados após serem exibidos
    setTimeout(() => {
        speakText(`Resultado do Passado: ${cartasSorteadas[0].significado}`);
        speakText(`Resultado do Presente: ${cartasSorteadas[1].significado}`);
        speakText(`Resultado do Futuro: ${cartasSorteadas[2].significado}`);
    }, 500); // Aguarda 500ms para garantir que o conteúdo seja atualizado antes da leitura
}

// Associar a função de abrir cartas ao botão "Abrir Cartas"
document.getElementById("abrirCartasBtn").addEventListener("click", abrirCartas);