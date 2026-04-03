// src/data/languages.ts
export const content = {
  EN: {
    heroTitle: "Paloma Guth Kronbauer",
    heroSub: "Computer Science & Mathematics @ St. Olaf College",
    about: "The Archive",
    bio: "A tinkerer at heart. I spent my time at college diving deep into Math and CS theory because I believe you have to understand how a system works before you can truly master it. I’ve always been obsessed with the 'how,' so I spend my own time opening up software, kernels, and networks just to see how they tick. I’m fascinated by automation; if I can script a task to save someone else time, I will. I’m a self-taught explorer who isn't afraid of a steep learning curve—if there’s a problem I don’t know how to fix yet, I’ll stay up as long as it takes to find the answer.",
    extraTitle: "Latest fascination:",
    extraBio: "Security. I'm still learning the ropes, but I’m constantly following the latest news and stress-testing my own setups.",
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
    job1Desc: "Tackled the 'Chaos of Raw Data' by developing automated ETL scripts. Optimized data pipelines to ensure accurate insights for decision-making.",
    // Job 2
    job2Title: "Technical Support Specialist",
    job2Place: "St Olaf College - IT | 2023 - 2024",
    job2Desc: "Managed technical documentation and system support, ensuring all users could navigate the digital realm without friction.",
    // TA Position 
    taTitle: "Teaching Assistant - Hardware Engineering",
    taPlace: "St. Olaf College | Fall 2024",
    taDesc: "Guided apprentice developers through the complexities of Algorithmic Logic and Data Structures. Debugged code and facilitated technical workshops.",
    // Tags
    tagETL: "Automated ETL",
    tagPipe: "Pipeline Optimization",
    tagDoc: "Technical Documentation",
    tagAlg: "Algorithmic Logic",
    tagDebug: "System Debugging",
    tagCost: "Costumer Assistance",
    tagWorkf: "Workflow Management",

    activeQuests: "Active Quests",
    // Stardew Quest
    stardewTitle: "Quest: Stardew Valley Data Pipeline",
    stardewDesc: "Developing a full-cycle ETL pipeline to scrape game wiki data, calculate Crop ROI, and visualize farming strategies. Turning raw pixels into gold-standard insights.",
    stardewLoot: "Web Scraping • Data Wrangling • ROI Modeling",
    // SQL Quest
    sqlTitle: "Quest: SQL Sorcery & Optimization",
    sqlDesc: "Architecting high-performance relational schemas. Refactoring 'cursed' legacy queries into optimized scripts for millisecond-level data retrieval.",
    sqlLoot: "Schema Design • Query Tuning • PostgreSQL",
    // Button
    seeQuestLog: "View Full Quest Log",

    inventory: "Inventory & Achievements",
    lvl: "Lvl.",
    skills: "Prepared Spells",
    attributesTitle: "Core Attributes",
    attr1: "System Design (INT)",
    attr2: "Documentation (CHA)",
    attr3: "Scalability (DEX)",
    attr4: "Security & Resilience (WIS)",

    lvlGroupTitle: "Level {n} Spells",
    spellBookBtn: "Full Spellbook",
    tongues: "Known Tongues",

    spellbookTitle: "The Paladin's Spellbook",
    levelDisclaimer: "Levels represent current proficiency & ongoing research.",
    cantripTitle: "Core Cantrips (Soft Skills)",
    flavorQuote: "Knowledge is the shield; logic is the sword.",
    flavorAuthor: "Ancient Data Decree",
    lvlMastery: "Level {n} Masteries",
    futureQuest: "Future Quest...",
    
    // Arrays for the Skills Page
    cantrips: ["Technical Communication", "Problem Solving", "Systemic Thinking", "Adaptability"],
    technicalSkills: [
        { name: "Javascript", lvl: 1 },
        { name: "Typescript", lvl: 2 },
        { name: "Docker Basics", lvl: 2 },
        { name: "AWS Fundamentals", lvl: 2 },
        { name: "Azure", lvl: 2 },
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
        { name: "Data Encryption", lvl: 10 }
    ],

    back: "← Return to Town",
    questTitle: "Full Quest Log",
    statusCompleted: "Completed",
    analysisBtn: "Read Full Analysis",
    closeBtn: "Close Analysis",
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
    bio: "Curiosa por natureza. Dediquei meu tempo na faculdade à teoria de Matemática e Ciência da Cpmputação porque acredito que é preciso entender como um sistema funciona antes de o abrir. Sempre fui obcecado pelo 'como', então passo meu tempo livre abrindo softwares, kernels e redes só para ver como funcionam. Sou fascinada por automação; se eu puder criar um script para economizar o tempo de alguém, farei. Sou uma exploradora autodidata que não tem medo do tempo e dificuldade de aprendizado; se houver um problema que eu ainda não saiba resolver, ficarei acordada o tempo que for preciso para encontrar a resposta.",
    extraTitle: "Última fascinação:",
    extraBio: "Segurança. Ainda estou aprendendo, mas acompanho as notícias e testo minhas próprias configurações constantemente.",
    education: "Academia",

    // St. Olaf
    stOlafTitle: "St. Olaf College",
    stOlafDegree: "Bacharelado em Ciência da Computação e Matemática",
    stOlafMinor: "Ênfase em Estatística e Ciência de Dados",
    stOlafPlace: "Northfield, MN | 2022 - 2026",
    tagProb: "Probabilidade e Estatística",
    tagML: "Machine Learning",
    tagForest: "Métodos Ensemble",
    tagWrangling: "Tratamento de Dados",
    tagTheory: "Teoria da Computação",
    tagSoftware: "Eng. de Software",

    // DIS Denmark
    disTitle: "DIS Denmark",
    disDegree: "Redes Neurais Artificiais e Deep Learning",
    disPlace: "Copenhague | 2025",
    tagDeep: "Deep Learning",
    tagBigData: "Infra de Big Data",
    tagAI: "Inteligência Artificial",
    tagGameTheory: "Teoria dos Jogos",
    tagCollab: "Colaboração em Nuvem",

    // IB
    ibTitle: "International Baccalaureate (IB)",
    ibPlace: "UWC Maastricht | 2020 - 2022",
    tagResearch: "Pesquisa Acadêmica",
    tagIndep: "Estudo Independente",
    tagInter: "Comunicação Intercultural",

    experience: "Histórico de Aventuras",
    // Job 1
    job1Title: "Gestora e Mentora Técnica",
    job1Place: "St. Olaf College - Tech Hub | 2022 - 2026",
    job1Desc: "Enfrentei o 'Caos dos Dados Brutos' desenvolvendo scripts ETL automatizados. Otimizei pipelines de dados para garantir insights precisos.",
    // Job 2
    job2Title: "Especialista em Suporte Técnico",
    job2Place: "St. Olaf College - TI | 2023 - 2024",
    job2Desc: "Gerenciei documentação técnica e suporte ao sistema, garantindo que todos os usuários navegassem no reino digital sem atritos.",
    // TA Position 
    taTitle: "Monitora - Engenharia de Hardware",
    taPlace: "St. Olaf College | Segundo semestre 2024",
    taDesc: "Guiei desenvolvedores aprendizes pelas complexidades de Lógica Algorítmica e Estruturas de Dados. Realizei depuração de código e workshops técnicos.",
    // Tags
    tagETL: "ETL Automatizado",
    tagPipe: "Otimização de Pipeline",
    tagDoc: "Documentação Técnica",
    tagAlg: "Lógica Algorítmica",
    tagDebug: "Depuração de Sistemas",
    tagCost: "Atendimento ao Cliente",
    tagWorkf: "Gestão de Fluxo",

    activeQuests: "Missões Ativas",
    // Stardew Quest
    stardewTitle: "Missão: Pipeline de Dados Stardew Valley",
    stardewDesc: "Desenvolvendo um pipeline ETL completo para extrair dados da wiki, calcular o ROI das plantações e visualizar estratégias. Transformando pixels em insights valiosos.",
    stardewLoot: "Web Scraping • Tratamento de Dados • Modelagem de ROI",
    // SQL Quest
    sqlTitle: "Missão: Magia SQL e Otimização",
    sqlDesc: "Arquitetando esquemas relacionais de alta performance. Refatorando consultas legadas 'amaldiçoadas' em scripts otimizados para recuperação de dados veloz.",
    sqlLoot: "Design de Esquema • Otimização de Consultas • PostgreSQL",
    // Button
    seeQuestLog: "Ver Diário de Missões",

    inventory: "Inventário e Conquistas",
    lvl: "Nível",
    skills: "Habilidades",
    attributesTitle: "Atributos Principais",
    attr1: "Arquitetura de Sistemas (INT)",
    attr2: "Documentação (CHA)",
    attr3: "Escalabilidade (DEX)",
    attr4: "Segurança (WIS)",
    spellBookBtn: "Grimório Completo",
    tongues: "Idiomas Conhecidos",
  
    lvlGroupTitle: "Magias de Nível {n}",

    spellbookTitle: "Grimório",
    levelDisclaimer: "Níveis representam proficiência atual e estudos em andamento.",
    cantripTitle: "Cantrips Essenciais (Soft Skills)",
    flavorQuote: "O conhecimento é o escudo; a lógica é a espada.",
    flavorAuthor: "Decreto Antigo de Dados",
    lvlMastery: "Habilidades de Nível {n}",
    futureQuest: "Missão Futura...",

    cantrips: ["Comunicação Técnica", "Resolução de Problemas", "Pensamento Sistêmico", "Adaptabilidade"],
    technicalSkills: [
        { name: "Javascript", lvl: 1 },
        { name: "Typescript", lvl: 2 },
        { name: "Docker Basics", lvl: 2 },
        { name: "AWS Fundamentals", lvl: 2 },
        { name: "Azure", lvl: 2 },
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
        { name: "Python", lvl: 7 },
        { name: "Numpy & Pandas", lvl: 7 },
        { name: "Distributed Systems", lvl: 8 },
        { name: "Data Privacy & LGPD", lvl: 8 },
        { name: "Network Security", lvl: 8 },
        { name: "Cloud Security Arch.", lvl: 9 },
        { name: "Infrastructure as Code", lvl: 9 },
        { name: "Threat Intelligence", lvl: 9 },
        { name: "Secure System Opt.", lvl: 10 },
        { name: "Vulnerability Research", lvl: 10 },
        { name: "Data Encryption", lvl: 10 }
    ],

    back: "← Voltar para a Vila",
    questTitle: "Diário de Missões Completo",
    statusCompleted: "Concluído",
    analysisBtn: "Ler Análise Completa",
    closeBtn: "Fechar Análise",
    viewRepo: "Código Fonte",
    readPaper: "Ler Análise",
    readMedium: "Ler no Medium",
    // Project 1
    ganShort: "Um projeto colaborativo de DCGAN nascido de uma expedição de dados urbanos em Berlim e Dinamarca.",
    ganFull: "Este projeto foi desenvolvido durante um intercâmbio na Dinamarca com três colegas, inspirado por uma visita a Berlim. Após visitarmos startups e laboratórios estatais que utilizavam análise de dados para resolver questões urbanas, ficamos fascinados pela 'pegada de dados' da própria cidade, especificamente sua arte de rua. Queríamos testar se poderíamos tratar o graffiti não apenas como arte, mas como um sistema complexo de dados espaciais. Utilizando uma DCGAN (Rede Adversária Generativa), construímos um modelo para sintetizar tipografias urbanas como 'Wildstyle' e 'Bubble'. Além do desafio técnico de equilibrar o Gerador e o Discriminador para evitar o 'Mode Collapse', o projeto foi uma exploração de como as redes neurais podem interpretar o 'caos' criativo da linguagem visual de uma metrópole. Foi a nossa forma de responder a uma pergunta urbana: pode um algoritmo aprender a alma de um mural?",
    // Project 2
    batoceraShort: "Recuperação de hardware legado através de otimização de kernel Linux e redes.",
    batoceraFull: "Este projeto surgiu como uma solução prática para um gargalo de segurança e desempenho: máquinas antigas com Windows 10 no campus estavam no limite de seu hardware. Recuperei duas dessas estações, migrando-as para Debian para criar arcades personalizados. Isso me levou a querer aprender mais sobre o ecossistema Linux, desde solucionar problemas com chips Wi-Fi obsoletos (resolvido via injeção manual de pacotes e ajustes de kernel) até lidar com as restrições de firewall do campus. Trouxe esse aprendizado para o meu próprio Raspberry Pi com Batocera, onde sigo otimizando o sistema. Para mim, o mais interessante é entender como o hardware se comunica com o software, buscando alternativas quando as soluções convencionais não atendem.",

    goodreadsShort: "Projeto colaborativo de Big Data transformando mais de 16.000 resenhas humanas em insights de redes estruturadas.",
    goodreadsFull: "Desenvolvido com um colega para uma disciplina de Big Data, este projeto nasceu do nosso interesse comum por livros e de uma pergunta: o tom emocional de uma resenha realmente condiz com sua nota? Ao percebermos que os datasets do Kaggle eram limitados ou cheios de valores ausentes, construímos um scraper em Python para coletar metadados e mais de 16.000 avaliações de 4.000 títulos. Processamos o texto via análise de sentimento VADER e descobrimos que as notas numéricas muitas vezes não captam a nuance do sentimento do usuário. Além disso, modelamos os dados como uma rede complexa usando o algoritmo Louvain, identificando que gêneros como 'Política' e 'Infantil' atuam como pontes essenciais entre diferentes comunidades literárias. O trabalho envolveu limpeza pesada de dados e testes ANOVA, mas o ponto mais interessante foi observar como sentimentos humanos subjetivos expressos em comentários são transformados em dados estruturados e resultados numéricos.",
    
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