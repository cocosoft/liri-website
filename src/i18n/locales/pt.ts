/**
 * 葡萄牙语（pt-BR）整站文案：ui、channels 与 22 个区块，结构与英文版一一对应。
 * 约定：占位符 {xxx}、HTML 标签/class、代码命令、URL、版本号与专有名词保持原样。
 */
export const pt = {
  ui: {
    meta: {
      homeTitle: 'Liri — Seu assistente pessoal de IA',
      homeDescription:
        'Liri (Linglong Bird) é um agente de IA de terminal de código aberto (MIT): {tools} ferramentas integradas, {channels} canais de mensagens, cinco camadas de defesa de segurança, suporte a modelos locais e roteamento entre vários provedores.',
    },

    nav: {
      capabilities: 'Recursos',
      architecture: 'Arquitetura',
      security: 'Segurança',
      routing: 'Roteamento',
      voice: 'Voz',
      brain: 'Segundo cérebro',
      desktop: 'Desktop',
      cost: 'Custo',
      ecosystem: 'Ecossistema',
      evolution: 'Registro de evolução',
      start: 'Começar',
      docs: 'Docs',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },

    lang: {
      label: 'Idioma',
      switchToZh: 'Mudar para chinês',
      switchToEn: 'Mudar para inglês',
    },

    stage: {
      label: 'Iteração rápida',
      note: 'APIs e docs podem mudar',
      detail:
        'O Liri está em iteração rápida: APIs, opções de configuração e documentação mudam entre versões. Confira as notas de versão antes de atualizar.',
      cta: 'Notas de versão',
    },

    footer: {
      tagline: 'Assistente pessoal de IA · Local-first · Segurança integrada',
      resources: 'Recursos',
      repo: 'Repositório no GitHub',
      issue: 'Abrir uma issue',
      releases: 'Notas de versão',
      license: 'MIT License',
      community: 'Comunidade',
      discord: 'Discord (em breve)',
      docs: 'Documentação',
      status: 'Status do projeto',
      evolution: 'Registro de evolução',
      support: 'Apoiar o Liri',
      discussions: 'Discussions (em breve)',
      copyright: '© {year} Liri. Released under MIT License.',
      stats:
        '{tsFiles} arquivos TS · {tools} ferramentas · {securityLayers} camadas de segurança · {channels} canais · {buddySpecies} espécies de Buddy',
    },

    docs: {
      label: 'Docs',
      pageTitle: 'Documentação — Liri',
      pageDescription: 'Instalação, configuração, integração de canais e referência de comandos do Liri.',
      all: 'Toda a documentação',
      articleTitle: '{title} — Liri Docs',
      backHome: 'Voltar ao início',
      indexTitle: 'Documentação',
      indexIntro:
        'Sincronizado de <code class="font-mono text-brand-400">app/docs</code> no repositório do GitHub · {count} artigos.',
      footerNote:
        'O site pode ficar atrás do código-fonte. O <a class="text-surface-400 hover:text-surface-200" href="https://github.com/cocosoft/Liri/tree/main/app/docs" target="_blank" rel="noopener noreferrer">repositório no GitHub</a> é a referência.',
      source: 'Arquivo de origem: ',
      englishOnly: 'A documentação está disponível apenas em inglês no momento.',
    },

    common: {
      scroll: 'Rolar para baixo',
      copy: 'Clique para copiar',
      backHome: 'Voltar ao início',
      fullStatus: 'Ver status completo',
    },
  },

  channels: {
    即时通讯: 'Mensageria',
    国内平台: 'Plataformas na China',
    协作与社交: 'Colaboração e social',
    其它通道: 'Outros canais',
    微信: 'WeChat',
    企业微信: 'WeCom',
    钉钉: 'DingTalk',
    飞书: 'Feishu',
    元宝: 'Yuanbao',
    移动端接入: 'Acesso móvel',
  },

  about: {
    title: 'O que é o Liri',
    p1: 'Liri é um <strong class="text-brand-300">assistente pessoal de IA</strong> construído sobre uma arquitetura de <strong class="text-brand-300">TypeScript + Rust</strong>.',
    p2: 'Muito mais que um chatbot — ele <strong class="text-brand-300">entende a intenção</strong>, <strong class="text-brand-300">executa comandos</strong>, <strong class="text-brand-300">gerencia tarefas</strong>, <strong class="text-brand-300">chama ferramentas</strong> e até colabora com outros agentes de IA. Um único motor alimenta todos os pontos de entrada: terminal, desktop, IM e MCP.',
    p3: '<strong class="text-brand-300">{modules}</strong> subsistemas modulares, <strong class="text-brand-300">{tsFiles}</strong> arquivos TypeScript e <strong class="text-brand-300">{desktopComponents}</strong> componentes de desktop — tudo cortável por variante de build.',
    statLabels: ['Arquivos TypeScript', 'Ferramentas integradas', 'Canais de mensagens', 'Componentes TSX de desktop'],
    verifyTitle: 'Confira no código-fonte no GitHub',
  },

  architecture: {
    title: 'Visão geral da arquitetura',
    subtitle:
      '8 camadas funcionais, do ponto de entrada ao feedback; no código, impostas por 6 portões de dependência (entry > ui > app > service > infra > core)',
    summary: {
      title: 'Em camadas, como um sistema operacional',
      subtitle:
        'Núcleo fino, limites entre subsistemas e portões de dependência; local-first é o padrão, não um interruptor.',
      pillars: [
        {
          title: 'Núcleo',
          desc: '@openliri/kernel é um pacote próprio que expõe apenas uma interface fina, protegida pelos portões K01–K08',
        },
        {
          title: 'Subsistemas',
          desc: 'Ferramentas, canais, memória, roteamento, sandbox e tarefas têm cada um seus pontos de entrada e limites',
        },
        {
          title: 'Portões',
          desc: 'Direção de dependência em 6 camadas + mais de 20 verificações de arquitetura — violação bloqueia a CI',
        },
        {
          title: 'Local-first',
          desc: 'Os dados ficam na sua máquina por padrão; os modelos podem rodar totalmente local',
        },
      ],
      link: 'Veja como a arquitetura evoluiu e o que ainda falta',
    },
    layers: [
      {
        name: 'Camada de entrada multimodal',
        subtitle: 'Entre no Liri por qualquer superfície',
        items: [
          { label: 'Terminal REPL', detail: 'Interface de terminal feita com React + Ink, com o sistema de companheiro Buddy integrado' },
          {
            label: 'Cliente desktop Tauri',
            detail: '{desktopComponents} componentes TSX em {desktopPages} páginas de recursos (Tauri 2.11 + React 19)',
          },
          {
            label: 'Gateway MCP / canais',
            detail: 'MCP Server + {channels} canais de mensagens (WeChat, DingTalk, Feishu, Telegram e outros)',
          },
          { label: 'CLI / API HTTP', detail: 'Três executáveis — Liri / liri-memory / liri-ink — e uma API HTTP' },
        ],
      },
      {
        name: 'Primeira camada de segurança',
        subtitle: 'Toda entrada passa por um filtro de segurança',
        items: [
          {
            label: 'Análise AST em Rust no tempo de compilação',
            detail: 'A camada FFI analisa a AST do Bash com base em {dangerousRules} regras de comandos perigosos',
          },
          {
            label: 'Análise semântica em TypeScript',
            detail: 'Comandos somente leitura compostos são avaliados trecho a trecho, com motivo da recusa atribuível',
          },
          { label: 'Motor de regras Guardrail', detail: '{injectionRules} padrões de injeção + {shellRules} regras específicas de shell' },
          {
            label: 'Classificador AutoMode',
            detail: 'Avalia o risco da tarefa automaticamente e decide entre permitir, perguntar e negar',
          },
        ],
      },
      {
        name: 'Camada de roteamento inteligente',
        subtitle: 'Escolha do modelo pelo tipo e pela dificuldade da tarefa',
        items: [
          {
            label: '{taskTypes} tipos de tarefa detectados',
            detail: 'codificação, escrita, análise, ferramentas, tradução, busca, ideação, conversa e outros',
          },
          { label: '4 níveis', detail: 'simple / medium / complex / reasoning' },
          {
            label: 'Pipeline de decisão em 5 etapas',
            detail: 'interruptor → caminho rápido → aderência da sessão → julgamento do LLM → resolução de nível',
          },
          {
            label: 'FallbackChain',
            detail: 'Failover ordenado quando o provedor principal está indisponível, junto com RetryPolicy',
          },
        ],
      },
      {
        name: 'Camada de injeção do segundo cérebro',
        subtitle: 'Base de conhecimento + memória + eventos de sessão: três fontes de contexto recuperáveis',
        items: [
          {
            label: 'Base de conhecimento',
            detail: 'Markdown em disco e indexação semântica, com recuperação híbrida por palavra-chave / vetor / RRF',
          },
          {
            label: 'Sistema de memória',
            detail: 'Memória em camadas com tabela vetorial SQLite e recuperação ponderada por relevância',
          },
          { label: 'Eventos de sessão', detail: 'events.jsonl somente em acréscimo — reproduzível e auditável' },
          { label: 'DreamEngine', detail: 'Consolida conhecimento quando ocioso: coletar → analisar → gerar → gravar → indexar' },
        ],
      },
      {
        name: 'Loop de decisão TAOR',
        subtitle: 'Think → Act → Observe → Reason',
        items: [
          { label: 'Think', detail: '{strategies} estratégias de agente: geral / codificação / exploração / planejamento' },
          { label: 'Act', detail: '{tools} ferramentas integradas, registradas dinamicamente conforme a variante de build' },
          { label: 'Observe', detail: 'Avaliação de resultados, janelas de contexto em camadas e compactação automática' },
          { label: 'Reason', detail: 'Gestão de orçamento de tokens + retomada por checkpoint + disjuntor por rodada' },
        ],
      },
      {
        name: 'Camada de sandbox de execução',
        subtitle: 'Os comandos rodam isolados e degradam com honestidade quando não há isolamento disponível',
        items: [
          { label: 'Linux Landlock', detail: 'Restrições de acesso ao sistema de arquivos em nível de núcleo' },
          { label: 'macOS / Windows', detail: 'Sandbox do sistema com Low IL / objeto Job como fallback' },
          {
            label: 'Contêiner Docker',
            detail: 'Isolamento completo em contêiner com limites de recursos e políticas de rede',
          },
          {
            label: 'SSH / PTY',
            detail: 'Ambientes remotos limpos de execução e caminhos de pseudo-terminal controlados',
          },
        ],
      },
      {
        name: 'Camada de tarefas de longa duração',
        subtitle: 'De uma única conversa a trabalhos de vários dias',
        items: [
          {
            label: 'Pipeline PDCA',
            detail: 'Ciclo Plan-Do-Check-Act que avança o progresso conforme artefatos reais existem',
          },
          {
            label: 'Swarm multiagente',
            detail: 'AgentSwarm com orquestração em conselho e descoberta dinâmica via registro',
          },
          { label: 'Agendamento Cron', detail: 'expressões once / interval / cron, com fusos horários' },
          {
            label: 'Persistência de tarefas',
            detail: 'Snapshots de sessão, retomada por ponto de parada e contagens regressivas visíveis durante a espera',
          },
        ],
      },
      {
        name: 'Camada de feedback e evolução',
        subtitle: 'Cada interação deixa evidência verificável',
        items: [
          {
            label: 'Indução de padrões de falha',
            detail: 'Os padrões de falha são generalizados de volta em prompts e habilidades, fechando o ciclo de melhoria',
          },
          {
            label: 'Livro de custos',
            detail: 'Cobrado pela tabela de preços do banco, registrando o nome real do modelo devolvido pelo provedor',
          },
          {
            label: 'Portões de avaliação',
            detail: 'Conjuntos de referência integrados, pontuação de confiabilidade pass^k e medição de segurança em pares',
          },
          { label: 'Reprodução de eventos', detail: 'O contexto de cada chamada ao modelo pode ser reconstruído depois' },
        ],
      },
    ],
    principlesTitle: 'Filosofia de arquitetura',
    principles: [
      { title: 'Segurança integrada', desc: 'Segurança não é plugin — é o DNA de cada camada' },
      { title: 'Local-first', desc: 'Dados locais, funciona offline, privacidade protegida por padrão' },
      { title: 'Roteamento inteligente', desc: '{taskTypes} classes de tarefa mapeadas para o nível de modelo certo' },
      {
        title: 'Segundo cérebro',
        desc: 'Base de conhecimento, memória e logs de eventos: três camadas de contexto recuperáveis',
      },
      { title: 'Ciclo verificável', desc: 'Lições de falhas voltam ao sistema e portões bloqueiam regressões' },
      { title: 'Multimodal unificado', desc: 'Terminal, desktop, IM e API compartilham um único motor' },
    ],
  },

  brainSection: {
    title: 'O segundo cérebro',
    subtitle:
      'Base de conhecimento → Memória → Eventos de sessão: três camadas de contexto recuperáveis, todas armazenadas na sua máquina',
    layers: [
      {
        badge: 'Camada 1: Base de conhecimento',
        title: 'Base de conhecimento',
        desc: 'Markdown em disco e indexação semântica, com fontes citadas em cada resultado',
        tags: ['Markdown em disco', 'Índice semântico JSONL', 'Busca por palavra-chave', 'Busca vetorial', 'Fusão RRF'],
      },
      {
        badge: 'Camada 2: Memória',
        title: 'Sistema de memória',
        desc: 'Memória em camadas e tabelas vetoriais SQLite, recuperadas com ponderação por relevância',
        tags: ['Memória em camadas', 'memory_vectors', 'Ponderação por relevância', 'Limpeza de memória', 'Injeção de contexto'],
      },
      {
        badge: 'Camada 3: Fonte da verdade',
        title: 'Log de eventos de sessão',
        desc: 'Tudo o que entra em uma requisição ao modelo vira um evento de sessão que você pode reproduzir',
        tags: [
          'events.jsonl somente em acréscimo',
          'Persistir antes da escrita',
          'Reprodução de sessão',
          'Trilha auditável',
          'Registro em tempo de compilação',
        ],
      },
    ],
    governTitle: 'Organizar e governar',
    governSubtitle:
      'Curar conhecimento quando ocioso, comprimir contexto quando transborda — dois pipelines reais em segundo plano',
    dreamHeading: 'Pipeline de cinco estágios do DreamEngine',
    dreamStages: [
      { name: 'Coletar', desc: 'Reunir sessões e documentos aguardando curadoria' },
      { name: 'Analisar', desc: 'Extrair temas e conclusões reutilizáveis' },
      { name: 'Gerar', desc: 'Produzir notas voltadas às camadas superiores' },
      { name: 'Gravar', desc: 'Gravar na base de conhecimento e na memória' },
      { name: 'Indexar', desc: 'Reconstruir os índices vetorial e de palavras-chave' },
    ],
    contextTitle: 'Governança de contexto em camadas',
    contextBody:
      'Quando uma conversa longa transborda, os turnos mais antigos são descartados primeiro, reduzindo a memória em tempo de build de O(total) para O(janela). Um aviso de “texto original recuperável” sobrevive ao corte, os detalhes podem ser paginados de volta e marcas de tokens disparam a compactação automática.',
    contextCards: [
      { title: 'Janela em camadas', desc: 'Cortar turnos antigos primeiro quando o contexto transborda' },
      { title: 'Recuperar sob demanda', desc: 'Paginar o texto original de volta' },
      { title: 'Compactação em três níveis', desc: 'Tier 1/2 em linha + Tier 3 em segundo plano' },
    ],
    pdcaTitle: 'Loop de autoaperfeiçoamento PDCA',
    pdcaBody:
      'Em tarefas de longa duração, o Liri executa o ciclo Plan-Do-Check-Act por conta própria: decompor a tarefa → executar etapas → revisar resultados → revisar o plano, até concluir ou atingir uma condição de parada.',
    pdcaSteps: [
      { step: 'Plan', desc: 'Decomposição automática' },
      { step: 'Do', desc: 'Execução passo a passo' },
      { step: 'Check', desc: 'Revisão automática' },
      { step: 'Act', desc: 'Correção automática' },
    ],
  },

  capabilities: {
    title: 'Recursos',
    subtitle: 'Oito recursos diferenciados, cada um verificável no código-fonte no GitHub',
    items: [
      {
        title: 'Motor de agente profundo',
        description: 'Um loop TAOR próprio, com estratégia, memória e checkpoints',
        details: [
          'Ciclo de decisão TAOR (Think-Act-Observe-Reason)',
          '{strategies} estratégias de agente: geral / codificação / exploração / planejamento',
          'Retomada por checkpoint mantém tarefas longas recuperáveis após interrupção',
          'Janelas de contexto em camadas com compactação automática em três níveis',
          '8 motivos de término e disjuntor por rodada para impedir loops descontrolados',
        ],
        highlight: 'Núcleo',
      },
      {
        title: '5 camadas de defesa em profundidade',
        description: 'Análise AST em Rust no tempo de compilação → cinco linhas de defesa → isolamento por sandbox com múltiplos backends',
        details: [
          'Análise de Bash em tempo de compilação via AST em Rust pela FFI',
          '{dangerousRules} regras de comandos perigosos + {injectionRules} regras de injeção',
          'Motor de regras de política Guardrail',
          'Classificador de risco AutoMode',
          'Cobertura de sandbox: Landlock / macOS / Windows / Docker / SSH / PTY',
        ],
        highlight: 'Segurança',
      },
      {
        title: '{tools} ferramentas integradas',
        description: '{categories} categorias cobrindo arquivos, comandos, rede, mídia, código e colaboração',
        details: [
          'Execução de Bash em nível de AST em Rust',
          'Inteligência de código com LSP',
          'Coleta e busca na web',
          'Processamento de notebook, imagem, áudio e vídeo',
          'Suporte completo a cliente e servidor MCP',
        ],
        highlight: 'Amplitude',
      },
      {
        title: '{channels} canais de mensagens',
        description: '{channels} adaptadores de canal, com suporte a WeChat / WeCom / DingTalk / Feishu / QQ',
        details: [
          'Telegram / Discord / Slack / WhatsApp',
          'WeChat / WeCom / DingTalk / Feishu / QQ / Yuanbao',
          'Email / SMS / Webhook / IRC / Matrix',
          'Catálogo unificado de canais com roteamento de gateway',
          'Corte de canais em tempo de compilação para builds menores',
        ],
        highlight: 'Multiplataforma',
      },
      {
        title: 'Observabilidade de nível empresarial',
        description: 'Integração OpenTelemetry, alertas e verificações de saúde',
        details: [
          'Tracing + métricas alinhados às convenções semânticas OTel GenAI',
          'Logs estruturados em níveis',
          'Regras de alerta e gestão de incidentes',
          'Verificações de saúde, backups e arquivamento de dados',
          'Eventos de sessão reproduzíveis e auditáveis',
        ],
        highlight: 'Observabilidade',
      },
      {
        title: 'Arquitetura plugável',
        description: 'SDK de plugins, sistema de habilidades e quatro protocolos — cortáveis por variante de build',
        details: [
          '5 variantes de build: core / personal / coding / enterprise / headless',
          'Marketplace de plugins com carregamento a quente e verificação de assinatura',
          'Três fontes de habilidades isoladas (integradas / do usuário / de terceiros)',
          'Protocolos MCP / ACP / A2A / LSP',
          'Inicialização em quatro estágios (T0–T3) com carregamento sob demanda',
        ],
        highlight: 'Flexível',
      },
      {
        title: 'Local-first',
        description: 'Modelos locais via Ollama / llama.cpp, com os dados na sua máquina por padrão',
        details: [
          'Inferência local que roda totalmente offline',
          'Um único arquivo SQLite que nunca sai do dispositivo',
          'Sessões gravadas em events.jsonl somente em acréscimo',
          'Provedores na nuvem como reforço opcional',
          'Diretórios de sandbox isolados por workspace',
        ],
        highlight: 'Privacidade',
      },
      {
        title: 'Roteamento inteligente',
        description: '{taskTypes} classes de tarefa × 4 níveis × 5 etapas de decisão, mais cadeias de fallback entre provedores',
        details: [
          '{taskTypes} tipos de tarefa detectados automaticamente',
          '4 níveis: simple / medium / complex / reasoning',
          '5 etapas de decisão: interruptor → caminho rápido → aderência da sessão → julgamento do LLM → nível',
          'FallbackChain entre provedores com políticas de nova tentativa',
          'Preços e janelas de contexto lidos do banco',
        ],
        highlight: 'Roteamento',
      },
    ],
  },

  channelWall: {
    title: '{channels} canais de mensagens',
    subtitle:
      'Cada um dos {channels} canais vem com um adaptador correspondente. Defina as variáveis de ambiente do canal para ativá-lo, ou remova-o no momento do build.',
    summary:
      '{count} canais no total · um catálogo unificado · ativação por canal · corte em tempo de compilação',
  },

  community: {
    title: 'Código aberto · Comunidade',
    subtitle: 'O Liri é um projeto de código aberto e todo colaborador é bem-vindo',
    githubDesc: 'Acompanhe o projeto no GitHub, abra issues ou envie PRs',
    communityTitle: 'Junte-se à comunidade',
    communityDesc: 'Participe das discussões, abra issues ou envie PRs',
  },

  comparison: {
    title: 'Autoavaliação de recursos',
    subtitle:
      'Dezesseis dimensões, cada uma com seu estado atual e seu local no código-fonte — todo número leva ao código, e o que ainda não está pronto também está escrito.',
    dimensionHeader: 'Dimensão',
    stateHeader: 'Estado atual',
    statusHeader: 'Status',
    sourceHeader: 'Código-fonte',
    sourceLink: 'Ver',
    statuses: {
      ready: 'Implementado',
      polish: 'Em polimento',
      audit: 'Aguardando auditoria externa',
      building: 'Em construção',
      experimental: 'Experimental',
    },
    statusLegend:
      'O status é autoavaliado pelos mantenedores e muda a cada versão; “Ver” leva ao diretório correspondente para você conferir.',
    footnote: '* Os dados refletem o código-fonte v{version}; os links apontam para a branch main no GitHub.',
    rows: [
      { dimension: 'Linguagem', liri: 'TypeScript + Rust', status: 'ready', source: 'app/src' },
      { dimension: 'Local-first', liri: 'Ollama / llama.cpp + SQLite local', status: 'ready', source: 'app/src/ai' },
      {
        dimension: 'Roteamento inteligente',
        liri: '{taskTypes} tipos · 4 níveis · 5 camadas de decisão',
        status: 'ready',
        source: 'app/src/ai',
      },
      {
        dimension: 'Modelo de segurança',
        liri: '{securityLayers} camadas de defesa · 6 backends de sandbox',
        status: 'audit',
        source: 'app/src/security',
      },
      {
        dimension: 'Canais de mensagens',
        liri: '{channels} canais (incl. WeChat / DingTalk / Feishu / QQ)',
        status: 'ready',
        source: 'app/src/channels',
      },
      {
        dimension: 'Cliente desktop',
        liri: 'Tauri 2.11 · {components} componentes TSX',
        status: 'polish',
        source: 'client/src',
      },
      { dimension: 'Interface de terminal', liri: 'React + Ink', status: 'ready', source: 'app/src/ink' },
      {
        dimension: 'Sistema de persona',
        liri: '{species} espécies × {hats} chapéus × {eyes} olhos',
        status: 'ready',
        source: 'app/src/buddy',
      },
      {
        dimension: 'Interação por voz',
        liri: 'faster-whisper / Piper local + nuvem',
        status: 'ready',
        source: 'app/src/voice',
      },
      {
        dimension: 'Transparência de custos',
        liri: 'Preços no banco · cada chamada registrada',
        status: 'ready',
        source: 'app/src/cost',
      },
      {
        dimension: 'Segundo cérebro',
        liri: 'Base de conhecimento + memória + log de eventos',
        status: 'ready',
        source: 'app/src/knowledge',
      },
      {
        dimension: 'Governança de contexto',
        liri: 'Janela em camadas + compactação em três estágios',
        status: 'ready',
        source: 'app/src/context',
      },
      {
        dimension: 'Marketplace',
        liri: 'Marketplace de plugins + marketplace MCP + fontes de habilidades',
        status: 'building',
        source: 'app/src/plugins',
      },
      {
        dimension: 'Estratégias de agente',
        liri: '{agentStrategies} estratégias · PDCA · Swarm',
        status: 'ready',
        source: 'app/src/agent',
      },
      { dimension: 'Tarefas agendadas', liri: 'once / interval / cron', status: 'ready', source: 'app/src/chronos' },
      { dimension: 'Suporte a protocolos', liri: 'MCP + ACP + A2A + LSP', status: 'experimental', source: 'app/src/mcp' },
    ],
  },

  desktopClient: {
    title: 'Cliente desktop',
    subtitle:
      'Feito com Tauri 2.11 + React 19 · {components} componentes TSX · {pages} páginas de recursos · uma experiência completa de desktop',
    sidebar: [
      'Conversa',
      'Modelos de IA',
      'Base de conhecimento',
      'Memória',
      'Habilidades',
      'MCP',
      'Tarefas agendadas',
      'Central de custos',
      'Buddy',
      'Configurações',
    ],
    panelTitle: 'Painel de conversa',
    panelUser: 'Liri · Linglong Bird',
    greeting: 'Olá! Eu sou o Liri. Como posso ajudar?',
    userMessage: 'Me ajude a analisar os dados deste projeto',
    reply: 'Claro, analisando agora...',
    inputPlaceholder: 'Digite uma mensagem e pressione Enter para enviar...',
    mockNote: 'Ilustração da estrutura da interface — não é uma captura de tela real',
    features: [
      { label: 'Painel de conversa', desc: 'Conversas com vários turnos' },
      { label: 'Gestão de modelos', desc: 'Trocar entre modelos' },
      { label: 'Base de conhecimento', desc: 'Recuperação de arquivos' },
      { label: 'Memória', desc: 'Rever o histórico' },
      { label: 'Tarefas agendadas', desc: 'Agendamento com Cron' },
      { label: 'Integração MCP', desc: 'Descobrir e instalar servidores' },
      { label: 'Central de custos', desc: 'Registros de uso e gastos' },
      { label: 'Buddy', desc: 'Aparência e dados de crescimento' },
    ],
  },

  ecosystem: {
    title: 'Ecossistema',
    subtitle:
      'Marketplace de plugins + marketplace MCP + três fontes de habilidades + marketplace de modelos = um ecossistema Liri combinável',
    mcp: {
      title: 'Marketplace MCP',
      desc: '5 adaptadores de fonte, uma única busca',
      items: ['GitHub', 'npm', 'Registro oficial', 'Smithery', 'Serviços incluídos'],
    },
    plugins: {
      title: 'Marketplace de plugins',
      desc: 'Registros local, npm e remoto',
      items: [
        'SDK de plugins + adaptadores',
        'Ciclo de vida e recarregamento a quente',
        'Verificação de assinatura',
        'Endpoints de configuração + CLI',
        '5 variantes de build',
      ],
    },
    skills: {
      title: 'Três fontes de habilidades',
      desc: 'Integradas, do usuário e de terceiros — fisicamente isoladas',
      items: [
        '{skills} habilidades integradas',
        'Habilidades definidas pelo usuário',
        'Fonte de terceiros ClawHub',
        'Orquestração condicional',
        'Composição e correspondência de habilidades',
      ],
    },
    templates: {
      title: 'Modelos e protocolos',
      desc: 'Modelos de agente e de documento, prontos para usar',
      items: [
        'Marketplace de modelos de agente',
        'Marketplace de modelos de documento',
        'MCP / ACP / A2A / LSP',
        'Plugins e habilidades combináveis',
        'Reuso de modelos parametrizados',
      ],
    },
  },

  evolution: {
    meta: {
      title: 'Registro de evolução — Liri',
      description:
        'De v0.1 a v0.5.22: como o Liri passou de 4.000 arquivos a um sistema com limites, portões e uma interface que outras pessoas podem assumir. Cada ponto de virada traz evidências do código-fonte e do CHANGELOG.',
    },

    hero: {
      eyebrow: 'BUILD LOG',
      title: 'Uma estrada ainda em construção',
      subtitle:
        'De v0.1 a v0.5.22 — 156 dias, 116 versões. Isto não é uma lista de recursos; são os erros que cometemos, as regras que conquistamos e as lacunas que ainda não preenchemos.',
      stats: [
        { value: '156 dias', label: 'desde o primeiro lançamento' },
        { value: '116', label: 'versões' },
        { value: '9', label: 'snapshots de arquitetura' },
        { value: '20+', label: 'verificações de arquitetura' },
      ],
      scroll: 'Ir para a linha do tempo',
      snapshot: 'Snapshot de dados {date} · números coletados do repositório do Liri por sync-facts e health:arch',
    },

    origin: {
      title: 'Origem',
      paragraphs: [
        'Em 25 de maio de 2026, o Liri lançou a v0.1: 100 commits e um assistente de IA de terminal que realmente rodava.',
        'O problema era concreto — deixar o modelo morar no terminal, ler arquivos, executar comandos e editar código, em vez de conversar em uma caixa de texto na web. Modelos locais primeiro, porque arquivos pessoais não deveriam sair da máquina; segurança integrada, porque o assistente recebe um computador de verdade, não apenas uma API.',
        'Nos três meses seguintes, os recursos foram adicionados camada por camada: ferramentas, 27 canais de mensagens, um cliente desktop, voz, uma base de conhecimento. Em agosto, o repositório já tinha mais de 4.000 arquivos.',
        'Foi também quando o problema foi nomeado em voz alta. A revisão de código de 18 de junho de 2026 encontrou o LocalHTTPService com 7.200 linhas e o ChatManager com 3.263, com 150 arquivos de teste para 3.742 arquivos de código-fonte. Dois meses depois veio a primeira pontuação de saúde da arquitetura: 10/40, nota D, com 105 arquivos acima do limite, nenhum deles registrado.',
        'A lição: se um projeto pode ser entregue a outra pessoa depende não de quantos recursos ele tem, mas das regras que ele desenvolve depois de bater em uma parede.',
      ],
    },

    nodes: {
      title: 'Cinco pontos de virada',
      note: 'Ordenados por causa, não por calendário — alguns períodos se sobrepõem.',
      items: [
        {
          id: 'n1',
          period: '2026-05-25 → 2026-08',
          title: 'Primeiro os recursos, depois os limites',
          situation: 'A v0.1 tinha 100 commits; entregar valia mais que estruturar.',
          decision: 'Preencher os recursos primeiro: ferramentas, canais, desktop, voz, conhecimento — um de cada vez.',
          cost:
            'A primeira auditoria foi feia: LocalHTTPService com 7.200 linhas, ChatManager com 3.263, proporção de testes para código-fonte em torno de 4% e a primeira pontuação de saúde de 10/40 (D), com 105 arquivos acima do limite e nenhum registrado.',
          result: 'Mais de 4.000 arquivos, {tools} ferramentas, {channels} canais, {desktopComponents} componentes de desktop.',
          evidence: [
            { label: 'CHANGELOG v0.1', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
            {
              label: 'Revisão de código, 18 de junho de 2026',
              href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/codebase-review-20260618.md',
            },
          ],
          participate: 'Vai adicionar um recurso? Comece um módulo em app/src, não dentro do núcleo.',
        },
        {
          id: 'n2',
          period: '2026-08-09 → 2026-09-30',
          title: 'Aprender a nos medir',
          situation: 'Todo mundo sentia o problema; ninguém conseguia dizer o tamanho dele.',
          decision:
            'Transformar a qualidade da arquitetura em uma pontuação repetível com um registro, exigindo que todo arquivo acima do limite fosse registrado — abandonando a suposição de que a limpeza sobrevive só à disciplina.',
          cost:
            'Registrar não é dividir: o ChatManager cresceu de 3.263 para 7.036 linhas (desde então foi dividido até {chatManagerLines}). A própria pontuação continuou mudando, então ela é um check-up, não um KPI.',
          result:
            'Nove snapshots; arquivos acima do limite não registrados caíram de 105 para 0 (depois voltaram a 2); a lista virou um registro rastreável.',
          evidence: [
            {
              label: 'architecture-health-history.json',
              href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/architecture-health-history.json',
            },
            {
              label: 'architecture-health.ts',
              href: 'https://github.com/cocosoft/Liri/blob/main/scripts/architecture-health.ts',
            },
          ],
          participate: 'Assuma um arquivo acima do limite para dividir (veja Formas de ajudar abaixo).',
        },
        {
          id: 'n3',
          period: '2026-10-08 → 10-09',
          title: 'Uma exclusão errada comprou um processo de exclusão',
          situation:
            'O código havia acumulado uma camada de “superfícies mortas” aparentemente não usadas. A limpeza da v0.4.69 tratou o subsistema de sandbox e isolamento como código morto: 170 arquivos alterados, +9.340 / −10.174 linhas.',
          decision:
            'No dia seguinte, a v0.4.71 desfez tudo — 24 arquivos restaurados (IsolationManager, EnhancedSandboxManager, PTYSandbox, SSHSandbox, docker/** e outros, além de 5 suítes de teste) e 21 arquivos vivos revertidos para acompanhar.',
          cost: 'Excluir agora leva mais tempo: primeiro você escreve a evidência. Ainda é mais barato que um rollback.',
          result:
            'A v0.4.72 transformou a exclusão em processo, code-deletion.md (CD01–CD07): reunir evidências, desacoplar pontos de entrada e só então excluir. “Ninguém parece usar” deixou de ser motivo.',
          evidence: [
            {
              label: 'CHANGELOG v0.4.69 / v0.4.71 / v0.4.72',
              href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md',
            },
          ],
          participate: 'Revise um “candidato a código morto” segundo o CD01–CD07.',
        },
        {
          id: 'n4',
          period: '2026-10-10 → 10-22',
          title: 'Transformar regras em portões',
          situation: 'As regras viviam em documentos e dependiam de disciplina; documentos e código começaram a divergir.',
          decision:
            'Cada regra virou bloqueio de CI em vez de recomendação: cinco portões mais doc-gate e um job obrigatório sandbox-negative; 413 chaves de baseline de hardcoding; um vocabulário de estados com 34 valores e 1.795 pares de baseline; portões de superfície de inicialização, de módulo crítico e de superfície do núcleo.',
          cost:
            'Alguns segundos por commit, e as baselines precisam ser regeneradas a cada mudança de vocabulário — o ponto é que as definições não podem mais divergir em silêncio.',
          result: 'Violações de lint:arch em 0; os testes cresceram de 3.029 para 7.488.',
          evidence: [
            { label: 'Lista de portões do AGENTS.md', href: 'https://github.com/cocosoft/Liri/blob/main/AGENTS.md' },
            { label: 'Workflow de CI', href: 'https://github.com/cocosoft/Liri/blob/main/.github/workflows/ci.yml' },
          ],
          participate: 'Rode os portões locais (bun run ci) antes de enviar — corrija o que ficar vermelho.',
        },
        {
          id: 'n5',
          period: '2026-10-05 → 10-28',
          title: 'Encolher o núcleo: de 5.336 linhas a um pacote próprio',
          situation:
            'O core era ao mesmo tempo a implementação de entrada e o quintal compartilhado de todo mundo — qualquer pessoa podia adicionar coisas nele.',
          decision:
            'Três passos: encolher (CoreAPIImpl 5.336 → 2.521 linhas), extrair (@openliri/kernel como pacote próprio; core de 146 para 113 arquivos, com os portões de núcleo K01–K08) e então evacuar (37 módulos que falhavam na regra “zero I/O / zero dependência para cima” foram movidos para app/src, mais de 470 imports atualizados e cinco famílias de baseline regeneradas).',
          cost:
            'Uma grande migração e regeneração total das baselines; desde 18 de outubro o trabalho entra em lotes e a densidade de commits é deliberadamente menor.',
          result: 'O núcleo agora expõe uma interface fina; contribuições externas finalmente têm um limite.',
          evidence: [{ label: 'CHANGELOG v0.5.22', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' }],
          participate: 'Novos recursos vivem fora do limite do núcleo e começam em app/src.',
        },
      ],
      fieldLabels: {
        situation: 'Situação',
        decision: 'Decisão',
        cost: 'Custo',
        result: 'Resultado',
        evidence: 'Evidência',
        participate: 'Como entrar',
      },
    },

    model: {
      title: 'Arquitetura: em camadas, como um sistema operacional',
      intro:
        'A arquitetura não foi inventada do zero. Núcleo fino, limites de subsistema, direção única de dependência, portões e observabilidade vêm de décadas de prática em sistemas operacionais; os guias de padrões de projeto e de engenharia publicados para agentes nos últimos dois anos convergem para as mesmas perguntas — camadas, limites, estado, governança e avaliação. Nós nos restringimos pelo primeiro caminho e nos auditamos pelo segundo.',
      mappingTitle: 'Conceito de SO → onde o Liri está',
      headers: { concept: 'Conceito', liri: 'No Liri', status: 'Status' },
      statuses: {
        ready: 'Entregue',
        converging: 'Convergindo',
        audit: 'Aguardando auditoria',
        missing: 'Ausente',
      },
      rows: [
        {
          concept: 'Núcleo',
          liri: '@openliri/kernel como pacote próprio com uma interface pública fina, protegido por K01–K08',
          status: 'ready',
        },
        {
          concept: 'Subsistemas',
          liri: 'Ferramentas / canais / memória / roteamento / sandbox / tarefas / voz / desktop — cada um com seus pontos de entrada e limites',
          status: 'converging',
        },
        {
          concept: 'Drivers',
          liri: 'Adaptadores de provedor, adaptadores de canal e 6 backends de sandbox (Landlock / Docker / SSH / PTY / macOS / Windows)',
          status: 'ready',
        },
        {
          concept: 'Processos e agendamento',
          liri: 'Execução de sessão, PDCA, Swarm, Cron',
          status: 'ready',
        },
        {
          concept: 'Modelo de permissões',
          liri: 'Cinco camadas de defesa mais quatro estágios de aprovação (requested → presented → decided → recorded)',
          status: 'audit',
        },
        {
          concept: 'Observabilidade e auditoria',
          liri: 'Log de eventos, livro de custos, livro de evidências',
          status: 'ready',
        },
        {
          concept: 'Mantenedores',
          liri: 'Ainda não estabelecido: sem donos de subsistema e sem caminho de passagem de bastão',
          status: 'missing',
        },
      ],
      referenceTitle: 'Com o que nos comparamos',
      referenceBody:
        'Nos comparamos item a item com padrões de projeto de agentes e guias de engenharia publicamente disponíveis: todos os 21 padrões têm implementações reais, mas 3 dos interruptores principais vêm desligados por padrão — por isso só afirmamos “implementado”, nunca “ativo por padrão”. O ciclo de engenharia é auditado do mesmo jeito: arquitetura, build, execução, governança e otimização.',
      blanksTitle: 'Três lacunas',
      blanks: [
        {
          title: 'Mantenedores de subsistema',
          desc: 'Sem donos não há caminho de passagem de bastão. Esta é a peça mais parecida com um SO e a que nos falta.',
        },
        {
          title: 'Contratos de subsistema',
          desc: 'O desenho do contrato existe, mas não está verificado se o livro / LoopProfile foi implementado — a promessa de estabilidade de interface ainda não está fixada.',
        },
        {
          title: 'Portão de cobertura',
          desc: 'Cerca de 4% no momento da revisão; a CI roda mais de 20 verificações de arquitetura, mas ainda não há limite de cobertura.',
        },
      ],
      honesty:
        'Para ser honesto: a pontuação de saúde da arquitetura ainda é {healthGrade} ({healthScore}); dos {oversized} arquivos acima do limite, {unregistered} ainda não estão registrados; o maior continua no chat (o ChatManager foi dividido de 7.036 para {chatManagerLines} linhas). O núcleo existe, os limites estão convergindo, os mantenedores ainda não existem — é isso que significa “ainda não terminado”.',
      layersToggle: 'Expandir as 8 camadas funcionais atuais',
      cta: 'Ver status completo',
    },

    timeline: {
      title: 'Linha do tempo',
      subtitle: 'Uma entrada por mês — apenas arquitetura e governança, sem commits rotineiros.',
      items: [
        { date: '2026-05-25', text: 'v0.1: 100 commits, o assistente de terminal roda' },
        {
          date: '2026-06-18',
          text: 'Primeira revisão de código: um monólito de 7.200 linhas, proporção de testes para código-fonte ~4%',
        },
        {
          date: '2026-08-09',
          text: 'Primeira pontuação de saúde: 10/40 (D), 105 arquivos acima do limite não registrados',
        },
        {
          date: '2026-10-09',
          text: 'Sandbox apagado por uma limpeza → rollback total; processo de exclusão CD01–CD07 no dia seguinte',
        },
        { date: '2026-10-20', text: 'Portão de vocabulário de estados entra no ar: 34 valores, 1.795 pares de baseline' },
        {
          date: '2026-10-28',
          text: 'Evacuação do núcleo concluída; ferramentas visíveis ao modelo limitadas a 12 / 1.397 tokens',
        },
        { date: '2026-10-28', text: 'Site de documentação bilíngue e esta página entram no ar' },
      ],
      more: 'Novas entradas mensais serão adicionadas aqui.',
    },

    participate: {
      title: 'Formas de ajudar',
      subtitle: 'Esta página não é um relatório de encerramento, é um convite. Três lacunas, todas precisando de mãos.',
      cards: [
        {
          title: 'Assuma uma lacuna',
          desc: 'O isolamento de domínio de conhecimento Domain-first tem desenho, mas as fases A/B/C não foram implementadas; recursos novos também não precisam entrar no núcleo.',
          cta: 'Assumir uma tarefa',
        },
        {
          title: 'Ajude a pagar a dívida',
          desc: '{oversized} arquivos acima do limite ({unregistered} não registrados) aguardam divisão; ainda não existe limite de cobertura.',
          cta: 'Assumir uma tarefa',
        },
        {
          title: 'Audite nossa segurança',
          desc: 'Cinco camadas de defesa e seis backends de sandbox estão implementados e as regras são legíveis no código — mas nenhuma auditoria de terceiros foi feita. É o feedback que mais queremos.',
          cta: 'Ver a lista',
        },
      ],
      audit: {
        title: 'Lista de auditoria de segurança',
        items: [
          'Regras de comandos perigosos: 37 regras — onde ficam, como disparam; monte um caso e confira se acerta a regra esperada',
          'Regras de injeção de prompt: 14 regras — alimente um documento malicioso e veja se ele é barrado',
          'Regras de shell: 10 entradas de permissão / bloqueio — tente caminhos de contorno (pipes, subshells, codificação)',
          'Degradação do sandbox: quando cada um dos 6 backends degrada e se ele falha fechado',
          'Estágios de aprovação: requested → presented → decided → recorded — procure estágios ausentes ou fora de ordem',
          'Superfície de privilégio: uma chamada de ferramenta consegue contornar o classificador de permissões e gravar ou executar diretamente?',
        ],
        note: 'Pontos de entrada: app/src/security, app/src/sandbox, app/src/permission.',
      },
      securityNotice:
        'Relate detalhes de vulnerabilidade em particular via SECURITY.md — não abra uma issue pública. Issues públicas servem apenas para o processo e a cobertura da auditoria.',
      ctaGithub: 'Assumir ou perguntar nas Issues',
      ctaSecurity: 'Abrir o caminho de segurança',
      fundLink: 'Prefere financiar? Veja a página de patrocínio',
    },

    teaser: {
      title: 'Uma estrada ainda em construção',
      paragraphs: [
        'Em 25 de maio de 2026 era só uma v0.1 com 100 commits. Cinco meses depois, são mais de 4.000 arquivos e 27 canais — e a conta que vem junto: um monólito de 7.000 linhas, 105 arquivos acima do limite que ninguém havia registrado e uma “limpeza de código morto” que apagou todo o subsistema de sandbox.',
        'Nós restauramos tudo e depois transformamos exclusão, limites e vocabulários de estado em portões de CI, um por um. A estrada não está terminada.',
      ],
      stats: ['156 dias', '116 versões', '20+ verificações de arquitetura'],
      cta: 'Ler a história completa',
    },
  },

  hero: {
    subtitle:
      'Linglong Bird · Assistente pessoal de IA · <span class="text-brand-400">Local-first</span> · <span class="text-brand-400">Segurança integrada</span>',
    versionPill: 'v{version} · licença MIT · Lançado em <span class="whitespace-nowrap">{date}</span>',
    stats: [
      '{n} arquivos TS',
      '{n} ferramentas integradas',
      '{n} camadas de segurança',
      '{n} canais de mensagens',
      '{n} espécies de Buddy',
    ],
    ctaPrimary: 'Começar',
    ctaGithub: 'GitHub',
    command: 'git clone https://github.com/cocosoft/Liri.git',
    commandHint: '  # depois cd app && bun install',
  },

  highlights: {
    title: 'Mais que uma lista de recursos',
    subtitle: 'Três coisas fáceis de esquecer e usadas todos os dias.',
    cards: [
      {
        id: 'buddy',
        icon: '🐣',
        title: 'Persona Buddy',
        desc: 'Não é uma ferramenta — é um companheiro. A aparência é gerada de forma determinística a partir de uma semente, então o mesmo Buddy sempre parece igual; o estado de crescimento é persistido e acumula entre sessões.',
        chips: ['{species} espécies', '{hats} chapéus', '{eyes} olhos', '{rarities} níveis de raridade'],
      },
      {
        id: 'cost',
        icon: '🧾',
        title: 'Custos transparentes',
        desc: 'Preços lidos do banco, atribuição ao nome real do modelo informado pelo provedor, cada chamada gravada em cost_records; orçamentos avisam, depois comprimem e por fim bloqueiam.',
        chips: ['preços em model_registry', 'uso real', 'registro por chamada', 'orçamento diário'],
      },
      {
        id: 'scenarios',
        icon: '🎯',
        title: 'Quatro tipos de usuários',
        desc: 'Desenvolvedores executam comandos e editam código; responsáveis por segurança têm bloqueio em nível de AST e trilhas de auditoria; equipes de operação rodam como serviço; todo o resto acessa pelo aplicativo de mensagens.',
        chips: ['Desenvolvedores', 'Responsáveis por segurança', 'Equipes de operação', 'Todos'],
      },
    ],
  },

  limitations: {
    title: 'Limitações atuais',
    subtitle:
      'O que ainda não está pronto durante a iteração rápida — escrito aqui para você não descobrir do jeito difícil.',
    statuses: {
      audit: 'Aguardando auditoria externa',
      polish: 'Em polimento',
      building: 'Em construção',
      experimental: 'Experimental',
      note: 'Nota',
    },
    items: [
      {
        status: 'audit',
        title: 'A segurança aguarda auditoria externa',
        desc: '{securityLayers} camadas de defesa e 6 backends de sandbox estão implementados, com {sandboxFiles} arquivos relacionados a sandbox que você pode revisar um a um — mas nenhuma auditoria de segurança de terceiros foi concluída ainda.',
      },
      {
        status: 'polish',
        title: 'Interações do desktop ainda em polimento',
        desc: '{desktopComponents} componentes TSX e {desktopPages} páginas estão prontos; atalhos, animações e casos de borda ainda estão sendo ajustados.',
      },
      {
        status: 'building',
        title: 'Catálogo do marketplace ainda pequeno',
        desc: 'O marketplace de plugins, o marketplace MCP e as fontes de habilidades funcionam de ponta a ponta, mas o catálogo instalável ainda está crescendo.',
      },
      {
        status: 'experimental',
        title: 'ACP / A2A são experimentais',
        desc: 'Ambos os protocolos ainda evoluem e suas interfaces podem mudar entre versões; MCP e LSP são estáveis.',
      },
      {
        status: 'building',
        title: 'A documentação em inglês pode ficar atrás',
        desc: 'A documentação em chinês é sincronizada automaticamente do repositório; a versão em inglês é tradução manual e costuma ficar uma versão atrás.',
      },
      {
        status: 'note',
        title: 'O repositório vale mais que o site',
        desc: 'Estas páginas são geradas a partir de app/docs. Se algo divergir do código-fonte, o repositório no GitHub é a referência.',
      },
    ],
    cta: 'Encontrou um problema? Abra uma issue',
  },

  localFirst: {
    title: 'Local-first',
    subtitle:
      'Rode modelos locais com Ollama ou llama.cpp e mantenha seus dados na sua máquina por padrão. Ao mudar para um provedor na nuvem, apenas o conteúdo daquela requisição é enviado ao provedor escolhido',
    benefits: [
      {
        title: 'Funciona offline',
        desc: 'Com um modelo Ollama ou llama.cpp local, você conversa e executa ferramentas locais sem conexão de rede. Sessões, memória e a base de conhecimento ficam em arquivos locais.',
      },
      {
        title: 'Seus dados ficam locais',
        desc: 'Sessões, memória e a base de conhecimento ficam em SQLite local e no diretório do seu workspace, com o histórico de conversas gravado em events.jsonl para facilitar a revisão e a auditoria.',
      },
      {
        title: 'Adicione a nuvem sob demanda',
        desc: 'Quando precisar de mais potência, ative provedores na nuvem ({providers} suportados) na configuração e deixe o roteamento escolher um por nível de tarefa — ou fique só no local.',
      },
    ],
    compareTitle: 'Local vs. nuvem',
    compareRows: [
      { label: 'Onde o modelo roda', local: 'Sua máquina (Ollama / llama.cpp)', cloud: 'Servidores do provedor' },
      { label: 'Precisa de rede', local: 'Não', cloud: 'Sim' },
      {
        label: 'Para onde vão os dados da requisição',
        local: 'Nunca saem da sua máquina',
        cloud: 'Enviados ao provedor escolhido',
      },
      { label: 'Modelo de custo', local: 'Seu próprio hardware', cloud: 'Pague pelo uso' },
      { label: 'Histórico de conversas', local: 'events.jsonl fica local', cloud: 'Também fica local' },
    ],
  },

  quickstart: {
    title: 'Começar',
    subtitle: 'Três passos: instalar dependências → configurar sua chave de API → rodar o dev',
    stepLabels: ['Instalar dependências', 'Configurar sua chave de API', 'Iniciar o Liri'],
    copy: 'Copiar comando',
    envComment: '# edite o .env e adicione sua chave de API',
  },

  roadmap: {
    title: 'Versões e cadência',
    subtitle:
      'Números de versão, contagem de tags e histórico de commits são verificáveis no GitHub; o histórico inclui o desenvolvimento antes do lançamento, com iteração pública a partir do lançamento',
    milestones: [
      {
        quarter: '2026-10-28',
        version: 'v{version}',
        label: 'Versão atual',
        items: [
          '{tools} ferramentas integradas em {toolCategories} categorias',
          '{channels} canais de mensagens',
          '{securityLayers} camadas de segurança + 6 backends de sandbox',
          '{desktopComponents} componentes de desktop · {desktopPages} páginas',
        ],
      },
      {
        quarter: '2026-10',
        version: 'v0.5.13 → v0.5.21',
        label: 'Lançado',
        items: [
          'Oito versões em três dias (v0.5.13 → v0.5.21), todas parte do desenvolvimento antes do lançamento',
          'Módulos do núcleo extraídos, baselines dos portões sincronizadas',
          'Acompanhamento de progresso agora guiado pela existência de artefatos',
          'Mudanças de permissão do sandbox valem na hora',
        ],
      },
      {
        quarter: 'Totais do repositório',
        version: '{releases} tags',
        label: 'Ritmo de versões',
        items: [
          '{commits} commits até agora',
          'A CI cobre lint:arch / verificação de tipos / testes unitários',
          'Repositório público com issues e PRs visíveis',
        ],
      },
      {
        quarter: 'Próximo',
        version: 'v0.6+',
        label: 'Planejado',
        items: [
          'Acompanhado nas Releases e Issues do GitHub',
          'Site de documentação online no ar (chinês e inglês)',
          'Vote nas prioridades de recursos nas Issues',
        ],
      },
    ],
  },

  security: {
    title: 'Cinco camadas de defesa em profundidade',
    subtitle:
      'Da análise AST em tempo de compilação ao sandbox em tempo de execução: cada contagem de regras, limiar e política de degradação está no código-fonte',
    layers: [
      {
        title: 'Análise AST em Rust no tempo de compilação',
        short:
          'A FFI em Rust faz análise de segurança em nível de AST antes de o código rodar, conferida contra {dangerousRules} regras de comandos perigosos',
        tag: 'Tempo de compilação',
        details: [
          'A camada FFI em Rust analisa a AST do Bash',
          'Análise da AST do Bash com {dangerousRules} regras de comandos perigosos',
          'Detecção de injeção por variáveis e bloqueio de travessia de caminho',
          'Detecção de adulteração de argumentos com validação de comandos permitidos',
        ],
      },
      {
        title: 'Análise semântica em TypeScript',
        short:
          'Comandos compostos são avaliados trecho a trecho em tempo de execução, com o motivo da recusa atrelado à instrução exata',
        tag: 'Tempo de execução',
        details: [
          'Comandos somente leitura compostos passam trecho a trecho, em vez de serem recusados por inteiro',
          '{injectionRules} padrões de injeção detectados, incluindo caracteres de largura zero e envenenamento de variáveis de ambiente',
          '{shellRules} regras específicas de shell (bash / PowerShell / cmd)',
          'As mensagens de recusa apontam a causa real e a instrução infratora',
        ],
      },
      {
        title: 'Motor de regras Guardrail',
        short:
          'Um sistema configurável de regras de política com autorização granular por ferramenta, canal e grupo de usuários',
        tag: 'Política',
        details: [
          'deny-by-default com listas de permissão',
          'Granularidade de permissão: ferramenta → regra → impressão digital',
          'Mudanças de regra valem na hora, sem reiniciar',
          'Recusas informam a origem da regra e a instrução correspondida',
        ],
      },
      {
        title: 'Classificador AutoMode',
        short:
          'Avalia o risco pelo contexto da tarefa e da ferramenta e decide automaticamente entre permitir, perguntar e negar',
        tag: 'Adaptativo',
        details: [
          'Classificação de risco baseada na semântica do comando e no contexto da ferramenta',
          'Comandos de baixo risco são permitidos automaticamente conforme a política',
          'Comandos de alto risco vão para aprovação e caem na Inbox',
          'Comandos não confiáveis perguntam por padrão, em vez de negar',
        ],
      },
      {
        title: 'Execução em sandbox',
        short:
          '6 backends de isolamento — Landlock / macOS / Windows / Docker / SSH / PTY — para que comandos que extrapolam nunca toquem o host',
        tag: 'Isolamento',
        details: [
          'Linux Landlock: restrições de sistema de arquivos em nível de núcleo',
          'Sandbox do macOS / Windows Low IL + objeto Job como fallback',
          'Docker: isolamento completo com políticas de recursos e de rede',
          'Execução remota via SSH e caminhos de PTY controlados',
          'Degradação honesta com aviso claro quando nenhum backend está disponível',
        ],
      },
    ],
    protectionsTitle: 'Segurança em números',
    protections: [
      {
        label: 'Regras de comandos perigosos',
        value: '{n}',
        desc: 'Correspondência em nível de AST em bash / PowerShell / cmd',
      },
      {
        label: 'Regras de detecção de injeção',
        value: '{n}',
        desc: 'Cobre caracteres de largura zero, envenenamento de variáveis de ambiente e mais',
      },
      { label: 'Backends de sandbox', value: '{n}', desc: 'Landlock / macOS / Windows / Docker / SSH / PTY' },
      {
        label: 'Arquivos de implementação do sandbox',
        value: '{n}',
        desc: 'Implementações TypeScript em app/src/sandbox',
      },
    ],
    summary:
      'Análise AST em Rust no tempo de compilação · Análise semântica em TypeScript · Motor de regras Guardrail · Classificador AutoMode · Execução em sandbox',
  },

  smartRouter: {
    title: 'Roteamento inteligente',
    subtitle:
      'Escolhe um nível de modelo pelo tipo e pela dificuldade da tarefa e, quando o provedor principal está indisponível, recorre à ordem configurada',
    taskTypesHeading: 'Detecta automaticamente {taskTypes} tipos de tarefa ({common} comuns abaixo)',
    taskTypes: [
      { name: 'Codificação', desc: 'Geração, depuração e revisão de código' },
      { name: 'Escrita', desc: 'Docs, textos, tradução' },
      { name: 'Análise', desc: 'Análise de dados, raciocínio, planejamento' },
      { name: 'Ferramentas', desc: 'Arquivos, busca, operações do sistema' },
      { name: 'Tradução', desc: 'Tradução multilíngue e localização' },
      { name: 'Busca', desc: 'Busca na web e recuperação de informação' },
      { name: 'Criativo', desc: 'Brainstorming, design, ideação' },
      { name: 'Conversa', desc: 'Conversa do dia a dia' },
    ],
    layersHeading: 'Pipeline de decisão em {n} camadas',
    layers: [
      {
        name: 'L1: Interruptor do roteador',
        desc: 'Quando desligado, as requisições vão direto ao modelo padrão, sem verificações extras',
      },
      { name: 'L2: Caminho rápido', desc: 'Tarefas simples ou regras de prefixo vão direto ao modelo de nível baixo' },
      { name: 'L3: Aderência da sessão', desc: 'Mantém um modelo por conversa para não ficar trocando' },
      { name: 'L4: Classificador LLM', desc: 'Um modelo pequeno julga o tipo e a dificuldade da tarefa e atribui um nível' },
      { name: 'L5: Resolução de nível', desc: 'Mapeia os níveis simple/medium/complex/reasoning para modelos concretos' },
    ],
    fallbackHeading: 'Cadeia de fallback entre provedores',
    fallbackNote: 'Modelo principal fora → fallback automático → degradação sem interrupção',
    fallback: [
      { name: 'Principal', model: 'Provedor principal · modelo do nível atual' },
      { name: 'Fallback 1', model: 'Provedor reserva do mesmo nível' },
      { name: 'Fallback 2', model: 'Provedor de fallback de outro nível' },
      { name: 'Fallback 3', model: 'Qualquer outro provedor configurado' },
      { name: 'Último recurso', model: 'Ollama / llama.cpp local' },
    ],
  },

  sponsor: {
    meta: {
      title: 'Apoiar o Liri — Liri',
      description:
        'O Liri é um projeto de código aberto mantido por uma pessoa. Patrocínio não é gorjeta — compra tempo para a auditoria de segurança externa, a revisão da documentação em inglês e a infraestrutura.',
    },
    label: 'Apoiar',
    hero: {
      title: 'Apoiar o Liri',
      subtitle:
        'Este é um projeto de código aberto de uma pessoa só. Patrocínio não é gorjeta — compra tempo para auditorias, documentação e infraestrutura.',
      note: 'Os gastos de cada mês são publicados no livro abaixo; o que é MIT continua MIT para sempre.',
    },
    channelsTitle: 'Formas de patrocinar',
    channels: [
      {
        title: 'GitHub Sponsors',
        desc: 'Para patrocinadores internacionais, mensal, com a lista de patrocinadores pública no GitHub.',
        cta: 'Patrocinar mensalmente',
      },
      {
        title: 'Afdian',
        desc: 'Para patrocinadores na China — Alipay / WeChat, mensal ou qualquer valor personalizado.',
        cta: 'Ir para o Afdian',
      },
    ],
    comingSoon: 'Em breve',
    pendingNote: 'O canal na China (Afdian) está sendo preparado e será adicionado aqui.',
    waitlistNote:
      'Receber pagamentos do GitHub Sponsors exige uma conta em uma região suportada; a China continental ainda não está na lista. A solicitação foi enviada e está em análise.',
    contact: 'Suporte empresarial e outros assuntos: abra uma issue (com a etiqueta sponsor)',
    usesTitle: 'Para onde vai o dinheiro',
    usesNote: 'As proporções são o plano do mantenedor, não uma promessa; os gastos reais são registrados mensalmente.',
    uses: [
      {
        label: 'Auditoria de segurança externa',
        share: '~40%',
        desc: 'Cinco camadas de defesa e seis backends de sandbox nunca passaram por auditoria de terceiros — a maior lacuna',
      },
      {
        label: 'CI e assinatura de releases',
        share: '~20%',
        desc: 'Builds multiplataforma, assinatura de instaladores e o pipeline de versão',
      },
      {
        label: 'Revisão da documentação em inglês',
        share: '~15%',
        desc: 'A documentação em inglês é tradução manual e costuma ficar uma versão atrás do chinês',
      },
      { label: 'Créditos de API de modelos', share: '~15%', desc: 'Avaliação e regressão exigem chamadas reais, não mocks' },
      { label: 'Domínio e hospedagem', share: '~10%', desc: 'Site, site de documentação e espelhos' },
    ],
    notTitle: 'O que o patrocínio não compra',
    nots: [
      'Nada de agendar recursos: a prioridade das issues segue o impacto, não o valor',
      'Nada de suporte prioritário: todo mundo entra na mesma fila de issues',
      'Nada de edição privilegiada de código fechado: o que é MIT continua MIT',
      'Nada de expor seu nome, a menos que você concorde explicitamente',
    ],
    tiersTitle: 'Níveis de patrocínio',
    tiers: [
      { title: '¥10 / mês', desc: 'Seu nome no SPONSORS.md' },
      { title: 'Valor personalizado', desc: 'Apoio único, qualquer valor' },
      { title: 'Empresarial', desc: 'Logo e link; notas fiscais disponíveis — contate pelas issues' },
    ],
    ledgerTitle: 'Livro transparente',
    ledgerDesc:
      'Uma entrada por mês: receitas / despesas / saldo. O formato começa aqui; a primeira entrada entra no mês em que o patrocínio abrir.',
    ledgerHeaders: ['Mês', 'Receitas', 'Despesas', 'Saldo'],
    ledgerEmpty: 'Nenhum registro ainda',
    otherTitle: 'Formas de ajudar sem dinheiro',
    others: [
      { title: 'Dar uma estrela e compartilhar', desc: 'Ajude quem precisa a encontrar o projeto', href: 'https://github.com/cocosoft/Liri' },
      { title: 'Uma issue reproduzível', desc: 'Um bug reproduzível vale mais que dez opiniões', href: 'https://github.com/cocosoft/Liri/issues/new' },
      { title: 'Revisão da documentação em inglês', desc: 'O site em inglês é tradução manual — correções são bem-vindas', href: '/docs' },
      { title: 'Auditoria de segurança', desc: 'Percorra a lista; não publique detalhes de vulnerabilidade', href: '/evolution' },
      { title: 'Assuma uma lacuna', desc: 'Modelo de mantenedores, contratos de subsistema, portão de cobertura', href: '/evolution' },
    ],
    faqTitle: 'Perguntas frequentes',
    faq: [
      {
        q: 'Vocês emitem nota fiscal?',
        a: 'Não por canais pessoais. Para apoio empresarial, fale conosco pelas issues e faremos por conta empresarial.',
      },
      {
        q: 'Posso indicar o destino do dinheiro?',
        a: 'Você pode deixar uma observação, mas a alocação segue as proporções acima.',
      },
      {
        q: 'Posso pedir reembolso?',
        a: 'O patrocínio mensal pode ser cancelado a qualquer momento; meses já pagos não são reembolsados.',
      },
      {
        q: 'Meu nome será público?',
        a: 'Não por padrão. Deixe uma observação ao patrocinar se quiser aparecer no SPONSORS.md.',
      },
    ],
  },

  status: {
    meta: {
      title: 'Status do projeto — Liri',
      description:
        'Autoavaliação de recursos, limitações atuais, cadência de versões e stack de tecnologia: tudo o que o Liri já construiu e o que ainda não, com cada número levando de volta ao código-fonte.',
    },
    label: 'Status',
    title: 'Status do projeto',
    subtitle:
      'Autoavaliação de recursos, limitações atuais, cadência de versões e stack de tecnologia — o que está pronto, o que não está, e cada número leva de volta ao código-fonte.',
    jumpLabel: 'Nesta página',
    jumps: [
      { href: '#comparison', label: 'Autoavaliação' },
      { href: '#limitations', label: 'Limitações' },
      { href: '#roadmap', label: 'Versões' },
      { href: '#techstack', label: 'Stack de tecnologia' },
      { href: '#local-first', label: 'Local-first' },
    ],
    healthNote: 'A tendência de saúde da arquitetura (9 snapshots) chegará a esta página na próxima versão.',
    updateNote: 'Atualizado a cada versão; se algo divergir, o repositório no GitHub é a referência.',
  },

  techstack: {
    title: 'Stack de tecnologia',
    subtitle: 'Uma stack moderna, escolhida com cuidado em cada camada',
    items: [
      { label: 'TypeScript', pct: '{n} arquivos', desc: 'Linguagem principal · ~870 mil linhas' },
      { label: 'Rust', pct: '{n} módulos', desc: 'Módulos nativos para AST, segurança e compressão' },
      { label: 'Bun', pct: '', desc: 'Runtime' },
      { label: 'React 19 + Ink', pct: '', desc: 'Interface de terminal' },
      { label: 'Tauri 2.11', pct: '{n} componentes', desc: 'Cliente desktop' },
      { label: 'SQLite', pct: '', desc: 'Armazenamento de dados e vetores' },
      { label: 'OpenTelemetry', pct: '', desc: 'Observabilidade' },
      { label: 'MCP + ACP + A2A + LSP', pct: '', desc: 'Protocolos' },
      { label: 'Docker', pct: '', desc: 'Um dos backends de sandbox' },
      { label: 'MIT License', pct: '', desc: 'Licença de código aberto' },
    ],
  },

  voiceInteraction: {
    title: 'Interação por voz',
    subtitle: 'Mais que digitar — diga o que precisa, e o Liri entende, age e responde',
    features: [
      {
        title: 'Entrada de voz',
        desc: 'faster-whisper ou SenseVoice local, ou OpenAI Whisper na nuvem',
        platforms: ['faster-whisper local', 'SenseVoice', 'OpenAI Whisper', 'Reconhecimento em streaming'],
      },
      {
        title: 'Saída de voz',
        desc: 'Piper local ou Edge / OpenAI na nuvem, ou seu próprio comando personalizado',
        platforms: ['Piper local', 'Edge TTS', 'OpenAI TTS', 'Comando personalizado'],
      },
      {
        title: 'Nativa em ferramentas',
        desc: 'A própria fala é uma ferramenta que o modelo pode chamar quando precisar',
        platforms: ['ferramenta tts', 'ferramenta audio_play', 'Entrada de voz', 'Reprodução da resposta'],
      },
      {
        title: 'Em todas as superfícies',
        desc: 'Desktop e terminal compartilham o mesmo serviço de fala',
        platforms: ['Desktop Tauri', 'Terminal CLI', 'API HTTP'],
      },
    ],
    scenarios: 'Operação sem as mãos · Multitarefa · Acessibilidade · Atalhos de voz ·',
    scenariosHighlight: 'Diga em qualquer lugar, e está feito',
  },
};
