/** Italiano (it-IT). Struttura identica a en: ui + canali + 22 sezioni. */

export const it = {
  ui: {
    meta: {
      homeTitle: "Liri — L'assistente personale con IA",
      homeDescription:
        'Liri è un agente IA da terminale open source (MIT): {tools} strumenti integrati, {channels} canali di messaggistica, cinque livelli di difesa, supporto ai modelli locali e instradamento tra più fornitori.',
    },

    nav: {
      capabilities: 'Capacità',
      architecture: 'Architettura',
      security: 'Sicurezza',
      routing: 'Instradamento',
      voice: 'Voce',
      brain: 'Secondo cervello',
      desktop: 'Desktop',
      cost: 'Costi',
      ecosystem: 'Ecosistema',
      evolution: 'Registro di sviluppo',
      start: 'Per iniziare',
      docs: 'Documentazione',
      openMenu: 'Aprire il menu',
      closeMenu: 'Chiudere il menu',
    },

    lang: {
      label: 'Lingua',
      switchToZh: 'Passare al cinese',
      switchToEn: "Passare all'inglese",
    },

    stage: {
      label: 'Iterazione rapida',
      note: 'API e documentazione possono cambiare',
      detail:
        "Liri è in fase di iterazione rapida: API, opzioni di configurazione e documentazione cambiano tra una versione e l'altra. Conviene leggere le note di rilascio prima di aggiornare.",
      cta: 'Note di rilascio',
    },

    footer: {
      tagline: 'Assistente personale con IA · Prima in locale · Sicurezza integrata',
      resources: 'Risorse',
      repo: 'Repository GitHub',
      issue: 'Segnalare un problema',
      releases: 'Note di rilascio',
      license: 'Licenza MIT',
      community: 'Comunità',
      discord: 'Discord (in arrivo)',
      docs: 'Documentazione',
      status: 'Stato del progetto',
      evolution: 'Registro di sviluppo',
      support: 'Sostenere Liri',
      discussions: 'Discussions (in apertura)',
      copyright: '© {year} Liri. Rilasciato con licenza MIT.',
      stats:
        '{tsFiles} file TS · {tools} strumenti · {securityLayers} livelli di sicurezza · {channels} canali · {buddySpecies} specie di Buddy',
    },

    docs: {
      label: 'Documentazione',
      pageTitle: 'Documentazione — Liri',
      pageDescription:
        'Installazione, configurazione, integrazione dei canali e riferimento dei comandi di Liri.',
      all: 'Tutta la documentazione',
      articleTitle: '{title} — Documentazione di Liri',
      backHome: "Tornare all'inizio",
      indexTitle: 'Documentazione',
      indexIntro:
        'Contenuti sincronizzati da <code class="font-mono text-brand-400">app/docs</code> nel repository GitHub · {count} articoli.',
      footerNote:
        'Il sito può essere indietro rispetto al codice. Fa fede il <a class="text-surface-400 hover:text-surface-200" href="https://github.com/cocosoft/Liri/tree/main/app/docs" target="_blank" rel="noopener noreferrer">repository GitHub</a>.',
      englishOnly: 'La documentazione è attualmente disponibile solo in inglese.',
      source: 'File di origine: ',
    },

    common: {
      scroll: 'Scorrere verso il basso',
      copy: 'Fare clic per copiare',
      backHome: "Tornare all'inizio",
      fullStatus: 'Vedere lo stato completo',
    },
  },

  channels: {
    即时通讯: 'Messaggistica',
    国内平台: 'Piattaforme cinesi',
    协作与社交: 'Collaborazione e social',
    其它通道: 'Altri canali',
    微信: 'WeChat',
    企业微信: 'WeCom',
    钉钉: 'DingTalk',
    飞书: 'Feishu',
    元宝: 'Yuanbao',
    移动端接入: 'Accesso mobile',
  },

  about: {
    title: "Che cos'è Liri",
    p1: "Liri è un <strong class=\"text-brand-300\">assistente personale con IA</strong> basato su un'architettura <strong class=\"text-brand-300\">TypeScript + Rust</strong>.",
    p2: "Non è un semplice chatbot: sa <strong class=\"text-brand-300\">comprendere l'intento</strong>, <strong class=\"text-brand-300\">eseguire comandi</strong>, <strong class=\"text-brand-300\">gestire attività</strong>, <strong class=\"text-brand-300\">chiamare strumenti</strong> e persino collaborare con altri agenti IA. Un unico motore alimenta ogni punto di accesso: terminale, desktop, IM e MCP.",
    p3: '<strong class="text-brand-300">{modules}</strong> sottosistemi modulari, <strong class="text-brand-300">{tsFiles}</strong> file TypeScript e <strong class="text-brand-300">{desktopComponents}</strong> componenti desktop — ritagliabili in base alla variante di build.',
    statLabels: ['File TypeScript', 'Strumenti integrati', 'Canali di messaggistica', 'Componenti TSX desktop'],
    verifyTitle: 'Verificare nel codice sorgente su GitHub',
  },

  architecture: {
    title: "Architettura d'insieme",
    subtitle:
      "8 livelli funzionali dall'ingresso al feedback; sul piano ingegneristico 6 cancelli di dipendenza (entry > ui > app > service > infra > core)",
    summary: {
      title: 'A livelli, come un sistema operativo',
      subtitle:
        'Nucleo sottile, confini tra sottosistemi e cancelli di dipendenza; la modalità prima in locale è il default, non un interruttore.',
      pillars: [
        {
          title: 'Nucleo',
          desc: "@openliri/kernel è un pacchetto autonomo che espone solo un'interfaccia sottile, protetto dai cancelli K01–K08",
        },
        {
          title: 'Sottosistemi',
          desc: 'Strumenti, canali, memoria, instradamento, sandbox e attività hanno ciascuno ingressi e confini propri',
        },
        {
          title: 'Cancelli',
          desc: 'Una direzione di dipendenza su 6 livelli e oltre 20 controlli architetturali: una violazione blocca la CI',
        },
        {
          title: 'Prima in locale',
          desc: 'I dati restano sulla macchina per impostazione predefinita; i modelli possono girare interamente in locale',
        },
      ],
      link: "Vedere come si è evoluta l'architettura e cosa manca",
    },
    layers: [
      {
        name: 'Livello di ingresso multimodale',
        subtitle: 'Entrare in Liri da qualsiasi superficie',
        items: [
          {
            label: 'Terminale REPL',
            detail: 'Interfaccia terminale costruita con React + Ink, con il sistema di compagni Buddy integrato',
          },
          {
            label: 'Client desktop Tauri',
            detail: '{desktopComponents} componenti TSX su {desktopPages} pagine funzionali (Tauri 2.11 + React 19)',
          },
          {
            label: 'Gateway MCP / canali',
            detail: 'MCP Server più {channels} canali di messaggistica (WeChat, DingTalk, Feishu, Telegram e altri)',
          },
          {
            label: 'CLI / API HTTP',
            detail: "Tre eseguibili — Liri / liri-memory / liri-ink — più un'API HTTP",
          },
        ],
      },
      {
        name: 'Primo livello di sicurezza',
        subtitle: 'Ogni input passa da un filtro di sicurezza',
        items: [
          {
            label: 'Analisi AST Rust in fase di compilazione',
            detail: "Il livello FFI analizza l'AST Bash applicando {dangerousRules} regole sui comandi pericolosi",
          },
          {
            label: 'Analisi semantica TypeScript',
            detail:
              'I comandi composti di sola lettura vengono valutati segmento per segmento, con motivi di rifiuto attribuibili',
          },
          {
            label: 'Motore di regole Guardrail',
            detail: '{injectionRules} pattern di iniezione + {shellRules} regole specifiche per la shell',
          },
          {
            label: 'Classificatore AutoMode',
            detail: 'Valuta automaticamente il rischio del compito e decide tra consentire, chiedere e negare',
          },
        ],
      },
      {
        name: 'Livello di instradamento intelligente',
        subtitle: 'Scelta del modello in base al tipo di compito e alla difficoltà',
        items: [
          {
            label: '{taskTypes} tipi di compito rilevati',
            detail:
              'codice, scrittura, analisi, strumenti, traduzione, ricerca, ideazione, conversazione e altri',
          },
          { label: '4 livelli', detail: 'simple / medium / complex / reasoning' },
          {
            label: 'Pipeline decisionale a 5 stadi',
            detail: 'interruttore → percorso rapido → persistenza di sessione → giudizio LLM → risoluzione del livello',
          },
          {
            label: 'FallbackChain',
            detail: 'Failover ordinato quando il fornitore principale non è disponibile, con RetryPolicy',
          },
        ],
      },
      {
        name: 'Livello di iniezione del secondo cervello',
        subtitle: 'Base di conoscenza + memoria + eventi di sessione: tre fonti di contesto interrogabili',
        items: [
          {
            label: 'Base di conoscenza',
            detail: 'Markdown su disco più indicizzazione semantica, con recupero ibrido keyword / vettoriale / RRF',
          },
          {
            label: 'Sistema di memoria',
            detail: 'Memoria a livelli con tabella vettoriale SQLite e richiamo ponderato per rilevanza',
          },
          {
            label: 'Eventi di sessione',
            detail: 'events.jsonl in sola aggiunta — riproducibili e verificabili',
          },
          {
            label: 'DreamEngine',
            detail:
              'Consolida la conoscenza quando è inattivo: raccolta → analisi → generazione → scrittura → indicizzazione',
          },
        ],
      },
      {
        name: 'Ciclo decisionale TAOR',
        subtitle: 'Think → Act → Observe → Reason',
        items: [
          {
            label: 'Think',
            detail: '{strategies} strategie di agente: generale / codice / esplorazione / pianificazione',
          },
          {
            label: 'Act',
            detail: '{tools} strumenti integrati, registrati dinamicamente per variante di build',
          },
          {
            label: 'Observe',
            detail: 'Valutazione dei risultati più finestre di contesto a livelli e compattazione automatica',
          },
          {
            label: 'Reason',
            detail: 'Gestione del budget di token + ripresa da checkpoint + interruzione per singolo giro',
          },
        ],
      },
      {
        name: 'Livello di esecuzione in sandbox',
        subtitle: "I comandi girano in isolamento e degradano onestamente quando l'isolamento non è disponibile",
        items: [
          { label: 'Linux Landlock', detail: 'Restrizioni di accesso al filesystem a livello di kernel' },
          { label: 'macOS / Windows', detail: 'Sandbox di sistema con Low IL / oggetti Job come fallback' },
          {
            label: 'Container Docker',
            detail: 'Isolamento completo del container con limiti di risorse e policy di rete',
          },
          {
            label: 'SSH / PTY',
            detail: 'Ambienti di esecuzione remoti puliti e percorsi pseudo-terminale controllati',
          },
        ],
      },
      {
        name: 'Livello dei compiti di lunga durata',
        subtitle: 'Da una singola conversazione a un lavoro di più giorni',
        items: [
          { label: 'Pipeline PDCA', detail: 'Un ciclo Plan-Do-Check-Act che avanza in base ai prodotti reali' },
          {
            label: 'Swarm multi-agente',
            detail: 'AgentSwarm con orchestrazione in stile consiglio e scoperta dinamica nel registro',
          },
          {
            label: 'Pianificazione Cron',
            detail: 'Espressioni once / interval / cron, fusi orari inclusi',
          },
          {
            label: 'Persistenza dei compiti',
            detail: 'Istantanee di sessione, ripresa da punto di interruzione e conto alla rovescia visibile in attesa',
          },
        ],
      },
      {
        name: 'Livello di feedback ed evoluzione',
        subtitle: 'Ogni interazione lascia prove verificabili',
        items: [
          {
            label: 'Induzione dei pattern di fallimento',
            detail:
              'I pattern di fallimento vengono generalizzati e reinseriti in prompt e competenze, chiudendo il ciclo di miglioramento',
          },
          {
            label: 'Registro dei costi',
            detail:
              'Addebitato sulla tabella prezzi del database, registrando il nome reale del modello restituito dal fornitore',
          },
          {
            label: 'Cancelli di valutazione',
            detail:
              'Suite di riferimento integrate, punteggio di affidabilità pass^k e misurazione di sicurezza appaiata',
          },
          {
            label: 'Riproduzione degli eventi',
            detail: 'Il contesto di ogni chiamata al modello può essere ricostruito a posteriori',
          },
        ],
      },
    ],
    principlesTitle: "Filosofia dell'architettura",
    principles: [
      { title: 'Sicurezza integrata', desc: 'La sicurezza non è un plugin: è il DNA di ogni livello' },
      {
        title: 'Prima in locale',
        desc: 'Dati in locale, funzionamento offline, privacy protetta per impostazione predefinita',
      },
      {
        title: 'Instradamento intelligente',
        desc: '{taskTypes} classi di compito associate al livello di modello adatto',
      },
      {
        title: 'Secondo cervello',
        desc: 'Base di conoscenza, memoria e log degli eventi: tre livelli di contesto interrogabili',
      },
      {
        title: 'Ciclo verificabile',
        desc: 'Gli insegnamenti dei fallimenti rientrano, i cancelli bloccano le regressioni',
      },
      {
        title: 'Multimodale unificato',
        desc: 'Terminale, desktop, IM e API condividono un unico motore',
      },
    ],
  },

  brainSection: {
    title: 'Il secondo cervello',
    subtitle:
      'Base di conoscenza → Memoria → Eventi di sessione: tre livelli di contesto interrogabili, tutti salvati sulla macchina locale',
    layers: [
      {
        badge: 'Livello 1: base di conoscenza',
        title: 'Base di conoscenza',
        desc: 'Markdown su disco più indicizzazione semantica, con le fonti citate in ogni risultato',
        tags: ['Markdown su disco', 'Indice semantico JSONL', 'Ricerca per parole chiave', 'Ricerca vettoriale', 'Fusione RRF'],
      },
      {
        badge: 'Livello 2: memoria',
        title: 'Sistema di memoria',
        desc: 'Memoria a livelli più tabelle vettoriali SQLite, richiamate con pesatura per rilevanza',
        tags: ['Memoria a livelli', 'memory_vectors', 'Peso per rilevanza', 'Pulizia della memoria', 'Iniezione di contesto'],
      },
      {
        badge: 'Livello 3: fonte di verità',
        title: 'Log degli eventi di sessione',
        desc: 'Tutto ciò che entra in una richiesta al modello diventa un evento di sessione riproducibile',
        tags: [
          'events.jsonl in sola aggiunta',
          'Persistenza prima della scrittura',
          'Riproduzione della sessione',
          'Tracce verificabili',
          'Registrazione in fase di compilazione',
        ],
      },
    ],
    governTitle: 'Organizzare e governare',
    governSubtitle:
      'Curare la conoscenza quando si è inattivi, comprimere il contesto quando trabocca — due pipeline di background reali',
    dreamHeading: 'Pipeline DreamEngine a cinque stadi',
    dreamStages: [
      { name: 'Raccolta', desc: 'Raccogliere sessioni e documenti in attesa di cura' },
      { name: 'Analisi', desc: 'Estrarre temi e conclusioni riutilizzabili' },
      { name: 'Generazione', desc: 'Produrre note destinate ai livelli superiori' },
      { name: 'Scrittura', desc: 'Scrivere nella base di conoscenza e nella memoria' },
      { name: 'Indicizzazione', desc: 'Ricostruire gli indici vettoriali e per parole chiave' },
    ],
    contextTitle: 'Governo del contesto a livelli',
    contextBody:
      "Quando una conversazione lunga supera la finestra, i turni più vecchi vengono scartati per primi, riducendo la memoria in fase di costruzione da O(totale) a O(finestra). Un avviso «il testo originale è recuperabile» sopravvive al taglio, i dettagli possono essere riletti a pagine e le soglie di token attivano la compressione automatica.",
    contextCards: [
      { title: 'Finestra a livelli', desc: 'Tagliare prima i turni vecchi quando il contesto trabocca' },
      { title: 'Recupero su richiesta', desc: 'Rileggere il testo originale a pagine' },
      { title: 'Compressione a tre livelli', desc: 'Livello 1/2 in linea + livello 3 in background' },
    ],
    pdcaTitle: 'Ciclo di auto-miglioramento PDCA',
    pdcaBody:
      'Per i compiti di lunga durata Liri esegue da solo il ciclo Plan-Do-Check-Act: scomporre il compito → eseguire i passi → riesaminare i risultati → correggere il piano, fino al completamento o a una condizione di arresto.',
    pdcaSteps: [
      { step: 'Plan', desc: 'Scomposizione automatica' },
      { step: 'Do', desc: 'Esecuzione passo per passo' },
      { step: 'Check', desc: 'Revisione automatica' },
      { step: 'Act', desc: 'Correzione automatica' },
    ],
  },

  capabilities: {
    title: 'Capacità',
    subtitle: 'Otto capacità distintive, ognuna verificabile nel codice sorgente su GitHub',
    items: [
      {
        title: "Motore di agente profondo",
        description: 'Un ciclo TAOR interno con strategia, memoria e checkpoint',
        details: [
          'Ciclo decisionale TAOR (Think-Act-Observe-Reason)',
          '{strategies} strategie di agente: generale / codice / esplorazione / pianificazione',
          "Ripresa da checkpoint: i compiti lunghi restano recuperabili dopo un'interruzione",
          'Finestre di contesto a livelli con compattazione automatica a tre livelli',
          '8 motivi di terminazione più interruzione per singolo giro, per evitare cicli a vuoto',
        ],
        highlight: 'Nucleo',
      },
      {
        title: '5 livelli di difesa in profondità',
        description:
          'Analisi AST Rust in fase di compilazione → cinque linee di difesa → isolamento sandbox multi-backend',
        details: [
          'Analisi Bash in fase di compilazione tramite AST Rust via FFI',
          '{dangerousRules} regole sui comandi pericolosi + {injectionRules} regole di iniezione',
          'Motore di regole di policy Guardrail',
          'Classificatore di rischio AutoMode',
          'Copertura sandbox su Landlock / macOS / Windows / Docker / SSH / PTY',
        ],
        highlight: 'Sicurezza',
      },
      {
        title: '{tools} strumenti integrati',
        description:
          '{categories} categorie tra file, comandi, rete, media, codice e collaborazione',
        details: [
          'Esecuzione Bash a livello di AST Rust',
          'Intelligenza del codice basata su LSP',
          'Scraping e ricerca web',
          'Elaborazione di notebook, immagini, audio e video',
          'Supporto completo a client e server MCP',
        ],
        highlight: 'Ampiezza',
      },
      {
        title: '{channels} canali di messaggistica',
        description:
          '{channels} adattatori di canale, con WeChat / WeCom / DingTalk / Feishu / QQ tutti supportati',
        details: [
          'Telegram / Discord / Slack / WhatsApp',
          'WeChat / WeCom / DingTalk / Feishu / QQ / Yuanbao',
          'Email / SMS / Webhook / IRC / Matrix',
          'Un catalogo unificato dei canali con instradamento tramite gateway',
          'Ritaglio dei canali in fase di build per artefatti più piccoli',
        ],
        highlight: 'Multipiattaforma',
      },
      {
        title: 'Osservabilità di livello enterprise',
        description: 'Integrazione OpenTelemetry, sistema di avvisi e controlli di integrità',
        details: [
          'Tracing + metriche allineati alle convenzioni semantiche OTel GenAI',
          'Log strutturati a livelli',
          'Regole di allerta e gestione degli incidenti',
          'Controlli di integrità, backup e archiviazione dei dati',
          'Eventi di sessione riproducibili e verificabili',
        ],
        highlight: 'Osservabilità',
      },
      {
        title: 'Architettura a plugin',
        description:
          'SDK per plugin, sistema di competenze e quattro protocolli — ritagliabili per variante di build',
        details: [
          '5 varianti di build: core / personal / coding / enterprise / headless',
          'Marketplace dei plugin con caricamento a caldo e verifica delle firme',
          'Tre origini di competenze isolate (integrate / utente / terze parti)',
          'Protocolli MCP / ACP / A2A / LSP',
          'Avvio in quattro fasi (T0–T3) con caricamento su richiesta',
        ],
        highlight: 'Flessibile',
      },
      {
        title: 'Prima in locale',
        description:
          'Modelli locali Ollama / llama.cpp, con i dati sulla macchina per impostazione predefinita',
        details: [
          'Inferenza locale che funziona completamente offline',
          'Un unico file di dati SQLite che non lascia il dispositivo',
          'Sessioni salvate come events.jsonl in sola aggiunta',
          'Fornitori cloud come miglioramento opzionale',
          'Cartelle sandbox isolate per workspace',
        ],
        highlight: 'Privacy',
      },
      {
        title: 'Instradamento intelligente',
        description:
          '{taskTypes} classi di compito × 4 livelli × 5 stadi decisionali, più catene di fallback tra fornitori',
        details: [
          '{taskTypes} tipi di compito rilevati automaticamente',
          '4 livelli: simple / medium / complex / reasoning',
          '5 stadi decisionali: interruttore → percorso rapido → persistenza di sessione → giudizio LLM → livello',
          'FallbackChain tra fornitori con policy di retry',
          'Prezzi e finestre di contesto letti dal database',
        ],
        highlight: 'Instradamento',
      },
    ],
  },

  channelWall: {
    title: '{channels} canali di messaggistica',
    subtitle:
      "Ognuno dei {channels} canali ha un adattatore dedicato. Si attiva impostando le variabili d'ambiente del canale, oppure lo si esclude in fase di build.",
    summary:
      '{count} canali in totale · un catalogo unificato · attivazione per canale · ritaglio in fase di build',
  },

  community: {
    title: 'Open source · Comunità',
    subtitle: 'Liri è un progetto open source e ogni contributo è benvenuto',
    githubDesc: 'Seguire il progetto su GitHub, aprire Issue o inviare PR',
    communityTitle: 'Partecipare alla comunità',
    communityDesc: 'Partecipare alla discussione, aprire Issue o inviare PR',
  },

  comparison: {
    title: 'Autovalutazione delle capacità',
    subtitle:
      'Sedici dimensioni, ciascuna con lo stato attuale e la posizione nel codice: ogni numero rimanda al codice e ciò che non è finito è scritto apertamente.',
    dimensionHeader: 'Dimensione',
    stateHeader: 'Stato attuale',
    statusHeader: 'Avanzamento',
    sourceHeader: 'Codice',
    sourceLink: 'Vedere',
    statuses: {
      ready: 'Rilasciato',
      polish: 'In rifinitura',
      audit: 'In attesa di audit',
      building: 'In corso',
      experimental: 'Sperimentale',
    },
    statusLegend:
      'Lo stato è autovalutato dai manutentori e cambia con ogni rilascio; «Vedere» apre la cartella corrispondente per una verifica diretta.',
    footnote:
      '* I dati si riferiscono al codice v{version}; i link puntano al ramo main del repository GitHub.',
    rows: [
      { dimension: 'Linguaggio', liri: 'TypeScript + Rust', status: 'ready', source: 'app/src' },
      { dimension: 'Prima in locale', liri: 'Ollama / llama.cpp + SQLite locale', status: 'ready', source: 'app/src/ai' },
      {
        dimension: 'Instradamento intelligente',
        liri: '{taskTypes} tipi · 4 livelli · 5 stadi decisionali',
        status: 'ready',
        source: 'app/src/ai',
      },
      {
        dimension: 'Modello di sicurezza',
        liri: '{securityLayers} livelli di difesa · 6 backend sandbox',
        status: 'audit',
        source: 'app/src/security',
      },
      {
        dimension: 'Canali di messaggistica',
        liri: '{channels} canali (incl. WeChat / DingTalk / Feishu / QQ)',
        status: 'ready',
        source: 'app/src/channels',
      },
      {
        dimension: 'Client desktop',
        liri: 'Tauri 2.11 · {components} componenti TSX',
        status: 'polish',
        source: 'client/src',
      },
      { dimension: 'UI del terminale', liri: 'React + Ink', status: 'ready', source: 'app/src/ink' },
      {
        dimension: 'Sistema di personalità',
        liri: '{species} specie × {hats} cappelli × {eyes} occhi',
        status: 'ready',
        source: 'app/src/buddy',
      },
      {
        dimension: 'Interazione vocale',
        liri: 'faster-whisper / Piper locali + cloud',
        status: 'ready',
        source: 'app/src/voice',
      },
      {
        dimension: 'Trasparenza dei costi',
        liri: 'Prezzi nel DB · ogni chiamata registrata',
        status: 'ready',
        source: 'app/src/cost',
      },
      {
        dimension: 'Secondo cervello',
        liri: 'Base di conoscenza + memoria + log degli eventi',
        status: 'ready',
        source: 'app/src/knowledge',
      },
      {
        dimension: 'Governo del contesto',
        liri: 'Finestra a livelli + compressione a tre stadi',
        status: 'ready',
        source: 'app/src/context',
      },
      {
        dimension: 'Marketplace',
        liri: 'Marketplace dei plugin + Marketplace MCP + origini delle competenze',
        status: 'building',
        source: 'app/src/plugins',
      },
      {
        dimension: 'Strategie di agente',
        liri: '{agentStrategies} strategie · PDCA · Swarm',
        status: 'ready',
        source: 'app/src/agent',
      },
      {
        dimension: 'Attività pianificate',
        liri: 'once / interval / cron',
        status: 'ready',
        source: 'app/src/chronos',
      },
      {
        dimension: 'Supporto ai protocolli',
        liri: 'MCP + ACP + A2A + LSP',
        status: 'experimental',
        source: 'app/src/mcp',
      },
    ],
  },

  desktopClient: {
    title: 'Client desktop',
    subtitle:
      "Costruito con Tauri 2.11 + React 19 · {components} componenti TSX · {pages} pagine funzionali · un'esperienza desktop completa",
    sidebar: [
      'Chat',
      'Modelli IA',
      'Base di conoscenza',
      'Memoria',
      'Competenze',
      'MCP',
      'Attività pianificate',
      'Centro costi',
      'Buddy',
      'Impostazioni',
    ],
    panelTitle: 'Pannello di chat',
    panelUser: 'Liri · Linglong Bird',
    greeting: 'Ciao, sono Liri. Come posso aiutare?',
    userMessage: 'Vorrei analizzare i dati di questo progetto',
    reply: 'Certo, analisi in corso...',
    inputPlaceholder: 'Scrivere un messaggio e premere Invio per inviarlo...',
    mockNote: "Schema della struttura dell'interfaccia, non uno screenshot reale",
    features: [
      { label: 'Pannello di chat', desc: 'Conversazioni multi-turno' },
      { label: 'Gestione dei modelli', desc: 'Passaggio tra modelli' },
      { label: 'Base di conoscenza', desc: 'Ricerca nei file' },
      { label: 'Memoria', desc: 'Rivedere la cronologia' },
      { label: 'Attività pianificate', desc: 'Pianificazione con Cron' },
      { label: 'Integrazione MCP', desc: 'Scoprire e installare server' },
      { label: 'Centro costi', desc: 'Registro di consumi e spese' },
      { label: 'Buddy', desc: 'Aspetto e dati di crescita' },
    ],
  },

  ecosystem: {
    title: 'Ecosistema',
    subtitle:
      'Marketplace dei plugin + Marketplace MCP + tre origini delle competenze + Marketplace di template = un ecosistema Liri componibile',
    mcp: {
      title: 'Marketplace MCP',
      desc: "5 adattatori di origine, un'unica ricerca",
      items: ['GitHub', 'npm', 'Registro ufficiale', 'Smithery', 'Servizi inclusi'],
    },
    plugins: {
      title: 'Marketplace dei plugin',
      desc: 'Registri locali, npm e remoti',
      items: [
        'SDK per plugin + adattatori',
        'Ciclo di vita e ricarica a caldo',
        'Verifica delle firme',
        'Endpoint di configurazione + CLI',
        '5 varianti di build',
      ],
    },
    skills: {
      title: 'Tre origini delle competenze',
      desc: 'Integrate, utente e di terze parti — isolate fisicamente',
      items: [
        '{skills} competenze integrate',
        "Competenze definite dall'utente",
        'Origine di terze parti ClawHub',
        'Orchestrazione condizionale',
        'Composizione e abbinamento delle competenze',
      ],
    },
    templates: {
      title: 'Template e protocolli',
      desc: "Template per agenti e documenti, pronti all'uso",
      items: [
        'Marketplace di template per agenti',
        'Marketplace di template per documenti',
        'MCP / ACP / A2A / LSP',
        'Plugin e competenze componibili',
        'Riuso parametrico dei template',
      ],
    },
  },

  evolution: {
    meta: {
      title: 'Registro di sviluppo — Liri',
      description:
        "Da v0.1 a v0.5.22: come Liri è passato da 4.000 file a un sistema con confini, cancelli e un'interfaccia che altri possono rilevare. Ogni punto di svolta ha prove nel codice e nel CHANGELOG.",
    },

    hero: {
      eyebrow: 'REGISTRO DI SVILUPPO',
      title: 'Una strada non ancora conclusa',
      subtitle:
        'Da v0.1 a v0.5.22 — 156 giorni, 116 segmenti di versione. Non è un elenco di funzioni: sono gli errori fatti, le regole guadagnate e i vuoti ancora da colmare.',
      stats: [
        { value: '156 giorni', label: 'dal primo rilascio' },
        { value: '116', label: 'segmenti di versione' },
        { value: '9', label: "istantanee dell'architettura" },
        { value: '20+', label: 'controlli architetturali' },
      ],
      scroll: 'Salta alla cronologia',
      snapshot:
        "Istantanea dei dati {date} · numeri raccolti dal repository Liri da sync-facts e health:arch",
    },

    origin: {
      title: 'Origine',
      paragraphs: [
        'Il 25 maggio 2026 Liri ha rilasciato la v0.1: 100 commit e un assistente IA da terminale che riusciva davvero a funzionare.',
        "Il problema era concreto: far sedere il modello nel terminale, leggere file, eseguire comandi e modificare codice, invece di chattare in una casella di testo sul web. Modelli locali prima di tutto, perché i file privati non dovrebbero lasciare la macchina; sicurezza integrata, perché all'assistente viene consegnato un computer reale, non solo un'API.",
        'Nei tre mesi successivi le capacità sono cresciute strato dopo strato: strumenti, 27 canali di messaggistica, un client desktop, voce, una base di conoscenza. Ad agosto il repository conteneva più di 4.000 file.',
        "È anche il momento in cui il problema è stato nominato. La revisione del codice del 18 giugno 2026 ha trovato LocalHTTPService a 7.200 righe e ChatManager a 3.263, con 150 file di test contro 3.742 file sorgente. Due mesi dopo è arrivato il primo punteggio di salute dell'architettura: 10/40, grado D, con 105 file fuori limite, nessuno registrato.",
        'La lezione: se un progetto può essere rilevato da altri non dipende da quante funzioni ha, ma dalle regole che sviluppa dopo aver sbattuto contro un muro.',
      ],
    },

    nodes: {
      title: 'Cinque punti di svolta',
      note: 'Ordinati per causalità, non per calendario: alcuni periodi si sovrappongono.',
      items: [
        {
          id: 'n1',
          period: '2026-05-25 → 2026-08',
          title: 'Prima le capacità, i confini dopo',
          situation: 'La v0.1 aveva 100 commit: funzionare contava più della struttura.',
          decision:
            'Riempire prima le capacità: strumenti, canali, desktop, voce, conoscenza, uno alla volta.',
          cost:
            'Il primo audit è stato brutto: LocalHTTPService a 7.200 righe, ChatManager a 3.263, un rapporto test/sorgenti intorno al 4% e un primo punteggio di salute di 10/40 (D) con 105 file fuori limite non registrati.',
          result:
            'Oltre 4.000 file, {tools} strumenti, {channels} canali, {desktopComponents} componenti desktop.',
          evidence: [
            {
              label: 'CHANGELOG v0.1',
              href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md',
            },
            {
              label: 'Revisione del codice, 18 giu 2026',
              href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/codebase-review-20260618.md',
            },
          ],
          participate: 'Per aggiungere capacità: creare un modulo sotto app/src, non dentro il nucleo.',
        },
        {
          id: 'n2',
          period: '2026-08-09 → 2026-09-30',
          title: 'Imparare a misurarsi',
          situation: 'Tutti percepivano il problema, nessuno sapeva dire quanto fosse grave.',
          decision:
            "Trasformare la qualità dell'architettura in un punteggio ripetibile con un registro e rendere obbligatoria la registrazione di ogni file fuori limite — rinunciando all'ipotesi che la pulizia sopravviva alla sola disciplina.",
          cost:
            'Registrare non significa dividere: ChatManager è passato da 3.263 a 7.036 righe (ora ridotto a {chatManagerLines} righe). Anche il criterio di punteggio è cambiato più volte, quindi vale come controllo di salute, non come KPI.',
          result:
            "Nove istantanee; i file fuori limite non registrati sono scesi da 105 a 0 (poi tornati a 2); l'elenco è diventato un registro tracciabile.",
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
          participate:
            'Prendere in carico la divisione di un file fuori limite (vedi Come partecipare più sotto).',
        },
        {
          id: 'n3',
          period: '2026-10-08 → 10-09',
          title: 'Un errore di cancellazione ha prodotto un processo di rimozione',
          situation:
            'Nel codice si era accumulato uno strato di «superfici morte» apparentemente non usate. La pulizia della v0.4.69 ha trattato il sottosistema sandbox e isolamento come codice morto: 170 file toccati, +9.340 / −10.174 righe.',
          decision:
            'Il giorno dopo la v0.4.71 ha ripristinato tutto: 24 file recuperati (IsolationManager, EnhancedSandboxManager, PTYSandbox, SSHSandbox, docker/** e altri, più 5 suite di test) e 21 file attivi riportati allo stato precedente.',
          cost:
            'Ora cancellare richiede più tempo: prima si raccolgono le prove. Resta comunque più economico di un rollback.',
          result:
            'La v0.4.72 ha trasformato la cancellazione in un processo, code-deletion.md (CD01–CD07): raccogliere le prove, staccare i punti di ingresso, poi eliminare. «Sembra che nessuno lo usi» non è più un motivo.',
          evidence: [
            {
              label: 'CHANGELOG v0.4.69 / v0.4.71 / v0.4.72',
              href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md',
            },
          ],
          participate: 'Verificare un «candidato al codice morto» seguendo CD01–CD07.',
        },
        {
          id: 'n4',
          period: '2026-10-10 → 10-22',
          title: 'Trasformare le regole in cancelli',
          situation:
            'Le regole vivevano nei documenti e si basavano sulla disciplina; documenti e codice hanno iniziato a divergere.',
          decision:
            "Ogni regola è diventata un blocco della CI invece di un consiglio: cinque cancelli più doc-gate e un job obbligatorio sandbox-negative; 413 chiavi di riferimento per l'hardcoding; vocabolario di stato con 34 valori e 1.795 coppie di riferimento; cancelli su superficie di avvio, moduli critici e superficie del nucleo.",
          cost:
            'Qualche secondo in più per commit e basi di riferimento da rigenerare a ogni modifica del vocabolario — il punto è proprio che le definizioni non possono più cambiare in silenzio.',
          result: 'Violazioni di lint:arch a 0; test da 3.029 a 7.488.',
          evidence: [
            {
              label: 'AGENTS.md, elenco dei cancelli',
              href: 'https://github.com/cocosoft/Liri/blob/main/AGENTS.md',
            },
            {
              label: 'Workflow CI',
              href: 'https://github.com/cocosoft/Liri/blob/main/.github/workflows/ci.yml',
            },
          ],
          participate:
            'Eseguire i cancelli locali (bun run ci) prima del push e correggere ciò che diventa rosso.',
        },
        {
          id: 'n5',
          period: '2026-10-05 → 10-28',
          title: 'Ridurre il nucleo: da 5.336 righe a un pacchetto autonomo',
          situation:
            "Il core era sia l'implementazione di ingresso sia il cortile comune di tutte le capacità: chiunque poteva aggiungere qualcosa.",
          decision:
            "Tre passi: ridurre (CoreAPIImpl da 5.336 a 2.521 righe), estrarre (@openliri/kernel come pacchetto autonomo; core da 146 a 113 file con i cancelli del nucleo K01–K08), poi espellere (37 moduli che non rispettavano la regola «zero I/O / zero dipendenze verso l'alto» spostati in app/src, oltre 470 import aggiornati, cinque famiglie di basi di riferimento rigenerate).",
          cost:
            'Una migrazione ampia e la rigenerazione completa delle basi di riferimento; dal 18 ottobre il lavoro procede a lotti e la densità dei commit è deliberatamente più bassa.',
          result:
            "Il nucleo ora espone un'interfaccia sottile; i contributi esterni hanno finalmente un confine.",
          evidence: [
            {
              label: 'CHANGELOG v0.5.22',
              href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md',
            },
          ],
          participate: 'Le nuove capacità vivono fuori dal confine del nucleo e partono da app/src.',
        },
      ],
      fieldLabels: {
        situation: 'Situazione',
        decision: 'Decisione',
        cost: 'Costo',
        result: 'Risultato',
        evidence: 'Prove',
        participate: 'Come partecipare',
      },
    },

    model: {
      title: 'Architettura: a livelli come un sistema operativo',
      intro:
        "L'architettura non è stata reinventata. Nucleo sottile, confini tra sottosistemi, direzione unica delle dipendenze, cancelli e osservabilità vengono da decenni di pratica sui sistemi operativi; i pattern di progettazione e le guide ingegneristiche pubblicate per gli agenti negli ultimi due anni convergono sulle stesse domande: livelli, confini, stato, governo, valutazione. Ci imponiamo il primo modello e ci verifichiamo con il secondo.",
      mappingTitle: 'Concetto di sistema operativo → stato in Liri',
      headers: { concept: 'Concetto', liri: 'In Liri', status: 'Stato' },
      statuses: {
        ready: 'Rilasciato',
        converging: 'In convergenza',
        audit: 'In attesa di audit',
        missing: 'Mancante',
      },
      rows: [
        {
          concept: 'Nucleo',
          liri: "@openliri/kernel come pacchetto autonomo con un'interfaccia pubblica sottile, protetto da K01–K08",
          status: 'ready',
        },
        {
          concept: 'Sottosistemi',
          liri: 'Strumenti / canali / memoria / instradamento / sandbox / attività / voce / desktop, ciascuno con ingressi e confini propri',
          status: 'converging',
        },
        {
          concept: 'Driver',
          liri: 'Adattatori dei fornitori, adattatori dei canali e 6 backend sandbox (Landlock / Docker / SSH / PTY / macOS / Windows)',
          status: 'ready',
        },
        { concept: 'Processi e pianificazione', liri: 'Esecuzione di sessione, PDCA, Swarm, Cron', status: 'ready' },
        {
          concept: 'Modello dei permessi',
          liri: 'Cinque livelli di difesa più quattro fasi di approvazione (requested → presented → decided → recorded)',
          status: 'audit',
        },
        {
          concept: 'Osservabilità e audit',
          liri: 'Log degli eventi, registro dei costi, registro delle prove',
          status: 'ready',
        },
        {
          concept: 'Manutentori (MAINTAINERS)',
          liri: 'Non ancora istituiti: mancano owner dei sottosistemi e un percorso di passaggio di consegne',
          status: 'missing',
        },
      ],
      referenceTitle: 'Con cosa ci siamo confrontati',
      referenceBody:
        "Abbiamo confrontato voce per voce i pattern di progettazione e le guide ingegneristiche pubblicati per gli agenti: tutti e 21 i pattern hanno un'implementazione reale, ma 3 interruttori chiave sono disattivati per impostazione predefinita — per questo diciamo solo «implementato», mai «attivo per default». Il ciclo ingegneristico è verificato allo stesso modo: architettura, build, esecuzione, governo, ottimizzazione.",
      blanksTitle: 'Tre vuoti',
      blanks: [
        {
          title: 'Manutentori dei sottosistemi',
          desc: "Senza owner non c'è un percorso di passaggio di consegne. È la parte più simile a un sistema operativo e quella che manca.",
        },
        {
          title: 'Contratti dei sottosistemi',
          desc: 'La bozza di progetto dei contratti esiste, ma non è verificato se registro / LoopProfile siano stati realizzati: la promessa di stabilità delle interfacce non è ancora fissata.',
        },
        {
          title: 'Cancello di copertura',
          desc: 'Circa il 4% al momento della revisione; la CI esegue oltre 20 controlli architetturali, ma non esiste ancora una soglia di copertura.',
        },
      ],
      honesty:
        "Va detto: la salute dell'architettura è ancora {healthGrade} ({healthScore}); dei {oversized} file fuori limite, {unregistered} sono ancora non registrati, e il più grande resta nel modulo chat (ChatManager è stato ridotto da 7.036 a {chatManagerLines} righe). Il nucleo c'è, i confini stanno convergendo, i manutentori non ci sono ancora: è questo che significa «non ancora concluso».",
      layersToggle: 'Espandere gli attuali 8 livelli funzionali',
      cta: 'Vedere lo stato completo',
    },

    timeline: {
      title: 'Cronologia',
      subtitle:
        'Una voce al mese, solo cambiamenti di architettura e governo; i commit ordinari non sono inclusi.',
      items: [
        { date: '2026-05-25', text: "v0.1: 100 commit, l'assistente da terminale funziona" },
        {
          date: '2026-06-18',
          text: 'Prima revisione del codice: un monolite da 7.200 righe, rapporto test/sorgenti intorno al 4%',
        },
        {
          date: '2026-08-09',
          text: "Primo punteggio di salute dell'architettura: 10/40 (D), 105 file fuori limite non registrati",
        },
        {
          date: '2026-10-09',
          text: 'Sandbox cancellata per errore → rollback completo; il giorno dopo nasce il processo CD01–CD07',
        },
        {
          date: '2026-10-20',
          text: 'Entra in funzione il cancello del vocabolario di stato: 34 valori, 1.795 coppie di riferimento',
        },
        {
          date: '2026-10-28',
          text: "Si conclude l'espulsione dal nucleo; gli strumenti visibili al modello scendono a 12 / 1.397 token",
        },
        { date: '2026-10-28', text: 'Vanno online il sito di documentazione bilingue e questa pagina' },
      ],
      more: 'Le voci mensili successive saranno aggiunte qui.',
    },

    participate: {
      title: 'Come partecipare',
      subtitle:
        "Questa pagina non è un rapporto di chiusura, è un invito. Tre lacune, tutte con bisogno di mani.",
      cards: [
        {
          title: 'Prendere in carico un vuoto',
          desc: "L'isolamento dei domini di conoscenza domain-first ha un progetto, ma le fasi A/B/C non sono implementate; le funzionalità fuori dal confine del nucleo non devono entrare nel nucleo.",
          cta: 'Prendere un compito',
        },
        {
          title: 'Aiutare a saldare il debito',
          desc: '{oversized} file fuori limite ({unregistered} non registrati) attendono di essere divisi; la soglia di copertura dei test non esiste ancora.',
          cta: 'Prendere un compito',
        },
        {
          title: 'Verificare la sicurezza',
          desc: "Cinque livelli di difesa e sei backend sandbox sono implementati e le regole sono leggibili nel codice, ma non c'è ancora un audit di terze parti. È il feedback che serve di più.",
          cta: 'Vedere la checklist',
        },
      ],
      audit: {
        title: 'Checklist di audit della sicurezza',
        items: [
          'Regole sui comandi pericolosi: dove vivono le 37 regole e come si attivano — costruire un caso e verificare che scatti quella prevista',
          'Regole di prompt injection: 14 regole — fornire un documento malevolo e vedere se viene bloccato',
          'Regole Shell: 10 voci tra elenco consentiti e vietati — provare i percorsi di bypass (pipe, subshell, codifica)',
          'Degrado della sandbox: in quali condizioni degrada ciascuno dei 6 backend e se, dopo il degrado, resta fail-closed',
          'Fasi di approvazione: requested → presented → decided → recorded — cercare fasi mancanti o fuori ordine',
          'Superficie dei privilegi: una chiamata a uno strumento può aggirare il classificatore dei permessi e scrivere o eseguire direttamente?',
        ],
        note: 'Punti di ingresso: app/src/security, app/src/sandbox, app/src/permission.',
      },
      securityNotice:
        "I dettagli delle vulnerabilità vanno segnalati in privato secondo SECURITY.md, non in una issue pubblica; le issue pubbliche servono solo a discutere processo e copertura dell'audit.",
      ctaGithub: 'Prendere in carico o chiedere nelle Issues',
      ctaSecurity: 'Aprire il percorso di autoverifica della sicurezza',
      fundLink: 'Preferisci sostenere con un contributo economico? Vedere la pagina sponsor',
    },

    teaser: {
      title: 'Una strada non ancora conclusa',
      paragraphs: [
        "Il 25 maggio 2026 era solo la v0.1 con 100 commit. Cinque mesi dopo contiene oltre 4.000 file e 27 canali — e il conto che li accompagna: un monolite da 7.000 righe, 105 file fuori limite che nessuno aveva registrato e una «pulizia del codice morto» che ha eliminato l'intero sottosistema sandbox.",
        'Abbiamo ripristinato, poi abbiamo trasformato cancellazione, confini e vocabolari di stato in cancelli della CI, uno per uno. La strada non è finita.',
      ],
      stats: ['156 giorni', '116 segmenti di versione', '20+ controlli architetturali'],
      cta: 'Leggere la storia completa',
    },
  },

  hero: {
    subtitle:
      'Linglong Bird · Assistente personale con IA · <span class="text-brand-400">Prima in locale</span> · <span class="text-brand-400">Sicurezza integrata</span>',
    versionPill:
      'v{version} · Open source MIT · Rilasciato il <span class="whitespace-nowrap">{date}</span>',
    stats: [
      '{n} file TS',
      '{n} strumenti integrati',
      '{n} livelli di sicurezza',
      '{n} canali di messaggistica',
      '{n} specie di Buddy',
    ],
    ctaPrimary: 'Iniziare',
    ctaGithub: 'GitHub',
    command: 'git clone https://github.com/cocosoft/Liri.git',
    commandHint: '  # poi cd app && bun install',
  },

  highlights: {
    title: 'Più di un elenco di funzioni',
    subtitle: 'Tre cose facili da trascurare ma usate ogni giorno.',
    cards: [
      {
        id: 'buddy',
        icon: '🐣',
        title: 'Personalità Buddy',
        desc: "Non uno strumento, ma un compagno: l'aspetto è generato in modo deterministico da un seed, quindi lo stesso Buddy ha sempre lo stesso aspetto; lo stato di crescita è salvato e si accumula tra le sessioni.",
        chips: ['{species} specie', '{hats} cappelli', '{eyes} occhi', '{rarities} livelli di rarità'],
      },
      {
        id: 'cost',
        icon: '🧾',
        title: 'Costi trasparenti',
        desc: 'Prezzi letti dal database, attribuzione al nome reale del modello restituito dal fornitore, ogni chiamata scritta in cost_records; il budget avvisa, poi comprime, infine blocca.',
        chips: ['prezzi model_registry', 'usage reale', 'registro per chiamata', 'budget giornaliero'],
      },
      {
        id: 'scenarios',
        icon: '🎯',
        title: 'Quattro tipi di utenti',
        desc: "Chi sviluppa esegue comandi e modifica codice; chi si occupa di sicurezza ottiene blocco a livello di AST e tracce di audit; i team operativi lo eseguono come servizio; tutti gli altri lo raggiungono da un'app di chat.",
        chips: ['Sviluppo', 'Sicurezza', 'Operazioni', 'Utenti comuni'],
      },
    ],
  },

  limitations: {
    title: 'Limiti attuali',
    subtitle:
      "Cosa non è ancora a posto durante l'iterazione rapida: lo scriviamo prima, così non lo si scopre a proprie spese.",
    statuses: {
      audit: 'In attesa di audit',
      polish: 'In rifinitura',
      building: 'In corso',
      experimental: 'Sperimentale',
      note: 'Nota',
    },
    items: [
      {
        status: 'audit',
        title: 'La sicurezza attende un audit esterno',
        desc: '{securityLayers} livelli di difesa e 6 backend sandbox sono implementati, con {sandboxFiles} file relativi alla sandbox verificabili uno per uno, ma non è ancora stato completato un audit di sicurezza di terze parti.',
      },
      {
        status: 'polish',
        title: 'Le interazioni desktop sono ancora in rifinitura',
        desc: '{desktopComponents} componenti TSX e {desktopPages} pagine sono pronti; scorciatoie, animazioni e casi limite sono ancora in fase di messa a punto.',
      },
      {
        status: 'building',
        title: 'Il catalogo del marketplace è ancora limitato',
        desc: 'Il marketplace dei plugin, il marketplace MCP e le origini delle competenze funzionano end-to-end, ma il catalogo installabile è ancora in crescita.',
      },
      {
        status: 'experimental',
        title: 'ACP / A2A sono implementazioni sperimentali',
        desc: "Entrambi i protocolli sono in evoluzione e le loro interfacce possono cambiare tra una versione e l'altra; MCP e LSP sono stabili.",
      },
      {
        status: 'building',
        title: 'La documentazione in inglese può essere indietro',
        desc: 'La documentazione cinese è sincronizzata automaticamente dal repository; quella inglese è una traduzione manuale e di solito è una versione indietro.',
      },
      {
        status: 'note',
        title: 'Fa fede il repository, non il sito',
        desc: 'Queste pagine sono generate da app/docs. Se qualcosa non coincide con il codice, fa fede il repository GitHub.',
      },
    ],
    cta: 'Trovato un problema? Aprire una Issue',
  },

  localFirst: {
    title: 'Prima in locale',
    subtitle:
      'Modelli locali tramite Ollama / llama.cpp e dati sulla macchina per impostazione predefinita. Passando a un fornitore cloud, solo il contenuto di quella richiesta viene inviato al fornitore scelto',
    benefits: [
      {
        title: 'Funziona offline',
        desc: 'Con un modello locale Ollama o llama.cpp si può conversare ed eseguire strumenti locali senza connessione. Sessioni, memoria e base di conoscenza vivono in file locali.',
      },
      {
        title: 'I dati restano in locale',
        desc: 'Sessioni, memoria e base di conoscenza risiedono in SQLite locale e nella cartella del workspace, con la cronologia delle conversazioni aggiunta a events.jsonl per revisione e audit.',
      },
      {
        title: 'Cloud su richiesta',
        desc: "Quando serve più potenza, si abilitano i fornitori cloud ({providers} supportati) nella configurazione e l'instradamento ne sceglie uno per livello di compito — oppure si resta solo in locale.",
      },
    ],
    compareTitle: 'Locale / Cloud',
    compareRows: [
      {
        label: 'Dove gira il modello',
        local: 'Sulla macchina locale (Ollama / llama.cpp)',
        cloud: 'Sui server del fornitore',
      },
      { label: 'Rete necessaria', local: 'No', cloud: 'Sì' },
      {
        label: 'Dove vanno i dati della richiesta',
        local: 'Non lasciano la macchina locale',
        cloud: 'Inviati al fornitore scelto',
      },
      { label: 'Modello di costo', local: 'Hardware proprio', cloud: 'Pagamento a consumo' },
      {
        label: 'Cronologia delle conversazioni',
        local: 'events.jsonl resta in locale',
        cloud: 'Resta in locale anche qui',
      },
    ],
  },

  quickstart: {
    title: 'Avvio rapido',
    subtitle: 'Tre passi: installare le dipendenze → configurare la chiave API → avviare dev',
    stepLabels: ['Installare le dipendenze', 'Configurare la chiave API', 'Avviare Liri'],
    copy: 'Copiare il comando',
    envComment: '# modificare .env e inserire la chiave API',
  },

  roadmap: {
    title: 'Versioni e ritmo',
    subtitle:
      "Numeri di versione, conteggio dei tag e cronologia dei commit sono verificabili su GitHub; la storia include lo sviluppo pre-rilascio, con l'iterazione pubblica che inizia al lancio",
    milestones: [
      {
        quarter: '2026-10-28',
        version: 'v{version}',
        label: 'Versione attuale',
        items: [
          '{tools} strumenti integrati in {toolCategories} categorie',
          '{channels} canali di messaggistica',
          '{securityLayers} livelli di sicurezza + 6 backend sandbox',
          '{desktopComponents} componenti desktop · {desktopPages} pagine',
        ],
      },
      {
        quarter: '2026-10',
        version: 'v0.5.13 → v0.5.21',
        label: 'Rilasciato',
        items: [
          'Otto rilasci in tre giorni (v0.5.13 → v0.5.21), tutti parte dello sviluppo pre-rilascio',
          'Moduli del nucleo estratti, basi di riferimento dei cancelli sincronizzate',
          "L'avanzamento ora segue l'esistenza dei prodotti",
          'Le modifiche ai permessi della sandbox hanno effetto immediato',
        ],
      },
      {
        quarter: 'Totale del repository',
        version: '{releases} tag',
        label: 'Ritmo di rilascio',
        items: [
          '{commits} commit fino a oggi',
          'La CI copre lint:arch / controllo dei tipi / test unitari',
          'Repository pubblico con issue e PR visibili',
        ],
      },
      {
        quarter: 'Prossimi passi',
        version: 'v0.6+',
        label: 'Pianificato',
        items: [
          'Tracciati nelle GitHub Releases e nelle Issues',
          'Il sito di documentazione online è attivo (cinese e inglese)',
          'Le priorità delle funzionalità si votano nelle Issues',
        ],
      },
    ],
  },

  security: {
    title: 'Cinque livelli di difesa in profondità',
    subtitle:
      "Dall'analisi AST in fase di compilazione alla sandbox a runtime: numero di regole, soglie e politiche di degrado sono nel codice",
    layers: [
      {
        title: 'Analisi AST Rust in fase di compilazione',
        short:
          "Rust FFI esegue un'analisi di sicurezza a livello di AST prima dell'esecuzione, verificando {dangerousRules} regole sui comandi pericolosi",
        tag: 'Compilazione',
        details: [
          "Il livello Rust FFI analizza l'AST Bash",
          "Analisi dell'AST Bash con {dangerousRules} regole sui comandi pericolosi",
          'Rilevamento di iniezione di variabili e blocco del path traversal',
          'Rilevamento di manomissione degli argomenti con validazione dei comandi in whitelist',
        ],
      },
      {
        title: 'Analisi semantica TypeScript',
        short:
          "I comandi composti vengono valutati a runtime segmento per segmento, con motivi di rifiuto legati all'istruzione esatta",
        tag: 'Runtime',
        details: [
          'I comandi composti di sola lettura passano segmento per segmento invece di essere rifiutati in blocco',
          "{injectionRules} pattern di iniezione rilevati, inclusi caratteri a larghezza zero e avvelenamento delle variabili d'ambiente",
          '{shellRules} regole specifiche per la shell (bash / PowerShell / cmd)',
          "I messaggi di rifiuto indicano la causa reale e l'istruzione coinvolta",
        ],
      },
      {
        title: 'Motore di regole Guardrail',
        short:
          'Sistema di regole di policy configurabile con autorizzazione granulare per strumento, canale e gruppo di utenti',
        tag: 'Policy',
        details: [
          'deny-by-default con elenchi consentiti',
          'Granularità dei permessi: strumento → regola → impronta',
          'Le modifiche alle regole hanno effetto immediato, senza riavvio',
          'In caso di rifiuto vengono restituiti origine della regola e istruzione corrispondente',
        ],
      },
      {
        title: 'Classificatore AutoMode',
        short:
          'Valuta il rischio da compito e contesto dello strumento, poi decide automaticamente se consentire, chiedere o negare',
        tag: 'Adattivo',
        details: [
          'Classificazione del rischio basata sulla semantica del comando e sul contesto dello strumento',
          'I comandi a basso rischio vengono consentiti automaticamente secondo la policy',
          "I comandi ad alto rischio passano all'approvazione e finiscono nella Inbox",
          'I comandi non attendibili finiscono per impostazione predefinita in una richiesta, non in un rifiuto',
        ],
      },
      {
        title: 'Esecuzione in sandbox',
        short:
          "6 backend di isolamento — Landlock / macOS / Windows / Docker / SSH / PTY — così i comandi oltre i limiti non toccano mai l'host",
        tag: 'Isolamento',
        details: [
          'Linux Landlock: restrizioni del filesystem a livello di kernel',
          'Sandbox macOS / Windows Low IL + oggetti Job come fallback',
          'Docker: isolamento completo con policy di risorse e rete',
          'Esecuzione remota SSH e percorsi PTY controllati',
          'Degrado onesto con un avviso chiaro quando nessun backend è disponibile',
        ],
      },
    ],
    protectionsTitle: 'Sicurezza in numeri',
    protections: [
      {
        label: 'Regole sui comandi pericolosi',
        value: '{n}',
        desc: 'Corrispondenza a livello di AST su bash / PowerShell / cmd',
      },
      {
        label: 'Regole di rilevamento delle iniezioni',
        value: '{n}',
        desc: "Copre caratteri a larghezza zero, avvelenamento delle variabili d'ambiente e altro",
      },
      { label: 'Backend sandbox', value: '{n}', desc: 'Landlock / macOS / Windows / Docker / SSH / PTY' },
      {
        label: 'File di implementazione della sandbox',
        value: '{n}',
        desc: 'Implementazioni TypeScript in app/src/sandbox',
      },
    ],
    summary:
      'Analisi AST Rust in fase di compilazione · Analisi semantica TypeScript · Motore di regole Guardrail · Classificatore AutoMode · Esecuzione in sandbox',
  },

  smartRouter: {
    title: 'Instradamento intelligente',
    subtitle:
      "Sceglie il livello di modello in base al tipo di compito e alla difficoltà, poi ripiega nell'ordine configurato quando il fornitore principale non è disponibile",
    taskTypesHeading: 'Rilevamento automatico di {taskTypes} tipi di compito ({common} comuni elencati sotto)',
    taskTypes: [
      { name: 'Codice', desc: 'Generazione, debug e revisione del codice' },
      { name: 'Scrittura', desc: 'Documentazione, testi, traduzione' },
      { name: 'Analisi', desc: 'Analisi dati, ragionamento, pianificazione' },
      { name: 'Strumenti', desc: 'File, ricerca, operazioni di sistema' },
      { name: 'Traduzione', desc: 'Traduzione multilingue e localizzazione' },
      { name: 'Ricerca', desc: 'Ricerca web e recupero di informazioni' },
      { name: 'Creatività', desc: 'Brainstorming, design, ideazione' },
      { name: 'Conversazione', desc: 'Conversazione quotidiana' },
    ],
    layersHeading: 'Pipeline decisionale a {n} livelli',
    layers: [
      {
        name: 'L1: Interruttore di instradamento',
        desc: 'Se disattivato, le richieste vanno direttamente al modello predefinito senza controlli aggiuntivi',
      },
      {
        name: 'L2: Percorso rapido',
        desc: 'I compiti semplici o le regole di prefisso vanno direttamente al modello di livello basso',
      },
      {
        name: 'L3: Persistenza di sessione',
        desc: 'Mantiene un solo modello per conversazione, per evitare cambi continui',
      },
      {
        name: 'L4: Classificatore LLM',
        desc: 'Un modello piccolo valuta tipo e difficoltà del compito, poi assegna un livello',
      },
      {
        name: 'L5: Risoluzione del livello',
        desc: 'Mappa i livelli simple/medium/complex/reasoning su modelli concreti',
      },
    ],
    fallbackHeading: 'Catena di fallback tra fornitori',
    fallbackNote: 'Modello principale non disponibile → fallback automatico → degrado senza interruzioni',
    fallback: [
      { name: 'Primario', model: 'Fornitore principale · modello del livello corrente' },
      { name: 'Fallback 1', model: 'Fornitore di riserva dello stesso livello' },
      { name: 'Fallback 2', model: 'Fornitore di fallback su altro livello' },
      { name: 'Fallback 3', model: 'Qualsiasi altro fornitore configurato' },
      { name: 'Ultima risorsa', model: 'Ollama / llama.cpp locale' },
    ],
  },

  sponsor: {
    meta: {
      title: 'Sostenere Liri — Liri',
      description:
        "Liri è un progetto open source mantenuto da una persona. Lo sponsor non è una mancia: compra tempo per l'audit di sicurezza esterno, la revisione della documentazione inglese e l'infrastruttura.",
    },
    label: 'Supporto',
    hero: {
      title: 'Sostenere Liri',
      subtitle:
        'È un progetto open source mantenuto da una sola persona. Lo sponsor non è una mancia: compra tempo per audit, documentazione e infrastruttura.',
      note: 'Ogni mese la destinazione dei fondi è pubblicata nel registro qui sotto; ciò che è MIT resta MIT per sempre.',
    },
    channelsTitle: 'Modalità di sponsor',
    channels: [
      {
        title: 'GitHub Sponsors',
        desc: 'Per sponsor internazionali, mensile, con elenco e importi pubblici su GitHub.',
        cta: 'Sponsorizzare ogni mese',
      },
      {
        title: 'Afdian',
        desc: 'Per sponsor in Cina — Alipay / WeChat, mensile o importo a scelta.',
        cta: 'Vai su Afdian',
      },
    ],
    comingSoon: 'In arrivo',
    pendingNote: "Il canale cinese (Afdian) è in preparazione e sarà aggiunto qui all'apertura.",
    waitlistNote:
      "Per ricevere i pagamenti di GitHub Sponsors l'account deve trovarsi in una regione supportata; la Cina continentale non è ancora nell'elenco. La richiesta è stata inviata ed è in revisione.",
    contact: 'Supporto enterprise e altre richieste: aprire una issue (con tag sponsor)',
    usesTitle: 'Dove vanno i soldi',
    usesNote:
      'Le percentuali sono il piano del manutentore, non una promessa; la spesa effettiva è registrata ogni mese.',
    uses: [
      {
        label: 'Audit di sicurezza esterno',
        share: '~40%',
        desc: 'Cinque livelli di difesa e sei backend sandbox non hanno ancora un audit di terze parti: è la lacuna più grande',
      },
      {
        label: 'CI e firma dei rilasci',
        share: '~20%',
        desc: 'Build multipiattaforma, firma degli installer e pipeline di rilascio',
      },
      {
        label: 'Revisione della documentazione inglese',
        share: '~15%',
        desc: 'Attualmente è una traduzione manuale e di solito è una versione indietro rispetto al cinese',
      },
      {
        label: 'Crediti API per i modelli',
        share: '~15%',
        desc: 'Valutazione e test di regressione richiedono chiamate reali, non mock',
      },
      { label: 'Dominio e hosting', share: '~10%', desc: 'Sito, sito di documentazione e mirror' },
    ],
    notTitle: 'Cosa non è incluso',
    nots: [
      "Nessuna priorità sulle funzionalità: la priorità delle issue segue l'impatto, non l'importo",
      'Nessun supporto prioritario: tutti in coda nello stesso issue tracker',
      'Nessuna edizione privilegiata a codice chiuso: ciò che è MIT resta MIT',
      'Nessuna menzione pubblica del nome senza consenso esplicito',
    ],
    tiersTitle: 'Livelli di sponsor',
    tiers: [
      { title: '10 ¥ / mese', desc: 'Il nome in SPONSORS.md' },
      { title: 'Importo a scelta', desc: 'Sostegno una tantum, importo libero' },
      { title: 'Enterprise', desc: 'Logo e link; fattura disponibile — contatto tramite issue' },
    ],
    ledgerTitle: 'Registro trasparente',
    ledgerDesc:
      'Una voce al mese: entrate / uscite / saldo. Il formato parte da qui; la prima voce arriva nel mese di apertura delle sponsorizzazioni.',
    ledgerHeaders: ['Mese', 'Entrate', 'Uscite', 'Saldo'],
    ledgerEmpty: 'Nessuna voce',
    otherTitle: 'Come aiutare senza spendere',
    others: [
      {
        title: 'Star e condivisione',
        desc: 'Aiutare chi ne ha bisogno a trovarlo',
        href: 'https://github.com/cocosoft/Liri',
      },
      {
        title: 'Una issue riproducibile',
        desc: 'Un bug riproducibile vale più di dieci opinioni',
        href: 'https://github.com/cocosoft/Liri/issues/new',
      },
      {
        title: 'Revisione della documentazione inglese',
        desc: 'La versione inglese è una traduzione manuale: le correzioni sono benvenute',
        href: '/docs',
      },
      {
        title: 'Audit di sicurezza',
        desc: 'Seguire la checklist; non pubblicare dettagli delle vulnerabilità',
        href: '/evolution',
      },
      {
        title: 'Prendere in carico un vuoto',
        desc: 'Modello dei manutentori, livello dei contratti, cancello di copertura',
        href: '/evolution',
      },
    ],
    faqTitle: 'Domande frequenti',
    faq: [
      {
        q: 'È possibile ricevere una fattura?',
        a: 'Non tramite i canali personali. Per il supporto enterprise si può contattare tramite issue e procedere con un conto aziendale.',
      },
      {
        q: 'Si può indicare la destinazione?',
        a: "Si può lasciare una nota, ma l'allocazione segue le percentuali indicate sopra.",
      },
      {
        q: 'È possibile ottenere un rimborso?',
        a: 'Lo sponsor mensile può essere annullato in qualsiasi momento; i mesi già pagati non sono rimborsati.',
      },
      {
        q: 'Il nome sarà pubblico?',
        a: 'Non per impostazione predefinita. Per comparire in SPONSORS.md basta lasciare una nota al momento della sponsorizzazione.',
      },
    ],
  },

  status: {
    meta: {
      title: 'Stato del progetto — Liri',
      description:
        'Autovalutazione delle capacità, limiti attuali, ritmo dei rilasci e stack tecnologico: tutto ciò che Liri ha fatto e ciò che non ha ancora fatto, con ogni numero che rimanda al codice.',
    },
    label: 'Stato',
    title: 'Stato del progetto',
    subtitle:
      'Autovalutazione delle capacità, limiti attuali, ritmo dei rilasci e stack tecnologico — cosa è fatto, cosa no, con ogni numero che rimanda al codice.',
    jumpLabel: 'In questa pagina',
    jumps: [
      { href: '#comparison', label: 'Autovalutazione' },
      { href: '#limitations', label: 'Limiti' },
      { href: '#roadmap', label: 'Versioni' },
      { href: '#techstack', label: 'Stack tecnologico' },
      { href: '#local-first', label: 'Prima in locale' },
    ],
    healthNote:
      "La tendenza della salute dell'architettura (9 istantanee) arriverà in questa pagina con la prossima versione.",
    updateNote:
      'Aggiornata a ogni rilascio; in caso di divergenza fa fede il repository GitHub.',
  },

  techstack: {
    title: 'Stack tecnologico',
    subtitle: 'Uno stack moderno, scelto con cura a ogni livello',
    items: [
      { label: 'TypeScript', pct: '{n} file', desc: 'Linguaggio principale · circa {lines} righe' },
      { label: 'Rust', pct: '{n} moduli', desc: 'Moduli nativi per AST, sicurezza e compressione' },
      { label: 'Bun', pct: '', desc: 'Runtime' },
      { label: 'React 19 + Ink', pct: '', desc: 'UI del terminale' },
      { label: 'Tauri 2.11', pct: '{n} componenti', desc: 'Client desktop' },
      { label: 'SQLite', pct: '', desc: 'Dati e archiviazione vettoriale' },
      { label: 'OpenTelemetry', pct: '', desc: 'Osservabilità' },
      { label: 'MCP + ACP + A2A + LSP', pct: '', desc: 'Protocolli' },
      { label: 'Docker', pct: '', desc: 'Uno dei backend sandbox' },
      { label: 'MIT License', pct: '', desc: 'Licenza open source' },
    ],
  },

  voiceInteraction: {
    title: 'Interazione vocale',
    subtitle: 'Non solo digitare: basta dire cosa serve, e Liri capisce, agisce e risponde',
    features: [
      {
        title: 'Ingresso vocale',
        desc: 'faster-whisper e SenseVoice in locale, oppure OpenAI Whisper nel cloud',
        platforms: ['faster-whisper locale', 'SenseVoice', 'OpenAI Whisper', 'Riconoscimento in streaming'],
      },
      {
        title: 'Uscita vocale',
        desc: 'Piper in locale oppure Edge / OpenAI nel cloud, oppure un comando personalizzato',
        platforms: ['Piper locale', 'Edge TTS', 'OpenAI TTS', 'Comando personalizzato'],
      },
      {
        title: 'Uso come strumento',
        desc: 'La voce è essa stessa uno strumento che il modello può chiamare quando serve',
        platforms: ['strumento tts', 'strumento audio_play', 'Ingresso vocale', 'Riproduzione delle risposte'],
      },
      {
        title: 'Su ogni superficie',
        desc: 'Desktop e terminale condividono lo stesso servizio vocale',
        platforms: ['Desktop Tauri', 'Terminale CLI', 'API HTTP'],
      },
    ],
    scenarios: "Uso a mani libere · Scenari multi-attività · Supporto all'accessibilità · Comandi vocali rapidi ·",
    scenariosHighlight: 'Dirlo ovunque, ed è fatto',
  },
};
