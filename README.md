# 🌟 Jornada Limpa (Clean Journey Tracker)

> "Um dia de cada vez. Você é mais forte do que pensa!"

O **Jornada Limpa** é uma aplicação web minimalista, elegante e de código aberto criada para monitorar, celebrar e motivar pessoas em suas jornadas de superação e novos começos. Seja para quebrar um hábito, vencer um vício ou marcar o início de uma nova fase de vida, este contador transforma o tempo decorrido em mensagens personalizadas de resiliência e força.

---

## 🚀 Como Funciona?

O motor da aplicação calcula em tempo real a diferença entre o **"Dia Zero"** (definido no código) e a data atual. À medida que o usuário acumula "Dias de Liberdade", a interface se adapta dinamicamente para entregar mensagens de suporte psicológico e celebração de marcos importantes.

### 📈 Os Marcos da Jornada

O sistema categoriza o progresso através de gatilhos temporais (estilo conquistas/achievements):

| Dias Limpos      | Fase da Jornada          | Mensagem de Impacto                        |
| :--------------- | :----------------------- | :----------------------------------------- |
| `0 dias`         | **O Início**             | Foco no hoje — a maior vitória.            |
| `1 dia`          | **Primeiro Sol**         | Renovação imediata.                        |
| `2 a 7 dias`     | **Semana de Descoberta** | Cada passo é gigantesco.                   |
| `8 a 30 dias`    | **Força e Coragem**      | Construindo uma nova fundação de vida.     |
| `31 a 90 dias`   | **Novo Ciclo**           | O universo conspirando a favor.            |
| `91 a 180 dias`  | **Voando Alto**          | Futuro mais leve e claro.                  |
| `181 a 364 dias` | **Quase um Ano**         | Pura resiliência no espelho.               |
| `365+ dias`      | **O Milagre**            | Renascimento completo que inspira o mundo. |

---

## 🛠️ Stack Tecnológica

Optamos pelo clássico e ultra-leve **Vanilla Tech Stack** para garantir performance máxima, zero dependências externas e carregamento instantâneo em qualquer dispositivo (mobile-first):

*   **HTML5:** Estruturação semântica e acessível.
*   **CSS3:** Estilização modularizada (localizada em `assets/css/style.css`).
*   **JavaScript (ES6+):** Lógica assíncrona baseada em manipulação de DOM e ciclo de vida do navegador (`DOMContentLoaded`).

---

## 📂 Estrutura do Projeto

```text
├── assets/
│   ├── css/
│   │   └── style.css      # Arquitetura visual e responsividade
│   └── js/
│       └── script.js      # Motor lógico e cálculo de timestamp
├── index.html             # Ponto de entrada da aplicação
└── README.md              # Documentação do projeto