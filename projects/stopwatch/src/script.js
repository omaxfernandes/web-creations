// Obtém referências para elementos do DOM
const timerEl = document.getElementById("timer"); // Elemento de exibição do temporizador
const startButtonEl = document.getElementById("start"); // Botão Iniciar
const stopButtonEl = document.getElementById("stop"); // Botão Parar
const resetButtonEl = document.getElementById("reset"); // Botão Reiniciar

// Variáveis para controlar o tempo
let startTime = 0; // Tempo de início
let elapsedTime = 0; // Tempo decorrido
let timerInterval; // Intervalo para atualizar o temporizador

// Função para iniciar o temporizador
function startTimer() {
  // Define o tempo de início como o tempo atual menos o tempo decorrido
  startTime = Date.now() - elapsedTime;

  // Atualiza o temporizador a cada 10 milissegundos
  timerInterval = setInterval(() => {
    // Calcula o tempo decorrido desde o início
    elapsedTime = Date.now() - startTime;

    // Exibe o tempo formatado no elemento do temporizador
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  // Desabilita o botão Iniciar e habilita o botão Parar
  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

// Função para formatar o tempo em horas, minutos, segundos e milissegundos
function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

// Função para parar o temporizador
function stopTimer() {
  // Interrompe o intervalo de atualização do temporizador
  clearInterval(timerInterval);

  // Habilita o botão Iniciar e desabilita o botão Parar
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

// Função para reiniciar o temporizador
function resetTimer() {
  // Interrompe o intervalo de atualização do temporizador
  clearInterval(timerInterval);

  // Zera o tempo decorrido e redefine a exibição do temporizador para "00:00:00"
  elapsedTime = 0;
  timerEl.textContent = "00:00:00";

  // Habilita o botão Iniciar e desabilita o botão Parar
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

// Adiciona ouvintes de eventos aos botões
startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
