/**
 * 德语整站文案（ui、channels 与 22 个区块），结构对齐英文版。
 */
export const de = {
  ui: {
    meta: {
      homeTitle: 'Liri — Persönlicher KI-Assistent',
      homeDescription:
        'Liri ist ein quelloffener (MIT) KI-Agent für das Terminal: {tools} integrierte Werkzeuge, {channels} Messaging-Kanäle, eine fünfstufige Sicherheitsverteidigung, lokale Modelle und Routing über mehrere Anbieter.',
    },

    nav: {
      capabilities: 'Funktionen',
      architecture: 'Architektur',
      security: 'Sicherheit',
      routing: 'Routing',
      voice: 'Sprache',
      brain: 'Zweites Gehirn',
      desktop: 'Desktop',
      cost: 'Kosten',
      ecosystem: 'Ökosystem',
      evolution: 'Entwicklungsprotokoll',
      start: 'Erste Schritte',
      docs: 'Doku',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
    },

    lang: {
      label: 'Sprache',
      switchToZh: 'Auf Chinesisch umschalten',
      switchToEn: 'Auf Englisch umschalten',
    },

    stage: {
      label: 'Schnelle Iteration',
      note: 'APIs und Doku können sich ändern',
      detail:
        'Liri wird schnell weiterentwickelt: APIs, Konfigurationsoptionen und Dokumentation ändern sich zwischen Releases. Vor dem Upgrade die Release-Hinweise prüfen.',
      cta: 'Release-Hinweise',
    },

    footer: {
      tagline: 'Persönlicher KI-Assistent · Lokal zuerst · Sicherheit von Anfang an',
      resources: 'Ressourcen',
      repo: 'GitHub-Repository',
      issue: 'Issue melden',
      releases: 'Release-Hinweise',
      license: 'MIT License',
      community: 'Community',
      discord: 'Discord (demnächst)',
      docs: 'Dokumentation',
      status: 'Projektstatus',
      evolution: 'Entwicklungsprotokoll',
      support: 'Liri unterstützen',
      discussions: 'Discussions (bald geöffnet)',
      copyright: '© {year} Liri. Released under MIT License.',
      stats:
        '{tsFiles} TS-Dateien · {tools} Werkzeuge · {securityLayers} Sicherheitsebenen · {channels} Kanäle · {buddySpecies} Buddy-Arten',
    },

    docs: {
      label: 'Doku',
      pageTitle: 'Dokumentation — Liri',
      pageDescription:
        'Installation, Konfiguration, Kanal-Einrichtung und Befehlsreferenz für Liri.',
      all: 'Alle Dokumente',
      articleTitle: '{title} — Liri Doku',
      backHome: 'Zurück zur Startseite',
      indexTitle: 'Dokumentation',
      indexIntro:
        'Synchronisiert aus <code class="font-mono text-brand-400">app/docs</code> im GitHub-Repository · {count} Artikel.',
      footerNote:
        'Die Website kann hinter der Quelle zurückliegen. Maßgeblich ist das <a class="text-surface-400 hover:text-surface-200" href="https://github.com/cocosoft/Liri/tree/main/app/docs" target="_blank" rel="noopener noreferrer">GitHub-Repository</a>.',
      englishOnly: 'Die Dokumentation ist derzeit nur auf Englisch verfügbar.',
      source: 'Quelldatei: ',
    },

    common: {
      scroll: 'Nach unten scrollen',
      copy: 'Zum Kopieren klicken',
      backHome: 'Zurück zur Startseite',
      fullStatus: 'Vollständigen Status ansehen',
    },
  },

  channels: {
    即时通讯: 'Messaging',
    国内平台: 'Plattformen in China',
    协作与社交: 'Kollaboration & Social',
    其它通道: 'Weitere Kanäle',
    微信: 'WeChat',
    企业微信: 'WeCom',
    钉钉: 'DingTalk',
    飞书: 'Feishu',
    元宝: 'Yuanbao',
    移动端接入: 'Mobiler Zugang',
  },

  about: {
    title: 'Was ist Liri',
    p1: 'Liri ist ein <strong class="text-brand-300">persönlicher KI-Assistent</strong> auf einer <strong class="text-brand-300">TypeScript + Rust</strong>-Architektur.',
    p2: 'Liri ist weit mehr als ein Chatbot — das System kann <strong class="text-brand-300">Absichten verstehen</strong>, <strong class="text-brand-300">Befehle ausführen</strong>, <strong class="text-brand-300">Aufgaben verwalten</strong>, <strong class="text-brand-300">Werkzeuge aufrufen</strong> und sogar mit anderen KI-Agenten zusammenarbeiten. Eine Engine versorgt alle Einstiegspunkte: Terminal, Desktop, IM und MCP.',
    p3: '<strong class="text-brand-300">{modules}</strong> modulare Subsysteme, <strong class="text-brand-300">{tsFiles}</strong> TypeScript-Dateien und <strong class="text-brand-300">{desktopComponents}</strong> Desktop-Komponenten — je nach Build-Variante zuschneidbar.',
    statLabels: ['TypeScript-Dateien', 'Integrierte Werkzeuge', 'Messaging-Kanäle', 'Desktop-TSX-Komponenten'],
    verifyTitle: 'Im GitHub-Quellcode prüfen',
  },

  architecture: {
    title: 'Architektur im Überblick',
    subtitle:
      '8 Funktionsebenen vom Einstiegspunkt bis zur Rückmeldung; technisch erzwungen durch 6 Abhängigkeits-Gates (entry > ui > app > service > infra > core)',
    summary: {
      title: 'Geschichtet wie ein Betriebssystem',
      subtitle: 'Schlanker Kernel, Subsystem-Grenzen und Abhängigkeits-Gates; lokal zuerst ist der Standard, kein Schalter.',
      pillars: [
        { title: 'Kernel', desc: '@openliri/kernel ist ein eigenes Paket mit schlanker Schnittstelle, abgesichert durch die Gates K01–K08' },
        { title: 'Subsysteme', desc: 'Werkzeuge, Kanäle, Gedächtnis, Routing, Sandbox und Aufgaben haben je eigene Einstiegspunkte und Grenzen' },
        { title: 'Gates', desc: '6 Ebenen Abhängigkeitsrichtung plus über 20 Architekturprüfungen — Verstöße blockieren die CI' },
        { title: 'Lokal zuerst', desc: 'Daten bleiben standardmäßig auf dem eigenen Rechner; Modelle können vollständig lokal laufen' },
      ],
      link: 'Wie sich die Architektur entwickelt hat und was noch fehlt',
    },
    layers: [
      {
        name: 'Multimodale Eingangsebene',
        subtitle: 'Von jeder Oberfläche aus in Liri einsteigen',
        items: [
          { label: 'REPL-Terminal', detail: 'Terminal-UI mit React + Ink, inklusive Buddy-Begleitsystem' },
          { label: 'Tauri-Desktop-Client', detail: '{desktopComponents} TSX-Komponenten auf {desktopPages} Funktionsseiten (Tauri 2.11 + React 19)' },
          { label: 'MCP / Kanal-Gateway', detail: 'MCP-Server plus {channels} Messaging-Kanäle (WeChat, DingTalk, Feishu, Telegram und weitere)' },
          { label: 'CLI / HTTP API', detail: 'Drei ausführbare Einstiegspunkte — Liri / liri-memory / liri-ink — plus HTTP API' },
        ],
      },
      {
        name: 'Ebene Sicherheit zuerst',
        subtitle: 'Jede Eingabe durchläuft einen Sicherheitsfilter',
        items: [
          { label: 'Rust-AST-Analyse zur Compile-Zeit', detail: 'Die FFI-Schicht parst den Bash-AST gegen {dangerousRules} Regeln für gefährliche Befehle' },
          { label: 'TypeScript-Semantikanalyse', detail: 'Zusammengesetzte Nur-Lese-Befehle werden segmentweise bewertet, Ablehnungsgründe sind zuordenbar' },
          { label: 'Guardrail-Regelengine', detail: '{injectionRules} Injektionsmuster + {shellRules} Shell-spezifische Regeln' },
          { label: 'AutoMode-Klassifikator', detail: 'Bewertet das Aufgabenrisiko automatisch und entscheidet zwischen erlauben, nachfragen und ablehnen' },
        ],
      },
      {
        name: 'Ebene Smartes Routing',
        subtitle: 'Modellwahl nach Aufgabentyp und Schwierigkeit',
        items: [
          { label: '{taskTypes} erkannte Aufgabentypen', detail: 'Coding, Schreiben, Analyse, Werkzeuge, Übersetzung, Suche, Ideenfindung, Small Talk und weitere' },
          { label: '4 Stufen', detail: 'simple / medium / complex / reasoning' },
          { label: 'Entscheidungspipeline mit 5 Stufen', detail: 'Schalter → Schnellpfad → Sitzungsbindung → LLM-Bewertung → Stufenauflösung' },
          { label: 'FallbackChain', detail: 'Geordneter Wechsel, wenn der primäre Anbieter nicht verfügbar ist, zusammen mit RetryPolicy' },
        ],
      },
      {
        name: 'Ebene Injektion des zweiten Gehirns',
        subtitle: 'Wissensbasis + Gedächtnis + Sitzungsereignisse: drei abrufbare Kontextquellen',
        items: [
          { label: 'Wissensbasis', detail: 'Markdown auf der Platte plus semantischer Index, mit Hybrid-Suche aus Stichwort, Vektor und RRF' },
          { label: 'Gedächtnissystem', detail: 'Gestuftes Gedächtnis mit SQLite-Vektortabelle und relevanzgewichteter Erinnerung' },
          { label: 'Sitzungsereignisse', detail: 'Nur anhängendes events.jsonl — wiederholbar und auditierbar' },
          { label: 'DreamEngine', detail: 'Konsolidiert Wissen im Leerlauf: sammeln → analysieren → erzeugen → schreiben → indexieren' },
        ],
      },
      {
        name: 'TAOR-Entscheidungsschleife',
        subtitle: 'Think → Act → Observe → Reason',
        items: [
          { label: 'Think', detail: '{strategies} Agent-Strategien: allgemein / Coding / Exploration / Planung' },
          { label: 'Act', detail: '{tools} integrierte Werkzeuge, je Build-Variante dynamisch registriert' },
          { label: 'Observe', detail: 'Ergebnisbewertung plus geschichtete Kontextfenster und automatische Kompaktierung' },
          { label: 'Reason', detail: 'Token-Budget-Verwaltung + Wiederaufnahme ab Checkpoint + Circuit Breaker pro Runde' },
        ],
      },
      {
        name: 'Ebene Ausführungs-Sandbox',
        subtitle: 'Befehle laufen isoliert und degradieren ehrlich, wenn keine Isolation verfügbar ist',
        items: [
          { label: 'Linux Landlock', detail: 'Kernel-seitige Beschränkung des Dateisystemzugriffs' },
          { label: 'macOS / Windows', detail: 'System-Sandboxes mit Low IL / Job-Objekten als Rückfallebene' },
          { label: 'Docker-Container', detail: 'Vollständige Container-Isolation mit Ressourcenlimits und Netzwerkrichtlinien' },
          { label: 'SSH / PTY', detail: 'Saubere entfernte Ausführungsumgebungen und kontrollierte Pseudo-Terminal-Pfade' },
        ],
      },
      {
        name: 'Ebene langlaufende Aufgaben',
        subtitle: 'Von einem einzelnen Gespräch zu mehrträgiger Arbeit',
        items: [
          { label: 'PDCA-Pipeline', detail: 'Plan-Do-Check-Act-Schleife, die Fortschritt an tatsächlichen Artefakten misst' },
          { label: 'Swarm mit mehreren Agenten', detail: 'AgentSwarm mit ratsähnlicher Orchestrierung und dynamischer Registry-Erkennung' },
          { label: 'Cron-Zeitpläne', detail: 'once / interval / Cron-Ausdrücke, Zeitzonen inklusive' },
          { label: 'Aufgabenpersistenz', detail: 'Sitzungs-Snapshots, Wiederaufnahme ab Breakpoint und sichtbarer Countdown beim Warten' },
        ],
      },
      {
        name: 'Ebene Rückmeldung und Evolution',
        subtitle: 'Jede Interaktion hinterlässt überprüfbare Belege',
        items: [
          { label: 'Induktion von Fehlermustern', detail: 'Fehlermuster werden verallgemeinert und in Prompts und Skills zurückgeschrieben, was den Verbesserungskreislauf schließt' },
          { label: 'Kostenbuch', detail: 'Abrechnung über die Preistabelle der Datenbank, mit dem vom Anbieter gemeldeten Modellnamen' },
          { label: 'Evaluations-Gates', detail: 'Integrierte Basissuiten, pass^k-Zuverlässigkeitswerte und paarweise Sicherheitsmessung' },
          { label: 'Ereignis-Wiedergabe', detail: 'Der Kontext jedes Modellaufrufs lässt sich im Nachhinein rekonstruieren' },
        ],
      },
    ],
    principlesTitle: 'Architekturphilosophie',
    principles: [
      { title: 'Sicherheit von Anfang an', desc: 'Sicherheit ist kein Plugin, sondern die DNA jeder Ebene' },
      { title: 'Lokal zuerst', desc: 'Daten bleiben lokal, offline nutzbar, Datenschutz standardmäßig' },
      { title: 'Smartes Routing', desc: '{taskTypes} Aufgabenklassen werden der passenden Modellstufe zugeordnet' },
      { title: 'Zweites Gehirn', desc: 'Wissensbasis, Gedächtnis und Ereignisprotokolle: drei abrufbare Kontextebenen' },
      { title: 'Überprüfbarer Kreislauf', desc: 'Lehren aus Fehlern fließen zurück, Gates blockieren Regressionen' },
      { title: 'Einheitlich multimodal', desc: 'Terminal, Desktop, IM und API teilen eine Engine' },
    ],
  },

  brainSection: {
    title: 'Das zweite Gehirn',
    subtitle: 'Wissensbasis → Gedächtnis → Sitzungsereignisse: drei abrufbare Kontextebenen, alle lokal gespeichert',
    layers: [
      {
        badge: 'Ebene 1: Wissensbasis',
        title: 'Wissensbasis',
        desc: 'Markdown auf der Platte plus semantischer Index, mit Quellenangabe in jedem Ergebnis',
        tags: ['Markdown auf der Platte', 'Semantischer Index JSONL', 'Stichwortsuche', 'Vektorsuche', 'RRF-Fusion'],
      },
      {
        badge: 'Ebene 2: Gedächtnis',
        title: 'Gedächtnissystem',
        desc: 'Gestuftes Gedächtnis plus SQLite-Vektortabellen, mit Relevanzgewichtung abgerufen',
        tags: ['Gestuftes Gedächtnis', 'memory_vectors', 'Relevanzgewichtung', 'Gedächtnisbereinigung', 'Kontextinjektion'],
      },
      {
        badge: 'Ebene 3: Quelle der Wahrheit',
        title: 'Sitzungs-Ereignisprotokoll',
        desc: 'Alles, was in eine Modellanfrage eingeht, wird zu einem wiederholbaren Sitzungsereignis',
        tags: ['Nur anhängendes events.jsonl', 'Vor dem Schreiben persistiert', 'Sitzungswiedergabe', 'Auditierbarer Verlauf', 'Registrierung zur Compile-Zeit'],
      },
    ],
    governTitle: 'Ordnen & Verwalten',
    governSubtitle: 'Wissen im Leerlauf kuratieren, Kontext bei Überlauf komprimieren — zwei echte Hintergrundpipelines',
    dreamHeading: 'DreamEngine-Pipeline in fünf Stufen',
    dreamStages: [
      { name: 'Sammeln', desc: 'Sitzungen und Dokumente sammeln, die kuratiert werden müssen' },
      { name: 'Analysieren', desc: 'Themen und wiederverwendbare Schlüsse extrahieren' },
      { name: 'Erzeugen', desc: 'Notizen für die darüberliegenden Ebenen erstellen' },
      { name: 'Schreiben', desc: 'In Wissensbasis und Gedächtnis schreiben' },
      { name: 'Indexieren', desc: 'Vektor- und Stichwortindex neu aufbauen' },
    ],
    contextTitle: 'Geschichtete Kontextverwaltung',
    contextBody:
      'Läuft ein langes Gespräch über, werden zuerst die ältesten Runden verworfen; der Speicherbedarf zur Build-Zeit sinkt von O(Gesamt) auf O(Fenster). Ein Hinweis „Originaltext abrufbar“ überlebt den Schnitt, Details lassen sich seitenweise zurückholen, und Token-Wasserstände lösen eine automatische Komprimierung aus.',
    contextCards: [
      { title: 'Geschichtete Fensterung', desc: 'Alte Runden zuerst kürzen, wenn der Kontext überläuft' },
      { title: 'Abruf bei Bedarf', desc: 'Originaltext seitenweise zurückholen' },
      { title: 'Dreistufige Komprimierung', desc: 'Tier 1/2 inline + Tier 3 im Hintergrund' },
    ],
    pdcaTitle: 'PDCA-Selbstverbesserungsschleife',
    pdcaBody:
      'Bei langlaufenden Aufgaben durchläuft Liri die Plan-Do-Check-Act-Schleife selbstständig: Aufgabe zerlegen → Schritte ausführen → Ergebnisse prüfen → Plan überarbeiten, bis die Aufgabe abgeschlossen ist oder eine Abbruchbedingung greift.',
    pdcaSteps: [
      { step: 'Plan', desc: 'Automatisch zerlegen' },
      { step: 'Do', desc: 'Schrittweise ausführen' },
      { step: 'Check', desc: 'Automatisch prüfen' },
      { step: 'Act', desc: 'Automatisch korrigieren' },
    ],
  },

  capabilities: {
    title: 'Kernfunktionen',
    subtitle: 'Acht unterscheidbare Fähigkeiten, jede im GitHub-Quellcode überprüfbar',
    items: [
      {
        title: 'Tiefe Agent-Engine',
        description: 'Eine eigene TAOR-Schleife mit Strategie, Gedächtnis und Checkpoints',
        details: [
          'TAOR-Entscheidungszyklus (Think-Act-Observe-Reason)',
          '{strategies} Agent-Strategien: allgemein / Coding / Exploration / Planung',
          'Wiederaufnahme ab Checkpoint hält langlaufende Aufgaben nach Unterbrechungen fortsetzbar',
          'Geschichtete Kontextfenster mit dreistufiger automatischer Kompaktierung',
          '8 Abbruchgründe plus Circuit Breaker pro Runde gegen Leerlaufschleifen',
        ],
        highlight: 'Kern',
      },
      {
        title: '5 Ebenen Verteidigung in der Tiefe',
        description: 'Rust-AST-Analyse zur Compile-Zeit → fünf Verteidigungslinien → Sandbox-Isolation mit mehreren Backends',
        details: [
          'Bash-Analyse zur Compile-Zeit über Rust-FFI-AST',
          '{dangerousRules} Regeln für gefährliche Befehle + {injectionRules} Injektionsregeln',
          'Guardrail-Regelengine für Richtlinien',
          'AutoMode-Risikoklassifikator',
          'Sandbox-Abdeckung für Landlock / macOS / Windows / Docker / SSH / PTY',
        ],
        highlight: 'Sicherheit',
      },
      {
        title: '{tools} integrierte Werkzeuge',
        description: '{categories} Kategorien für Dateien, Befehle, Netzwerk, Medien, Code und Zusammenarbeit',
        details: [
          'Bash-Ausführung auf Rust-AST-Niveau',
          'Code-Intelligenz über LSP',
          'Web-Scraping und Suche',
          'Notebook-, Bild-, Audio- und Videoverarbeitung',
          'Vollständige MCP-Client- und Server-Unterstützung',
        ],
        highlight: 'Breite',
      },
      {
        title: '{channels} Messaging-Kanäle',
        description: '{channels} Kanaladapter, WeChat / WeCom / DingTalk / Feishu / QQ werden alle unterstützt',
        details: [
          'Telegram / Discord / Slack / WhatsApp',
          'WeChat / WeCom / DingTalk / Feishu / QQ / Yuanbao',
          'Email / SMS / Webhook / IRC / Matrix',
          'Ein einheitlicher Kanalkatalog mit Gateway-Routing',
          'Kanäle zur Compile-Zeit zuschneidbar für kleinere Builds',
        ],
        highlight: 'Multiplattform',
      },
      {
        title: 'Observability auf Enterprise-Niveau',
        description: 'OpenTelemetry-Anbindung, Alarmierung und Health Checks',
        details: [
          'Tracing + Metriken nach den semantischen OTel-GenAI-Konventionen',
          'Gestuftes strukturiertes Logging',
          'Alarmregeln und Incident-Management',
          'Health Checks, Backups und Datenarchivierung',
          'Wiederholbare, auditierbare Sitzungsereignisse',
        ],
        highlight: 'Observability',
      },
      {
        title: 'Plug-in-Architektur',
        description: 'Plugin-SDK, Skill-System und vier Protokolle — je Build-Variante zuschneidbar',
        details: [
          '5 Build-Varianten: core / personal / coding / enterprise / headless',
          'Plugin-Marktplatz mit Hot Loading und Signaturprüfung',
          'Drei isolierte Skill-Quellen (integriert / Nutzer / Drittanbieter)',
          'Protokolle MCP / ACP / A2A / LSP',
          'Vierstufiger Start (T0–T3) mit Laden bei Bedarf',
        ],
        highlight: 'Flexibel',
      },
      {
        title: 'Lokal zuerst',
        description: 'Lokale Modelle über Ollama / llama.cpp, Daten bleiben standardmäßig auf dem eigenen Rechner',
        details: [
          'Lokale Inferenz, vollständig offline lauffähig',
          'Eine einzige SQLite-Datei, die das Gerät nicht verlässt',
          'Sitzungen als nur anhängendes events.jsonl gespeichert',
          'Cloud-Anbieter als optionale Ergänzung',
          'Arbeitsbereich-isolierte Sandbox-Verzeichnisse',
        ],
        highlight: 'Datenschutz',
      },
      {
        title: 'Smartes Routing',
        description: '{taskTypes} Aufgabenklassen × 4 Stufen × 5 Entscheidungsstufen, plus Anbieter-Fallback-Ketten',
        details: [
          '{taskTypes} Aufgabentypen werden automatisch erkannt',
          '4 Stufen: simple / medium / complex / reasoning',
          '5 Entscheidungsstufen: Schalter → Schnellpfad → Sitzungsbindung → LLM-Bewertung → Stufe',
          'FallbackChain über Anbieter hinweg mit Retry-Richtlinien',
          'Preise und Kontextfenster stammen beide aus der Datenbank',
        ],
        highlight: 'Routing',
      },
    ],
  },

  channelWall: {
    title: '{channels} Messaging-Kanäle',
    subtitle:
      'Jeder der {channels} Kanäle bringt einen passenden Adapter mit. Über die Umgebungsvariablen des Kanals wird er aktiviert, alternativ zur Build-Zeit entfernt.',
    summary:
      '{count} Kanäle insgesamt · ein einheitlicher Katalog · Aktivierung pro Kanal · Zuschneiden zur Compile-Zeit',
  },

  community: {
    title: 'Open Source · Community',
    subtitle: 'Liri ist Open Source, jede Mitwirkung ist willkommen',
    githubDesc: 'Projekt auf GitHub verfolgen, Issues öffnen oder PRs senden',
    communityTitle: 'Community beitreten',
    communityDesc: 'An der Diskussion teilnehmen, Issues öffnen oder PRs senden',
  },

  comparison: {
    title: 'Selbstcheck der Funktionen',
    subtitle:
      'Sechzehn Dimensionen, jeweils mit aktuellem Status und Quellort — jede Zahl verlinkt auf Code, und was noch nicht fertig ist, steht ebenfalls da.',
    dimensionHeader: 'Dimension',
    stateHeader: 'Aktueller Stand',
    statusHeader: 'Status',
    sourceHeader: 'Quelle',
    sourceLink: 'Ansehen',
    statuses: {
      ready: 'Umgesetzt',
      polish: 'In Feinarbeit',
      audit: 'Externes Audit ausstehend',
      building: 'In Arbeit',
      experimental: 'Experimentell',
    },
    statusLegend:
      'Der Status ist eine Selbsteinschätzung der Maintainer und ändert sich mit jedem Release; „Ansehen“ springt in das jeweilige Verzeichnis zur eigenen Prüfung.',
    footnote: '* Daten aus Quelle v{version}; Quelllinks zeigen auf den main-Branch im GitHub-Repository.',
    rows: [
      { dimension: 'Sprache', liri: 'TypeScript + Rust', status: 'ready', source: 'app/src' },
      { dimension: 'Lokal zuerst', liri: 'Ollama / llama.cpp + lokales SQLite', status: 'ready', source: 'app/src/ai' },
      { dimension: 'Smartes Routing', liri: '{taskTypes} Aufgabentypen · 4 Stufen · 5 Entscheidungsebenen', status: 'ready', source: 'app/src/ai' },
      { dimension: 'Sicherheitsmodell', liri: '{securityLayers} Verteidigungsebenen · 6 Sandbox-Backends', status: 'audit', source: 'app/src/security' },
      { dimension: 'Messaging-Kanäle', liri: '{channels} Kanäle (inkl. WeChat / DingTalk / Feishu / QQ)', status: 'ready', source: 'app/src/channels' },
      { dimension: 'Desktop-Client', liri: 'Tauri 2.11 · {components} TSX-Komponenten', status: 'polish', source: 'client/src' },
      { dimension: 'Terminal-UI', liri: 'React + Ink', status: 'ready', source: 'app/src/ink' },
      { dimension: 'Persona-System', liri: '{species} Arten × {hats} Hüte × {eyes} Augen', status: 'ready', source: 'app/src/buddy' },
      { dimension: 'Sprachinteraktion', liri: 'Lokal faster-whisper / Piper + Cloud', status: 'ready', source: 'app/src/voice' },
      { dimension: 'Kostentransparenz', liri: 'Preise in der DB · jeder Aufruf erfasst', status: 'ready', source: 'app/src/cost' },
      { dimension: 'Zweites Gehirn', liri: 'Wissensbasis + Gedächtnis + Ereignisprotokoll', status: 'ready', source: 'app/src/knowledge' },
      { dimension: 'Kontextverwaltung', liri: 'Geschichtete Fensterung + dreistufige Komprimierung', status: 'ready', source: 'app/src/context' },
      { dimension: 'Marktplatz', liri: 'Plugin-Markt + MCP-Markt + Skill-Quellen', status: 'building', source: 'app/src/plugins' },
      { dimension: 'Agent-Strategien', liri: '{agentStrategies} Strategien · PDCA · Swarm', status: 'ready', source: 'app/src/agent' },
      { dimension: 'Zeitgesteuerte Aufgaben', liri: 'once / interval / cron', status: 'ready', source: 'app/src/chronos' },
      { dimension: 'Protokollunterstützung', liri: 'MCP + ACP + A2A + LSP', status: 'experimental', source: 'app/src/mcp' },
    ],
  },

  desktopClient: {
    title: 'Desktop-Client',
    subtitle:
      'Gebaut mit Tauri 2.11 + React 19 · {components} TSX-Komponenten · {pages} Funktionsseiten · eine vollständige Desktop-Erfahrung',
    sidebar: [
      'Chat',
      'KI-Modelle',
      'Wissensbasis',
      'Gedächtnis',
      'Skills',
      'MCP',
      'Geplante Aufgaben',
      'Kostenzentrum',
      'Buddy',
      'Einstellungen',
    ],
    panelTitle: 'Chat-Panel',
    panelUser: 'Liri · Linglong Bird',
    greeting: 'Hallo! Ich bin Liri — wobei kann ich helfen?',
    userMessage: 'Bitte die Daten in diesem Projekt analysieren',
    reply: 'Gerne, die Analyse läuft...',
    inputPlaceholder: 'Nachricht eingeben und Enter zum Senden drücken...',
    mockNote: 'Darstellung des Interface-Aufbaus, kein echter Screenshot',
    features: [
      { label: 'Chat-Panel', desc: 'Mehrere Gesprächsrunden' },
      { label: 'Modellverwaltung', desc: 'Zwischen Modellen wechseln' },
      { label: 'Wissensbasis', desc: 'Dateien durchsuchen' },
      { label: 'Gedächtnis', desc: 'Verlauf ansehen' },
      { label: 'Geplante Aufgaben', desc: 'Cron-Zeitpläne' },
      { label: 'MCP-Anbindung', desc: 'Server finden und installieren' },
      { label: 'Kostenzentrum', desc: 'Nutzung und Ausgaben' },
      { label: 'Buddy', desc: 'Aussehen und Wachstumsdaten' },
    ],
  },

  ecosystem: {
    title: 'Ökosystem',
    subtitle:
      'Plugin-Marktplatz + MCP-Marktplatz + drei Skill-Quellen + Template-Marktplatz = ein kombinierbares Liri-Ökosystem',
    mcp: {
      title: 'MCP-Marktplatz',
      desc: '5 Quelladapter, eine Suche',
      items: ['GitHub', 'npm', 'Offizielles Verzeichnis', 'Smithery', 'Mitgelieferte Dienste'],
    },
    plugins: {
      title: 'Plugin-Marktplatz',
      desc: 'Lokal, npm und entfernte Verzeichnisse',
      items: [
        'Plugin-SDK + Adapter',
        'Lebenszyklus & Hot Reload',
        'Signaturprüfung',
        'Konfigurationsendpunkte + CLI',
        '5 Build-Varianten',
      ],
    },
    skills: {
      title: 'Drei Skill-Quellen',
      desc: 'Integriert, Nutzer und Drittanbieter — physisch getrennt',
      items: [
        '{skills} integrierte Skills',
        'Nutzerdefinierte Skills',
        'ClawHub als Drittquelle',
        'Bedingte Orchestrierung',
        'Skill-Komposition & -Zuordnung',
      ],
    },
    templates: {
      title: 'Templates & Protokolle',
      desc: 'Agent- und Dokumentvorlagen, direkt einsetzbar',
      items: [
        'Agent-Template-Marktplatz',
        'Dokument-Template-Marktplatz',
        'MCP / ACP / A2A / LSP',
        'Kombinierbare Plugins und Skills',
        'Parametrisierte Template-Wiederverwendung',
      ],
    },
  },

  evolution: {
    meta: {
      title: 'Entwicklungsprotokoll — Liri',
      description:
        'Von v0.1 bis v0.5.22: wie Liri von 4.000 Dateien zu einem System mit Grenzen, Gates und einer übernehmbaren Schnittstelle wurde. Jeder Wendepunkt verlinkt Quellcode und CHANGELOG-Belege.',
    },

    hero: {
      eyebrow: 'ENTWICKLUNGSPROTOKOLL',
      title: 'Ein Weg, der noch nicht zu Ende ist',
      subtitle:
        'Von v0.1 bis v0.5.22 — 156 Tage, 116 Releases. Das ist keine Funktionsliste; es sind die Fehler, die gemacht wurden, die daraus gewonnenen Regeln und die Lücken, die noch offen sind.',
      stats: [
        { value: '156 Tage', label: 'seit dem ersten Release' },
        { value: '116', label: 'Releases' },
        { value: '9', label: 'Architektur-Snapshots' },
        { value: '20+', label: 'Architekturprüfungen' },
      ],
      scroll: 'Zur Zeitleiste springen',
      snapshot: 'Daten-Snapshot {date} · Zahlen von sync-facts und health:arch aus dem Liri-Repository gesammelt',
    },

    origin: {
      title: 'Ursprung',
      paragraphs: [
        'Am 25. Mai 2026 war das erste Release v0.1 — 100 Commits und ein Terminal-KI-Assistent, der tatsächlich lief.',
        'Das Problem war konkret: Das Modell sollte im Terminal sitzen, Dateien lesen, Befehle ausführen und Code ändern, statt in einem Web-Eingabefeld zu chatten. Lokale Modelle zuerst, weil private Dateien nicht auf fremden Servern landen sollen; Sicherheit von Anfang an, weil das System einen echten Rechner erhält und nicht nur eine API.',
        'In den folgenden drei Monaten kamen die Fähigkeiten Schicht für Schicht dazu: Werkzeuge, 27 Messaging-Kanäle, ein Desktop-Client, Sprache, eine Wissensbasis. Im August lagen über 4.000 Dateien im Repository.',
        'Da wurde das Problem zum ersten Mal benannt. Die Code-Durchsicht vom 18. Juni 2026 ergab LocalHTTPService mit 7.200 Zeilen und ChatManager mit 3.263, bei 150 Testdateien gegenüber 3.742 Quelldateien. Zwei Monate später kam der erste Architektur-Gesundheitswert: 10/40, Note D, mit 105 überdimensionierten Dateien, keine davon registriert.',
        'Die Lehre: Ob ein Projekt übernehmbar ist, entscheidet nicht die Zahl der Funktionen, sondern die Regeln, die es nach dem Aufprall hervorbringt.',
      ],
    },

    nodes: {
      title: 'Fünf Wendepunkte',
      note: 'Nach Ursache sortiert, nicht nach Kalender — Zeiträume überschneiden sich.',
      items: [
        {
          id: 'n1',
          period: '2026-05-25 → 2026-08',
          title: 'Erst Fähigkeiten, Grenzen später',
          situation: 'v0.1 hatte 100 Commits; Ausliefern schlug Struktur.',
          decision: 'Zuerst die Fähigkeiten füllen: Werkzeuge, Kanäle, Desktop, Sprache, Wissen — eins nach dem anderen.',
          cost:
            'Das erste Audit fiel unschön aus: LocalHTTPService mit 7.200 Zeilen, ChatManager mit 3.263, ein Test-zu-Quellcode-Verhältnis von rund 4 % und ein erster Gesundheitswert von 10/40 (D) mit 105 nicht registrierten überdimensionierten Dateien.',
          result: 'Über 4.000 Dateien, {tools} Werkzeuge, {channels} Kanäle, {desktopComponents} Desktop-Komponenten.',
          evidence: [
            { label: 'CHANGELOG v0.1', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
            { label: 'Code-Durchsicht, 18. Juni 2026', href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/codebase-review-20260618.md' },
          ],
          participate: 'Neue Fähigkeiten? Modul unter app/src starten, nicht im Kernel.',
        },
        {
          id: 'n2',
          period: '2026-08-09 → 2026-09-30',
          title: 'Sich selbst messen lernen',
          situation: 'Alle spürten das Problem, niemand konnte sagen, wie groß es ist.',
          decision:
            'Architekturqualität in einen wiederholbaren Wert mit Register überführen und jede überdimensionierte Datei registrieren — die Annahme, Sauberkeit halte sich durch Disziplin, wurde aufgegeben.',
          cost:
            'Registrieren ist nicht Aufteilen: ChatManager wuchs von 3.263 auf 7.036 Zeilen (inzwischen auf {chatManagerLines} heruntergeteilt). Auch die Bewertung änderte sich weiter, daher ist sie ein Gesundheitscheck, kein KPI.',
          result:
            'Neun Snapshots; nicht registrierte überdimensionierte Dateien von 105 auf 0 (später zurück auf 2); die Liste wurde ein nachvollziehbares Register.',
          evidence: [
            {
              label: 'architecture-health-history.json',
              href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/architecture-health-history.json',
            },
            { label: 'architecture-health.ts', href: 'https://github.com/cocosoft/Liri/blob/main/scripts/architecture-health.ts' },
          ],
          participate: 'Eine überdimensionierte Datei zum Aufteilen übernehmen (siehe „Möglichkeiten zu helfen“ unten).',
        },
        {
          id: 'n3',
          period: '2026-10-08 → 10-09',
          title: 'Ein falsches Löschen brachte einen Löschprozess',
          situation:
            'In der Codebasis hatte sich eine Schicht scheinbar ungenutzter „toter Oberflächen“ angesammelt. Die Bereinigung in v0.4.69 behandelte Sandbox und Isolations-Subsystem als toten Code: 170 Dateien berührt, +9.340 / −10.174 Zeilen.',
          decision:
            'Am nächsten Tag rollte v0.4.71 alles zurück — 24 Dateien wiederhergestellt (IsolationManager, EnhancedSandboxManager, PTYSandbox, SSHSandbox, docker/** und weitere, dazu 5 Test-Suiten) und 21 aktive Dateien passend zurückgesetzt.',
          cost: 'Löschen dauert jetzt länger: erst Belege schreiben. Dennoch günstiger als ein Rollback.',
          result:
            'v0.4.72 machte das Löschen zu einem Prozess, code-deletion.md (CD01–CD07): Belege sammeln, Einstiegspunkte lösen, dann löschen. „Scheint niemand zu nutzen“ ist kein Grund mehr.',
          evidence: [
            { label: 'CHANGELOG v0.4.69 / v0.4.71 / v0.4.72', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
          ],
          participate: 'Einen „Dead-Code-Kandidaten“ gegen CD01–CD07 prüfen.',
        },
        {
          id: 'n4',
          period: '2026-10-10 → 10-22',
          title: 'Regeln zu Gates machen',
          situation: 'Regeln standen in Dokumenten und verließen sich auf Disziplin; Dokumente und Code begannen auseinanderzudriften.',
          decision:
            'Jede Regel wurde zum CI-Blocker statt zum Ratschlag: fünf Gates plus doc-gate und ein verpflichtender sandbox-negative-Job; 413 Baseline-Schlüssel für Hardcoding; ein Zustandsvokabular mit 34 Werten und 1.795 Baseline-Paaren; Gates für Startfläche, kritische Module und Kernel-Fläche.',
          cost:
            'Ein paar Sekunden pro Commit, und Baselines müssen bei jeder Vokabularänderung neu erzeugt werden — genau das ist der Punkt: Definitionen können nicht mehr still auseinanderlaufen.',
          result: 'lint:arch-Verstöße bei 0; Tests wuchsen von 3.029 auf 7.488.',
          evidence: [
            { label: 'AGENTS.md Gate-Liste', href: 'https://github.com/cocosoft/Liri/blob/main/AGENTS.md' },
            { label: 'CI-Workflow', href: 'https://github.com/cocosoft/Liri/blob/main/.github/workflows/ci.yml' },
          ],
          participate: 'Vor dem Push die lokalen Gates laufen lassen (bun run ci) — beheben, was rot wird.',
        },
        {
          id: 'n5',
          period: '2026-10-05 → 10-28',
          title: 'Kernel verkleinern: von 5.336 Zeilen zum eigenen Paket',
          situation: 'Der core war sowohl Einstiegsimplementierung als auch gemeinsamer Hinterhof — jeder konnte etwas hinzufügen.',
          decision:
            'Drei Schritte: verkleinern (CoreAPIImpl 5.336 → 2.521 Zeilen), herauslösen (@openliri/kernel als eigenes Paket; core von 146 auf 113 Dateien mit Kernel-Gates K01–K08), dann auslagern (37 Module, die die Regel „null I/O / keine Abhängigkeit nach oben“ verletzten, nach app/src verschoben, über 470 Importe angepasst, fünf Baseline-Familien neu erzeugt).',
          cost:
            'Eine große Migration und vollständige Baseline-Neuerzeugung; seit dem 18.10. landen Änderungen in Batches, die Commit-Dichte ist bewusst niedriger.',
          result: 'Der Kernel zeigt nur noch eine schlanke Schnittstelle; externe Beiträge haben endlich eine Grenze.',
          evidence: [{ label: 'CHANGELOG v0.5.22', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' }],
          participate: 'Neue Fähigkeiten leben außerhalb der Kernel-Grenze und starten in app/src.',
        },
      ],
      fieldLabels: {
        situation: 'Ausgangslage',
        decision: 'Entscheidung',
        cost: 'Preis',
        result: 'Ergebnis',
        evidence: 'Belege',
        participate: 'Einstieg',
      },
    },

    model: {
      title: 'Architektur: geschichtet wie ein Betriebssystem',
      intro:
        'Die Architektur wurde nicht neu erfunden. Schlanker Kernel, Subsystem-Grenzen, einseitige Abhängigkeitsrichtung, Gates und Observability stammen aus Jahrzehnten Betriebssystempraxis; die in den letzten zwei Jahren veröffentlichten Designmuster und Engineering-Leitfäden für Agenten laufen auf dieselben Fragen hinaus — Schichtung, Grenzen, Zustand, Governance, Evaluation. Wir beschränken uns auf die erste Weise und prüfen uns an der zweiten.',
      mappingTitle: 'Betriebssystem-Konzept → Stand von Liri',
      headers: { concept: 'Konzept', liri: 'In Liri', status: 'Status' },
      statuses: {
        ready: 'Umgesetzt',
        converging: 'Konvergiert',
        audit: 'Externes Audit ausstehend',
        missing: 'Fehlt',
      },
      rows: [
        { concept: 'Kernel', liri: '@openliri/kernel als eigenes Paket mit schlanker öffentlicher Schnittstelle, abgesichert durch K01–K08', status: 'ready' },
        {
          concept: 'Subsysteme',
          liri: 'Werkzeuge / Kanäle / Gedächtnis / Routing / Sandbox / Aufgaben / Sprache / Desktop — je mit eigenen Einstiegspunkten und Grenzen',
          status: 'converging',
        },
        {
          concept: 'Treiber',
          liri: 'Anbieter-Adapter, Kanaladapter und 6 Sandbox-Backends (Landlock / Docker / SSH / PTY / macOS / Windows)',
          status: 'ready',
        },
        { concept: 'Prozesse & Scheduling', liri: 'Sitzungsausführung, PDCA, Swarm, Cron', status: 'ready' },
        {
          concept: 'Berechtigungsmodell',
          liri: 'Fünf Verteidigungsebenen plus vier Genehmigungsstufen (requested → presented → decided → recorded)',
          status: 'audit',
        },
        { concept: 'Observability & Audit', liri: 'Ereignisprotokoll, Kostenbuch, Belegregister', status: 'ready' },
        { concept: 'Maintainer', liri: 'Noch nicht etabliert: keine Subsystem-Owner und kein Übergabepfad', status: 'missing' },
      ],
      referenceTitle: 'Woran wir uns gemessen haben',
      referenceBody:
        'Wir haben uns Punkt für Punkt an öffentlich verfügbaren Agent-Designmustern und Engineering-Leitfäden gemessen: alle 21 Muster haben echte Implementierungen, aber 3 der entscheidenden Schalter sind standardmäßig aus — deshalb heißt es nur „implementiert“, nie „standardmäßig aktiv“. Die Engineering-Schleife wird genauso geprüft: Architektur, Build, Betrieb, Governance, Optimierung.',
      blanksTitle: 'Drei Lücken',
      blanks: [
        { title: 'Subsystem-Maintainer', desc: 'Ohne Owner gibt es keinen Übergabepfad. Das ist das betriebssystemnächste Stück — und das, das fehlt.' },
        { title: 'Subsystem-Verträge', desc: 'Der Vertragsentwurf existiert, ob Register / LoopProfile umgesetzt sind, ist nicht verifiziert — die Zusage stabiler Schnittstellen ist noch nicht festgeschrieben.' },
        { title: 'Coverage-Gate', desc: 'Zum Zeitpunkt der Durchsicht etwa 4 %; die CI hat über 20 Architekturprüfungen, aber noch keine Coverage-Schwelle.' },
      ],
      honesty:
        'Ehrlich gesagt: Die Architektur-Gesundheit liegt weiter bei {healthGrade} ({healthScore}); von {oversized} überdimensionierten Dateien sind {unregistered} noch nicht registriert; die größte liegt weiter im Chat-Bereich (ChatManager wurde von 7.036 auf {chatManagerLines} Zeilen aufgeteilt). Der Kernel existiert, die Grenzen konvergieren, ein Maintainer-Modell gibt es noch nicht — das heißt „noch nicht zu Ende“.',
      layersToggle: 'Die aktuellen 8 Funktionsebenen ausklappen',
      cta: 'Vollständigen Status ansehen',
    },

    timeline: {
      title: 'Zeitleiste',
      subtitle: 'Ein Eintrag pro Monat — nur Architektur und Governance, keine Routine-Commits.',
      items: [
        { date: '2026-05-25', text: 'v0.1: 100 Commits, der Terminal-Assistent läuft' },
        { date: '2026-06-18', text: 'Erste Code-Durchsicht: eine Datei mit 7.200 Zeilen, Test-zu-Quellcode-Verhältnis rund 4 %' },
        { date: '2026-08-09', text: 'Erster Gesundheitswert: 10/40 (D), 105 überdimensionierte Dateien nicht registriert' },
        { date: '2026-10-09', text: 'Sandbox durch eine Bereinigung gelöscht → vollständiger Rollback; Löschprozess CD01–CD07 am nächsten Tag' },
        { date: '2026-10-20', text: 'Zustandsvokabular-Gate geht live: 34 Werte, 1.795 Baseline-Paare' },
        { date: '2026-10-28', text: 'Kernel-Auslagerung abgeschlossen; sichtbare Werkzeuge auf 12 / 1.397 Token begrenzt' },
        { date: '2026-10-28', text: 'Zweisprachige Dokumentationsseite und diese Seite gehen live' },
      ],
      more: 'Monatliche Einträge werden hier ergänzt.',
    },

    participate: {
      title: 'Möglichkeiten zu helfen',
      subtitle: 'Diese Seite ist kein Abschlussbericht, sondern eine Einladung. Drei Lücken, für alle werden Hände gebraucht.',
      cards: [
        {
          title: 'Eine Lücke übernehmen',
          desc: 'Die Domain-first-Wissensisolierung hat ein Design, Phase A/B/C ist nicht umgesetzt; neue Fähigkeiten müssen nicht in den Kernel.',
          cta: 'Aufgabe übernehmen',
        },
        {
          title: 'Helfen, Schulden abzutragen',
          desc: '{oversized} überdimensionierte Dateien ({unregistered} nicht registriert) warten auf Aufteilung; ein Coverage-Gate gibt es noch nicht.',
          cta: 'Aufgabe übernehmen',
        },
        {
          title: 'Die Sicherheit auditieren',
          desc: 'Fünf Verteidigungsebenen und sechs Sandbox-Backends sind implementiert und die Regeln im Quellcode lesbar — aber es gab kein Drittanbieter-Audit. Das ist die Rückmeldung, die am meisten gewünscht ist.',
          cta: 'Checkliste ansehen',
        },
      ],
      audit: {
        title: 'Checkliste für das Sicherheitsaudit',
        items: [
          'Regeln für gefährliche Befehle: 37 Regeln — wo sie liegen, wie sie auslösen; einen Fall bauen und prüfen, ob die erwartete Regel greift',
          'Prompt-Injection-Regeln: 14 Regeln — ein bösartiges Dokument einspeisen und prüfen, ob es gestoppt wird',
          'Shell-Regeln: 10 Allow-/Deny-Einträge — Umgehungspfade testen (Pipes, Subshells, Kodierung)',
          'Sandbox-Degradierung: wann jedes der 6 Backends degradiert und ob es dann fail-closed ist',
          'Genehmigungsstufen: requested → presented → decided → recorded — fehlende oder falsch geordnete Stufen suchen',
          'Rechtefläche: Kann ein Werkzeugaufruf den Berechtigungsklassifikator umgehen und direkt schreiben oder ausführen?',
        ],
        note: 'Einstiegspunkte: app/src/security, app/src/sandbox, app/src/permission.',
      },
      securityNotice:
        'Details zu Schwachstellen bitte vertraulich über SECURITY.md melden — kein öffentliches Issue. Öffentliche Issues dienen nur Auditprozess und Abdeckung.',
      ctaGithub: 'In Issues übernehmen oder fragen',
      ctaSecurity: 'Den Sicherheits-Check öffnen',
      fundLink: 'Lieber finanziell unterstützen? Zur Sponsorenseite',
    },

    teaser: {
      title: 'Ein Weg, der noch nicht zu Ende ist',
      paragraphs: [
        'Am 25. Mai 2026 war es ein einzelnes v0.1 mit 100 Commits. Fünf Monate später sind es über 4.000 Dateien und 27 Kanäle — und die Rechnung, die dazugehört: eine Datei mit 7.000 Zeilen, 105 überdimensionierte Dateien, die niemand registriert hatte, und eine „Dead-Code-Bereinigung“, die das gesamte Sandbox-Subsystem löschte.',
        'Wir haben es wiederhergestellt und dann Löschen, Grenzen und Zustandsvokabulare Schritt für Schritt zu CI-Gates gemacht. Der Weg ist nicht zu Ende.',
      ],
      stats: ['156 Tage', '116 Releases', '20+ Architekturprüfungen'],
      cta: 'Die ganze Geschichte lesen',
    },
  },

  hero: {
    subtitle:
      'Linglong Bird · Persönlicher KI-Assistent · <span class="text-brand-400">Lokal zuerst</span> · <span class="text-brand-400">Sicherheit von Anfang an</span>',
    versionPill: 'v{version} · MIT-Lizenz · Veröffentlicht am <span class="whitespace-nowrap">{date}</span>',
    stats: ['{n} TS-Dateien', '{n} integrierte Werkzeuge', '{n} Sicherheitsebenen', '{n} Messaging-Kanäle', '{n} Buddy-Arten'],
    ctaPrimary: 'Erste Schritte',
    ctaGithub: 'GitHub',
    command: 'git clone https://github.com/cocosoft/Liri.git',
    commandHint: '  # dann cd app && bun install',
  },

  highlights: {
    title: 'Mehr als eine Funktionsliste',
    subtitle: 'Drei Dinge, die leicht übersehen werden und täglich im Einsatz sind.',
    cards: [
      {
        id: 'buddy',
        icon: '🐣',
        title: 'Buddy-Persona',
        desc: 'Kein Werkzeug, sondern ein Begleiter. Das Aussehen wird deterministisch aus einem Seed erzeugt, derselbe Buddy sieht also immer gleich aus; der Wachstumszustand wird gespeichert und über Sitzungen hinweg fortgeschrieben.',
        chips: ['{species} Arten', '{hats} Hüte', '{eyes} Augen', '{rarities} Seltenheitsstufen'],
      },
      {
        id: 'cost',
        icon: '🧾',
        title: 'Transparente Kosten',
        desc: 'Preise werden aus der Datenbank gelesen, die Zuordnung erfolgt über den vom Anbieter gemeldeten Modellnamen, jeder Aufruf wird in cost_records geschrieben; Budgets warnen, dann komprimieren sie, dann blockieren sie.',
        chips: ['Preistabelle model_registry', 'echte usage', 'Buch pro Aufruf', 'Tagesbudget'],
      },
      {
        id: 'scenarios',
        icon: '🎯',
        title: 'Vier Nutzergruppen',
        desc: 'Entwickler führen Befehle aus und ändern Code; Sicherheitsverantwortliche erhalten AST-Level-Blockierung und Audit-Spuren; Ops-Teams betreiben es als Dienst; alle anderen erreichen es aus einer Chat-App.',
        chips: ['Entwickler', 'Sicherheitsverantwortliche', 'Ops-Teams', 'Alle anderen'],
      },
    ],
  },

  limitations: {
    title: 'Aktuelle Einschränkungen',
    subtitle: 'Was in der schnellen Iteration noch nicht fertig ist — aufgeschrieben, damit es nicht selbst entdeckt werden muss.',
    statuses: {
      audit: 'Externes Audit ausstehend',
      polish: 'In Feinarbeit',
      building: 'In Arbeit',
      experimental: 'Experimentell',
      note: 'Hinweis',
    },
    items: [
      {
        status: 'audit',
        title: 'Sicherheit wartet auf externes Audit',
        desc: '{securityLayers} Verteidigungsebenen und 6 Sandbox-Backends sind implementiert, mit {sandboxFiles} Sandbox-bezogenen Dateien zur Einzelprüfung — ein Sicherheitsaudit durch Dritte fehlt jedoch noch.',
      },
      {
        status: 'polish',
        title: 'Desktop-Interaktionen werden noch verfeinert',
        desc: '{desktopComponents} TSX-Komponenten und {desktopPages} Seiten stehen; Tastenkürzel, Animationen und Randfälle werden weiter angepasst.',
      },
      {
        status: 'building',
        title: 'Marktplatz-Katalog ist noch klein',
        desc: 'Plugin-Markt, MCP-Markt und Skill-Quellen funktionieren durchgängig, der installierbare Katalog wächst aber noch.',
      },
      {
        status: 'experimental',
        title: 'ACP / A2A sind experimentell',
        desc: 'Beide Protokolle entwickeln sich weiter, ihre Schnittstellen können sich zwischen Releases ändern; MCP und LSP sind stabil.',
      },
      {
        status: 'building',
        title: 'Englische Doku kann zurückliegen',
        desc: 'Die chinesische Doku wird automatisch aus dem Quell-Repository synchronisiert; die englische Fassung ist eine manuelle Übersetzung und meist ein Release hinterher.',
      },
      {
        status: 'note',
        title: 'Das Repository hat Vorrang vor der Website',
        desc: 'Diese Seiten werden aus app/docs erzeugt. Weicht etwas von der Quelle ab, ist das GitHub-Repository maßgeblich.',
      },
    ],
    cta: 'Problem gefunden? Issue öffnen',
  },

  localFirst: {
    title: 'Lokal zuerst',
    subtitle:
      'Lokale Modelle über Ollama / llama.cpp, Daten bleiben standardmäßig auf dem eigenen Rechner. Bei einem Cloud-Anbieter wird nur der Inhalt dieser einen Anfrage an den gewählten Anbieter gesendet',
    benefits: [
      {
        title: 'Arbeitet offline',
        desc: 'Mit einem lokalen Ollama- oder llama.cpp-Modell sind Gespräche und lokale Werkzeuge ohne Netzwerkverbindung möglich. Sitzungen, Gedächtnis und Wissensbasis liegen in lokalen Dateien.',
      },
      {
        title: 'Daten bleiben lokal',
        desc: 'Sitzungen, Gedächtnis und Wissensbasis liegen in lokalem SQLite und im Arbeitsbereichsverzeichnis, der Gesprächsverlauf wird für Rückblick und Audit an events.jsonl angehängt.',
      },
      {
        title: 'Cloud bei Bedarf ergänzen',
        desc: 'Wenn mehr Leistung gebraucht wird, lassen sich Cloud-Anbieter ({providers} unterstützt) in der Konfiguration aktivieren und vom Routing pro Aufgabenstufe auswählen — oder es bleibt rein lokal.',
      },
    ],
    compareTitle: 'Lokal vs. Cloud',
    compareRows: [
      { label: 'Wo das Modell läuft', local: 'Eigener Rechner (Ollama / llama.cpp)', cloud: 'Server des Anbieters' },
      { label: 'Netzwerk erforderlich', local: 'Nein', cloud: 'Ja' },
      { label: 'Wohin Anfragedaten gehen', local: 'Verlassen den Rechner nicht', cloud: 'An den gewählten Anbieter' },
      { label: 'Kostenmodell', local: 'Eigene Hardware', cloud: 'Nutzungsabhängige Abrechnung' },
      { label: 'Gesprächsverlauf', local: 'events.jsonl bleibt lokal', cloud: 'Bleibt ebenfalls lokal' },
    ],
  },

  quickstart: {
    title: 'Erste Schritte',
    subtitle: 'Drei Schritte: Abhängigkeiten installieren → API-Key konfigurieren → dev starten',
    stepLabels: ['Abhängigkeiten installieren', 'API-Key konfigurieren', 'Liri starten'],
    copy: 'Befehl kopieren',
    envComment: '# .env bearbeiten und API-Key eintragen',
  },

  roadmap: {
    title: 'Versionen & Takt',
    subtitle:
      'Versionsnummern, Tag-Anzahl und Commit-Historie sind auf GitHub überprüfbar; die Historie enthält die Entwicklung vor dem Launch, die öffentliche Iteration beginnt mit dem Launch',
    milestones: [
      {
        quarter: '2026-10-28',
        version: 'v{version}',
        label: 'Aktuelles Release',
        items: [
          '{tools} integrierte Werkzeuge in {toolCategories} Kategorien',
          '{channels} Messaging-Kanäle',
          '{securityLayers} Sicherheitsebenen + 6 Sandbox-Backends',
          '{desktopComponents} Desktop-Komponenten · {desktopPages} Seiten',
        ],
      },
      {
        quarter: '2026-10',
        version: 'v0.5.13 → v0.5.21',
        label: 'Veröffentlicht',
        items: [
          'Acht Releases in drei Tagen (v0.5.13 → v0.5.21), Teil der Entwicklung vor dem Launch',
          'Kernmodule herausgelöst, Guardrail-Baselines synchronisiert',
          'Fortschritt richtet sich jetzt nach vorhandenen Artefakten',
          'Änderungen an Sandbox-Rechten greifen sofort',
        ],
      },
      {
        quarter: 'Repository gesamt',
        version: '{releases} Tags',
        label: 'Release-Takt',
        items: [
          '{commits} Commits bisher',
          'CI deckt lint:arch / Typprüfung / Unit-Tests ab',
          'Öffentliches Repository mit sichtbaren Issues und PRs',
        ],
      },
      {
        quarter: 'Als Nächstes',
        version: 'v0.6+',
        label: 'Geplant',
        items: [
          'Verfolgt in GitHub Releases und Issues',
          'Online-Dokumentationsseite ist live (Chinesisch und Englisch)',
          'Über Funktionsprioritäten in Issues abstimmen',
        ],
      },
    ],
  },

  security: {
    title: 'Fünf Ebenen Verteidigung in der Tiefe',
    subtitle:
      'Von der AST-Analyse zur Compile-Zeit bis zur Laufzeit-Sandbox: Regelanzahl, Schwellen und Rückfallstrategien stehen im Quellcode',
    layers: [
      {
        title: 'Rust-AST-Analyse zur Compile-Zeit',
        short:
          'Rust FFI führt eine AST-Analyse zur Sicherheit durch, bevor Code läuft, geprüft gegen {dangerousRules} Regeln für gefährliche Befehle',
        tag: 'Compile-Zeit',
        details: [
          'Die Rust-FFI-Schicht parst den Bash-AST',
          'Bash-AST-Parsing mit {dangerousRules} Regeln für gefährliche Befehle',
          'Erkennung von Variableninjektion und Blockieren von Pfad-Traversal',
          'Erkennung manipulierter Argumente mit Prüfung erlaubter Befehle',
        ],
      },
      {
        title: 'TypeScript-Semantikanalyse',
        short:
          'Zusammengesetzte Befehle werden zur Laufzeit segmentweise bewertet, Ablehnungsgründe hängen an der genauen Anweisung',
        tag: 'Laufzeit',
        details: [
          'Zusammengesetzte Nur-Lese-Befehle passieren segmentweise statt pauschal abgelehnt zu werden',
          '{injectionRules} Injektionsmuster erkannt, darunter Zero-Width-Zeichen und vergiftete Umgebungsvariablen',
          '{shellRules} Shell-spezifische Regeln (bash / PowerShell / cmd)',
          'Ablehnungsmeldungen nennen die echte Ursache und die betroffene Anweisung',
        ],
      },
      {
        title: 'Guardrail-Regelengine',
        short:
          'Ein konfigurierbares Richtlinien-Regelsystem mit feingranularer Autorisierung nach Werkzeug, Kanal und Nutzergruppe',
        tag: 'Richtlinie',
        details: [
          'deny-by-default mit Allowlists',
          'Berechtigungsgranularität: Werkzeug → Regel → Fingerprint',
          'Regeländerungen greifen sofort, ohne Neustart',
          'Ablehnungen melden Regelquelle und die getroffene Anweisung',
        ],
      },
      {
        title: 'AutoMode-Klassifikator',
        short:
          'Bewertet das Risiko aus Aufgaben- und Werkzeugkontext und entscheidet automatisch zwischen erlauben, nachfragen und ablehnen',
        tag: 'Adaptiv',
        details: [
          'Risikoeinstufung auf Basis von Befehlssemantik und Werkzeugkontext',
          'Befehle mit geringem Risiko werden per Richtlinie automatisch erlaubt',
          'Befehle mit hohem Risiko gehen in die Genehmigung und landen im Inbox',
          'Nicht vertrauenswürdige Befehle führen standardmäßig zur Rückfrage statt zur Ablehnung',
        ],
      },
      {
        title: 'Sandbox-Ausführung',
        short:
          '6 Isolations-Backends — Landlock / macOS / Windows / Docker / SSH / PTY — sodass übergriffige Befehle den Host nie erreichen',
        tag: 'Isolation',
        details: [
          'Linux Landlock: Kernel-seitige Dateisystembeschränkungen',
          'macOS-Sandbox / Windows Low IL + Job-Objekt als Rückfallebene',
          'Docker: vollständige Isolation mit Ressourcen- und Netzwerkrichtlinien',
          'SSH-Fernausführung und kontrollierte PTY-Pfade',
          'Ehrliche Degradierung mit klarem Hinweis, wenn kein Backend verfügbar ist',
        ],
      },
    ],
    protectionsTitle: 'Sicherheit in Zahlen',
    protections: [
      { label: 'Regeln für gefährliche Befehle', value: '{n}', desc: 'AST-Level-Abgleich über bash / PowerShell / cmd' },
      { label: 'Injektionserkennungsregeln', value: '{n}', desc: 'Deckt Zero-Width-Zeichen, vergiftete Umgebungsvariablen und mehr ab' },
      { label: 'Sandbox-Backends', value: '{n}', desc: 'Landlock / macOS / Windows / Docker / SSH / PTY' },
      { label: 'Sandbox-Implementierungsdateien', value: '{n}', desc: 'TypeScript-Implementierungen unter app/src/sandbox' },
    ],
    summary:
      'Rust-AST-Analyse zur Compile-Zeit · TypeScript-Semantikanalyse · Guardrail-Regelengine · AutoMode-Klassifikator · Sandbox-Ausführung',
  },

  smartRouter: {
    title: 'Smartes Routing',
    subtitle:
      'Wählt eine Modellstufe nach Aufgabentyp und Schwierigkeit und fällt bei nicht verfügbarem primären Anbieter in der konfigurierten Reihenfolge zurück',
    taskTypesHeading: 'Erkennt {taskTypes} Aufgabentypen automatisch ({common} häufige unten)',
    taskTypes: [
      { name: 'Coding', desc: 'Codegenerierung, Debugging, Review' },
      { name: 'Schreiben', desc: 'Doku, Texte, Übersetzung' },
      { name: 'Analyse', desc: 'Datenanalyse, Schlussfolgern, Planung' },
      { name: 'Werkzeuge', desc: 'Dateien, Suche, Systemoperationen' },
      { name: 'Übersetzung', desc: 'Mehrsprachige Übersetzung und Lokalisierung' },
      { name: 'Suche', desc: 'Websuche und Informationsbeschaffung' },
      { name: 'Kreativ', desc: 'Brainstorming, Design, Ideenfindung' },
      { name: 'Chat', desc: 'Alltägliche Konversation' },
    ],
    layersHeading: 'Entscheidungspipeline mit {n} Stufen',
    layers: [
      { name: 'L1: Router-Schalter', desc: 'Wenn aus, gehen Anfragen direkt an das Standardmodell ohne weitere Prüfung' },
      { name: 'L2: Schnellpfad', desc: 'Einfache Aufgaben oder Präfixregeln gehen direkt an das Modell der niedrigen Stufe' },
      { name: 'L3: Sitzungsbindung', desc: 'Ein Modell pro Gespräch bleibt erhalten, damit nicht ständig gewechselt wird' },
      { name: 'L4: LLM-Klassifikator', desc: 'Ein kleines Modell bewertet Aufgabentyp und Schwierigkeit und vergibt eine Stufe' },
      { name: 'L5: Stufenauflösung', desc: 'Ordnet simple/medium/complex/reasoning konkreten Modellen zu' },
    ],
    fallbackHeading: 'Anbieter-Fallback-Kette',
    fallbackNote: 'Primäres Modell nicht verfügbar → automatischer Fallback → Degradierung ohne Unterbrechung',
    fallback: [
      { name: 'Primär', model: 'Primärer Anbieter · Modell der aktuellen Stufe' },
      { name: 'Fallback 1', model: 'Backup-Anbieter derselben Stufe' },
      { name: 'Fallback 2', model: 'Fallback-Anbieter einer anderen Stufe' },
      { name: 'Fallback 3', model: 'Jeder weitere konfigurierte Anbieter' },
      { name: 'Letzte Instanz', model: 'Lokales Ollama / llama.cpp' },
    ],
  },

  sponsor: {
    meta: {
      title: 'Liri unterstützen — Liri',
      description:
        'Liri ist ein Open-Source-Projekt, das von einer Person gepflegt wird. Sponsoring ist kein Trinkgeld, sondern gekaufte Zeit: für ein externes Sicherheitsaudit, das Gegenlesen der englischen Doku und die Infrastruktur.',
    },
    label: 'Unterstützen',
    hero: {
      title: 'Liri unterstützen',
      subtitle:
        'Dies ist ein Ein-Personen-Open-Source-Projekt. Sponsoring ist kein Trinkgeld, sondern gekaufte Zeit für Audits, Dokumentation und Infrastruktur.',
      note: 'Jeder Monat der Ausgaben wird unten im Buch veröffentlicht; was MIT ist, bleibt MIT.',
    },
    channelsTitle: 'Wege zu sponsern',
    channels: [
      {
        title: 'GitHub Sponsors',
        desc: 'Für internationale Sponsoren, monatlich, mit öffentlicher Sponsorenliste auf GitHub.',
        cta: 'Monatlich sponsern',
      },
      {
        title: 'Afdian',
        desc: 'Für Sponsoren in China — Alipay / WeChat, monatlich oder ein eigener Betrag.',
        cta: 'Zu Afdian',
      },
    ],
    comingSoon: 'Demnächst verfügbar',
    pendingNote: 'Der Kanal für China (Afdian) wird eingerichtet und hier ergänzt.',
    waitlistNote:
      'Für Auszahlungen über GitHub Sponsors ist ein Konto in einer unterstützten Region erforderlich; das chinesische Festland steht noch nicht auf der Liste. Der Antrag ist eingereicht und wird geprüft.',
    contact: 'Unternehmens-Sponsoring und alles andere: ein Issue öffnen (mit dem Tag sponsor)',
    usesTitle: 'Wohin das Geld geht',
    usesNote: 'Die Anteile sind der Plan des Maintainers, kein Versprechen; tatsächliche Ausgaben werden monatlich im Buch erfasst.',
    uses: [
      { label: 'Externes Sicherheitsaudit', share: '~40%', desc: 'Fünf Verteidigungsebenen und sechs Sandbox-Backends hatten noch kein Audit durch Dritte — die größte Lücke' },
      { label: 'CI und Release-Signierung', share: '~20%', desc: 'Multi-Plattform-Builds, Signierung der Installer und die Release-Pipeline' },
      { label: 'Gegenlesen der englischen Doku', share: '~15%', desc: 'Die englische Doku ist eine manuelle Übersetzung und liegt meist ein Release hinter der chinesischen' },
      { label: 'Modell-API-Guthaben', share: '~15%', desc: 'Evaluation und Regression brauchen echte Aufrufe, keine Mocks' },
      { label: 'Domain und Hosting', share: '~10%', desc: 'Website, Doku-Seite und Mirrors' },
    ],
    notTitle: 'Was es nicht kauft',
    nots: [
      'Keine Funktionsplanung: Issue-Priorität folgt der Wirkung, nicht dem Betrag',
      'Kein Vorrangssupport: alle warten im selben Issue-Tracker',
      'Keine privilegierte Closed-Source-Edition: was MIT ist, bleibt MIT',
      'Keine öffentliche Nennung des Namens, außer bei ausdrücklicher Zustimmung',
    ],
    tiersTitle: 'Stufen',
    tiers: [
      { title: '10 ¥ / Monat', desc: 'Name in SPONSORS.md' },
      { title: 'Eigener Betrag', desc: 'Einmalige Unterstützung in beliebiger Höhe' },
      { title: 'Unternehmen', desc: 'Logo und Link; Rechnungen möglich — Kontakt über Issues' },
    ],
    ledgerTitle: 'Transparentes Buch',
    ledgerDesc: 'Ein Eintrag pro Monat: Einnahmen / Ausgaben / Saldo. Das Format steht hier; der erste Eintrag kommt in dem Monat, in dem Sponsoring startet.',
    ledgerHeaders: ['Monat', 'Einnahmen', 'Ausgaben', 'Saldo'],
    ledgerEmpty: 'Noch keine Einträge',
    otherTitle: 'Helfen ohne Geld',
    others: [
      { title: 'Star und Weitersagen', desc: 'Damit Menschen, die es brauchen, es finden', href: 'https://github.com/cocosoft/Liri' },
      { title: 'Ein reproduzierbares Issue', desc: 'Ein reproduzierbarer Bug ist mehr wert als zehn Meinungen', href: 'https://github.com/cocosoft/Liri/issues/new' },
      { title: 'Gegenlesen der englischen Doku', desc: 'Die englische Seite ist eine manuelle Übersetzung — Korrekturen willkommen', href: '/docs' },
      { title: 'Sicherheitsaudit', desc: 'Die Checkliste durchgehen; Schwachstellendetails nicht öffentlich posten', href: '/evolution' },
      { title: 'Eine Lücke übernehmen', desc: 'Maintainer-Modell, Subsystem-Verträge, Coverage-Gate', href: '/evolution' },
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: 'Kann eine Rechnung ausgestellt werden?', a: 'Über persönliche Kanäle nicht. Bei Unternehmens-Sponsoring bitte über Issues melden, dann läuft es über ein Firmenkonto.' },
      { q: 'Kann der Verwendungszweck bestimmt werden?', a: 'Eine Notiz ist möglich, die Verteilung folgt aber den obigen Anteilen.' },
      { q: 'Ist eine Rückerstattung möglich?', a: 'Monatliches Sponsoring kann jederzeit gekündigt werden; bereits gezahlte Monate werden nicht erstattet.' },
      { q: 'Wird der Name öffentlich?', a: 'Standardmäßig nicht. Für einen Eintrag in SPONSORS.md beim Sponsoring eine Notiz hinterlassen.' },
    ],
  },

  status: {
    meta: {
      title: 'Projektstatus — Liri',
      description:
        'Selbstcheck der Funktionen, aktuelle Einschränkungen, Release-Takt und Tech-Stack: was Liri gebaut hat und was nicht, jede Zahl mit Link zum Quellcode.',
    },
    label: 'Status',
    title: 'Projektstatus',
    subtitle:
      'Selbstcheck der Funktionen, aktuelle Einschränkungen, Release-Takt und Tech-Stack — was fertig ist, was nicht, und jede Zahl verlinkt auf den Quellcode.',
    jumpLabel: 'Auf dieser Seite',
    jumps: [
      { href: '#comparison', label: 'Selbstcheck' },
      { href: '#limitations', label: 'Einschränkungen' },
      { href: '#roadmap', label: 'Versionen' },
      { href: '#techstack', label: 'Tech-Stack' },
      { href: '#local-first', label: 'Lokal zuerst' },
    ],
    healthNote: 'Der Trend der Architektur-Gesundheit (9 Snapshots) kommt im nächsten Release auf diese Seite.',
    updateNote: 'Wird mit jedem Release aktualisiert; bei Abweichungen ist das GitHub-Repository maßgeblich.',
  },

  techstack: {
    title: 'Tech-Stack',
    subtitle: 'Ein moderner Stack, auf jeder Ebene bewusst gewählt',
    items: [
      { label: 'TypeScript', pct: '{n} Dateien', desc: 'Kernsprache · ca. {lines} Zeilen' },
      { label: 'Rust', pct: '{n} Module', desc: 'Native Module für AST, Sicherheit und Kompression' },
      { label: 'Bun', pct: '', desc: 'Laufzeit' },
      { label: 'React 19 + Ink', pct: '', desc: 'Terminal-UI' },
      { label: 'Tauri 2.11', pct: '{n} Komponenten', desc: 'Desktop-Client' },
      { label: 'SQLite', pct: '', desc: 'Daten- und Vektorspeicher' },
      { label: 'OpenTelemetry', pct: '', desc: 'Observability' },
      { label: 'MCP + ACP + A2A + LSP', pct: '', desc: 'Protokolle' },
      { label: 'Docker', pct: '', desc: 'Eines der Sandbox-Backends' },
      { label: 'MIT License', pct: '', desc: 'Open-Source-Lizenz' },
    ],
  },

  voiceInteraction: {
    title: 'Sprachinteraktion',
    subtitle: 'Mehr als Tippen — Bedarf aussprechen, Liri versteht, handelt und antwortet',
    features: [
      {
        title: 'Spracheingabe',
        desc: 'Lokal faster-whisper und SenseVoice oder OpenAI Whisper in der Cloud',
        platforms: ['Lokal faster-whisper', 'SenseVoice', 'OpenAI Whisper', 'Streaming-Erkennung'],
      },
      {
        title: 'Sprachausgabe',
        desc: 'Lokal Piper oder Edge / OpenAI in der Cloud, auch ein eigener Befehl',
        platforms: ['Lokal Piper', 'Edge TTS', 'OpenAI TTS', 'Eigener Befehl'],
      },
      {
        title: 'Werkzeugnativ',
        desc: 'Sprache ist selbst ein Werkzeug, das das Modell bei Bedarf aufruft',
        platforms: ['tts-Werkzeug', 'audio_play-Werkzeug', 'Spracheingabe', 'Wiedergabe der Antwort'],
      },
      {
        title: 'Überall verfügbar',
        desc: 'Desktop und Terminal teilen denselben Sprachdienst',
        platforms: ['Tauri-Desktop', 'CLI-Terminal', 'HTTP API'],
      },
    ],
    scenarios: 'Freihändige Bedienung · Multitasking · Barrierefreiheit · Sprachkürzel ·',
    scenariosHighlight: 'Überall aussprechen, und es ist erledigt',
  },
};
