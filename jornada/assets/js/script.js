document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const inputData = document.getElementById('data-input');
  const elementoDiasLimpos = document.getElementById('dias-limpos');
  const elementoMensagem = document.getElementById('mensagem');
  
  // Elementos da barra de progresso
  const elementoProximoNome = document.getElementById('proximo-marco-nome');
  const elementoDiasRestantes = document.getElementById('dias-restantes');
  const elementoProgressoBarra = document.getElementById('progresso-barra');
  const elementoProgressoTexto = document.getElementById('progresso-texto');

  // --- Recuperação de Estado ---
  const savedTheme = localStorage.getItem('theme');
  const savedDate = localStorage.getItem('dataInicio');

  // --- Lógica de Tema ---
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

  if (isDark) {
    document.documentElement.classList.add('dark-mode');
    document.documentElement.classList.remove('light-mode');
  } else {
    document.documentElement.classList.add('light-mode');
    document.documentElement.classList.remove('dark-mode');
  }

  // --- Lógica de Animação ---
  let intervaloGlobal = null;

  function animarContador(alvo) {
    if (intervaloGlobal) clearInterval(intervaloGlobal);
    if (alvo <= 0) {
      elementoDiasLimpos.textContent = "0";
      return;
    }
    let atual = 0;
    const incremento = Math.max(1, alvo / 50);

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
    const isDarkNow = document.documentElement.classList.contains('dark-mode');
    if (isDarkNow) {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  });

  inputData.addEventListener('change', (e) => {
    localStorage.setItem('dataInicio', e.target.value);
    atualizarContadorEMensagem();
  });

  // --- Lógica Principal ---
  function atualizarContadorEMensagem() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    // Divisão do input em partes locais para evitar fuso horário incorreto
    const partes = inputData.value.split('-');
    if (partes.length !== 3) return;

    const dataInicio = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
    dataInicio.setHours(0, 0, 0, 0);

    if (dataInicio > hoje) {
      elementoDiasLimpos.textContent = "0";
      elementoMensagem.textContent = "Sua jornada começará em breve. Estamos prontos para quando você estiver!";
      
      // Reset da barra de progresso
      elementoProximoNome.textContent = "Início";
      elementoDiasRestantes.textContent = "Futuro";
      elementoProgressoBarra.style.width = "0%";
      elementoProgressoTexto.textContent = "Aguardando o início da jornada.";
      return;
    }

    // Math.round previne bugs de fuso horário e transições de horário de verão (DST)
    const dias = Math.round((hoje - dataInicio) / (1000 * 60 * 60 * 24));
    animarContador(dias);

    // --- Configuração de Mensagens e Progresso de Marcos ---
    let mensagem = "";
    let inicioIntervalo = 0;
    let fimIntervalo = 1;
    let nomeProximoMarco = "";
    let textoProgresso = "";

    if (dias === 0) {
      mensagem = "Ainda não chegamos a 1 dia, mas o hoje é a maior vitória!";
      inicioIntervalo = 0;
      fimIntervalo = 1;
      nomeProximoMarco = "Primeiro Sol (1 dia)";
      textoProgresso = "Você está nas primeiras horas. Aguente firme, complete o dia de hoje!";
    } else if (dias === 1) {
      mensagem = "Primeiro Sol! Um dia incrível de renovação. Continue firme!";
      inicioIntervalo = 1;
      fimIntervalo = 7;
      nomeProximoMarco = "Semana de Descoberta (7 dias)";
      textoProgresso = "Seu primeiro dia foi um sucesso! Agora o foco está nos primeiros 7 dias.";
    } else if (dias <= 7) {
      mensagem = `Semana de Descoberta! Cada ${dias}º dia é um passo gigantesco.`;
      inicioIntervalo = 1;
      fimIntervalo = 7;
      nomeProximoMarco = "Semana de Descoberta (7 dias)";
      textoProgresso = `Você está no caminho! Descobrindo sua força a cada dia de liberdade.`;
    } else if (dias <= 30) {
      mensagem = `Força e Coragem! ${dias} dias de superação contínua.`;
      inicioIntervalo = 7;
      fimIntervalo = 30;
      nomeProximoMarco = "Novo Ciclo (30 dias)";
      textoProgresso = `Superando os desafios iniciais. A fundação de um novo hábito está se consolidando!`;
    } else if (dias <= 90) {
      mensagem = `Novo Ciclo! ${dias} dias de liberdade são um presente.`;
      inicioIntervalo = 30;
      fimIntervalo = 90;
      nomeProximoMarco = "Voando Alto (90 dias)";
      textoProgresso = `Mudanças profundas estão acontecendo. Três meses é um marco transformador!`;
    } else if (dias <= 180) {
      mensagem = `Voando Alto! ${dias} dias de pura resiliência e força.`;
      inicioIntervalo = 90;
      fimIntervalo = 180;
      nomeProximoMarco = "Quase um Ano (180 dias)";
      textoProgresso = `Sua mente e corpo estão agradecendo. Você está voando alto rumo aos 6 meses!`;
    } else if (dias <= 364) {
      mensagem = `Quase um Ano! O espelho reflete uma nova versão de você. ${dias} dias!`;
      inicioIntervalo = 180;
      fimIntervalo = 365;
      nomeProximoMarco = "O Milagre (365 dias)";
      textoProgresso = `Resiliência pura. O grande marco de 1 ano está no seu horizonte!`;
    } else {
      const anosTotal = Math.floor(dias / 365);
      mensagem = `✨ ${dias} DIAS: ${anosTotal} ${anosTotal > 1 ? 'Anos' : 'Ano'} de Milagre! A vitória é sua.`;
      
      // Para quem passou de 1 ano, a meta é o próximo aniversário da jornada
      const proximoAno = anosTotal + 1;
      inicioIntervalo = anosTotal * 365;
      fimIntervalo = proximoAno * 365;
      nomeProximoMarco = `${proximoAno} Anos de Milagre`;
      textoProgresso = `Vivendo o milagre dia após dia. Próxima grande meta: completar ${proximoAno} anos!`;
    }

    elementoMensagem.textContent = mensagem;

    // --- Atualização da Barra de Progresso ---
    const diasDecorridosNoIntervalo = dias - inicioIntervalo;
    const totalDiasNoIntervalo = fimIntervalo - inicioIntervalo;
    
    // Calcula a porcentagem de progresso e limita entre 0 e 100
    let porcentagem = Math.min(100, Math.max(0, (diasDecorridosNoIntervalo / totalDiasNoIntervalo) * 100));
    
    // Atualiza largura da barra
    elementoProgressoBarra.style.width = `${porcentagem}%`;
    
    // Calcula dias restantes para o próximo marco
    const diasFaltando = fimIntervalo - dias;
    elementoProximoNome.textContent = nomeProximoMarco;
    
    if (diasFaltando === 1) {
      elementoDiasRestantes.textContent = "Falta 1 dia";
    } else {
      elementoDiasRestantes.textContent = `Faltam ${diasFaltando} dias`;
    }
    
    elementoProgressoTexto.textContent = textoProgresso;
  }

  atualizarContadorEMensagem();
});