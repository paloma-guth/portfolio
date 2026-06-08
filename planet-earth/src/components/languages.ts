// src/data/languages.ts
export const content = {
  EN: {
    heroTitle: "Paloma Guth Kronbauer",
    heroSub: "Computer Science & Mathematics @ St. Olaf College",
    about: "The Archive",
    bio: "A tinkerer at heart. I spent my time at college diving deep into Math and CS theory because I believe you have to understand how a system works before you can truly master it. I’ve always been obsessed with the 'how,' so I spend my own time opening up software, kernels, and networks just to see how they tick. I’m fascinated by automation; if I can script a task to save someone else time, I will. I’m a self-taught explorer who isn't afraid of a steep learning curve, if there’s a problem I don’t know how to fix yet, I’ll stay up as long as it takes to find the answer.",
    extraTitle: "Latest fascination:",
    extraBio: "Cybersecurity. I'm still learning the ropes, but I’m constantly following the latest news and stress-testing my own setups.",
    education: "The Academy",
    
    // St. Olaf
    stOlafTitle: "St. Olaf College",
    stOlafDegree: "BA in Computer Science & Mathematics",
    stOlafMinor: "Minor in Statistics & Data Science",
    stOlafPlace: "Northfield, MN | 2022 - 2026",
    tagProb: "Probability & Statistics",
    tagML: "Machine Learning",
    tagForest: "Ensemble Methods",
    tagWrangling: "Data Wrangling",
    tagTheory: "Theory of Computation",
    tagSoftware: "Software Engineering",

    // DIS Denmark
    disTitle: "DIS Denmark",
    disDegree: "Artificial Neural Network & Deep Learning",
    disPlace: "Copenhagen | 2025",
    tagDeep: "Deep Learning",
    tagBigData: "Big Data Infra",
    tagAI: "Artificial Intelligence",
    tagGameTheory: "Game Theory",
    tagCollab: "Cloud Collaboration",

    // IB
    ibTitle: "International Baccalaureate (IB)",
    ibPlace: "UWC Maastricht | 2020 - 2022",
    tagResearch: "Academic Research",
    tagIndep: "Independent Study",
    tagInter: "Intercultural Communication",

    experience: "Adventure History",
    // Job 1
    job1Title: "Technical Lead & Mentor ",
    job1Place: "St. Olaf College - Tech Hub | 2022 - 2026",
    job1Desc: "Lead a student team in resolving hardware and software issues for the department. Along with daily support, I worked on the migration to Debian Linux and used Python to automate our metric collection.",
    // Job 2
    job2Title: "Technical Support Specialist",
    job2Place: "St Olaf College - IT | 2023 - 2024",
    job2Desc: "Managed support tickets and helped students and staff with hardware and software problems. I also managed the campus hardware inventory and wrote technical documentation so others could solve similar issues later.",
    // TA Position 
    taTitle: "Teaching Assistant - Hardware Engineering",
    taPlace: "St. Olaf College | Fall 2024",
    taDesc: "Helped students with logic gates and assembly language. I assisted with debugging their code and lead workshops to explain how the hardware works and how to apply the concepts in practice.",
    // Tags
    tagETL: "Automated ETL",
    tagPipe: "Pipeline Optimization",
    tagDoc: "Technical Documentation",
    tagAlg: "Algorithmic Logic",
    tagDebug: "System Debugging",
    tagCost: "Costumer Assistance",
    tagWorkf: "Workflow Management",
    tagEnd: "Endpoints Security",
    viewM: "More Adventures",
    viewL: "View Less",

    activeQuests: "Active Quests",
    // Stardew Quest
    stardewTitle: "Stardew Valley Data Pipeline",
    stardewDesc: "Developing a data analysis of crops from the Stardew Valley game. I built a script to scrape data from the Stardew Valley Wiki, cleaned it up, and saved it into JSON files. Currently, I'm working on analyzing the data to identify which crops are actually worth the effort and using probability to predict how they'll perform.",
    tagPython: "Python",
    tagScraping: "Web Scraping",
    tagJSON: "JSON Storage",
    tagCleaning: "Data Cleaning",
    // SQL Quest
    sqlTitle: "SQL Guild Management System",
    sqlDesc: "Developing a database from scratch using D&D-inspired data. I’m focusing on schema design, using junction tables for many-to-many relationships (characters and skills) and writing complex joins to track quest participation and resource distribution.",
    tagSchema: "Schema Design",
    tagRelational: "Relational Mapping",
    tagJoins: "Complex Joins",
    tagIntegrity: "Data Integrity",

    // Button
    seeQuestLog: "View Full Quest Log",

    inventory: "Inventory & Achievements",
    lvl: "Lvl.",
    skills: "Abilities",
    attributesTitle: "Core Attributes",
    attr1: "System Design (INT)",
    attr2: "Documentation (CHA)",
    attr3: "Scalability (DEX)",
    attr4: "Security (WIS)",

    lvlGroupTitle: "Level {n} Spells",
    spellBookBtn: "Full Spellbook",
    tongues: "Known Tongues",
    pythonBonus: "Bonus: +3 | Scripting & Data Pipelines",
    sqlBonus: "Bonus: +2 | Modeling & Complex Queries",
    cBonus: "Bonus: +2 | Pointers, OOP & Memory Allocation",

    spellbookTitle: "Spellbook",
    levelDisclaimer: "A record of the skills I’ve acquired. Level 10 isn't the end; it's just where the air gets thin.",
    cantripTitle: "Core Cantrips (Soft Skills)",
    flavorQuote: "Data is just noise until you find the frequency. Once the logic is anchored and the flow is steady, the rest is just channeling the spark.",
    flavorAuthor: "Unrecorded Field Notes",
    lvlMastery: "Level {n} Masteries",
    futureQuest: "Future Quest...",
    
    // Arrays for the Skills Page
    cantrips: ["Technical Communication", "Problem Solving", "Systemic Thinking", "Adaptability"],
    technicalSkills: [
        { name: "Javascript", lvl: 1 },
        { name: "Typescript", lvl: 2 },
        { name: "Docker Basics", lvl: 2 },
        { name: "AWS Fundamentals", lvl: 3 },
        { name: "Azure", lvl: 1 },
        { name: "Power BI", lvl: 3 },
        { name: "Kubernetes", lvl: 3 },
        { name: "Linux", lvl: 4 },
        { name: "Tensorflow", lvl: 4 },
        { name: "Scikit-learn", lvl: 5 },
        { name: "ETL", lvl: 5 },
        { name: "Bash", lvl: 6 },
        { name: "Git/GitHub", lvl: 6 },
        { name: "SQL & Databases", lvl: 6 },
        { name: "C++ / C", lvl: 7 },
        { name: "Python (Backend/Data)", lvl: 7 },
        { name: "Numpy & Pandas", lvl: 7 },
        { name: "Distributed Systems", lvl: 8 },
        { name: "Data Privacy & LGPD", lvl: 8 },
        { name: "Network Security", lvl: 8 },
        { name: "Cloud Security Arch.", lvl: 9 },
        { name: "Infrastructure as Code", lvl: 9 },
        { name: "Threat Intelligence", lvl: 9 },
        { name: "Secure System Opt.", lvl: 10 },
        { name: "Vulnerability Research", lvl: 10 },
        { name: "Data Encryption", lvl: 10 },
        { name: "REST APIs", lvl: 3 },
        { name: "Unit Testing (PyTest)", lvl: 2 },
        { name: "NoSQL (MongoDB)", lvl: 2 },
        { name: "CI/CD Basics", lvl: 3 },
        { name: "Apache Airflow", lvl: 1 },
        { name: "R", lvl: 7 }
    ],

    back: "← Return to Town",
    questTitle: "Full Quest Log",
    statusCompleted: "Completed",
    analysisBtn: "Read More",
    closeBtn: "Less",
    viewRepo: "Source Code",
    readMedium: "Read on Medium",
    readPaper: "Read Analysis",
    // Project 1
    ganShort: "A collaborative DCGAN project born from an urban data expedition in Berlin and Denmark.",
    ganFull: "This project was developed abroad in Denmark with three colleagues, inspired by a visit to Berlin. After visiting startups and state-funded labs that used data to solve urban questions, we were struck by the 'data footprint' of the city itself—specifically its street art. We wanted to see if we could treat graffiti not just as art, but as a complex system of spatial data. Using a DCGAN (Generative Adversarial Network), we built a model to synthesize urban typography like 'Wildstyle' and 'Bubble.' Beyond the technical challenge of balancing the Generator and Discriminator to avoid 'Mode Collapse,' the project was an exploration of how neural networks can interpret the creative 'chaos' of a city's visual language. It was our way of answering an urban question: can an algorithm learn the soul of a mural?",
    // Project 2
    batoceraShort: "Repurposing legacy hardware through Linux kernel and network optimization.",
    batoceraFull: "This project started as a solution to a security and performance bottleneck: legacy Windows 10 machines on campus were struggling with hardware limitations. I took two of these machines, wiped them, and installed Debian to build custom arcade stations. This led me down a rabbit hole of Linux tinkering—from fighting with outdated Wi-Fi chips that weren't compatible with modern signals (solving it through manual package injections and kernel tweaks) to bypassing restrictive campus firewalls to get the systems online. I also brought this home to my own Raspberry Pi, where I’ve been optimizing Batocera. For me, it’s about the satisfaction of understanding how the hardware actually talks to the software, and finding a workaround when the standard solutions don't work.",

    goodreadsShort: "A collaborative Big Data project transforming 16,000+ human reviews into structured network insights.",
    goodreadsFull: "Developed with a colleague for a Big Data course, this project was born from our shared interest in books and a question: does the emotional tone of a review actually match its star rating? After finding existing Kaggle datasets were too small or full of missing values, we built a custom Python scraper to collect metadata and 16,000+ reviews for 4,000 titles. We processed the text using VADER sentiment analysis and found that numerical ratings often fail to capture the full nuance of user sentiment. Additionally, we modeled the data as a complex network using the Louvain algorithm, discovering that genres like 'Politics' and 'Children’s' act as essential bridges between different literary communities. The work involved intensive data cleaning and ANOVA testing, but the most interesting part was seeing how subjective human sentiments in comments are transformed into structured data and clear numerical results.",
    
    navHome: "Home",
    navQuests: "Quests",
    navSkills: "Skills",

    langPort: "Portuguese",
    langEng: "English",
    langSpan: "Spanish",
    langGer: "German",
    native: "Native",
    fluent: "Fluent",
    inter: "Intermediate",
    basic: "Basic"
  },
  PT: {
    heroTitle: "Paloma Guth Kronbauer",
    heroSub: "Ciência da Computação e Matemática @ St. Olaf College",
    about: "Arquivo",
    bio: "Curiosa por natureza. Meu tempo na faculdade me proporcionou a base necessária para entender como os sistemas funcionam antes de sair abrindo e tentando mudar as coisas. Eu sempre quis entender o como, então a Ciência da Computação acabou sendo o ambiente perfeito para mim. Estou sempre tentando mexer em algo e, se eu ainda não sei como funciona, bem... eu vou descobrir. Sou fascinada por automação: se eu puder criar um script para otimizar uma tarefa manual, eu farei. Como uma exploradora autodidata que não tem medo da curva de aprendizado, se eu encontrar um problema complexo eu não irei sossegar até encontrar a resposta e ver o código rodando do jeito certo.",
    extraTitle: "Interesses:",
    extraBio: "Cibersegurança. Sou uma entusiasta da área e uso meu tempo livre para estudar vulnerabilidades de sistemas e decifrar desafios práticos no TryHackMe.",
    education: "Academia",

    // St. Olaf
    stOlafTitle: "St. Olaf College",
    stOlafDegree: "Bacharelado em Ciência da Computação e Matemática",
    stOlafMinor: "Ênfase em Estatística e Ciência de Dados",
    stOlafPlace: "Northfield, MN | 2022 - 2026",
    tagProb: "Probabilidade e Estatística",
    tagML: "Machine Learning",
    tagForest: "Métodos Ensemble",
    tagWrangling: "Data Wrangling & ETL",
    tagTheory: "Teoria da Computação",
    tagSoftware: "Eng. de Software",

    // DIS Denmark
    disTitle: "DIS Denmark",
    disDegree: "Redes Neurais Artificiais e Deep Learning",
    disPlace: "Copenhague | 2025",
    tagDeep: "Deep Learning",
    tagBigData: "Big Data & Infraestrutura",
    tagAI: "Inteligência Artificial",
    tagGameTheory: "Teoria dos Jogos",
    tagCollab: "Sistemas Distribuídos",

    // IB
    ibTitle: "International Baccalaureate (IB)",
    ibPlace: "UWC Maastricht | 2020 - 2022",
    tagResearch: "Pesquisa Acadêmica",
    tagIndep: "Estudo Independente",
    tagInter: "Comunicação Intercultural",

    experience: "Histórico de Aventuras",
    // Disco
    job1Title: "Gestora e Mentora Técnica",
    job1Place: "St. Olaf College - Tech Hub | 2022 - 2026",
    job1Desc: "Evoluí de estagiária a líder da equipe de infraestrutura ao longo de quatro anos. Coordenei a migração de estações acadêmicas para Debian Linux, lidando com hardware legado e resolvendo incompatibilidades de firmware na rede. Na área de dados, desenvolvi um script em Python integrado à API do Google Calendar para analisar a ocupação das salas e idealizei a arquitetura de um sistema interno de inventário para substituir fluxos manuais.",

    //IT
    job2Title: "Especialista em Suporte Técnico",
    job2Place: "St. Olaf College - TI | 2023 - 2024",
    job2Desc: "Trabalhei no atendimento direto à comunidade do campus, resolvendo problemas de rede, acessos e segurança de endpoints (Windows/macOS). Minha maior escola de comunicação foi prestar suporte 100% verbal via telefone, traduzindo conceitos técnicos para usuários que estavam apanhando da tecnologia. E sim, gerenciei mais problemas crônicos de spooler de impressora no Windows do que eu gostaria de admitir.",
    
    // TA Position 
    taTitle: "Monitora - Engenharia de Hardware",
    taPlace: "St. Olaf College | 2024",
    taDesc: "Atuei como ponto de apoio técnico em arquitetura e baixo nível. Mantive plantões para auxiliar no entendimento de portas digitais, ponteiros em C e programação Assembly, ajudando na depuração de códigos e validação de circuitos lógicos. Depois de tantas revisões de lógica digital, ler binário e hexadecimal tornou-se quase uma segunda língua.",

    tagETL: "ETL Automatizado",
    tagPipe: "Otimização de Pipeline",
    tagDoc: "Documentação Técnica",
    tagAlg: "Lógica Algorítmica",
    tagDebug: "Depuração de Sistemas",
    tagCost: "Comunicação Técnica",
    tagWorkf: "Gestão de Fluxo",
    tagEnd: "Segurança de Endpoints",
    viewM: "Mais Aventuras",
    viewL: "Ver Menos",

    activeQuests: "Missões Ativas",
    // Stardew Quest
    stardewTitle: "Pipeline de Dados: Stardew Valley",
    stardewDesc: "Pipeline de dados focado na otimização econômica do Stardew Valley. Desenvolvi scrapers em Python para extrair dados da Wiki oficial, estruturando e normalizando as informações em modelos JSON via POO. O projeto agora foca em simulações estatísticas para prever o maior retorno sobre o investimento (ROI) por estação.",
    tagPython: "Python",
    tagScraping: "Web Scraping",
    tagJSON: "Armazenamento JSON",
    tagCleaning: "Limpeza de Dados",
    // SQL Quest
    sqlTitle: "Sistema de Gestão de Guildas (SQL)",
    sqlDesc: "Implementação do zero de um banco de dados relacional complexo para gerenciamento de inventários e eventos de RPG (D&D). Estruturei relacionamentos muitos-para-muitos, tabelas intermediárias e queries otimizadas com múltiplos JOINs, com o objetivo final de encapsular a lógica em uma API estável.",
    tagRelational: "Modelagem Relacional",
    tagJoins: "Queries Otimizadas (JOINs)",
    tagIntegrity: "Integridade de Dados",
    // Button
    seeQuestLog: "Ver Diário de Missões",

    inventory: "Inventário e Conquistas",
    lvl: "Nível",
    skills: "Proficiência",
    attributesTitle: "Atributos Principais",
    attr1: "Arquitetura de Sistemas (INT)",
    attr2: "Documentação (CHA)",
    attr3: "Escalabilidade (DEX)",
    attr4: "Segurança (WIS)",
    spellBookBtn: "Grimório Completo",
    tongues: "Idiomas Conhecidos",
    pythonBonus: "Bônus: +3 | Scripting & Pipelines de Dados",
    sqlBonus: "Bônus: +2 | Modelagem & Queries Complexas",
    cBonus: "Bônus: +2 | Ponteiros, POO & Alocação de Memória",
  
    lvlGroupTitle: "Magias de Nível {n}",

    spellbookTitle: "Grimório",
    levelDisclaimer: "Competências organizadas por Círculos de Magia. Os níveis desbloqueados refletem minha proficiência atual. O nível 10 não é o fim; é apenas onde o ar começa a rarear.",
    cantripTitle: "Cantrips Essenciais (Soft Skills)",
    flavorQuote: "Dados são apenas ruído até você encontrar a frequência. Quando a lógica está ancorada e o fluxo estável, o que resta é apenas canalizar a faísca.",    
    flavorAuthor: "Notas de Campo não Registradas",
    lvlMastery: "{n}º Círculo",
    futureQuest: "Missão Futura...",

    cantrips: ["Comunicação Técnica", "Resolução de Problemas", "Pensamento Sistêmico", "Adaptabilidade"],
    technicalSkills: [
      // 1º Círculo
      { name: "JavaScript", lvl: 1 },
      { name: "Azure", lvl: 1 },
      { name: "Apache Airflow", lvl: 1 },

      // 2º Círculo
      { name: "TypeScript", lvl: 2 },
      { name: "Docker (Básico)", lvl: 2 }, 
      { name: "SQLite", lvl: 2 },
      { name: "PyTest / Unit Tests", lvl: 2 },

      // 3º Círculo
      { name: "AWS (Fundamentos)", lvl: 3 },
      { name: "APIs REST", lvl: 3 },
      { name: "FastAPI / Flask", lvl: 3 },
      { name: "CI/CD (Fundamentos)", lvl: 3 },

      // 4º Círculo
      { name: "Linux (Debian / Ubuntu)", lvl: 4 },
      { name: "PostgreSQL / MySQL", lvl: 4 },
      { name: "TensorFlow / Keras", lvl: 4 }, 

      // 5º Círculo
      { name: "SQL & Modelagem Relacional", lvl: 5 },
      { name: "Scikit-learn", lvl: 5 },
      { name: "PySpark", lvl: 5 }, 

      // 6º Círculo
      { name: "Bash", lvl: 6 },
      { name: "Git / GitHub", lvl: 6 },

      // 7º Círculo (Seu ápice atual)
      { name: "Python (Backend/Dados)", lvl: 7 },
      { name: "C / C++", lvl: 7 },
      { name: "NumPy & Pandas", lvl: 7 },
      { name: "R", lvl: 7 },

      // --- MÓDULOS BLOQUEADOS ---

      // 8º Círculo (Bloqueado)
      { name: "Apache Kafka", lvl: 8 }, 
      { name: "OAuth2 / JWT Security", lvl: 8 }, 
      { name: "Locust / Gatling", lvl: 8 },

      // 9º Círculo (Bloqueado)
      { name: "Kubernetes", lvl: 9 }, 
      { name: "Terraform", lvl: 9 }, 
      { name: "Integration & E2E Testing", lvl: 9 },
      { name: "OWASP Top 10", lvl: 9 }, 

      // 10º Círculo (Bloqueado)
      { name: "gRPC & Protocol Buffers", lvl: 10 }, 
      { name: "Criptografia (AES / RSA)", lvl: 10 }, 
      { name: "Delta Lake / Lakehouses", lvl: 10 } 
    ],

    back: "← Voltar para a Vila",
    questTitle: "Diário de Missões Completo",
    statusCompleted: "Concluído",
    analysisBtn: "Ler Mais",
    closeBtn: "Menos",
    viewRepo: "Código Fonte",
    readPaper: "Ler Análise",
    readMedium: "Ler no Medium",

    // Project 1: DCGAN
    ganShort: "Modelagem generativa profunda (DCGAN) aplicada à síntese de dados visuais complexos e tipografia urbana.",
    ganFull: "Projeto em coautoria desenvolvido durante intercâmbio na Dinamarca, inspirado pelo ecossistema de tecnologia urbana de Berlim. Após análise de como laboratórios locais utilizavam dados para resolver questões urbanas, o foco da equipe foi testar se o graffiti poderia ser mapeado como um sistema complexo de dados espaciais. Utilizando uma arquitetura DCGAN (Rede Adversária Generativa), o grupo desenvolveu um modelo computacional para sintetizar tipografias urbanas como 'Wildstyle' e 'Bubble'. Além do desafio técnico de equilibrar o Gerador e o Discriminador para mitigar o 'Mode Collapse', o projeto explorou a capacidade de redes neurais profundas interpretarem o caos criativo da linguagem visual de uma metrópole. Foi a nossa resposta a uma provocação computacional: pode um algoritmo aprender a essência de uma expressão artística?",
    // Project 2: Linux / Hardware
    batoceraShort: "Provisionamento de infraestrutura sob demanda através de otimização de kernel Linux em hardware de recursos limitados.",
    batoceraFull: "Projeto de infraestrutura destinado à resolução de um gargalo de hardware e segurança no ambiente de trabalho. Duas estações limitadas com Windows 10 — cuja meta futura era a conversão em cabines de Arcade integradas — foram migradas para Debian com o aval do time de TI. O principal desafio técnico envolveu a incompatibilidade do chipset de Wi-Fi integrado, resolvido via adaptação de uma interface externa USB e provisionamento de pacotes de rede direto no sistema operacional. Para validar a viabilidade de sistemas embarcados e testes de performance de emulação, o aprendizado em Linux e gerenciamento de pacotes foi estendido a um ambiente de testes local utilizando um Raspberry Pi configurado com Batocera. Com a conclusão do ciclo de graduação e encerramento do vínculo, o projeto foi transferido para outro estudante, que dará continuidade ao desenvolvimento dos gabinetes dedicados.",

    // Project 3: Big Data / Goodreads
    goodreadsShort: "Pipeline distribuído de Big Data e análise de redes complexas para extração de sentimento em larga escala.",
    goodreadsFull: "Desenvolvido em parceria acadêmica para a cadeira de Big Data na Dinamarca, o projeto partiu da hipótese de que notas numéricas de avaliações muitas vezes ocultam a real nuance do sentimento textual do usuário. Diante da limitação e inconsistência dos datasets públicos disponíveis no Kaggle, foi desenvolvido um web scraper customizado em Python para a extração de metadados e mais de 16.000 resenhas de 4.000 títulos da plataforma Goodreads. A camada de processamento de linguagem natural utilizou o algoritmo VADER para análise de sentimento, revelando divergências entre métricas quantitativas e o tom emocional das críticas. Adicionalmente, os dados foram modelados como redes complexas via algoritmo de Louvain, identificando clusters de influência e demonstrando como os gêneros 'Política' e 'Infantil' operam como pontes estruturais entre comunidades literárias (validados estatisticamente via testes ANOVA). O projeto demonstra a viabilidade de transformar dados textuais altamente subjetivos em grafos estruturados e inteligência quantificável.",

    navHome: "Início",
    navQuests: "Missões",
    navSkills: "Habilidades",

    langPort: "Português",
    langEng: "Inglês",
    langSpan: "Espanhol",
    langGer: "Alemão",
    native: "Nativo",
    fluent: "Fluente",
    inter: "Intermediário",
    basic: "Básico",
  }
};