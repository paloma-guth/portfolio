// src/data/languages.ts
export const content = {
  EN: {
    heroTitle: "Paloma Guth Kronbauer",
    heroSub: "Computer Science & Mathematics @ St. Olaf College",
    about: "The Archive",
    bio: "Curious by nature, my time in college gave me the foundational mindset to understand how systems work under the hood before jumping in to change them. I've always wanted to know the 'how' behind everything, making Computer Science the perfect environment for me. I’m constantly tinkering with things, and if I don't know how something works yet... well, I’ll figure it out. I am fascinated by automation: if I can build a script to optimize a manual task, I will. As a self-taught explorer who embraces the learning curve, when faced with a complex problem, I won't rest until I find the answer and see the code running exactly the way it should.",
    extraTitle: "Interests:",
    extraBio: "Interests: Cybersecurity. I am an enthusiast in the field, spending my free time studying system vulnerabilities and cracking practical challenges on TryHackMe.",
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
    job1Title: "Team Lead & Technical Mentor ",
    job1Place: "St. Olaf College - Tech Hub | 2022 - 2026",
    job1Desc: "Evolved from intern to Infrastructure Team Lead over four years. Coordinated the migration of legacy academic stations to Debian Linux, handling hardware constraints and resolving network firmware incompatibilities. On the data side, developed a Python script integrated with the Google Calendar API to analyze room occupancy and architected an internal inventory system to phase out manual forms.",
    // Job 2
    job2Title: "Technical Support Specialist",
    job2Place: "St Olaf College - IT | 2023 - 2024",
    job2Desc: "Worked on the front lines supporting the campus community, resolving network, access, and endpoint security issues (Windows/macOS). My greatest school of technical communication was providing 100% verbal remote support over the phone, translating complex network concepts for users struggling with technology. And yes, I managed more chronic Windows printer spooler issues than I would care to admit.",
    // TA Position 
    taTitle: "Teaching Assistant - Hardware Engineering",
    taPlace: "St. Olaf College | Fall 2024",
    taDesc: "Served as the technical point of contact for students in computer architecture and low-level courses. Held office hours to assist with digital gates, C pointers, and Assembly programming, directly helping with code debugging and logic circuit validation. After so many digital logic reviews, reading binary and hexadecimal became almost a second language.",
    // Tags
    tagETL: "Automated ETL",
    tagPipe: "Pipeline Optimization",
    tagDoc: "Technical Documentation",
    tagAlg: "Algorithmic Logic",
    tagDebug: "System Debugging",
    tagCost: "Customer Assistance",
    tagWorkf: "Workflow Management",
    tagEnd: "Endpoints Security",
    viewM: "More Adventures",
    viewL: "View Less",

    activeQuests: "Active Quests",
    // Stardew Quest
    stardewTitle: "Stardew Valley Data Pipeline",
    stardewDesc: "A data pipeline focused on economic optimization for Stardew Valley. I developed Python web scrapers to extract data from the official Wiki, structuring and normalizing the information into JSON models using OOP. The project is currently focused on statistical simulations to predict the highest Return on Investment (ROI) per season.",
    tagPython: "Python",
    tagScraping: "Web Scraping",
    tagJSON: "JSON Storage",
    tagCleaning: "Data Cleaning",
    // SQL Quest
    sqlTitle: "RPG Guild Management System (SQL)",
    sqlDesc: "Building a complex relational database from scratch to manage RPG (D&D) inventories and events. Currently structuring many-to-many relationships, junction tables, and optimized queries with multiple JOINs, with the ultimate goal of encapsulating the logic into a stable API.",
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
    pythonBonus: "Bonus: +3 | Data Pipelines",
    sqlBonus: "Bonus: +2 | Modeling",
    cBonus: "Bonus: +2 | OOP & Memory Allocation",

    spellbookTitle: "Spellbook",
    levelDisclaimer: "Skills organized by Spell Circles. Unlocked tiers reflect my current proficiency. Circle 10 is not the end; it's just where the air gets thin.",
    cantripTitle: "Core Cantrips (Soft Skills)",
    flavorQuote: "Data is just noise until you find the frequency. Once the logic is anchored and the flow is steady, the rest is just channeling the spark.",
    flavorAuthor: "Unrecorded Field Notes",
    lvlMastery: "Circle {n}",
    futureQuest: "Future Quest",
    
    // Arrays for the Skills Page
    cantrips: ["Technical Communication", "Problem Solving", "Systemic Thinking", "Adaptability"],
    technicalSkills: [
      // 1st Circle
      { name: "JavaScript", lvl: 1 },
      { name: "Azure", lvl: 1 },
      { name: "Apache Airflow", lvl: 1 },

      // 2nd Circle
      { name: "TypeScript", lvl: 2 },
      { name: "Docker (Basics)", lvl: 2 }, 
      { name: "SQLite", lvl: 2 },
      { name: "PyTest / Unit Tests", lvl: 2 },

      // 3rd Circle
      { name: "AWS (Fundamentals)", lvl: 3 },
      { name: "REST APIs", lvl: 3 },
      { name: "FastAPI / Flask", lvl: 3 },
      { name: "CI/CD (Fundamentals)", lvl: 3 },

      // 4th Circle
      { name: "Linux (Debian / Ubuntu)", lvl: 4 },
      { name: "PostgreSQL / MySQL", lvl: 4 },
      { name: "TensorFlow / Keras", lvl: 4 }, 

      // 5th Circle
      { name: "SQL & Relational Modeling", lvl: 5 },
      { name: "Scikit-learn", lvl: 5 },
      { name: "PySpark", lvl: 5 }, 

      // 6th Circle
      { name: "Bash", lvl: 6 },
      { name: "Git / GitHub", lvl: 6 },

      // 7th Circle (Current Apex)
      { name: "Python (Backend/Data)", lvl: 7 },
      { name: "C / C++", lvl: 7 },
      { name: "NumPy & Pandas", lvl: 7 },
      { name: "R", lvl: 7 },

      // --- LOCKED MODULES ---

      // 8th Circle (Locked)
      { name: "Apache Kafka", lvl: 8 }, 
      { name: "OAuth2 / JWT Security", lvl: 8 }, 
      { name: "Locust / Gatling", lvl: 8 },

      // 9th Circle (Locked)
      { name: "Kubernetes", lvl: 9 }, 
      { name: "Terraform", lvl: 9 }, 
      { name: "Integration & E2E Testing", lvl: 9 },
      { name: "OWASP Top 10", lvl: 9 }, 

      // 10th Circle (Locked)
      { name: "gRPC & Protocol Buffers", lvl: 10 }, 
      { name: "Cryptography (AES / RSA)", lvl: 10 }, 
      { name: "Delta Lake / Lakehouses", lvl: 10 } 
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
    ganShort: "Deep generative modeling (DCGAN) applied to the synthesis of complex visual data and urban typography.",
    ganFull: "A co-authored project developed during an exchange program in Denmark, inspired by Berlin's urban tech ecosystem. After analyzing how local labs utilized data to tackle urban challenges, our team tested whether graffiti could be mapped as a complex spatial data system. Using a DCGAN (Deep Convolutional Generative Adversarial Network) architecture, we developed a computational model to synthesize urban typologies like 'Wildstyle' and 'Bubble'. Beyond the technical challenge of balancing the Generator and Discriminator to mitigate Mode Collapse, the project explored the capacity of deep neural networks to interpret the creative chaos of a metropolis's visual language. It was our response to a computational challenge: can an algorithm learn the essence of an artistic expression?",
    // Project 2
    batoceraShort: "On-demand infrastructure provisioning through Linux kernel optimization on resource-constrained hardware.",
    batoceraFull: "An infrastructure project aimed at resolving a hardware and security bottleneck in the workplace. With the IT team's approval, two resource-constrained Windows 10 stations—originally slated for future conversion into integrated Arcade cabinets—were migrated to Debian Linux. The main technical challenge involved an incompatible integrated Wi-Fi chipset, which was resolved by adapting an external USB interface and provisioning network packages directly within the OS. To validate the viability of embedded systems and perform emulation benchmarks, this Linux and package management experience was extended to a local testing environment using a Raspberry Pi configured with Batocera. Upon graduating and concluding my tenure, the project was handed over to another student who will continue the development of the dedicated cabinets.",

    goodreadsShort: "Distributed Big Data pipeline and complex network analysis for large-scale sentiment extraction.",
    goodreadsFull:"Developed as an academic partnership for a Big Data course in Denmark, this project stemmed from the hypothesis that numerical ratings often conceal the true nuance of a user's textual sentiment. Faced with the limitations and inconsistencies of publicly available Kaggle datasets, a custom Python web scraper was engineered to extract metadata and over 16,000 reviews across 4,000 titles from the Goodreads platform. The natural language processing layer utilized the VADER algorithm for sentiment analysis, uncovering significant divergences between quantitative metrics and the emotional tone of the critiques. Additionally, the data was modeled as complex networks using the Louvain algorithm, identifying influence clusters and demonstrating how the 'Politics' and 'Children' genres operate as structural bridges between literary communities (statistically validated via ANOVA testing). The project demonstrates the viability of transforming highly subjective textual data into structured graphs and quantifiable intelligence.",
    
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
    sqlDesc: "Implementação do zero de um banco de dados relacional complexo para gerenciamento de inventários e eventos de RPG (D&D). Em processo de estruturação de relacionamentos muitos-para-muitos, tabelas intermediárias e queries otimizadas com múltiplos JOINs, com o objetivo final de encapsular a lógica em uma API estável.",
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
    pythonBonus: "Bônus: +3 | Pipelines de Dados",
    sqlBonus: "Bônus: +2 | Modelagem",
    cBonus: "Bônus: +2 | POO & Alocação de Memória",
  
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