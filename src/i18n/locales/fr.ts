/**
 * 法语整站文案（ui、channels 与 22 个区块），结构对齐英文版。
 */
export const fr = {
  ui: {
    meta: {
      homeTitle: 'Liri — Votre assistant IA personnel',
      homeDescription:
        'Liri (Linglong Bird) est un agent IA de terminal open source (MIT) : {tools} outils intégrés, {channels} canaux de messagerie, cinq couches de défense, prise en charge des modèles locaux et routage multi-fournisseurs.',
    },

    nav: {
      capabilities: 'Capacités',
      architecture: 'Architecture',
      security: 'Sécurité',
      routing: 'Routage',
      voice: 'Voix',
      brain: 'Second cerveau',
      desktop: 'Bureau',
      cost: 'Coût',
      ecosystem: 'Écosystème',
      evolution: 'Journal',
      start: 'Commencer',
      docs: 'Docs',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },

    lang: {
      label: 'Langue',
      switchToZh: 'Passer au chinois',
      switchToEn: 'Passer à l’anglais',
    },

    stage: {
      label: 'Itération rapide',
      note: 'Les API et la documentation peuvent changer',
      detail:
        'Liri évolue rapidement : les API, les options de configuration et la documentation changent d’une version à l’autre. Consultez les notes de version avant de mettre à jour.',
      cta: 'Notes de version',
    },

    footer: {
      tagline: 'Assistant IA personnel · Local d’abord · Sécurité intégrée',
      resources: 'Ressources',
      repo: 'Dépôt GitHub',
      issue: 'Signaler un problème',
      releases: 'Notes de version',
      license: 'MIT License',
      community: 'Communauté',
      discord: 'Discord (bientôt disponible)',
      docs: 'Documentation',
      status: 'État du projet',
      evolution: 'Journal de développement',
      support: 'Soutenir Liri',
      discussions: 'Discussions (bientôt ouvertes)',
      copyright: '© {year} Liri. Released under MIT License.',
      stats:
        '{tsFiles} fichiers TS · {tools} outils · {securityLayers} couches de sécurité · {channels} canaux · {buddySpecies} espèces de Buddy',
    },

    docs: {
      label: 'Docs',
      pageTitle: 'Documentation — Liri',
      pageDescription:
        'Installation, configuration, connexion des canaux et référence des commandes de Liri.',
      all: 'Toute la documentation',
      articleTitle: '{title} — Documentation Liri',
      backHome: 'Retour à l’accueil',
      indexTitle: 'Documentation',
      indexIntro:
        'Synchronisé depuis <code class="font-mono text-brand-400">app/docs</code> du dépôt GitHub, {count} articles.',
      footerNote:
        'Le site peut être en retard sur la source. Le <a class="text-surface-400 hover:text-surface-200" href="https://github.com/cocosoft/Liri/tree/main/app/docs" target="_blank" rel="noopener noreferrer">dépôt GitHub</a> fait foi.',
      source: 'Fichier source : ',
      englishOnly: 'La documentation est actuellement disponible en anglais uniquement.',
    },

    common: {
      scroll: 'Faire défiler',
      copy: 'Cliquez pour copier',
      backHome: 'Retour à l’accueil',
      fullStatus: 'Voir l’état complet',
    },
  },

  channels: {
    Messaging: 'Messagerie',
    'China platforms': 'Plateformes chinoises',
    'Collaboration & social': 'Collaboration et réseaux sociaux',
    'Other channels': 'Autres canaux',
    微信: 'WeChat',
    企业微信: 'WeCom',
    钉钉: 'DingTalk',
    飞书: 'Feishu',
    元宝: 'Yuanbao',
    移动端接入: 'Accès mobile',
  },

  about: {
    title: 'Qu’est-ce que Liri',
    p1: 'Liri est un <strong class="text-brand-300">assistant IA personnel</strong> construit sur une architecture <strong class="text-brand-300">TypeScript + Rust</strong>.',
    p2: 'Bien plus qu’un chatbot — il peut <strong class="text-brand-300">comprendre l’intention</strong>, <strong class="text-brand-300">exécuter des commandes</strong>, <strong class="text-brand-300">gérer des tâches</strong>, <strong class="text-brand-300">appeler des outils</strong> et même collaborer avec d’autres agents IA. Un seul moteur alimente toutes les entrées : terminal, bureau, messagerie et MCP.',
    p3: '<strong class="text-brand-300">{modules}</strong> sous-systèmes modulaires, <strong class="text-brand-300">{tsFiles}</strong> fichiers TypeScript et <strong class="text-brand-300">{desktopComponents}</strong> composants de bureau — le tout découpable selon la variante de build.',
    statLabels: [
      'Fichiers TypeScript',
      'Outils intégrés',
      'Canaux de messagerie',
      'Composants TSX du bureau',
    ],
    verifyTitle: 'Vérifier dans le code source GitHub',
  },

  architecture: {
    title: 'Architecture en un coup d’œil',
    subtitle:
      '8 couches fonctionnelles, de l’entrée à la rétroaction ; contraintes en ingénierie par 6 garde-fous de dépendance (entry > ui > app > service > infra > core)',
    summary: {
      title: 'Structuré comme un système d’exploitation',
      subtitle:
        'Un noyau mince, des frontières entre sous-systèmes et des garde-fous de dépendance ; local d’abord par défaut, pas en option.',
      pillars: [
        {
          title: 'Noyau',
          desc: '@openliri/kernel est un paquet autonome qui n’expose qu’une interface mince, protégé par les garde-fous K01–K08',
        },
        {
          title: 'Sous-systèmes',
          desc: 'Outils, canaux, mémoire, routage, bac à sable et tâches ont chacun leurs points d’entrée et leurs frontières',
        },
        {
          title: 'Garde-fous',
          desc: 'Une direction de dépendance en 6 couches et plus de 20 vérifications d’architecture — toute violation bloque la CI',
        },
        {
          title: 'Local d’abord',
          desc: 'Les données restent sur votre machine par défaut ; les modèles peuvent tourner entièrement en local',
        },
      ],
      link: 'Voir comment l’architecture a évolué et ce qui manque',
    },
    layers: [
      {
        name: 'Couche d’entrée multimodale',
        subtitle: 'Entrez dans Liri depuis n’importe quelle surface',
        items: [
          {
            label: 'REPL terminal',
            detail: 'Une interface terminal construite avec React + Ink, avec le système de compagnon Buddy intégré',
          },
          {
            label: 'Client de bureau Tauri',
            detail: '{desktopComponents} composants TSX répartis sur {desktopPages} pages fonctionnelles (Tauri 2.11 + React 19)',
          },
          {
            label: 'MCP / passerelle de canaux',
            detail: 'MCP Server et {channels} canaux de messagerie (WeChat, DingTalk, Feishu, Telegram, etc.)',
          },
          {
            label: 'CLI / HTTP API',
            detail: 'Trois exécutables — Liri / liri-memory / liri-ink — et une API HTTP',
          },
        ],
      },
      {
        name: 'Couche sécurité',
        subtitle: 'Chaque entrée passe par un filtre de sécurité',
        items: [
          {
            label: 'Analyse AST Rust à la compilation',
            detail: 'La couche FFI analyse l’AST Bash selon {dangerousRules} règles de commandes dangereuses',
          },
          {
            label: 'Analyse sémantique TypeScript',
            detail: 'Les commandes composites en lecture seule sont jugées segment par segment, avec un motif de refus attribuable',
          },
          {
            label: 'Moteur de règles Guardrail',
            detail: '{injectionRules} motifs d’injection + {shellRules} règles spécifiques au shell',
          },
          {
            label: 'Classificateur AutoMode',
            detail: 'Évalue automatiquement le risque d’une tâche et décide entre autoriser, demander et refuser',
          },
        ],
      },
      {
        name: 'Couche de routage intelligent',
        subtitle: 'Choix du modèle selon le type et la difficulté de la tâche',
        items: [
          {
            label: '{taskTypes} types de tâches détectés',
            detail: 'codage, rédaction, analyse, outils, traduction, recherche, idéation, conversation et plus',
          },
          { label: '4 niveaux', detail: 'simple / medium / complex / reasoning' },
          {
            label: 'Pipeline de décision en 5 étapes',
            detail: 'interrupteur → voie rapide → ancrage de session → jugement LLM → résolution du niveau',
          },
          {
            label: 'FallbackChain',
            detail: 'Bascule ordonnée quand le fournisseur principal est indisponible, avec RetryPolicy',
          },
        ],
      },
      {
        name: 'Couche d’injection du second cerveau',
        subtitle:
          'Base de connaissances + mémoire + événements de session : trois sources de contexte interrogeables',
        items: [
          {
            label: 'Base de connaissances',
            detail: 'Markdown sur disque et index sémantique, avec recherche hybride par mots-clés / vecteurs / RRF',
          },
          {
            label: 'Système de mémoire',
            detail: 'Mémoire à plusieurs niveaux avec table vectorielle SQLite et rappel pondéré par pertinence',
          },
          {
            label: 'Événements de session',
            detail: 'events.jsonl en ajout seul — rejouable et auditable',
          },
          {
            label: 'DreamEngine',
            detail: 'Consolide les connaissances au repos : collecter → analyser → générer → écrire → indexer',
          },
        ],
      },
      {
        name: 'Boucle de décision TAOR',
        subtitle: 'Think → Act → Observe → Reason',
        items: [
          {
            label: 'Think',
            detail: '{strategies} stratégies d’agent : général / codage / exploration / planification',
          },
          {
            label: 'Act',
            detail: '{tools} outils intégrés, enregistrés dynamiquement selon la variante de build',
          },
          {
            label: 'Observe',
            detail: 'Évaluation des résultats, fenêtres de contexte stratifiées et compaction automatique',
          },
          {
            label: 'Reason',
            detail: 'Gestion du budget de tokens + reprise sur point de contrôle + coupure par tour',
          },
        ],
      },
      {
        name: 'Couche de bac à sable d’exécution',
        subtitle:
          'Les commandes s’exécutent isolées et se dégradent honnêtement quand aucun isolement n’est disponible',
        items: [
          {
            label: 'Linux Landlock',
            detail: 'Restrictions d’accès au système de fichiers au niveau du noyau',
          },
          {
            label: 'macOS / Windows',
            detail: 'Bacs à sable système avec Low IL / objet Job en repli',
          },
          {
            label: 'Conteneur Docker',
            detail: 'Isolation complète en conteneur avec limites de ressources et politiques réseau',
          },
          {
            label: 'SSH / PTY',
            detail: 'Environnements d’exécution distants propres et chemins de pseudo-terminal contrôlés',
          },
        ],
      },
      {
        name: 'Couche des tâches de longue durée',
        subtitle: 'D’une conversation unique à un travail de plusieurs jours',
        items: [
          {
            label: 'Pipeline PDCA',
            detail: 'Une boucle Plan-Do-Check-Act qui avance selon l’existence réelle des artefacts',
          },
          {
            label: 'Swarm multi-agents',
            detail: 'AgentSwarm avec orchestration type conseil et découverte dynamique du registre',
          },
          {
            label: 'Planification Cron',
            detail: 'once / interval / expressions cron, fuseaux horaires compris',
          },
          {
            label: 'Persistance des tâches',
            detail: 'Instantanés de session, reprise sur point de rupture et compte à rebours visible pendant l’attente',
          },
        ],
      },
      {
        name: 'Couche de rétroaction et d’évolution',
        subtitle: 'Chaque interaction laisse une preuve vérifiable',
        items: [
          {
            label: 'Induction des motifs d’échec',
            detail: 'Les motifs d’échec sont généralisés puis réinjectés dans les prompts et les compétences, fermant la boucle d’amélioration',
          },
          {
            label: 'Registre des coûts',
            detail: 'Facturé selon la grille tarifaire de la base, en enregistrant le nom réel du modèle renvoyé par le fournisseur',
          },
          {
            label: 'Garde-fous d’évaluation',
            detail: 'Suites de référence intégrées, score de fiabilité pass^k et mesure de sécurité par paires',
          },
          {
            label: 'Rejeu d’événements',
            detail: 'Le contexte de chaque appel de modèle peut être reconstruit après coup',
          },
        ],
      },
    ],
    principlesTitle: 'Philosophie d’architecture',
    principles: [
      {
        title: 'Sécurité intégrée',
        desc: 'La sécurité n’est pas un greffon — c’est l’ADN de chaque couche',
      },
      {
        title: 'Local d’abord',
        desc: 'Données stockées localement, usage hors ligne, confidentialité protégée par défaut',
      },
      {
        title: 'Routage intelligent',
        desc: '{taskTypes} classes de tâches associées au bon niveau de modèle',
      },
      {
        title: 'Second cerveau',
        desc: 'Base de connaissances, mémoire et journaux d’événements : trois couches de contexte interrogeables',
      },
      {
        title: 'Boucle vérifiable',
        desc: 'Les leçons des échecs sont réinjectées et les garde-fous bloquent les régressions',
      },
      {
        title: 'Multimodal unifié',
        desc: 'Terminal, bureau, messagerie et API partagent un seul moteur',
      },
    ],
  },

  brainSection: {
    title: 'Le second cerveau',
    subtitle:
      'Base de connaissances → Mémoire → Événements de session : trois couches de contexte interrogeables, toutes stockées sur votre machine',
    layers: [
      {
        badge: 'Couche 1 : Base de connaissances',
        title: 'Base de connaissances',
        desc: 'Markdown sur disque et index sémantique, avec sources citées dans chaque résultat',
        tags: [
          'Markdown sur disque',
          'Index sémantique JSONL',
          'Recherche par mots-clés',
          'Recherche vectorielle',
          'Fusion RRF',
        ],
      },
      {
        badge: 'Couche 2 : Mémoire',
        title: 'Système de mémoire',
        desc: 'Mémoire à plusieurs niveaux et tables vectorielles SQLite, rappelées avec pondération de pertinence',
        tags: [
          'Mémoire à plusieurs niveaux',
          'memory_vectors',
          'Pondération de pertinence',
          'Nettoyage de la mémoire',
          'Injection de contexte',
        ],
      },
      {
        badge: 'Couche 3 : Source de vérité',
        title: 'Journal d’événements de session',
        desc: 'Tout ce qui entre dans une requête de modèle devient un événement de session rejouable',
        tags: [
          'events.jsonl en ajout seul',
          'Persistance avant écriture',
          'Rejeu de session',
          'Piste auditable',
          'Enregistrement à la compilation',
        ],
      },
    ],
    governTitle: 'Organiser et gouverner',
    governSubtitle:
      'Curer les connaissances au repos, compresser le contexte quand il déborde — deux pipelines d’arrière-plan bien réels',
    dreamHeading: 'Pipeline DreamEngine en cinq étapes',
    dreamStages: [
      { name: 'Collecter', desc: 'Rassembler les sessions et documents à curer' },
      { name: 'Analyser', desc: 'Extraire les thèmes et les conclusions réutilisables' },
      { name: 'Générer', desc: 'Produire des notes destinées aux couches supérieures' },
      { name: 'Écrire', desc: 'Écrire dans la base de connaissances et la mémoire' },
      { name: 'Indexer', desc: 'Reconstruire les index vectoriels et par mots-clés' },
    ],
    contextTitle: 'Gouvernance stratifiée du contexte',
    contextBody:
      'Lorsqu’une longue conversation déborde, les tours les plus anciens sont supprimés d’abord, ramenant la mémoire de construction de O(total) à O(fenêtre). Une note « le texte brut reste récupérable » survit à la coupe, les détails peuvent être rappelés par pages, et des seuils de tokens déclenchent la compression automatique.',
    contextCards: [
      { title: 'Fenêtrage stratifié', desc: 'Tronquer d’abord les anciens tours quand le contexte déborde' },
      { title: 'Récupération à la demande', desc: 'Rappeler le texte brut par pages' },
      { title: 'Compression à trois niveaux', desc: 'Niveaux 1/2 en ligne + niveau 3 en arrière-plan' },
    ],
    pdcaTitle: 'Boucle d’auto-amélioration PDCA',
    pdcaBody:
      'Pour les tâches longues, Liri exécute seul la boucle Plan-Do-Check-Act : décomposer la tâche → exécuter les étapes → examiner les résultats → réviser le plan, jusqu’à la fin ou une condition d’arrêt.',
    pdcaSteps: [
      { step: 'Plan', desc: 'Décomposition automatique' },
      { step: 'Do', desc: 'Exécution étape par étape' },
      { step: 'Check', desc: 'Revue automatique' },
      { step: 'Act', desc: 'Correction automatique' },
    ],
  },

  capabilities: {
    title: 'Capacités',
    subtitle:
      'Huit capacités différenciantes, vérifiables une par une dans le code source GitHub',
    items: [
      {
        title: 'Moteur d’agent profond',
        description: 'Une boucle TAOR maison avec stratégie, mémoire et points de contrôle',
        details: [
          'Cycle de décision TAOR (Think-Act-Observe-Reason)',
          '{strategies} stratégies d’agent : général / codage / exploration / planification',
          'Reprise sur point de contrôle pour les tâches longues interrompues',
          'Fenêtres de contexte stratifiées avec compaction automatique à trois niveaux',
          '8 motifs de terminaison et une coupure par tour pour éviter les boucles à vide',
        ],
        highlight: 'Cœur',
      },
      {
        title: '5 couches de défense en profondeur',
        description:
          'Analyse AST Rust à la compilation → cinq lignes de défense → isolation multi-backend',
        details: [
          'Analyse Bash à la compilation via AST Rust FFI',
          '{dangerousRules} règles de commandes dangereuses + {injectionRules} règles d’injection',
          'Moteur de règles de politique Guardrail',
          'Classificateur de risque AutoMode',
          'Couverture du bac à sable : Landlock / macOS / Windows / Docker / SSH / PTY',
        ],
        highlight: 'Sécurité',
      },
      {
        title: '{tools} outils intégrés',
        description:
          '{categories} catégories couvrant fichiers, commandes, réseau, médias, code et collaboration',
        details: [
          'Exécution Bash au niveau AST Rust',
          'Intelligence de code via LSP',
          'Extraction et recherche web',
          'Traitement de notebooks, images, audio et vidéo',
          'Prise en charge complète du client et du serveur MCP',
        ],
        highlight: 'Étendue',
      },
      {
        title: '{channels} canaux de messagerie',
        description:
          '{channels} adaptateurs de canaux, avec WeChat / WeCom / DingTalk / Feishu / QQ pris en charge',
        details: [
          'Telegram / Discord / Slack / WhatsApp',
          'WeChat / WeCom / DingTalk / Feishu / QQ / Yuanbao',
          'Email / SMS / Webhook / IRC / Matrix',
          'Catalogue de canaux unifié avec routage par passerelle',
          'Découpage des canaux à la compilation pour des builds plus légers',
        ],
        highlight: 'Multi-plateforme',
      },
      {
        title: 'Observabilité de niveau entreprise',
        description: 'Intégration OpenTelemetry, alertes et contrôles de santé',
        details: [
          'Traces + métriques alignées sur les conventions sémantiques OTel GenAI',
          'Journalisation structurée à plusieurs niveaux',
          'Règles d’alerte et gestion des incidents',
          'Contrôles de santé, sauvegardes et archivage des données',
          'Événements de session rejouables et auditables',
        ],
        highlight: 'Observabilité',
      },
      {
        title: 'Architecture enfichable',
        description:
          'SDK de plugins, système de compétences et quatre protocoles — découpables selon la variante de build',
        details: [
          '5 variantes de build : core / personal / coding / enterprise / headless',
          'Place de marché de plugins avec chargement à chaud et vérification de signature',
          'Trois sources de compétences isolées (intégrées / utilisateur / tierces)',
          'Protocoles MCP / ACP / A2A / LSP',
          'Démarrage en quatre étapes (T0–T3) et chargement à la demande',
        ],
        highlight: 'Flexible',
      },
      {
        title: 'Local d’abord',
        description:
          'Modèles locaux Ollama / llama.cpp, données sur votre machine par défaut',
        details: [
          'Inférence locale, exécution entièrement hors ligne',
          'Un seul fichier de données SQLite qui ne quitte jamais l’appareil',
          'Sessions stockées en events.jsonl en ajout seul',
          'Les fournisseurs cloud comme amélioration optionnelle',
          'Répertoires de bac à sable isolés par espace de travail',
        ],
        highlight: 'Confidentialité',
      },
      {
        title: 'Routage intelligent',
        description:
          '{taskTypes} classes de tâches × 4 niveaux × 5 étapes de décision, plus chaînes de repli entre fournisseurs',
        details: [
          '{taskTypes} types de tâches détectés automatiquement',
          '4 niveaux : simple / medium / complex / reasoning',
          '5 étapes de décision : interrupteur → voie rapide → ancrage de session → jugement LLM → niveau',
          'FallbackChain entre fournisseurs avec politiques de réessai',
          'Tarifs et fenêtres de contexte lus depuis la base',
        ],
        highlight: 'Routage',
      },
    ],
  },

  channelWall: {
    title: '{channels} canaux de messagerie',
    subtitle:
      'Chacun des {channels} canaux dispose d’un adaptateur dédié. Définissez ses variables d’environnement pour l’activer, ou retirez-le à la compilation.',
    summary:
      '{count} canaux au total · un catalogue unifié · activation par canal · découpage à la compilation',
  },

  community: {
    title: 'Open source · Communauté',
    subtitle: 'Liri est un projet open source, et chaque contribution est bienvenue',
    githubDesc: 'Suivez le projet sur GitHub, ouvrez des Issues ou envoyez des PR',
    communityTitle: 'Rejoindre la communauté',
    communityDesc: 'Participez aux discussions, ouvrez des Issues ou envoyez des PR',
  },

  comparison: {
    title: 'Auto-évaluation des capacités',
    subtitle:
      'Seize dimensions, chacune avec son état actuel et son emplacement dans le code — chaque chiffre renvoie au code, et ce qui n’est pas terminé est écrit noir sur blanc.',
    dimensionHeader: 'Dimension',
    stateHeader: 'État actuel',
    statusHeader: 'Statut',
    sourceHeader: 'Code source',
    sourceLink: 'Voir',
    statuses: {
      ready: 'Livré',
      polish: 'En polissage',
      audit: 'Audit externe en attente',
      building: 'En cours',
      experimental: 'Expérimental',
    },
    statusLegend:
      'Le statut est auto-évalué par les mainteneurs et évolue à chaque version ; « Voir » ouvre le répertoire correspondant pour que vous puissiez vérifier vous-même.',
    footnote:
      '* Données issues du code source v{version} ; les liens pointent vers la branche main du dépôt GitHub.',
    rows: [
      { dimension: 'Langage', liri: 'TypeScript + Rust', status: 'ready', source: 'app/src' },
      {
        dimension: 'Local d’abord',
        liri: 'Ollama / llama.cpp + SQLite local',
        status: 'ready',
        source: 'app/src/ai',
      },
      {
        dimension: 'Routage intelligent',
        liri: '{taskTypes} types · 4 niveaux · 5 couches de décision',
        status: 'ready',
        source: 'app/src/ai',
      },
      {
        dimension: 'Modèle de sécurité',
        liri: '{securityLayers} couches de défense · 6 backends de bac à sable',
        status: 'audit',
        source: 'app/src/security',
      },
      {
        dimension: 'Canaux de messagerie',
        liri: '{channels} canaux (dont WeChat / DingTalk / Feishu / QQ)',
        status: 'ready',
        source: 'app/src/channels',
      },
      {
        dimension: 'Client de bureau',
        liri: 'Tauri 2.11 · {components} composants TSX',
        status: 'polish',
        source: 'client/src',
      },
      { dimension: 'Interface terminal', liri: 'React + Ink', status: 'ready', source: 'app/src/ink' },
      {
        dimension: 'Système de personnage',
        liri: '{species} espèces × {hats} chapeaux × {eyes} yeux',
        status: 'ready',
        source: 'app/src/buddy',
      },
      {
        dimension: 'Interaction vocale',
        liri: 'faster-whisper / Piper local + cloud',
        status: 'ready',
        source: 'app/src/voice',
      },
      {
        dimension: 'Transparence des coûts',
        liri: 'Tarifs dans la base · chaque appel enregistré',
        status: 'ready',
        source: 'app/src/cost',
      },
      {
        dimension: 'Second cerveau',
        liri: 'Base de connaissances + mémoire + journal d’événements',
        status: 'ready',
        source: 'app/src/knowledge',
      },
      {
        dimension: 'Gouvernance du contexte',
        liri: 'Fenêtrage stratifié + compression en trois étapes',
        status: 'ready',
        source: 'app/src/context',
      },
      {
        dimension: 'Place de marché',
        liri: 'Marché de plugins + marché MCP + sources de compétences',
        status: 'building',
        source: 'app/src/plugins',
      },
      {
        dimension: 'Stratégies d’agent',
        liri: '{agentStrategies} stratégies · PDCA · Swarm',
        status: 'ready',
        source: 'app/src/agent',
      },
      {
        dimension: 'Tâches planifiées',
        liri: 'once / interval / cron',
        status: 'ready',
        source: 'app/src/chronos',
      },
      {
        dimension: 'Prise en charge des protocoles',
        liri: 'MCP + ACP + A2A + LSP',
        status: 'experimental',
        source: 'app/src/mcp',
      },
    ],
  },

  desktopClient: {
    title: 'Client de bureau',
    subtitle:
      'Construit avec Tauri 2.11 + React 19 · {components} composants TSX · {pages} pages fonctionnelles · une expérience de bureau complète',
    sidebar: [
      'Chat',
      'Modèles IA',
      'Base de connaissances',
      'Mémoire',
      'Compétences',
      'MCP',
      'Tâches planifiées',
      'Centre de coûts',
      'Buddy',
      'Paramètres',
    ],
    panelTitle: 'Panneau de discussion',
    panelUser: 'Liri · Linglong Bird',
    greeting: 'Bonjour ! Je suis Liri, comment puis-je vous aider ?',
    userMessage: 'Aidez-moi à analyser les données de ce projet',
    reply: 'Bien sûr, analyse en cours...',
    inputPlaceholder: 'Saisissez un message et appuyez sur Entrée pour envoyer...',
    mockNote: 'Illustration de la structure de l’interface — pas une capture réelle',
    features: [
      { label: 'Panneau de discussion', desc: 'Conversations à plusieurs tours' },
      { label: 'Gestion des modèles', desc: 'Changer de modèle' },
      { label: 'Base de connaissances', desc: 'Récupération de fichiers' },
      { label: 'Mémoire', desc: 'Revoir l’historique' },
      { label: 'Tâches planifiées', desc: 'Planification Cron' },
      { label: 'Intégration MCP', desc: 'Découvrir et installer des serveurs' },
      { label: 'Centre de coûts', desc: 'Usage et dépenses enregistrés' },
      { label: 'Buddy', desc: 'Apparence et données de croissance' },
    ],
  },

  ecosystem: {
    title: 'Écosystème',
    subtitle:
      'Marché de plugins + marché MCP + trois sources de compétences + marché de modèles = un écosystème Liri composable',
    mcp: {
      title: 'Marché MCP',
      desc: '5 adaptateurs de sources, une seule recherche',
      items: ['GitHub', 'npm', 'Registre officiel', 'Smithery', 'Services fournis'],
    },
    plugins: {
      title: 'Marché de plugins',
      desc: 'Registres local, npm et distant',
      items: [
        'SDK de plugins + adaptateurs',
        'Cycle de vie et rechargement à chaud',
        'Vérification de signature',
        'Points de configuration + CLI',
        '5 variantes de build',
      ],
    },
    skills: {
      title: 'Trois sources de compétences',
      desc: 'Intégrées, utilisateur et tierces — physiquement isolées',
      items: [
        '{skills} compétences intégrées',
        'Compétences définies par l’utilisateur',
        'Source tierce ClawHub',
        'Orchestration conditionnelle',
        'Composition et correspondance des compétences',
      ],
    },
    templates: {
      title: 'Modèles et protocoles',
      desc: 'Modèles d’agents et de documents, prêts à brancher',
      items: [
        'Marché de modèles d’agents',
        'Marché de modèles de documents',
        'MCP / ACP / A2A / LSP',
        'Plugins et compétences composables',
        'Réutilisation paramétrée des modèles',
      ],
    },
  },

  evolution: {
    meta: {
      title: 'Journal de développement — Liri',
      description:
        'De v0.1 à v0.5.22 : comment Liri est passé de 4 000 fichiers à un système avec des frontières, des garde-fous et une interface que d’autres peuvent reprendre. Chaque tournant renvoie à une preuve dans le code et le CHANGELOG.',
    },

    hero: {
      eyebrow: 'JOURNAL DE DÉVELOPPEMENT',
      title: 'Une route encore en construction',
      subtitle:
        'De v0.1 à v0.5.22 — 156 jours, 116 versions. Ce n’est pas une liste de fonctionnalités ; ce sont nos erreurs, les règles qu’elles nous ont coûtées et les blancs qu’il reste à remplir.',
      stats: [
        { value: '156 jours', label: 'depuis la première version' },
        { value: '116', label: 'versions' },
        { value: '9', label: 'instantanés d’architecture' },
        { value: '20+', label: 'vérifications d’architecture' },
      ],
      scroll: 'Aller à la chronologie',
      snapshot:
        'Instantané de données {date} · chiffres collectés sur le dépôt Liri par sync-facts et health:arch',
    },

    origin: {
      title: 'Origine',
      paragraphs: [
        'Le 25 mai 2026, Liri a livré v0.1 : 100 commits et un assistant IA de terminal qui fonctionnait vraiment.',
        'Le problème était concret — faire tenir le modèle dans le terminal, lire des fichiers, exécuter des commandes et modifier du code, au lieu de discuter dans un champ de saisie web. Les modèles locaux d’abord, parce que des fichiers privés ne devraient pas avoir à quitter la machine ; la sécurité intégrée, parce que l’assistant reçoit un vrai ordinateur, pas seulement une API.',
        'Les trois mois suivants ont ajouté les capacités couche par couche : outils, 27 canaux de messagerie, client de bureau, voix, base de connaissances. En août, le dépôt comptait plus de 4 000 fichiers.',
        'C’est aussi là que le problème a été nommé. La revue de code du 18 juin 2026 a trouvé LocalHTTPService à 7 200 lignes et ChatManager à 3 263, avec 150 fichiers de test pour 3 742 fichiers source. Deux mois plus tard, le premier score de santé de l’architecture est tombé : 10/40, note D, avec 105 fichiers hors limite, aucun enregistré.',
        'La leçon : la capacité d’un projet à être repris par quelqu’un d’autre ne se décide pas au nombre de fonctionnalités, mais aux règles qu’il fait pousser après avoir heurté un mur.',
      ],
    },

    nodes: {
      title: 'Cinq tournants',
      note: 'Classés par causalité, pas par ordre chronologique — certaines périodes se chevauchent.',
      items: [
        {
          id: 'n1',
          period: '2026-05-25 → 2026-08',
          title: 'D’abord les capacités, les frontières ensuite',
          situation: 'v0.1 n’avait que 100 commits ; livrer primait sur la structure.',
          decision:
            'Remplir d’abord les capacités : outils, canaux, bureau, voix, connaissances, un par un.',
          cost:
            'Le premier audit a été brutal : LocalHTTPService à 7 200 lignes, ChatManager à 3 263, un ratio tests/source d’environ 4 %, et un premier score de santé de 10/40 (D) avec 105 fichiers hors limite non enregistrés.',
          result:
            'Plus de 4 000 fichiers, {tools} outils, {channels} canaux, {desktopComponents} composants de bureau.',
          evidence: [
            {
              label: 'CHANGELOG v0.1',
              href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md',
            },
            {
              label: 'Revue de code du 18 juin 2026',
              href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/codebase-review-20260618.md',
            },
          ],
          participate: 'Pour ajouter une capacité : créez un module sous app/src, pas dans le noyau.',
        },
        {
          id: 'n2',
          period: '2026-08-09 → 2026-09-30',
          title: 'Apprendre à se mesurer',
          situation:
            'Tout le monde sentait le problème ; personne ne pouvait dire à quel point il était grave.',
          decision:
            'Transformer la qualité de l’architecture en score reproductible avec un registre, et exiger l’enregistrement de chaque fichier hors limite — en abandonnant l’hypothèse que la propreté tient à la seule discipline.',
          cost:
            'Enregistrer n’est pas découper : ChatManager est passé de 3 263 à 7 036 lignes (depuis découpé à {chatManagerLines}). La notation elle-même a changé, c’est donc un bilan de santé, pas un KPI.',
          result:
            'Neuf instantanés ; les fichiers hors limite non enregistrés sont passés de 105 à 0 (puis 2) ; la liste est devenue un registre traçable.',
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
          participate: 'Réclamez le découpage d’un fichier hors limite (voir Comment participer ci-dessous).',
        },
        {
          id: 'n3',
          period: '2026-10-08 → 10-09',
          title: 'Une suppression ratée a acheté un processus de suppression',
          situation:
            'Le code avait accumulé une couche de « surfaces mortes » apparemment inutilisées. Le nettoyage de v0.4.69 a traité le sous-système de bac à sable et d’isolation comme du code mort : 170 fichiers touchés, +9 340 / −10 174 lignes.',
          decision:
            'Le lendemain, v0.4.71 a tout annulé : 24 fichiers restaurés (IsolationManager, EnhancedSandboxManager, PTYSandbox, SSHSandbox, docker/** et d’autres, plus 5 suites de tests) et 21 fichiers vivants remis en cohérence.',
          cost:
            'Supprimer prend désormais plus de temps : il faut d’abord écrire les preuves. Cela reste moins cher qu’un retour arrière.',
          result:
            'v0.4.72 a transformé la suppression en processus, code-deletion.md (CD01–CD07) : réunir les preuves, détacher les points d’entrée, puis supprimer. « Personne ne semble l’utiliser » n’est plus une raison.',
          evidence: [
            {
              label: 'CHANGELOG v0.4.69 / v0.4.71 / v0.4.72',
              href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md',
            },
          ],
          participate: 'Examinez un « candidat au code mort » au regard de CD01–CD07.',
        },
        {
          id: 'n4',
          period: '2026-10-10 → 10-22',
          title: 'Transformer les règles en garde-fous',
          situation:
            'Les règles vivaient dans des documents et reposaient sur la discipline ; les documents et le code ont commencé à diverger.',
          decision:
            'Chaque règle est devenue un blocage CI plutôt qu’un conseil : cinq garde-fous plus doc-gate et un job sandbox-negative obligatoire ; 413 clés de référence pour les valeurs codées en dur ; un vocabulaire d’états de 34 valeurs avec 1 795 paires de référence ; des garde-fous sur la surface de démarrage, les modules critiques et la surface du noyau.',
          cost:
            'Quelques secondes par commit, et les références doivent être régénérées à chaque changement de vocabulaire — c’est précisément le but : les définitions ne peuvent plus dériver en silence.',
          result: 'Zéro violation lint:arch ; les tests sont passés de 3 029 à 7 488.',
          evidence: [
            {
              label: 'Liste des garde-fous dans AGENTS.md',
              href: 'https://github.com/cocosoft/Liri/blob/main/AGENTS.md',
            },
            {
              label: 'Workflow CI',
              href: 'https://github.com/cocosoft/Liri/blob/main/.github/workflows/ci.yml',
            },
          ],
          participate:
            'Lancez les garde-fous locaux (bun run ci) avant de pousser — corrigez ce qui passe au rouge.',
        },
        {
          id: 'n5',
          period: '2026-10-05 → 10-28',
          title: 'Réduire le noyau : de 5 336 lignes à un paquet autonome',
          situation:
            'Le core était à la fois l’implémentation d’entrée et l’arrière-cour commune — n’importe qui pouvait y ajouter du code.',
          decision:
            'Trois étapes : réduire (CoreAPIImpl de 5 336 à 2 521 lignes), extraire (@openliri/kernel devient un paquet autonome ; core passe de 146 à 113 fichiers avec les garde-fous de noyau K01–K08), puis évincer (37 modules ne respectant pas la règle « zéro I/O / zéro dépendance vers le haut » descendus dans app/src, plus de 470 imports mis à jour, cinq familles de références régénérées).',
          cost:
            'Une grosse migration et une régénération complète des références ; depuis le 18 octobre, le travail arrive par lots et la densité de commits est volontairement plus basse.',
          result:
            'Le noyau n’expose plus qu’une interface mince ; les contributions externes ont enfin une frontière.',
          evidence: [
            {
              label: 'CHANGELOG v0.5.22',
              href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md',
            },
          ],
          participate:
            'Les nouvelles capacités vivent hors de la frontière du noyau et démarrent dans app/src.',
        },
      ],
      fieldLabels: {
        situation: 'Situation',
        decision: 'Décision',
        cost: 'Coût',
        result: 'Résultat',
        evidence: 'Preuve',
        participate: 'Comment participer',
      },
    },

    model: {
      title: 'Architecture : structurée comme un système d’exploitation',
      intro:
        'L’architecture n’a pas été réinventée. Un noyau mince, des frontières entre sous-systèmes, une direction de dépendance à sens unique, des garde-fous et de l’observabilité viennent de décennies de pratique des systèmes d’exploitation ; les patrons de conception et guides d’ingénierie publiés pour les agents ces deux dernières années convergent vers les mêmes questions — couches, frontières, état, gouvernance, évaluation. Nous nous contraignons de la première façon et nous nous auditons avec la seconde.',
      mappingTitle: 'Concept de système d’exploitation → état de Liri',
      headers: { concept: 'Concept', liri: 'Dans Liri', status: 'Statut' },
      statuses: {
        ready: 'Déployé',
        converging: 'En convergence',
        audit: 'Audit externe en attente',
        missing: 'Manquant',
      },
      rows: [
        {
          concept: 'Noyau',
          liri: '@openliri/kernel en paquet autonome avec une interface publique mince, protégé par K01–K08',
          status: 'ready',
        },
        {
          concept: 'Sous-systèmes',
          liri: 'Outils / canaux / mémoire / routage / bac à sable / tâches / voix / bureau — chacun avec ses points d’entrée et ses frontières',
          status: 'converging',
        },
        {
          concept: 'Pilotes',
          liri: 'Adaptateurs de fournisseurs, adaptateurs de canaux et 6 backends de bac à sable (Landlock / Docker / SSH / PTY / macOS / Windows)',
          status: 'ready',
        },
        {
          concept: 'Processus et ordonnancement',
          liri: 'Exécution de session, PDCA, Swarm, Cron',
          status: 'ready',
        },
        {
          concept: 'Modèle de permissions',
          liri: 'Cinq couches de défense et quatre étapes d’approbation (requested → presented → decided → recorded)',
          status: 'audit',
        },
        {
          concept: 'Observabilité et audit',
          liri: 'Journal d’événements, registre des coûts, registre des preuves',
          status: 'ready',
        },
        {
          concept: 'Mainteneurs (MAINTAINERS)',
          liri: 'Pas encore établi : aucun propriétaire de sous-système ni chemin de reprise',
          status: 'missing',
        },
      ],
      referenceTitle: 'Ce à quoi nous nous sommes comparés',
      referenceBody:
        'Nous nous sommes comparés point par point aux patrons de conception d’agents et aux guides d’ingénierie publics : les 21 patrons ont une implémentation réelle, mais 3 des interrupteurs clés sont désactivés par défaut — nous disons donc seulement « implémenté », jamais « actif par défaut ». La boucle d’ingénierie est auditée de la même façon : architecture, build, exécution, gouvernance, optimisation.',
      blanksTitle: 'Trois blancs',
      blanks: [
        {
          title: 'Mainteneurs de sous-systèmes',
          desc: 'Sans propriétaires, pas de chemin de reprise. C’est la pièce la plus proche d’un système d’exploitation, et celle qui nous manque.',
        },
        {
          title: 'Contrats de sous-systèmes',
          desc: 'La conception des contrats existe, mais la mise en œuvre du registre / LoopProfile n’est pas vérifiée — la stabilité des interfaces n’est pas encore figée.',
        },
        {
          title: 'Garde-fou de couverture',
          desc: 'Environ 4 % lors de la revue ; la CI exécute plus de 20 vérifications d’architecture, mais il n’y a pas encore de seuil de couverture.',
        },
      ],
      honesty:
        'Pour être honnête : la santé de l’architecture reste {healthGrade} ({healthScore}) ; sur {oversized} fichiers hors limite, {unregistered} ne sont toujours pas enregistrés ; le plus gros reste dans le module chat (ChatManager est passé de 7 036 à {chatManagerLines} lignes). Le noyau existe, les frontières convergent, les mainteneurs n’existent pas encore — c’est ce que signifie « pas encore terminé ».',
      layersToggle: 'Développer les 8 couches fonctionnelles actuelles',
      cta: 'Voir l’état complet',
    },

    timeline: {
      title: 'Chronologie',
      subtitle:
        'Une entrée par mois — uniquement les changements d’architecture et de gouvernance, pas les commits ordinaires.',
      items: [
        { date: '2026-05-25', text: 'v0.1 : 100 commits, l’assistant terminal fonctionne' },
        {
          date: '2026-06-18',
          text: 'Première revue de code : un monolithe de 7 200 lignes, ratio tests/source d’environ 4 %',
        },
        {
          date: '2026-08-09',
          text: 'Premier score de santé : 10/40 (D), 105 fichiers hors limite non enregistrés',
        },
        {
          date: '2026-10-09',
          text: 'Bac à sable supprimé par un nettoyage → retour arrière complet ; processus de suppression CD01–CD07 le lendemain',
        },
        {
          date: '2026-10-20',
          text: 'Garde-fou du vocabulaire d’états livré : 34 valeurs, 1 795 paires de référence',
        },
        {
          date: '2026-10-28',
          text: 'L’éviction du noyau aboutit ; les outils visibles par le modèle sont plafonnés à 12 / 1 397 tokens',
        },
        {
          date: '2026-10-28',
          text: 'Site de documentation bilingue et cette page en ligne',
        },
      ],
      more: 'Les mises à jour mensuelles seront ajoutées ici.',
    },

    participate: {
      title: 'Comment participer',
      subtitle:
        'Cette page n’est pas un bilan, c’est une invitation. Trois chantiers, et il manque des mains partout.',
      cards: [
        {
          title: 'Réclamer un blanc',
          desc: 'L’isolation des domaines de connaissances Domain-first a une conception, mais les phases A/B/C ne sont pas implémentées ; les nouvelles capacités n’ont pas besoin d’entrer dans le noyau.',
          cta: 'Réclamer une tâche',
        },
        {
          title: 'Aidez-nous à rembourser la dette',
          desc: '{oversized} fichiers hors limite ({unregistered} non enregistrés) attendent d’être découpés ; il n’y a pas encore de seuil de couverture.',
          cta: 'Réclamer une tâche',
        },
        {
          title: 'Auditez notre sécurité',
          desc: 'Cinq couches de défense et six backends de bac à sable sont implémentés et leurs règles sont lisibles dans le code — mais aucun audit tiers n’a été fait. C’est le retour que nous voulons le plus.',
          cta: 'Voir la liste de contrôle',
        },
      ],
      audit: {
        title: 'Liste de contrôle d’audit de sécurité',
        items: [
          'Règles de commandes dangereuses : 37 règles — où elles vivent, comment elles se déclenchent ; construisez un cas et vérifiez qu’il tombe sur la règle attendue',
          'Règles d’injection de prompt : 14 règles — fournissez un document malveillant et voyez s’il est bloqué',
          'Règles Shell : 10 entrées d’autorisation / refus — testez les chemins de contournement (pipes, sous-shells, encodage)',
          'Dégradation du bac à sable : quand chacun des 6 backends se dégrade, et s’il échoue en mode fermé (fail-closed)',
          'Étapes d’approbation : requested → presented → decided → recorded — cherchez les étapes manquantes ou hors ordre',
          'Surface de privilèges : un appel d’outil peut-il contourner le classificateur de permissions et écrire ou exécuter directement ?',
        ],
        note: 'Points d’entrée : app/src/security, app/src/sandbox, app/src/permission.',
      },
      securityNotice:
        'Signalez les détails d’une vulnérabilité en privé via SECURITY.md — n’ouvrez pas d’issue publique. Les issues publiques ne servent qu’au processus d’audit et à sa couverture.',
      ctaGithub: 'Réclamer ou poser une question dans les Issues',
      ctaSecurity: 'Ouvrir le parcours d’auto-évaluation sécurité',
      fundLink: 'Vous préférez financer ? Voir la page de sponsoring',
    },

    teaser: {
      title: 'Une route encore en construction',
      paragraphs: [
        'Le 25 mai 2026, il n’y avait qu’un v0.1 et 100 commits. Cinq mois plus tard, plus de 4 000 fichiers et 27 canaux — et la facture qui va avec : un monolithe de 7 000 lignes, 105 fichiers hors limite que personne n’avait enregistrés, et un « nettoyage de code mort » qui a supprimé tout le sous-système de bac à sable.',
        'Nous avons restauré, puis transformé la suppression, les frontières et les vocabulaires d’états en garde-fous CI, un par un. La route n’est pas terminée.',
      ],
      stats: ['156 jours', '116 versions', '20+ vérifications d’architecture'],
      cta: 'Lire toute l’histoire',
    },
  },

  hero: {
    subtitle:
      'Linglong Bird · Assistant IA personnel · <span class="text-brand-400">Local d’abord</span> · <span class="text-brand-400">Sécurité intégrée</span>',
    versionPill:
      'v{version} · sous licence MIT · publié le <span class="whitespace-nowrap">{date}</span>',
    stats: [
      '{n} fichiers TS',
      '{n} outils intégrés',
      '{n} couches de sécurité',
      '{n} canaux de messagerie',
      '{n} espèces de Buddy',
    ],
    ctaPrimary: 'Commencer',
    ctaGithub: 'GitHub',
    command: 'git clone https://github.com/cocosoft/Liri.git',
    commandHint: '  # puis cd app && bun install',
  },

  highlights: {
    title: 'Plus qu’une liste de fonctionnalités',
    subtitle: 'Trois choses faciles à négliger et utilisées tous les jours.',
    cards: [
      {
        id: 'buddy',
        icon: '🐣',
        title: 'Personnage Buddy',
        desc: 'Pas un outil — un compagnon. Son apparence est générée de façon déterministe à partir d’une graine, si bien qu’un même Buddy a toujours la même apparence ; son état de croissance est persisté et s’accumule d’une session à l’autre.',
        chips: ['{species} espèces', '{hats} chapeaux', '{eyes} yeux', '{rarities} niveaux de rareté'],
      },
      {
        id: 'cost',
        icon: '🧾',
        title: 'Coûts transparents',
        desc: 'Tarifs lus dans la base, attribution au nom réel du modèle renvoyé par le fournisseur, chaque appel écrit dans cost_records ; le budget alerte, puis compresse, puis bloque.',
        chips: ['tarification model_registry', 'usage réel', 'registre par appel', 'budget quotidien'],
      },
      {
        id: 'scenarios',
        icon: '🎯',
        title: 'Quatre types d’utilisateurs',
        desc: 'Les développeurs lancent des commandes et modifient du code ; les responsables sécurité obtiennent un blocage au niveau AST et une piste d’audit ; les équipes d’exploitation le font tourner comme un service ; tous les autres y accèdent depuis une application de messagerie.',
        chips: ['Développeurs', 'Responsables sécurité', 'Équipes d’exploitation', 'Tout le monde'],
      },
    ],
  },

  limitations: {
    title: 'Limites actuelles',
    subtitle:
      'Ce qui n’est pas terminé pendant l’itération rapide — écrit noir sur blanc pour que vous ne le découvriez pas à vos dépens.',
    statuses: {
      audit: 'Audit externe en attente',
      polish: 'En polissage',
      building: 'En cours',
      experimental: 'Expérimental',
      note: 'Note',
    },
    items: [
      {
        status: 'audit',
        title: 'La sécurité attend un audit externe',
        desc: '{securityLayers} couches de défense et 6 backends de bac à sable sont implémentés, avec {sandboxFiles} fichiers liés au bac à sable que vous pouvez examiner un par un — mais aucun audit de sécurité tiers n’a encore été réalisé.',
      },
      {
        status: 'polish',
        title: 'Les interactions du bureau sont encore en polissage',
        desc: '{desktopComponents} composants TSX et {desktopPages} pages sont en place ; les raccourcis, les animations et les cas limites sont encore en cours de réglage.',
      },
      {
        status: 'building',
        title: 'Le catalogue de la place de marché reste limité',
        desc: 'Le marché de plugins, le marché MCP et les sources de compétences fonctionnent de bout en bout, mais le catalogue installable se remplit encore.',
      },
      {
        status: 'experimental',
        title: 'ACP / A2A sont expérimentaux',
        desc: 'Les deux protocoles évoluent encore et leurs interfaces peuvent changer d’une version à l’autre ; MCP et LSP sont stables.',
      },
      {
        status: 'building',
        title: 'La documentation anglaise peut être en retard',
        desc: 'La documentation chinoise est synchronisée automatiquement depuis le dépôt source ; la version anglaise est une traduction manuelle, généralement en retard d’une version.',
      },
      {
        status: 'note',
        title: 'Le dépôt fait foi sur le site',
        desc: 'Ces pages sont générées depuis app/docs. En cas de divergence avec le code source, le dépôt GitHub fait foi.',
      },
    ],
    cta: 'Un problème ? Ouvrir une Issue',
  },

  localFirst: {
    title: 'Local d’abord',
    subtitle:
      'Exécutez des modèles locaux via Ollama ou llama.cpp et gardez vos données sur votre machine par défaut. Si vous passez à un fournisseur cloud, seul le contenu de cette requête lui est envoyé',
    benefits: [
      {
        title: 'Fonctionne hors ligne',
        desc: 'Avec un modèle local Ollama ou llama.cpp, vous pouvez discuter et exécuter des outils locaux sans connexion réseau. Les sessions, la mémoire et la base de connaissances vivent dans des fichiers locaux.',
      },
      {
        title: 'Vos données restent locales',
        desc: 'Les sessions, la mémoire et la base de connaissances résident dans SQLite local et votre répertoire de travail, l’historique des conversations étant ajouté à events.jsonl pour faciliter la relecture et l’audit.',
      },
      {
        title: 'Ajouter le cloud à la demande',
        desc: 'Quand vous avez besoin de plus de puissance, activez des fournisseurs cloud ({providers} pris en charge) dans votre configuration et laissez le routage en choisir un selon le niveau de la tâche — ou restez en local uniquement.',
      },
    ],
    compareTitle: 'Local vs cloud',
    compareRows: [
      {
        label: 'Où tourne le modèle',
        local: 'Votre machine (Ollama / llama.cpp)',
        cloud: 'Les serveurs du fournisseur',
      },
      { label: 'Réseau requis', local: 'Non', cloud: 'Oui' },
      {
        label: 'Destination des données de requête',
        local: 'Ne quittent jamais votre machine',
        cloud: 'Envoyées au fournisseur choisi',
      },
      { label: 'Modèle de coût', local: 'Votre propre matériel', cloud: 'Paiement à l’usage' },
      {
        label: 'Historique des conversations',
        local: 'events.jsonl reste en local',
        cloud: 'Reste aussi en local',
      },
    ],
  },

  quickstart: {
    title: 'Commencer',
    subtitle: 'Trois étapes : installer les dépendances → configurer votre clé API → lancer dev',
    stepLabels: ['Installer les dépendances', 'Configurer votre clé API', 'Lancer Liri'],
    copy: 'Copier la commande',
    envComment: '# éditez .env et ajoutez votre clé API',
  },

  roadmap: {
    title: 'Versions et rythme',
    subtitle:
      'Numéros de version, nombre de tags et historique des commits sont vérifiables sur GitHub ; l’historique inclut le développement d’avant lancement, l’itération publique commençant au lancement',
    milestones: [
      {
        quarter: '2026-10-28',
        version: 'v{version}',
        label: 'Version actuelle',
        items: [
          '{tools} outils intégrés répartis en {toolCategories} catégories',
          '{channels} canaux de messagerie',
          '{securityLayers} couches de sécurité + 6 backends de bac à sable',
          '{desktopComponents} composants de bureau · {desktopPages} pages',
        ],
      },
      {
        quarter: '2026-10',
        version: 'v0.5.13 → v0.5.21',
        label: 'Livré',
        items: [
          'Huit versions en trois jours (v0.5.13 → v0.5.21), toutes dans le cadre du développement d’avant lancement',
          'Modules de noyau extraits, références de garde-fous synchronisées',
          'Le suivi de progression repose désormais sur l’existence des artefacts',
          'Les changements de permissions du bac à sable prennent effet immédiatement',
        ],
      },
      {
        quarter: 'Cumul du dépôt',
        version: '{releases} tags',
        label: 'Rythme de publication',
        items: [
          '{commits} commits à ce jour',
          'La CI couvre lint:arch / la vérification des types / les tests unitaires',
          'Dépôt public avec issues et PR visibles',
        ],
      },
      {
        quarter: 'Ensuite',
        version: 'v0.6+',
        label: 'Prévu',
        items: [
          'Suivi dans les GitHub Releases et les Issues',
          'Le site de documentation en ligne est disponible (chinois et anglais)',
          'Votez sur les priorités de fonctionnalités dans les Issues',
        ],
      },
    ],
  },

  security: {
    title: 'Cinq couches de défense en profondeur',
    subtitle:
      'De l’analyse AST à la compilation au bac à sable à l’exécution : chaque nombre de règles, seuil et politique de repli se trouve dans le code source',
    layers: [
      {
        title: 'Analyse AST Rust à la compilation',
        short:
          'Rust FFI effectue une analyse de sécurité au niveau AST avant l’exécution, selon {dangerousRules} règles de commandes dangereuses',
        tag: 'Compilation',
        details: [
          'La couche Rust FFI analyse l’AST Bash',
          'Analyse AST Bash avec {dangerousRules} règles de commandes dangereuses',
          'Détection d’injection de variables et blocage des traversées de chemin',
          'Détection de falsification d’arguments et validation des commandes autorisées',
        ],
      },
      {
        title: 'Analyse sémantique TypeScript',
        short:
          'Les commandes composites sont jugées segment par segment à l’exécution, le motif de refus étant rattaché à l’instruction exacte',
        tag: 'Exécution',
        details: [
          'Les commandes composites en lecture seule passent segment par segment au lieu d’être refusées en bloc',
          '{injectionRules} motifs d’injection détectés, dont les caractères de largeur nulle et l’empoisonnement de variables d’environnement',
          '{shellRules} règles spécifiques au shell (bash / PowerShell / cmd)',
          'Les messages de refus pointent la cause réelle et l’instruction fautive',
        ],
      },
      {
        title: 'Moteur de règles Guardrail',
        short:
          'Un système de règles de politique configurable, avec autorisation fine par outil, canal et groupe d’utilisateurs',
        tag: 'Politique',
        details: [
          'deny-by-default avec listes d’autorisation',
          'Granularité des permissions : outil → règle → empreinte',
          'Les changements de règles prennent effet immédiatement, sans redémarrage',
          'Les refus indiquent la source de la règle et l’instruction correspondante',
        ],
      },
      {
        title: 'Classificateur AutoMode',
        short:
          'Évalue le risque à partir du contexte de la tâche et des outils, puis décide automatiquement d’autoriser, de demander ou de refuser',
        tag: 'Adaptatif',
        details: [
          'Notation du risque fondée sur la sémantique des commandes et le contexte des outils',
          'Les commandes à faible risque sont autorisées automatiquement selon la politique',
          'Les commandes à haut risque passent en approbation et arrivent dans l’Inbox',
          'Les commandes non fiables demandent une confirmation au lieu d’être refusées',
        ],
      },
      {
        title: 'Exécution en bac à sable',
        short:
          '6 backends d’isolation — Landlock / macOS / Windows / Docker / SSH / PTY — pour que les commandes hors cadre ne touchent jamais l’hôte',
        tag: 'Isolation',
        details: [
          'Linux Landlock : restrictions du système de fichiers au niveau du noyau',
          'Bac à sable macOS / Windows Low IL + objet Job en repli',
          'Docker : isolation complète avec politiques de ressources et de réseau',
          'Exécution distante SSH et chemins PTY contrôlés',
          'Dégradation honnête avec un message clair quand aucun backend n’est disponible',
        ],
      },
    ],
    protectionsTitle: 'La sécurité en chiffres',
    protections: [
      {
        label: 'Règles de commandes dangereuses',
        value: '{n}',
        desc: 'Correspondance au niveau AST pour bash / PowerShell / cmd',
      },
      {
        label: 'Règles de détection d’injection',
        value: '{n}',
        desc: 'Couvre les caractères de largeur nulle, l’empoisonnement de variables d’environnement, etc.',
      },
      {
        label: 'Backends de bac à sable',
        value: '{n}',
        desc: 'Landlock / macOS / Windows / Docker / SSH / PTY',
      },
      {
        label: 'Fichiers d’implémentation du bac à sable',
        value: '{n}',
        desc: 'Implémentations TypeScript sous app/src/sandbox',
      },
    ],
    summary:
      'Analyse AST Rust à la compilation · Analyse sémantique TypeScript · Moteur de règles Guardrail · Classificateur AutoMode · Exécution en bac à sable',
  },

  smartRouter: {
    title: 'Routage intelligent',
    subtitle:
      'Choisit un niveau de modèle selon le type et la difficulté de la tâche, puis bascule selon l’ordre configuré quand le fournisseur principal est indisponible',
    taskTypesHeading:
      'Détecte automatiquement {taskTypes} types de tâches ({common} courants ci-dessous)',
    taskTypes: [
      { name: 'Codage', desc: 'Génération, débogage et revue de code' },
      { name: 'Rédaction', desc: 'Documentation, textes, traduction' },
      { name: 'Analyse', desc: 'Analyse de données, raisonnement, planification' },
      { name: 'Outils', desc: 'Fichiers, recherche, opérations système' },
      { name: 'Traduction', desc: 'Traduction multilingue et localisation' },
      { name: 'Recherche', desc: 'Recherche web et récupération d’informations' },
      { name: 'Créatif', desc: 'Brainstorming, conception, idéation' },
      { name: 'Conversation', desc: 'Échanges du quotidien' },
    ],
    layersHeading: 'Pipeline de décision en {n} étapes',
    layers: [
      {
        name: 'L1 : interrupteur de routage',
        desc: 'Désactivé, les requêtes vont directement au modèle par défaut, sans vérification supplémentaire',
      },
      {
        name: 'L2 : voie rapide',
        desc: 'Les tâches simples ou les règles de préfixe vont directement au modèle de niveau bas',
      },
      {
        name: 'L3 : ancrage de session',
        desc: 'Conserve un modèle par conversation pour éviter les changements incessants',
      },
      {
        name: 'L4 : classificateur LLM',
        desc: 'Un petit modèle juge le type et la difficulté de la tâche, puis attribue un niveau',
      },
      {
        name: 'L5 : résolution du niveau',
        desc: 'Associe les niveaux simple/medium/complex/reasoning à des modèles concrets',
      },
    ],
    fallbackHeading: 'Chaîne de repli entre fournisseurs',
    fallbackNote:
      'Modèle principal indisponible → repli automatique → dégradation sans interruption',
    fallback: [
      { name: 'Principal', model: 'Fournisseur principal · modèle du niveau courant' },
      { name: 'Repli 1', model: 'Fournisseur de secours du même niveau' },
      { name: 'Repli 2', model: 'Fournisseur de repli d’un autre niveau' },
      { name: 'Repli 3', model: 'Tout autre fournisseur configuré' },
      { name: 'Dernier recours', model: 'Ollama / llama.cpp local' },
    ],
  },

  sponsor: {
    meta: {
      title: 'Soutenir Liri — Liri',
      description:
        'Liri est un projet open source maintenu par une seule personne. Le sponsoring n’est pas un pourboire — il achète du temps pour l’audit de sécurité externe, la relecture de la documentation anglaise et l’infrastructure.',
    },
    label: 'Soutenir',
    hero: {
      title: 'Soutenir Liri',
      subtitle:
        'C’est un projet open source maintenu par une seule personne. Le sponsoring n’est pas un pourboire — il achète du temps pour les audits, la documentation et l’infrastructure.',
      note: 'Chaque mois de dépenses est publié dans le registre ci-dessous ; ce qui est sous MIT reste sous MIT.',
    },
    channelsTitle: 'Façons de sponsoriser',
    channels: [
      {
        title: 'GitHub Sponsors',
        desc: 'Pour les sponsors internationaux, mensuel, avec la liste des sponsors publique sur GitHub.',
        cta: 'Sponsoriser chaque mois',
      },
      {
        title: 'Afdian',
        desc: 'Pour les sponsors en Chine — Alipay / WeChat, mensuel ou montant libre.',
        cta: 'Aller sur Afdian',
      },
    ],
    comingSoon: 'Bientôt disponible',
    pendingNote: 'Le canal chinois (Afdian) est en préparation et sera ajouté ici.',
    waitlistNote:
      'Recevoir des paiements GitHub Sponsors exige un compte dans une région prise en charge ; la Chine continentale n’est pas encore sur la liste. La demande a été soumise et est en cours d’examen.',
    contact: 'Support entreprise et autres questions : ouvrez une issue (avec le tag sponsor)',
    usesTitle: 'Où va l’argent',
    usesNote:
      'Les parts sont le plan du mainteneur, pas une promesse ; les dépenses réelles sont consignées chaque mois.',
    uses: [
      {
        label: 'Audit de sécurité externe',
        share: '~40 %',
        desc: 'Cinq couches de défense et six backends de bac à sable n’ont eu aucun audit tiers — le plus grand manque',
      },
      {
        label: 'CI et signature des versions',
        share: '~20 %',
        desc: 'Builds multiplateformes, signature des installateurs et pipeline de publication',
      },
      {
        label: 'Relecture de la documentation anglaise',
        share: '~15 %',
        desc: 'La documentation anglaise est une traduction manuelle et accuse généralement une version de retard sur le chinois',
      },
      {
        label: 'Crédits d’API de modèles',
        share: '~15 %',
        desc: 'L’évaluation et la non-régression exigent de vrais appels, pas des mocks',
      },
      {
        label: 'Domaine et hébergement',
        share: '~10 %',
        desc: 'Site web, site de documentation et miroirs',
      },
    ],
    notTitle: 'Ce que cela n’achète pas',
    nots: [
      'Pas de planification de fonctionnalités : la priorité d’une issue suit l’impact, pas le montant',
      'Pas de support prioritaire : tout le monde fait la queue dans le même tracker',
      'Pas d’édition privilégiée propriétaire : ce qui est sous MIT reste sous MIT',
      'Aucune mention publique de votre nom sans votre accord explicite',
    ],
    tiersTitle: 'Niveaux',
    tiers: [
      { title: '10 ¥ / mois', desc: 'Votre nom dans SPONSORS.md' },
      { title: 'Montant libre', desc: 'Soutien ponctuel, montant libre' },
      {
        title: 'Entreprise',
        desc: 'Logo et lien ; factures possibles — contact via les issues',
      },
    ],
    ledgerTitle: 'Registre transparent',
    ledgerDesc:
      'Une entrée par mois : revenus / dépenses / solde. Le format est posé ici ; la première entrée arrivera le mois de l’ouverture du sponsoring.',
    ledgerHeaders: ['Mois', 'Revenus', 'Dépenses', 'Solde'],
    ledgerEmpty: 'Aucune entrée pour le moment',
    otherTitle: 'Aider sans argent',
    others: [
      {
        title: 'Star et partage',
        desc: 'Aidez ceux qui en ont besoin à le trouver',
        href: 'https://github.com/cocosoft/Liri',
      },
      {
        title: 'Une issue reproductible',
        desc: 'Un bug reproductible vaut mieux que dix avis',
        href: 'https://github.com/cocosoft/Liri/issues/new',
      },
      {
        title: 'Relecture de la documentation anglaise',
        desc: 'Le site anglais est une traduction manuelle — les corrections sont bienvenues',
        href: '/docs',
      },
      {
        title: 'Audit de sécurité',
        desc: 'Parcourez la liste de contrôle ; ne publiez pas les détails d’une vulnérabilité',
        href: '/evolution',
      },
      {
        title: 'Réclamer un blanc',
        desc: 'Modèle de mainteneurs, contrats de sous-systèmes, garde-fou de couverture',
        href: '/evolution',
      },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Pouvez-vous émettre une facture ?',
        a: 'Pas via les canaux personnels. Pour un soutien entreprise, contactez-nous via les issues et nous passerons par un compte d’entreprise.',
      },
      {
        q: 'Puis-je choisir la destination de mon argent ?',
        a: 'Vous pouvez laisser une note, mais la répartition suit les parts ci-dessus.',
      },
      {
        q: 'Puis-je être remboursé ?',
        a: 'Le sponsoring mensuel peut être annulé à tout moment ; les mois passés ne sont pas remboursés.',
      },
      {
        q: 'Mon nom sera-t-il public ?',
        a: 'Pas par défaut. Laissez une note lors du sponsoring si vous souhaitez apparaître dans SPONSORS.md.',
      },
    ],
  },

  status: {
    meta: {
      title: 'État du projet — Liri',
      description:
        'Auto-évaluation des capacités, limites actuelles, rythme des versions et pile technique : tout ce que Liri a construit et tout ce qu’il n’a pas encore terminé, chaque chiffre renvoyant au code source.',
    },
    label: 'État',
    title: 'État du projet',
    subtitle:
      'Auto-évaluation des capacités, limites actuelles, rythme des versions et pile technique — ce qui est fait, ce qui ne l’est pas, et chaque chiffre renvoie au code source.',
    jumpLabel: 'Sur cette page',
    jumps: [
      { href: '#comparison', label: 'Auto-évaluation' },
      { href: '#limitations', label: 'Limites' },
      { href: '#roadmap', label: 'Versions' },
      { href: '#techstack', label: 'Pile technique' },
      { href: '#local-first', label: 'Local d’abord' },
    ],
    healthNote:
      'La tendance de santé de l’architecture (9 instantanés) arrivera sur cette page à la prochaine version.',
    updateNote:
      'Mis à jour à chaque version ; en cas d’écart avec le code source, le dépôt GitHub fait foi.',
  },

  techstack: {
    title: 'Pile technique',
    subtitle: 'Une pile moderne, choisie avec soin à chaque couche',
    items: [
      { label: 'TypeScript', pct: '{n} fichiers', desc: 'Langage principal · ~870K lignes' },
      {
        label: 'Rust',
        pct: '{n} modules',
        desc: 'Modules natifs pour l’AST, la sécurité et la compression',
      },
      { label: 'Bun', pct: '', desc: 'Exécution' },
      { label: 'React 19 + Ink', pct: '', desc: 'Interface terminal' },
      { label: 'Tauri 2.11', pct: '{n} composants', desc: 'Client de bureau' },
      { label: 'SQLite', pct: '', desc: 'Stockage des données et des vecteurs' },
      { label: 'OpenTelemetry', pct: '', desc: 'Observabilité' },
      { label: 'MCP + ACP + A2A + LSP', pct: '', desc: 'Protocoles' },
      { label: 'Docker', pct: '', desc: 'L’un des backends de bac à sable' },
      { label: 'MIT License', pct: '', desc: 'Licence open source' },
    ],
  },

  voiceInteraction: {
    title: 'Interaction vocale',
    subtitle:
      'Plus que du texte — dites ce dont vous avez besoin, Liri comprend, agit et répond',
    features: [
      {
        title: 'Entrée vocale',
        desc: 'faster-whisper ou SenseVoice en local, ou OpenAI Whisper dans le cloud',
        platforms: [
          'faster-whisper local',
          'SenseVoice',
          'OpenAI Whisper',
          'Reconnaissance en flux',
        ],
      },
      {
        title: 'Sortie vocale',
        desc: 'Piper en local ou Edge / OpenAI dans le cloud, ou votre propre commande',
        platforms: ['Piper local', 'Edge TTS', 'OpenAI TTS', 'Commande personnalisée'],
      },
      {
        title: 'Natif outil',
        desc: 'La parole est elle-même un outil que le modèle peut appeler au besoin',
        platforms: ['outil tts', 'outil audio_play', 'Entrée vocale', 'Lecture des réponses'],
      },
      {
        title: 'Toutes les surfaces',
        desc: 'Le bureau et le terminal partagent le même service vocal',
        platforms: ['Bureau Tauri', 'Terminal CLI', 'HTTP API'],
      },
    ],
    scenarios: 'Mains libres · Multitâche · Accessibilité · Raccourcis vocaux ·',
    scenariosHighlight: 'Dites-le n’importe où, et c’est fait',
  },
};
