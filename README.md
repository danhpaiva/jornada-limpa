# 🌟 Jornada Limpa (Clean Journey Tracker)

> "Um dia de cada vez. Você é mais forte do que pensa!"

O **Jornada Limpa** é uma aplicação web minimalista, elegante e de código aberto criada para monitorar, celebrar e motivar pessoas em suas jornadas de superação e novos começos. Com foco total na experiência do usuário e usabilidade, este contador transforma o tempo decorrido em mensagens personalizadas de resiliência e força.

---

## ✨ Funcionalidades Principais

* **Customização Dinâmica:** Defina sua própria "Data de Início" através do seletor intuitivo. A aplicação recalcula sua trajetória instantaneamente.
* **Modo Escuro Inteligente:** O tema adapta-se automaticamente à preferência do seu sistema operacional (`prefers-color-scheme`), com suporte a alternância manual persistida no `localStorage`.
* **Contador Animado:** Ao carregar a página, o contador exibe uma animação de contagem rápida (`Ease-out`), transformando o dado bruto em uma experiência visual envolvente.
* **Responsivo e Rápido:** Design moderno utilizando a fonte **Inter** para máxima legibilidade, com layout otimizado para dispositivos móveis e desktop.
* **Zero Dependências:** Construído inteiramente com **Vanilla JS**, garantindo leveza extrema e carregamento quase instantâneo.

---

## 📈 Os Marcos da Jornada

O sistema categoriza o progresso através de gatilhos temporais baseados na data escolhida:

| Dias Limpos      | Fase da Jornada          | Mensagem de Impacto                        |
| ---------------- | ------------------------ | ------------------------------------------ |
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

* **HTML5:** Estruturação semântica e acessível.
* **CSS3:** Estilização com Variáveis CSS, Flexbox e Media Queries para temas.
* **JavaScript (ES6+):** Lógica reativa, manipulação de DOM e persistência local.
* **Google Fonts:** Tipografia **Inter** para uma interface moderna e profissional.

---

## 📂 Estrutura do Projeto

```text
├── assets/
│   ├── css/
│   │   └── style.css      # Variáveis de tema, animações e layout
│   └── js/
│       └── script.js      # Lógica de cálculo, persistência e animação
├── index.html             # Interface principal e seletor de data
└── README.md              # Documentação do projeto

```

---

## 🚀 Como usar

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` no seu navegador.
3. Utilize o seletor de data para definir o início da sua jornada.
4. O navegador lembrará da sua data e do seu tema preferido automaticamente.