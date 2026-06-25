# 🌟 Jornada Limpa (Clean Journey Tracker)

> "Um dia de cada vez. Você é mais forte do que pensa!"

Para motivar e celebrar sua superação diária, o **Jornada Limpa** é uma aplicação web minimalista e elegante. Com foco na experiência do usuário, ele calcula o tempo decorrido de liberdade, exibe mensagens personalizadas de resiliência e mostra o progresso rumo ao seu próximo objetivo.

---

<div align="center">

[![Licença MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-blue.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Glassmorphism UI](https://img.shields.io/badge/Design-Glassmorphism-indigo?style=flat)](https://css-tricks.com/glassmorphism-in-css/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/danhpaiva/jornada-limpa/pulls)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero-success?style=flat)](#)

</div>

---

## ✨ Funcionalidades Principais

* **Design Glassmorphism Premium:** Interface moderna com efeito de vidro translúcido, gradientes refinados e animações de hover que proporcionam uma experiência visual de alta qualidade.
* **Barra de Progresso Dinâmica:** Acompanhe graficamente sua jornada atual com preenchimento em tempo real e saiba exatamente quantos dias faltam para a próxima conquista.
* **Correção de Fuso Horário e DST:** Cálculo preciso de dias corridos executado localmente à meia-noite, prevenindo falhas de 1 dia causadas por fusos horários ou transições de horário de verão (DST).
* **Modo Escuro Inteligente:** Adaptação automática ao sistema do usuário (`prefers-color-scheme`), com botão manual de alternância persistido no `localStorage`.
* **Ícones SVG Integrados:** Otimização de performance com ícones modernos inline, sem necessidade de CDNs ou requisições adicionais de fontes.
* **Contador Animado:** Ao carregar ou alterar a data, o número de dias possui animação de contagem suave (`Ease-out`).
* **Zero Dependências:** Construído de forma pura com **HTML5, CSS3 e Vanilla JS**.

---

## 📈 Os Marcos da Jornada

O progresso é monitorado dinamicamente através de faixas baseadas na data escolhida:

| Dias Limpos      | Fase da Jornada          | Mensagem de Impacto / Objetivo                      |
| ---------------- | ------------------------ | --------------------------------------------------- |
| `0 dias`         | **Início**               | Foco no hoje — a maior vitória.                     |
| `1 dia`          | **Primeiro Sol**         | Renovação imediata.                                 |
| `2 a 7 dias`     | **Semana de Descoberta** | Cada passo é gigantesco rumo a 7 dias.              |
| `8 a 30 dias`    | **Força e Coragem**      | Construindo uma nova fundação de vida (30 dias).    |
| `31 a 90 dias`   | **Novo Ciclo**           | O universo conspirando a favor (90 dias).           |
| `91 a 180 dias`  | **Voando Alto**          | Futuro mais leve e claro (180 dias).                |
| `181 a 364 dias` | **Quase um Ano**         | Pura resiliência no espelho (365 dias).             |
| `365+ dias`      | **Anos de Milagre**      | Renascimento completo que inspira o mundo (Anual).  |

---

## 🛠️ Stack Tecnológica

* **HTML5:** Estrutura semântica e acessível com SVGs inline.
* **CSS3:** Variáveis nativas (Custom Properties), HSL dinâmico, Glassmorphism e transições aceleradas por GPU.
* **JavaScript (ES6+):** Lógica reativa, normalização de datas, animações e armazenamento de estado.
* **Google Fonts:** Tipografia **Inter** para máxima legibilidade.

---

## 📂 Estrutura do Projeto

```text
├── jornada/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css      # Estilização Glassmorphism, temas e responsividade
│   │   └── js/
│   │       └── script.js      # Lógica de fuso horário, contador e progresso
│   └── index.html             # Interface do usuário com ícones SVG inline
├── LICENSE                    # Licença do projeto (MIT)
└── README.md                  # Documentação do projeto
```

---

## 🚀 Como usar

1. Clone o repositório.
2. Abra o arquivo `jornada/index.html` no seu navegador favorito.
3. Defina o início da sua jornada usando o seletor de data.
4. A aplicação memorizará suas preferências automaticamente!