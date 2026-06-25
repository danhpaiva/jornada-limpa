document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const inputData = document.getElementById('data-input');
  const elementoDiasLimpos = document.getElementById('dias-limpos');
  const elementoMensagem = document.getElementById('mensagem');

  // --- Recuperação de Estado ---
  const savedTheme = localStorage.getItem('theme');
  const savedDate = localStorage.getItem('dataInicio');

  // --- Lógica de Tema ---
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

  if (isDark) {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }

  // --- Lógica de Animação ---
  let intervaloGlobal = null;

  function animarContador(alvo) {
    if (intervaloGlobal) clearInterval(intervaloGlobal);
    let atual = 0;
    const incremento = alvo / 50;

    intervaloGlobal = setInterval(() => {
      atual += incremento;
      if (atual >= alvo) {
        clearInterval(intervaloGlobal);
        elementoDiasLimpos.textContent = alvo;
      } else {
        elementoDiasLimpos.textContent = Math.floor(atual);
      }
    }, 20);
  }

  // --- Configuração Inicial ---
  inputData.value = savedDate || new Date().toISOString().split('T')[0];

  // --- Eventos ---
  toggleBtn.addEventListener('click', () => {
    const isDarkNow = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    toggleBtn.textContent = isDarkNow ? '☀️' : '🌙';
  });

  inputData.addEventListener('change', (e) => {
    localStorage.setItem('dataInicio', e.target.value);
    atualizarContadorEMensagem();
  });

  // --- Lógica Principal ---
  function atualizarContadorEMensagem() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dataInicio = new Date(inputData.value + 'T00:00:00');

    if (dataInicio > hoje) {
      elementoDiasLimpos.textContent = "0";
      elementoMensagem.textContent = "Sua jornada começará em breve. Estamos prontos para quando você estiver!";
      return;
    }

    const dias = Math.floor((hoje - dataInicio) / (1000 * 60 * 60 * 24));
    animarContador(dias);

    // --- Mensagens ---
    let mensagem = "";
    if (dias === 0) mensagem = "Ainda não chegamos a 1 dia, mas o hoje é a maior vitória!";
    else if (dias === 1) mensagem = "Primeiro Sol! Um dia incrível de renovação. Continue firme!";
    else if (dias <= 7) mensagem = `Semana de Descoberta! Cada ${dias}º dia é um passo gigantesco.`;
    else if (dias <= 30) mensagem = `Força e Coragem! ${dias} dias de superação contínua.`;
    else if (dias <= 90) mensagem = `Novo Ciclo! ${dias} dias de liberdade são um presente.`;
    else if (dias <= 180) mensagem = `Voando Alto! ${dias} dias de pura resiliência e força.`;
    else if (dias <= 364) mensagem = `Quase um Ano! O espelho reflete uma nova versão de você. ${dias} dias!`;
    else {
      const anosTotal = Math.floor(dias / 365);
      mensagem = `✨ ${dias} DIAS: ${anosTotal} ${anosTotal > 1 ? 'Anos' : 'Ano'} de Milagre! A vitória é sua.`;
    }

    elementoMensagem.textContent = mensagem;
  }

  atualizarContadorEMensagem();
});