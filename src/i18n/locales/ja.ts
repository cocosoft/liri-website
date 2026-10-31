/** 日语译文（结构与 ui.ts / data.ts / sections/* 的 en 对象一一对应） */
export const ja = {
  ui: {
    meta: {
      homeTitle: 'Liri — あなたのパーソナルAIアシスタント',
      homeDescription:
        'Liri（Linglong Bird）はオープンソース（MIT）のターミナル AI エージェントです。{tools} 個の組み込みツール、{channels} 個のメッセージチャネル、5 層のセキュリティ防御を備え、ローカルモデルとマルチプロバイダールーティングに対応します。',
    },

    nav: {
      capabilities: '主要機能',
      architecture: 'アーキテクチャ',
      security: 'セキュリティ',
      routing: 'ルーティング',
      voice: '音声',
      brain: 'セカンドブレイン',
      desktop: 'デスクトップ',
      cost: 'コスト',
      ecosystem: 'エコシステム',
      evolution: '開発ログ',
      start: 'はじめに',
      docs: 'ドキュメント',
      openMenu: 'メニューを開く',
      closeMenu: 'メニューを閉じる',
    },

    lang: {
      label: '言語',
      switchToZh: '中国語に切り替え',
      switchToEn: '英語に切り替え',
    },

    stage: {
      label: '高速イテレーション期',
      note: 'API とドキュメントは変更される場合があります',
      detail:
        '現在は高速イテレーション期にあり、API、設定項目、ドキュメントはリリースごとに調整されます。アップグレード前にリリースノートを確認してください。',
      cta: 'リリースノート',
    },

    footer: {
      tagline: 'パーソナルAIアシスタント · ローカルファースト · セキュリティ内蔵',
      resources: 'リソース',
      repo: 'GitHub リポジトリ',
      issue: 'Issue を報告',
      releases: 'リリースノート',
      license: 'MIT License',
      community: 'コミュニティ',
      discord: 'Discord（近日公開）',
      docs: 'ドキュメント',
      status: 'プロジェクトの状態',
      evolution: '開発ログ',
      support: 'Liri を支援する',
      discussions: 'Discussions（近日開始）',
      copyright: '© {year} Liri. Released under MIT License.',
      stats:
        '{tsFiles} TS ファイル · {tools} ツール · {securityLayers} 層のセキュリティ · {channels} チャネル · {buddySpecies} 種の Buddy',
    },

    docs: {
      label: 'ドキュメント',
      pageTitle: 'ドキュメント — Liri',
      pageDescription: 'Liri のインストール、設定、チャネル接続とコマンドリファレンス。',
      all: 'すべてのドキュメント',
      articleTitle: '{title} — Liri ドキュメント',
      backHome: 'ホームに戻る',
      indexTitle: 'ドキュメント',
      indexIntro:
        'GitHub リポジトリの <code class="font-mono text-brand-400">app/docs</code> から同期しています。全 {count} 件。',
      footerNote:
        'ドキュメントとソースコードは同期していない場合があります。<a class="text-surface-400 hover:text-surface-200" href="https://github.com/cocosoft/Liri/tree/main/app/docs" target="_blank" rel="noopener noreferrer">GitHub リポジトリ</a> を正としてください。',
      source: 'ソースファイル：',
      englishOnly: 'ドキュメントは現在英語のみ提供しています。',
    },

    common: {
      scroll: '下へスクロール',
      copy: 'クリックでコピー',
      backHome: 'ホームに戻る',
      fullStatus: '完全な状態を見る',
    },
  },

  channels: {
    '即时通讯': 'メッセージング',
    '国内平台': '中国国内プラットフォーム',
    '协作与社交': 'コラボレーションとソーシャル',
    '其它通道': 'その他のチャネル',
    '微信': 'WeChat',
    '企业微信': 'WeCom',
    '钉钉': 'DingTalk',
    '飞书': 'Feishu',
    '元宝': 'Yuanbao',
    '移动端接入': 'モバイル接続',
  },

  about: {
    title: 'Liri とは',
    p1: 'Liri は <strong class="text-brand-300">TypeScript + Rust</strong> アーキテクチャで構築された <strong class="text-brand-300">パーソナルAIアシスタント</strong> です。',
    p2: 'チャットボットにとどまりません — <strong class="text-brand-300">意図を理解</strong> し、<strong class="text-brand-300">コマンドを実行</strong> し、<strong class="text-brand-300">タスクを管理</strong> し、<strong class="text-brand-300">ツールを呼び出</strong> し、他の AI エージェントと協働することもできます。1 つのエンジンがターミナル、デスクトップ、IM、MCP のすべての入口を支えます。',
    p3: '<strong class="text-brand-300">{modules}</strong> 個のモジュール型サブシステム、<strong class="text-brand-300">{tsFiles}</strong> 個の TypeScript ファイル、<strong class="text-brand-300">{desktopComponents}</strong> 個のデスクトップコンポーネント — ビルドバリアントごとに削減できます。',
    statLabels: ['TypeScript ファイル', '組み込みツール', 'メッセージチャネル', 'デスクトップ TSX コンポーネント'],
    verifyTitle: 'GitHub のソースで確認する',
  },

  architecture: {
    title: 'アーキテクチャ全体像',
    subtitle:
      '入口からフィードバックまでの 8 つの機能層。エンジニアリング面では 6 層の依存ゲート（entry > ui > app > service > infra > core）で強制しています',
    summary: {
      title: 'オペレーティングシステムのように層を分ける',
      subtitle: '薄いカーネル、サブシステムの境界、依存ゲート。ローカルファーストはスイッチではなく既定です。',
      pillars: [
        { title: 'カーネル', desc: '@openliri/kernel は独立パッケージとして薄いインターフェースだけを公開し、K01–K08 のゲートが守ります' },
        { title: 'サブシステム', desc: 'ツール、チャネル、記憶、ルーティング、サンドボックス、タスクがそれぞれ入口と境界を持ちます' },
        { title: 'ゲート', desc: '6 層の依存方向 + 20 項目以上のアーキテクチャチェック。違反は CI で遮断されます' },
        { title: 'ローカルファースト', desc: 'データは既定で手元に残り、モデルは完全ローカルでも実行できます' },
      ],
      link: 'アーキテクチャの変遷と残る課題を見る',
    },
    layers: [
      {
        name: 'マルチモーダル入口層',
        subtitle: 'どの入口からでも Liri へ',
        items: [
          { label: 'REPL ターミナル', detail: 'React + Ink で構築したターミナル UI。Buddy コンパニオンシステムを内蔵' },
          { label: 'Tauri デスクトップクライアント', detail: '{desktopComponents} 個の TSX コンポーネント、{desktopPages} 個の機能ページ（Tauri 2.11 + React 19）' },
          { label: 'MCP / チャネルゲートウェイ', detail: 'MCP Server と {channels} 個のメッセージチャネル（WeChat / DingTalk / Feishu / Telegram など）' },
          { label: 'CLI / HTTP API', detail: 'Liri / liri-memory / liri-ink の 3 つの実行ファイル + HTTP API' },
        ],
      },
      {
        name: 'セキュリティ第一層',
        subtitle: 'すべての入力がセキュリティフィルターを通ります',
        items: [
          { label: 'Rust AST コンパイル時解析', detail: 'FFI 層が Bash AST を解析し、{dangerousRules} 件の危険コマンドルールに照合' },
          { label: 'TypeScript 意味解析', detail: '複合的な読み取り専用コマンドを区間ごとに判定し、拒否理由を追跡可能に' },
          { label: 'Guardrail ルールエンジン', detail: '{injectionRules} 件のインジェクションパターン + {shellRules} 件の Shell 専用ルール' },
          { label: 'AutoMode 分類器', detail: 'タスクのリスクレベルを自動判定し、許可 / 確認 / 拒否を決定' },
        ],
      },
      {
        name: 'スマートルーティング層',
        subtitle: 'タスク種別と難易度に応じてモデルを選ぶ',
        items: [
          { label: '{taskTypes} 種のタスク種別を識別', detail: 'コーディング / 執筆 / 分析 / ツール / 翻訳 / 検索 / 発想 / 雑談など' },
          { label: '4 段階の tier', detail: 'simple / medium / complex / reasoning' },
          { label: '5 段階の判定パイプライン', detail: 'スイッチ → ファストパス → セッション固定 → LLM 判定 → Tier 解決' },
          { label: 'FallbackChain フォールバック', detail: 'プライマリプロバイダーが使えない場合に順にフォールバック。RetryPolicy と併用' },
        ],
      },
      {
        name: 'セカンドブレイン注入層',
        subtitle: 'ナレッジベース + 記憶 + セッションイベント：検索可能な 3 つのコンテキスト',
        items: [
          { label: 'ナレッジベース', detail: 'Markdown をディスクに保存 + セマンティックインデックス。キーワード / ベクトル / RRF のハイブリッド検索' },
          { label: '記憶システム', detail: '階層型記憶 + SQLite ベクトルテーブル。関連度で重み付けして想起' },
          { label: 'セッションイベント', detail: 'events.jsonl へ追記保存。再生・監査が可能' },
          { label: 'DreamEngine', detail: 'アイドル時に知識を整理：収集 → 分析 → 生成 → 書き込み → インデックス' },
        ],
      },
      {
        name: 'TAOR 判断ループ',
        subtitle: 'Think → Act → Observe → Reason',
        items: [
          { label: 'Think', detail: '{strategies} 種のエージェント戦略：汎用 / コーディング / 探索 / 計画' },
          { label: 'Act', detail: '{tools} 個の組み込みツールをビルドバリアントごとに動的登録' },
          { label: 'Observe', detail: '結果評価 + コンテキストの階層化ウィンドウと自動圧縮' },
          { label: 'Reason', detail: 'トークン予算管理 + チェックポイント再開 + ラウンド単位のサーキットブレーカー' },
        ],
      },
      {
        name: '実行サンドボックス層',
        subtitle: 'コマンドは分離環境で実行し、分離がない場合は正直に縮退します',
        items: [
          { label: 'Linux Landlock', detail: 'カーネルレベルのファイルシステムアクセス制限' },
          { label: 'macOS / Windows', detail: 'システムサンドボックス + Low IL / Job オブジェクトによるフォールバック分離' },
          { label: 'Docker コンテナ', detail: '完全なコンテナ分離 + リソース制限 + ネットワークポリシー' },
          { label: 'SSH / PTY', detail: 'リモートのクリーンな実行環境と疑似端末の経路制御' },
        ],
      },
      {
        name: '長時間タスク層',
        subtitle: '単発の会話から数日がかりのタスクまで',
        items: [
          { label: 'PDCA パイプライン', detail: 'Plan-Do-Check-Act の閉ループ。成果物の実在に基づいて進捗を進める' },
          { label: 'Swarm マルチエージェント', detail: 'AgentSwarm + 合議型オーケストレーション。レジストリを動的に検出' },
          { label: 'Cron スケジュール', detail: 'once / interval / cron 式に対応（タイムゾーンを含む）' },
          { label: 'タスクの永続化', detail: 'セッションスナップショット + 中断点からの復元 + 待機中のカウントダウン表示' },
        ],
      },
      {
        name: 'フィードバックと進化の層',
        subtitle: 'すべてのやり取りが検証可能な証拠を残します',
        items: [
          { label: '失敗パターンの帰納', detail: '失敗パターンを一般化してプロンプトとスキルへ書き戻し、改善のループを閉じる' },
          { label: 'コスト台帳', detail: 'データベースの価格表で課金し、プロバイダーが返した実際のモデル名を記録' },
          { label: '評価ゲート', detail: '内蔵ベースライン問題集 + pass^k 信頼性指標 + ペア比較による安全性測定' },
          { label: 'イベント再生', detail: 'すべてのモデル呼び出しのコンテキストを後から再構築可能' },
        ],
      },
    ],
    principlesTitle: 'アーキテクチャの哲学',
    principles: [
      { title: 'セキュリティ内蔵', desc: 'セキュリティはプラグインではなく、各層の DNA です' },
      { title: 'ローカルファースト', desc: 'データはローカルに保存され、オフラインでも動作し、プライバシーは既定で守られます' },
      { title: 'スマートルーティング', desc: '{taskTypes} 種類のタスクを対応する tier のモデルに割り当てます' },
      { title: 'セカンドブレイン設計', desc: 'ナレッジベース + 記憶 + イベントログ：検索可能な 3 層のコンテキスト' },
      { title: '検証可能な閉ループ', desc: '失敗したサンプルを帰納して書き戻し、変更はゲートで止めます' },
      { title: 'マルチモーダルの統一', desc: 'ターミナル / デスクトップ / IM / API が同じエンジンを共有します' },
    ],
  },

  brainSection: {
    title: 'セカンドブレイン',
    subtitle: 'ナレッジベース → 記憶 → セッションイベント：検索可能な 3 層のコンテキストを、すべて手元に保存',
    layers: [
      {
        badge: '第 1 層：ナレッジベース',
        title: 'ナレッジベース',
        desc: 'Markdown をディスクに保存 + セマンティックインデックス。検索結果には出典を付与',
        tags: ['Markdown をディスクに保存', 'セマンティックインデックス JSONL', 'キーワード検索', 'ベクトル検索', 'RRF 融合'],
      },
      {
        badge: '第 2 層：記憶',
        title: '記憶システム',
        desc: '階層型記憶 + SQLite ベクトルテーブル。関連度で重み付けして想起',
        tags: ['階層型記憶', 'memory_vectors', '関連度重み付け', '記憶のクレンジング', 'コンテキスト注入'],
      },
      {
        badge: '第 3 層：事実の源',
        title: 'セッションイベントログ',
        desc: 'モデルへのリクエストに入る内容はすべてセッションイベントとして保存され、再生できます',
        tags: ['events.jsonl 追記', '書き込み前に永続化', 'セッション再生', '監査可能な履歴', 'コンパイル時の登録強制'],
      },
    ],
    governTitle: '整理とガバナンス',
    governSubtitle: 'アイドル時に知識を整理し、ウィンドウを超えたらコンテキストを圧縮 — 実在する 2 本のバックグラウンドパイプライン',
    dreamHeading: 'DreamEngine の 5 段階パイプライン',
    dreamStages: [
      { name: '収集', desc: '整理待ちのセッションとドキュメントを集約' },
      { name: '分析', desc: '主題と再利用できる結論を抽出' },
      { name: '生成', desc: '上位層に向けたノートを生成' },
      { name: '書き込み', desc: 'ナレッジベースと記憶へ書き込む' },
      { name: 'インデックス', desc: 'ベクトルとキーワードのインデックスを再構築' },
    ],
    contextTitle: 'コンテキストの階層ガバナンス',
    contextBody:
      '長い会話がウィンドウを超えると、まず古いターンから捨て、構築時のメモリ使用量を O(全量) から O(ウィンドウ) に下げます。切り詰め時には「原文は取得可能」という注記を残し、必要ならページ単位で読み戻し、さらにトークン水位に応じて自動圧縮します。',
    contextCards: [
      { title: '階層ウィンドウ', desc: '超えたらまず古いターンを削る' },
      { title: 'オンデマンド取得', desc: '原文を分割して読み戻せる' },
      { title: '3 段階圧縮', desc: 'Tier1/2 は同期 + Tier3 はバックグラウンド' },
    ],
    pdcaTitle: 'PDCA 自己反復ループ',
    pdcaBody:
      '長時間のタスクでは、Liri が Plan-Do-Check-Act ループを自動で回します。タスク分解 → 手順の実行 → 結果のレビュー → 計画の修正を、完了または終了条件に達するまで繰り返します。',
    pdcaSteps: [
      { step: 'Plan', desc: '自動分解' },
      { step: 'Do', desc: '段階的実行' },
      { step: 'Check', desc: '自動レビュー' },
      { step: 'Act', desc: '自動修正' },
    ],
  },

  capabilities: {
    title: '主要機能',
    subtitle: '8 つの差別化された能力。いずれも GitHub のソースで確認できます',
    items: [
      {
        title: '深いエージェントエンジン',
        description: '自社開発の TAOR ループ。戦略、記憶、チェックポイントを備える',
        details: [
          'TAOR 判断ループ（Think-Act-Observe-Reason）',
          '{strategies} 種のエージェント戦略：汎用 / コーディング / 探索 / 計画',
          'チェックポイント再開により、長時間タスクは中断後も復元可能',
          'コンテキストの階層ウィンドウ + 3 段階の自動圧縮',
          '8 種類の終了理由 + ラウンド単位のサーキットブレーカーで空回りを防ぐ',
        ],
        highlight: '中核',
      },
      {
        title: '5 層の多層防御',
        description: 'Rust AST コンパイル時解析 → 5 層の防御線 → マルチバックエンドのサンドボックス分離',
        details: [
          'Rust FFI AST によるコンパイル時の Bash 解析',
          '{dangerousRules} 件の危険コマンド + {injectionRules} 件のインジェクションルール',
          'Guardrail ポリシールールエンジン',
          'AutoMode リスク分類器',
          'Landlock / macOS / Windows / Docker / SSH / PTY をカバーするサンドボックス',
        ],
        highlight: 'セキュリティ',
      },
      {
        title: '{tools} 個の組み込みツール',
        description: '{categories} 個のカテゴリで、ファイル、コマンド、ネットワーク、メディア、コード、コラボレーションをカバー',
        details: [
          'Rust AST レベルの Bash 実行',
          'LSP によるコードインテリジェンス',
          'Web スクレイピングと検索',
          'Notebook、画像、音声・動画の処理',
          'MCP クライアントとサーバーの完全サポート',
        ],
        highlight: '豊富',
      },
      {
        title: '{channels} 個のメッセージチャネル',
        description: '{channels} 個のチャネルアダプター。WeChat / WeCom / DingTalk / Feishu / QQ にすべて対応',
        details: [
          'Telegram / Discord / Slack / WhatsApp',
          'WeChat / WeCom / DingTalk / Feishu / QQ / Yuanbao',
          'Email / SMS / Webhook / IRC / Matrix',
          '統一されたチャネルカタログとゲートウェイルーティング',
          'コンパイル時のチャネル削減でより小さなビルド',
        ],
        highlight: 'マルチプラットフォーム',
      },
      {
        title: 'エンタープライズ向けの可観測性',
        description: 'OpenTelemetry 連携 + アラート + ヘルスチェック',
        details: [
          'Tracing + Metrics。OTel GenAI セマンティック規約に準拠',
          '構造化ログの階層管理',
          'アラートルールとインシデント管理',
          'ヘルスチェック、バックアップ、データアーカイブ',
          '再生・監査が可能なセッションイベント',
        ],
        highlight: '可観測性',
      },
      {
        title: 'プラグイン可能なアーキテクチャ',
        description: 'プラグイン SDK + スキルシステム + 4 プロトコル。ビルドバリアントごとに削減可能',
        details: [
          '5 種のビルドバリアント：core / personal / coding / enterprise / headless',
          'プラグインマーケット。ホットロードと署名検証に対応',
          '3 つのスキルソースを分離（組み込み / ユーザー / サードパーティ）',
          'MCP / ACP / A2A / LSP の 4 プロトコル',
          '4 段階起動（T0–T3）とオンデマンドロード',
        ],
        highlight: '柔軟',
      },
      {
        title: 'ローカルファースト',
        description: 'Ollama / llama.cpp のローカルモデル。データは既定で手元に保存',
        details: [
          'ローカル推論で、完全オフラインでも動作',
          'SQLite の単一データファイルで、デバイスの外に出ない',
          'セッションは events.jsonl に追記して保存',
          'クラウドプロバイダーは任意の拡張',
          'ワークスペース単位で分離されたサンドボックスディレクトリ',
        ],
        highlight: 'プライバシー',
      },
      {
        title: 'スマートルーティング',
        description: '{taskTypes} 種類のタスク × 4 段階の tier × 5 段階の判定 + プロバイダーのフォールバックチェーン',
        details: [
          '{taskTypes} 種のタスク種別を自動識別',
          '4 段階の tier：simple / medium / complex / reasoning',
          '5 段階の判定：スイッチ → ファストパス → セッション固定 → LLM 判定 → Tier',
          'FallbackChain によるマルチプロバイダーのフォールバック + リトライ方針',
          '価格とコンテキストウィンドウはどちらもデータベースから取得',
        ],
        highlight: 'ルーティング',
      },
    ],
  },

  channelWall: {
    title: '{channels} 個のメッセージチャネル',
    subtitle:
      '{channels} 個のチャネルすべてに対応するアダプターがあります。環境変数を設定すると有効になり、コンパイル時に削減することもできます。',
    summary:
      '全 {count} チャネル · 統一カタログ · チャネル単位で有効化 · コンパイル時に削減可能',
  },

  community: {
    title: 'オープンソース · コミュニティ',
    subtitle: 'Liri はオープンソースプロジェクトで、すべての貢献者を歓迎します',
    githubDesc: 'GitHub でプロジェクトをフォローし、Issue や PR を送ってください',
    communityTitle: 'コミュニティに参加する',
    communityDesc: '議論に参加し、Issue や PR を送ってください',
  },

  comparison: {
    title: '機能セルフチェック表',
    subtitle:
      '16 の項目ごとに現在の状態とソースの場所を記載しています。数字はすべてコードへ飛べ、未完了の部分もそのまま書いています。',
    dimensionHeader: '項目',
    stateHeader: '現在の状態',
    statusHeader: '進捗',
    sourceHeader: 'ソース',
    sourceLink: '表示',
    statuses: {
      ready: '実装済み',
      polish: '調整中',
      audit: '外部監査待ち',
      building: '構築中',
      experimental: '実験的',
    },
    statusLegend:
      '状態はメンテナーの自己評価で、リリースごとに変わります。「表示」を押すと該当ディレクトリへ移動し、ご自身で確認できます。',
    footnote: '* 表のデータはソース v{version} に基づき、ソースリンクは GitHub リポジトリの main ブランチを指します。',
    rows: [
      { dimension: '言語', liri: 'TypeScript + Rust', status: 'ready', source: 'app/src' },
      { dimension: 'ローカルファースト', liri: 'Ollama / llama.cpp + ローカル SQLite', status: 'ready', source: 'app/src/ai' },
      { dimension: 'スマートルーティング', liri: '{taskTypes} 種 · 4 段階 · 5 段階の判定', status: 'ready', source: 'app/src/ai' },
      { dimension: 'セキュリティ体系', liri: '{securityLayers} 層の多層防御 · 6 種のサンドボックスバックエンド', status: 'audit', source: 'app/src/security' },
      { dimension: 'メッセージチャネル', liri: '{channels} 個（WeChat / DingTalk / Feishu / QQ を含む）', status: 'ready', source: 'app/src/channels' },
      { dimension: 'デスクトップクライアント', liri: 'Tauri 2.11 · {components} 個の TSX コンポーネント', status: 'polish', source: 'client/src' },
      { dimension: 'ターミナル UI', liri: 'React + Ink', status: 'ready', source: 'app/src/ink' },
      { dimension: 'ペルソナシステム', liri: '{species} 種 × {hats} 種の帽子 × {eyes} 種の目', status: 'ready', source: 'app/src/buddy' },
      { dimension: '音声インタラクション', liri: 'ローカル faster-whisper / Piper + クラウド', status: 'ready', source: 'app/src/voice' },
      { dimension: 'コストの透明性', liri: 'DB の価格 · 呼び出しごとに記録', status: 'ready', source: 'app/src/cost' },
      { dimension: 'セカンドブレイン', liri: 'ナレッジベース + 記憶 + イベントログ', status: 'ready', source: 'app/src/knowledge' },
      { dimension: 'コンテキストガバナンス', liri: '階層ウィンドウ + 3 段階の圧縮', status: 'ready', source: 'app/src/context' },
      { dimension: 'エコシステムマーケット', liri: 'プラグインマーケット + MCP マーケット + スキルソース', status: 'building', source: 'app/src/plugins' },
      { dimension: 'エージェント戦略', liri: '{agentStrategies} 種の戦略 · PDCA · Swarm', status: 'ready', source: 'app/src/agent' },
      { dimension: 'スケジュールタスク', liri: 'once / interval / cron', status: 'ready', source: 'app/src/chronos' },
      { dimension: 'プロトコル対応', liri: 'MCP + ACP + A2A + LSP', status: 'experimental', source: 'app/src/mcp' },
    ],
  },

  desktopClient: {
    title: 'デスクトップクライアント',
    subtitle:
      'Tauri 2.11 + React 19 で構築 · {components} 個の TSX コンポーネント · {pages} 個の機能ページ · 完全なデスクトップ体験',
    sidebar: [
      'チャット',
      'AI モデル',
      'ナレッジベース',
      '記憶管理',
      'スキル',
      'MCP',
      'スケジュールタスク',
      'コストセンター',
      'Buddy',
      '設定',
    ],
    panelTitle: 'チャットパネル',
    panelUser: 'Liri · Linglong Bird',
    greeting: 'こんにちは！Liri です。何かお手伝いできますか？',
    userMessage: 'このプロジェクトのデータを分析してください',
    reply: 'かしこまりました。分析中です...',
    inputPlaceholder: 'メッセージを入力し、Enter で送信...',
    mockNote: '画面構成のイメージであり、実際のスクリーンショットではありません',
    features: [
      { label: 'チャットパネル', desc: '複数ターンの会話' },
      { label: 'モデル管理', desc: 'モデルの切り替え' },
      { label: 'ナレッジベース', desc: 'ファイル検索' },
      { label: '記憶管理', desc: '過去の履歴の振り返り' },
      { label: 'スケジュールタスク', desc: 'Cron スケジューリング' },
      { label: 'MCP 連携', desc: 'サービスの検出とインストール' },
      { label: 'コストセンター', desc: '利用量と費用の記録' },
      { label: 'Buddy', desc: '外見と成長データ' },
    ],
  },

  ecosystem: {
    title: 'エコシステム',
    subtitle:
      'プラグインマーケット + MCP マーケット + 3 つのスキルソース + テンプレートマーケット = 組み合わせ可能な Liri エコシステム',
    mcp: {
      title: 'MCP マーケット',
      desc: '5 つのソースアダプターを一括検索',
      items: ['GitHub', 'npm', '公式レジストリ', 'Smithery', '同梱サービス'],
    },
    plugins: {
      title: 'プラグインマーケット',
      desc: 'ローカル / npm / リモートレジストリの 3 ソース',
      items: [
        'プラグイン SDK + アダプター',
        'ライフサイクルとホットリロード',
        '署名検証',
        '設定エンドポイント + CLI',
        '5 種のビルドバリアント',
      ],
    },
    skills: {
      title: '3 つのスキルソース',
      desc: '組み込み / ユーザー / サードパーティを物理的に分離',
      items: [
        '{skills} 個の組み込みスキル',
        'ユーザー定義スキル',
        'ClawHub サードパーティソース',
        '条件付きオーケストレーション',
        'スキルの合成とマッチング',
      ],
    },
    templates: {
      title: 'テンプレートとプロトコル',
      desc: 'エージェントとドキュメントのテンプレート。接続するだけで使える',
      items: [
        'エージェントテンプレートマーケット',
        'ドキュメントテンプレートマーケット',
        'MCP / ACP / A2A / LSP',
        'プラグインとスキルを組み合わせ可能',
        'パラメーター化したテンプレートの再利用',
      ],
    },
  },

  evolution: {
    meta: {
      title: '開発ログ — Liri',
      description:
        'v0.1 から v0.5.22 まで：Liri が 4000 個のファイルから、境界とゲートを持ち、他者が引き継げるシステムへどう収束したか。各転換点にはソースと CHANGELOG の証拠を添えています。',
    },

    hero: {
      eyebrow: 'BUILD LOG',
      title: 'まだ歩き終えていない道',
      subtitle:
        'v0.1 から v0.5.22 まで、156 日、116 のリリース。ここに書くのは機能一覧ではなく、私たちが踏んだ穴、それと引き換えに得たルール、まだ埋まっていない空白です。',
      stats: [
        { value: '156 日', label: '初回リリースから今日まで' },
        { value: '116', label: 'リリース' },
        { value: '9', label: 'アーキテクチャスナップショット' },
        { value: '20+', label: 'アーキテクチャチェック' },
      ],
      scroll: 'タイムラインへ移動',
      snapshot: 'データスナップショット {date} · 数値は sync-facts と health:arch が Liri の本体リポジトリから収集',
    },

    origin: {
      title: '起源',
      paragraphs: [
        '2026 年 5 月 25 日、Liri の最初のバージョンは v0.1 でした。100 回の実質的なコミット、動くターミナル AI アシスタントが 1 つ。',
        '最初に解こうとした問題は具体的でした——大規模モデルを本当にターミナルの中に座らせ、ファイルを読み、コマンドを実行し、コードを書き換える。Web の入力欄でチャットするだけではなく。ローカルモデルを優先したのは、個人のファイルを他人のサーバーへ送りたくないから。セキュリティ内蔵を選んだのは、それが API ではなく実際のマシンを渡されるからです。',
        'その後の 3 か月で、能力を 1 つずつ広げました：ツール、27 のメッセージチャネル、デスクトップ、音声、ナレッジベース。8 月にはリポジトリに 4000 を超えるファイルがありました。',
        '問題が初めて明示されたのもその頃です。2026 年 6 月 18 日のコードレビューでは、LocalHTTPService が 7200 行、ChatManager が 3263 行、テストファイル 150 個に対してソースファイル 3742 個。2 か月後、アーキテクチャ健全性の最初の採点は 10/40、グレード D で、105 個の上限超過ファイルがすべて未登録でした。',
        'そこで分かったこと：プロジェクトを他人に引き継げるかどうかは、機能の数ではなく、穴に落ちた後にどんなルールを育てたかで決まる。',
      ],
    },

    nodes: {
      title: '5 つの転換点',
      note: '因果順に並べており、カレンダー順ではありません——期間は重なっています。',
      items: [
        {
          id: 'n1',
          period: '2026-05-25 → 2026-08',
          title: 'まず能力を広げ、境界は後回し',
          situation: 'v0.1 は 100 コミット。動けば勝ちで、構造より機能が優先でした。',
          decision: 'まず能力を埋める：ツール、チャネル、デスクトップ、音声、ナレッジを 1 つずつ。',
          cost:
            '最初の監査が出した数字はひどいものでした——LocalHTTPService 7200 行、ChatManager 3263 行、テストとソースの比率は約 4%、最初のアーキテクチャ健全性は 10/40（D）で、105 個の上限超過ファイルがすべて未登録。',
          result: '4000+ ファイル、{tools} 個のツール、{channels} 個のチャネル、{desktopComponents} 個のデスクトップコンポーネント。',
          evidence: [
            { label: 'CHANGELOG v0.1', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
            { label: '2026-06-18 のコードレビュー', href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/codebase-review-20260618.md' },
          ],
          participate: '新しい能力を足したいとき：app/src 配下にモジュールを立て、カーネルには詰め込まない。',
        },
        {
          id: 'n2',
          period: '2026-08-09 → 2026-09-30',
          title: 'まず自分たちを測れるようにする',
          situation: '問題は誰もが感じていましたが、「どれくらい劣化しているか」を説明できる人はいませんでした。',
          decision:
            'アーキテクチャ品質を再現可能な採点と台帳（architecture-health）にし、上限超過ファイルは必ず登録する。「自制心で清潔さを保つ」という前提は捨てました。',
          cost:
            '登録は分割ではありません——ChatManager はむしろ 3263 行から 7036 行に増えました（現在は {chatManagerLines} 行に分割済み）。採点の基準自体も変わってきたので、健康診断表としてのみ使い、KPI にはしません。',
          result:
            '9 回のスナップショット。未登録の上限超過ファイルは 105 から 0 へ（後に 2 へ戻る）。超過リストは「誰も知らない」ものから追跡可能な台帳になりました。',
          evidence: [
            {
              label: 'architecture-health-history.json',
              href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/architecture-health-history.json',
            },
            { label: 'architecture-health.ts', href: 'https://github.com/cocosoft/Liri/blob/main/scripts/architecture-health.ts' },
          ],
          participate: '上限超過ファイルを 1 つ引き受けて分割してください（下の参加方法を参照）。',
        },
        {
          id: 'n3',
          period: '2026-10-08 → 10-09',
          title: '1 回の削除ミスが、削除プロセスをもたらした',
          situation:
            'コードベースには、参照されているように見えない「死んだ面」が溜まっていました。v0.4.69 のクリーンアップはサンドボックスと分離サブシステムを死んだコードとして削除——そのバージョンは 170 ファイルに触れ、+9340 / −10174 行でした。',
          decision:
            '翌日 v0.4.71 で一括ロールバック：24 ファイルを復元（IsolationManager、EnhancedSandboxManager、PTYSandbox、SSHSandbox、docker/** など、加えて 5 件のテスト）し、存続する 21 ファイルの付随変更も戻しました。',
          cost: '1 ファイルを消すにはまず証拠を書く必要があり、手順は遅くなります。ただし削除してから戻すよりは速い。',
          result:
            'v0.4.72 で削除プロセス code-deletion.md（CD01–CD07）が導入されました。まず証拠を集め、次に入口を外し、最後に実装を削除する。「誰も使っていないように見える」は削除の理由にならなくなりました。',
          evidence: [
            { label: 'CHANGELOG v0.4.69 / v0.4.71 / v0.4.72', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
          ],
          participate: 'CD01–CD07 に沿って「デッドコード候補」を 1 件確認してください。',
        },
        {
          id: 'n4',
          period: '2026-10-10 → 10-22',
          title: 'ルールをゲートにする',
          situation: 'ルールはドキュメントに書かれ、自制心に頼っていました。ドキュメントとコードが乖離し始めます。',
          decision:
            'すべてのルールを提案ではなく CI の遮断にしました：5 つのゲート + doc-gate + sandbox-negative の必須ジョブ。ハードコードのベースライン 413 キー。状態語彙 34 値、1795 組のベースライン。起動面、重要モジュール、カーネル面にそれぞれ 1 つ。',
          cost:
            'コミットごとに数秒増え、語彙を変えるたびにベースラインを同期する必要があります——基準を気軽に変えられないことこそが目的です。',
          result: 'lint:arch の違反は 0。テストは 3029 から 7488 に増加。',
          evidence: [
            { label: 'AGENTS.md のゲート一覧', href: 'https://github.com/cocosoft/Liri/blob/main/AGENTS.md' },
            { label: 'CI ワークフロー', href: 'https://github.com/cocosoft/Liri/blob/main/.github/workflows/ci.yml' },
          ],
          participate: 'プッシュ前にローカルでゲートを 1 回実行（bun run ci）。赤くなったところを直す。',
        },
        {
          id: 'n5',
          period: '2026-10-05 → 10-28',
          title: 'カーネルの収縮：5336 行から独立パッケージへ',
          situation: 'core は入口の実装でもあり、あらゆる能力の共有地でもあり、誰でも中に足せました。',
          decision:
            '3 段階——まず削る（CoreAPIImpl 5336 → 2521 行）、次にパッケージを抽出（@openliri/kernel を独立、core は 146 → 113 ファイル、K01–K08 のカーネルゲート）、最後に外へ移す（「ゼロ I/O / 上位層への依存ゼロ」を満たさない 37 モジュールを app/src へ降ろし、470+ か所の import を同期、5 種類のベースラインを再生成）。',
          cost: '大規模な移行 1 回で、すべてのベースラインを再生成。10-18 からはバッチ単位で収め、コミット密度は意識的に下げました。',
          result: 'カーネルが外部に公開するのは薄いインターフェースだけになり、外部からの貢献に初めて明確な境界ができました。',
          evidence: [{ label: 'CHANGELOG v0.5.22', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' }],
          participate: 'カーネル境界の外にある新機能は app/src から始めればよく、カーネルに入れる必要はありません。',
        },
      ],
      fieldLabels: {
        situation: '状況',
        decision: '判断',
        cost: '代償',
        result: '結果',
        evidence: '証拠',
        participate: '参加できること',
      },
    },

    model: {
      title: 'アーキテクチャ：オペレーティングシステムのように層を分ける',
      intro:
        'アーキテクチャは新しく発明したものではありません。薄いカーネル、サブシステムの境界、依存の方向、ゲートと可観測性——この組織化は OS の数十年のエンジニアリング実践から来ています。Agent 領域でここ 2 年に公開された設計パターンとエンジニアリングガイドも、ほぼ同じ問いに収束しています：階層、境界、状態、ガバナンス、評価。私たちは前者のやり方で自分たちを縛り、後者のチェックリストで自己点検します。',
      mappingTitle: 'OS の概念 → Liri の現状',
      headers: { concept: '概念', liri: 'Liri での対応', status: '状態' },
      statuses: {
        ready: '導入済み',
        converging: '収束中',
        audit: '外部監査待ち',
        missing: '空白',
      },
      rows: [
        { concept: 'カーネル', liri: '@openliri/kernel 独立パッケージ。外部には薄いインターフェースのみ公開し、K01–K08 のゲートで守る', status: 'ready' },
        {
          concept: 'サブシステム',
          liri: 'ツール / チャネル / 記憶 / ルーティング / サンドボックス / タスク / 音声 / デスクトップ。それぞれに入口と境界',
          status: 'converging',
        },
        {
          concept: 'ドライバー',
          liri: 'プロバイダーアダプター、チャネルアダプター、6 種のサンドボックスバックエンド（Landlock / Docker / SSH / PTY / macOS / Windows）',
          status: 'ready',
        },
        { concept: 'プロセスとスケジューリング', liri: 'セッション実行、PDCA、Swarm、Cron', status: 'ready' },
        {
          concept: '権限モデル',
          liri: '5 層の防御線 + 承認の 4 段階（requested → presented → decided → recorded）',
          status: 'audit',
        },
        { concept: '可観測性と監査', liri: 'イベントログ、コスト台帳、証拠台帳', status: 'ready' },
        { concept: 'メンテナー（MAINTAINERS）', liri: '未確立：サブシステムの owner も引き継ぎ経路もない', status: 'missing' },
      ],
      referenceTitle: '参考にしたもの',
      referenceBody:
        '公開されている Agent の設計パターンとエンジニアリングガイドに 1 項目ずつ照らし合わせました。21 のパターンにはすべて実際の実装がありますが、うち 3 つの重要なスイッチは既定でオフです——そのため対外的には「実装あり」とだけ言い、「既定で有効」とは言いません。エンジニアリングの流れも同じ 5 段階で自己点検します：アーキテクチャ、ビルド、実行、ガバナンス、チューニング。',
      blanksTitle: '3 つの空白',
      blanks: [
        { title: 'サブシステムのメンテナー制度', desc: 'owner がいなければ引き継ぎ経路もありません。最も OS らしく、最も欠けている部分です。' },
        { title: 'サブシステムの契約層', desc: '契約の設計書はありますが、台帳 / LoopProfile が実装されたかは未確認——インターフェース安定性の約束はまだ固まっていません。' },
        { title: 'カバレッジゲート', desc: 'レビュー時点で約 4%。CI には 20+ 項目のアーキテクチャチェックがありますが、カバレッジのしきい値はまだありません。' },
      ],
      honesty:
        '正直に言うと、アーキテクチャ健全性は依然 {healthGrade}（{healthScore}）、{oversized} 個の上限超過ファイルのうち {unregistered} 個が未登録、最大は今も chat モジュールです（ChatManager は 7,036 行から {chatManagerLines} 行に分割済み）。カーネルはでき、境界は収束しつつあり、メンテナー制度はまだありません——これが「まだ歩き終えていない」という意味です。',
      layersToggle: '現在の 8 層の機能階層を展開',
      cta: '完全な状態を見る',
    },

    timeline: {
      title: 'タイムライン',
      subtitle: '毎月 1 行。アーキテクチャとガバナンスの変化のみを記録し、通常のコミットは載せません。',
      items: [
        { date: '2026-05-25', text: 'v0.1：100 回の実質的なコミット、ターミナルアシスタントが動く' },
        { date: '2026-06-18', text: '最初のコードレビュー：7200 行の巨石ファイル、テストとソースの比率は約 4%' },
        { date: '2026-08-09', text: '最初のアーキテクチャ健全性：10/40（D）、105 個の上限超過ファイルが未登録' },
        { date: '2026-10-09', text: 'サンドボックスがクリーンアップで誤削除 → 一括ロールバック。翌日に削除プロセス CD01–CD07' },
        { date: '2026-10-20', text: '状態語彙ゲートを導入：34 値、1795 組のベースライン' },
        { date: '2026-10-28', text: 'カーネルの外移が完了。既定で見えるツールは 12 個、1397 token に収束' },
        { date: '2026-10-28', text: '中国語・英語の二言語ドキュメントサイトと本サイトを公開' },
      ],
      more: '以降の毎月の更新もここに追記していきます。',
    },

    participate: {
      title: '参加方法',
      subtitle: 'このページは完了報告ではなく、招待です。3 つのこと、いずれも人手が足りていません。',
      cards: [
        {
          title: '空白を 1 つ引き受ける',
          desc: 'Domain-first の知識ドメイン分離は設計書があり、Phase A/B/C は未実施。カーネル境界の外の機能もカーネルに入る必要はありません。',
          cta: 'タスクを引き受ける',
        },
        {
          title: '負債の返済を手伝う',
          desc: '{oversized} 個の上限超過ファイル（{unregistered} 個が未登録）が分割待ち。テストカバレッジのしきい値もまだありません。',
          cta: 'タスクを引き受ける',
        },
        {
          title: '私たちのセキュリティを監査する',
          desc: '5 層の防御線と 6 種のサンドボックスバックエンドは実装済みで、ルールのソースも確認できますが、第三者監査はまだ受けていません。これが最も欲しいフィードバックです。',
          cta: '監査チェックリストを見る',
        },
      ],
      audit: {
        title: 'セキュリティ監査チェックリスト',
        items: [
          '危険コマンドルール：37 件のルールがどこにあり、どう発火するか——1 件作って、期待したルールで遮断されるか確認する',
          'プロンプトインジェクションルール：14 件のインジェクションルール。悪意ある文書を渡して遮断されるか見る',
          'Shell ルール：10 件の許可 / 拒否リスト。バイパス経路（パイプ、サブシェル、エンコード）を検証する',
          'サンドボックスの縮退ロジック：6 種のバックエンドがそれぞれどんな条件で縮退し、縮退後も fail-closed かどうか',
          '承認の 4 段階：requested → presented → decided → recorded に欠落や順序の乱れがないか',
          '権限の境界面：ツール呼び出しが権限分類器を迂回して直接書き込み・実行できないか',
        ],
        note: '入口：app/src/security、app/src/sandbox、app/src/permission。',
      },
      securityNotice:
        '脆弱性の詳細を見つけた場合は SECURITY.md に従って非公開で報告し、公開 issue を立てないでください。公開 issue は監査プロセスと範囲についてのみ扱います。',
      ctaGithub: 'Issues で引き受ける / 質問する',
      ctaSecurity: 'セキュリティ自己点検の経路を開く',
      fundLink: '資金で支援したい方はスポンサーページへ',
    },

    teaser: {
      title: 'まだ歩き終えていない道',
      paragraphs: [
        '2026 年 5 月 25 日、それは v0.1 と 100 コミットだけでした。5 か月後、4000 を超えるファイルと 27 のチャネルに育ち——同時に代償も生みました。7000 行の巨石ファイル、誰も登録していない 105 個の上限超過ファイル、「デッドコードのクリーンアップ」がサンドボックスサブシステム全体を消してしまったこと。',
        '私たちはロールバックし、復元し、削除・境界・状態語彙を 1 つずつ CI ゲートにしました。この道はまだ終わっていません。',
      ],
      stats: ['156 日', '116 リリース', '20+ 項目のアーキテクチャチェック'],
      cta: '物語全体を読む',
    },
  },

  hero: {
    subtitle:
      'Linglong Bird · パーソナルAIアシスタント · <span class="text-brand-400">ローカルファースト</span> · <span class="text-brand-400">セキュリティ内蔵</span>',
    versionPill: 'v{version} · MIT オープンソース · 公開 <span class="whitespace-nowrap">{date}</span>',
    stats: ['{n} 個の TS ファイル', '{n} 個の組み込みツール', '{n} 層のセキュリティ', '{n} 個のメッセージチャネル', '{n} 種の Buddy 種族'],
    ctaPrimary: 'はじめに',
    ctaGithub: 'GitHub',
    command: 'git clone https://github.com/cocosoft/Liri.git',
    commandHint: '  # その後 cd app && bun install',
  },

  highlights: {
    title: '機能一覧にとどまらない',
    subtitle: '見落としやすいけれど、毎日使っている 3 つ。',
    cards: [
      {
        id: 'buddy',
        icon: '🐣',
        title: 'Buddy ペルソナ',
        desc: 'ツールではなく、相棒です。外見はシードから決定論的に生成されるため、同じ Buddy はいつも同じ姿。成長状態は保存され、セッションをまたいで積み上がります。',
        chips: ['{species} 種の種族', '{hats} 種の帽子', '{eyes} 種の目', '{rarities} 段階のレア度'],
      },
      {
        id: 'cost',
        icon: '🧾',
        title: 'コストの透明性',
        desc: '価格はデータベースから読み、プロバイダーが返した実際のモデル名に帰属させ、呼び出しごとに cost_records へ書き込みます。予算は水位を超えるとまず警告し、次に圧縮し、最後に遮断します。',
        chips: ['model_registry の価格', '実際の usage', '呼び出しごとの記録', '日次予算'],
      },
      {
        id: 'scenarios',
        icon: '🎯',
        title: '4 種類の利用者',
        desc: '開発者はコマンド実行とコード編集に、セキュリティ責任者は AST レベルの遮断と監査に、運用は常駐サービスとして、一般ユーザーはチャットアプリからそのまま使います。',
        chips: ['開発者', 'セキュリティ責任者', '運用', '一般ユーザー'],
      },
    ],
  },

  limitations: {
    title: '現在の制限',
    subtitle: '高速イテレーション期にまだ整っていない点を、先に書いておきます。遠回りを避けられるように。',
    statuses: {
      audit: '外部監査待ち',
      polish: '調整中',
      building: '構築中',
      experimental: '実験的',
      note: '注記',
    },
    items: [
      {
        status: 'audit',
        title: 'セキュリティ体系は外部監査待ち',
        desc: '{securityLayers} 層の防御線と 6 種のサンドボックスバックエンドは実装済みで、{sandboxFiles} 個のサンドボックス関連ファイルを 1 つずつ確認できますが、第三者によるセキュリティ監査はまだ受けていません。',
      },
      {
        status: 'polish',
        title: 'デスクトップの操作感を調整中',
        desc: '{desktopComponents} 個の TSX コンポーネントと {desktopPages} 個のページは用意済みですが、ショートカット、アニメーション、境界ケースはまだ調整中です。',
      },
      {
        status: 'building',
        title: 'エコシステムマーケットの項目は限定的',
        desc: 'プラグインマーケット、MCP マーケット、スキルソースはつながっていますが、インストールできる項目はまだ拡充中です。',
      },
      {
        status: 'experimental',
        title: 'ACP / A2A は実験的実装',
        desc: 'この 2 つのプロトコルはまだ進化中で、インターフェースはリリースごとに変わる可能性があります。MCP と LSP は安定して利用できます。',
      },
      {
        status: 'building',
        title: '英語ドキュメントは遅れる場合があります',
        desc: '中国語ドキュメントはソースリポジトリから自動同期され、英語は手作業の翻訳のため、通常は中国語より 1 リリース遅れます。',
      },
      {
        status: 'note',
        title: 'ドキュメントとソースはリポジトリを正とする',
        desc: 'このサイトのドキュメントは app/docs から同期して生成しています。ソースと一致しない場合は GitHub リポジトリを正としてください。',
      },
    ],
    cta: '問題を見つけましたか？Issue を送る',
  },

  localFirst: {
    title: 'ローカルファースト',
    subtitle:
      'Ollama / llama.cpp のローカルモデルに対応し、データは既定で手元に保存します。クラウドプロバイダーに切り替えた場合、そのリクエストの内容だけが選択したプロバイダーへ送られます',
    benefits: [
      {
        title: 'オフラインで動作',
        desc: 'ローカルの Ollama または llama.cpp モデルなら、ネットワークなしでも会話とローカルツールの実行ができます。セッション、記憶、ナレッジベースはすべてローカルのファイルに書き込まれます。',
      },
      {
        title: 'データは既定で手元に',
        desc: 'セッション、記憶、ナレッジベースはローカルの SQLite とワークスペースディレクトリに保存され、会話履歴は events.jsonl に追記されるため、振り返りと監査が容易です。',
      },
      {
        title: '必要なときにクラウドを追加',
        desc: 'より強力なモデルが必要なときは、設定でクラウドプロバイダー（{providers} 種類に対応）を有効にし、ルーティングがタスクの tier ごとに選択します。ローカルモデルだけを使うこともできます。',
      },
    ],
    compareTitle: 'ローカルモード / クラウドモード',
    compareRows: [
      { label: 'モデルの実行場所', local: '手元（Ollama / llama.cpp）', cloud: 'プロバイダーのサーバー' },
      { label: 'ネットワークの要否', local: '不要', cloud: '必要' },
      { label: 'このリクエストの内容の行き先', local: '手元から出ない', cloud: '選択したプロバイダーへ送信' },
      { label: 'コストの源', local: '自前の計算資源', cloud: '利用量に応じた課金' },
      { label: '会話履歴', local: 'events.jsonl として手元に保存', cloud: '同じく手元に保存' },
    ],
  },

  quickstart: {
    title: 'クイックスタート',
    subtitle: '3 ステップ：依存関係のインストール → API キーの設定 → dev の実行',
    stepLabels: ['依存関係のインストール', 'API キーの設定', 'Liri の起動'],
    copy: 'コマンドをコピー',
    envComment: '# .env を編集して API キーを入力',
  },

  roadmap: {
    title: 'バージョンとリリース',
    subtitle:
      'バージョン番号、タグ数、コミット履歴は GitHub で確認できます。リポジトリの履歴には公開前の開発期間が含まれ、公開後は公開イテレーションに入ります',
    milestones: [
      {
        quarter: '2026-10-28',
        version: 'v{version}',
        label: '現在のバージョン',
        items: [
          '{tools} 個の組み込みツール · {toolCategories} 個のカテゴリ',
          '{channels} 個のメッセージチャネル',
          '{securityLayers} 層のセキュリティ + 6 種のサンドボックスバックエンド',
          'デスクトップ {desktopComponents} 個のコンポーネント · {desktopPages} 個のページ',
        ],
      },
      {
        quarter: '2026-10',
        version: 'v0.5.13 → v0.5.21',
        label: 'リリース済み',
        items: [
          '3 日間で 8 バージョンを連続リリース（v0.5.13 → v0.5.21）。開発期の公開作業の一環',
          'カーネルモジュールを外部へ移し、ゲートのベースラインを同期',
          '計画の進捗を成果物の実在に基づく方式へ変更',
          'サンドボックスの権限変更が即座に反映',
        ],
      },
      {
        quarter: 'リポジトリ累計',
        version: '{releases} 個のタグ',
        label: 'リリースのペース',
        items: [
          '累計 {commits} 回のコミット',
          'CI は lint:arch / 型チェック / ユニットテストをカバー',
          'リポジトリは公開で、Issue と PR は誰でも閲覧可能',
        ],
      },
      {
        quarter: '今後',
        version: 'v0.6+',
        label: '計画中',
        items: [
          'GitHub Releases と Issues を正とする',
          'オンラインドキュメントサイトは公開済み（中国語・英語）',
          '機能の優先順位は Issue での投票を歓迎',
        ],
      },
    ],
  },

  security: {
    title: '5 層の多層防御',
    subtitle: 'コンパイル時の AST 解析から実行時のサンドボックスまで。ルール数、しきい値、縮退方針はすべてソースに書かれています',
    layers: [
      {
        title: 'Rust AST コンパイル時解析',
        short:
          'コード実行前に Rust FFI で AST レベルのセキュリティ解析を行い、{dangerousRules} 件の危険コマンドルールに照合します',
        tag: 'コンパイル時',
        details: [
          'Rust FFI 層が Bash AST を解析',
          'Bash AST を解析し、{dangerousRules} 件の危険コマンドルールを適用',
          '変数インジェクションの検出とパストラバーサルの遮断',
          '引数の改ざん検出と許可リストによるコマンド検証',
        ],
      },
      {
        title: 'TypeScript 意味解析',
        short:
          '実行時に複合コマンドを区間ごとに判定し、拒否理由を具体的な文に紐づけます',
        tag: '実行時',
        details: [
          '複合的な読み取り専用コマンドを区間ごとに通し、全体を拒否しない',
          '{injectionRules} 件のインジェクションパターンを検出（ゼロ幅文字、環境変数の汚染を含む）',
          '{shellRules} 件の Shell 専用ルール（bash / PowerShell / cmd）',
          '拒否メッセージは実際の原因と該当する文を指す',
        ],
      },
      {
        title: 'Guardrail ルールエンジン',
        short:
          '設定可能なポリシールールシステム。ツール / チャネル / ユーザーグループ単位で細かく認可します',
        tag: 'ポリシー',
        details: [
          'deny-by-default の許可リスト方式',
          '権限の粒度：ツール → ルール → フィンガープリント',
          'ルール変更は再起動なしで即時反映',
          '拒否時はルールの出所と一致した文を返す',
        ],
      },
      {
        title: 'AutoMode 分類器',
        short:
          'タスクとツールのコンテキストからリスクレベルを判定し、許可・確認・拒否を自動で決めます',
        tag: '適応型',
        details: [
          'コマンドの意味とツールのコンテキストに基づくリスク分類',
          '低リスクのコマンドはポリシーに従い自動で許可',
          '高リスクは承認へ回し、Inbox に入れて処理待ちにする',
          '信頼できないコマンドは既定で拒否ではなく確認に回す',
        ],
      },
      {
        title: 'サンドボックス分離実行',
        short:
          '6 種の分離バックエンド：Landlock / macOS / Windows / Docker / SSH / PTY。権限を超えたコマンドはホストに到達できません',
        tag: '分離',
        details: [
          'Linux Landlock：カーネルレベルのファイルシステム制限',
          'macOS サンドボックス / Windows Low IL + Job によるフォールバック',
          'Docker コンテナ：完全分離 + リソースとネットワークのポリシー',
          'SSH リモート実行と PTY 疑似端末の経路制御',
          '利用できる分離バックエンドがない場合は正直に縮退し、その旨を表示',
        ],
      },
    ],
    protectionsTitle: 'セキュリティ防御の数値',
    protections: [
      { label: '危険コマンドルール', value: '{n}', desc: 'AST レベルでマッチし、bash / PowerShell / cmd をカバー' },
      { label: 'インジェクション検出ルール', value: '{n}', desc: 'ゼロ幅文字や環境変数の汚染などのインジェクション形態を含む' },
      { label: 'サンドボックスバックエンド', value: '{n}', desc: 'Landlock / macOS / Windows / Docker / SSH / PTY' },
      { label: 'サンドボックス実装ファイル', value: '{n}', desc: 'app/src/sandbox 配下の TypeScript 実装' },
    ],
    summary:
      'Rust AST コンパイル時解析 · TypeScript 意味解析 · Guardrail ルールエンジン · AutoMode 分類器 · サンドボックス分離実行',
  },

  smartRouter: {
    title: 'スマートルーティング',
    subtitle:
      'タスク種別と難易度からモデルの tier を選び、プライマリプロバイダーが使えない場合は設定順にフォールバックします',
    taskTypesHeading: '{taskTypes} 種のタスク種別を自動識別（以下は代表的な {common} 種）',
    taskTypes: [
      { name: 'コーディング', desc: 'コード生成・デバッグ・レビュー' },
      { name: '執筆', desc: 'ドキュメント・コピー・翻訳' },
      { name: '分析', desc: 'データ分析・推論・計画' },
      { name: 'ツール', desc: 'ファイル・検索・システム操作' },
      { name: '翻訳', desc: '多言語翻訳・ローカライズ' },
      { name: '検索', desc: 'Web 検索・情報検索' },
      { name: '発想', desc: 'ブレインストーミング・デザイン・アイデア出し' },
      { name: '雑談', desc: '日常会話・一般的なやり取り' },
    ],
    layersHeading: '{n} 段階の判定パイプライン',
    layers: [
      { name: 'L1: ルーティングスイッチ', desc: 'オフのときは追加判定なしで既定モデルへ直接接続' },
      { name: 'L2: ファストパス', desc: '単純なタスクやプレフィックスルールに一致したら下位 tier のモデルへ' },
      { name: 'L3: セッション固定', desc: '同じ会話では選択済みのモデルを維持し、頻繁な切り替えを避ける' },
      { name: 'L4: LLM 判定', desc: '小型モデルがタスク種別と難易度を判定し、tier を出力' },
      { name: 'L5: Tier 解決', desc: 'simple/medium/complex/reasoning を具体的なモデルに割り当て' },
    ],
    fallbackHeading: 'プロバイダーのフォールバックチェーン',
    fallbackNote: 'プライマリモデルが利用不可 → 自動フォールバック → 中断なく縮退',
    fallback: [
      { name: 'プライマリ', model: 'プライマリプロバイダー · 現在の tier のモデル' },
      { name: 'フォールバック 1', model: '同一 tier の予備プロバイダー' },
      { name: 'フォールバック 2', model: '別 tier へ縮退するプロバイダー' },
      { name: 'フォールバック 3', model: 'その他設定済みのプロバイダー' },
      { name: '最後の受け皿', model: 'ローカル Ollama / llama.cpp' },
    ],
  },

  sponsor: {
    meta: {
      title: 'Liri を支援する — Liri',
      description:
        'Liri は 1 人で保守しているオープンソースプロジェクトです。スポンサーは投げ銭ではなく時間を買うこと——外部セキュリティ監査、英語ドキュメントの校正、インフラに人手を回すためです。',
    },
    label: '支援',
    hero: {
      title: 'Liri を支援する',
      subtitle:
        'これは 1 人で保守しているオープンソースプロジェクトです。スポンサーは投げ銭ではなく、時間を買うこと——監査、ドキュメント、インフラに人手を回すためです。',
      note: '資金の使途は毎月下の台帳で公開します。MIT の部分は永遠に MIT です。',
    },
    channelsTitle: 'スポンサーの方法',
    channels: [
      {
        title: 'GitHub Sponsors',
        desc: '国際向け。月額スポンサーで、名前と金額は GitHub 上で自然に公開されます。',
        cta: '毎月支援する',
      },
      {
        title: 'Afdian',
        desc: '中国国内向け。Alipay / WeChat に対応し、月額または任意の金額を選べます。',
        cta: 'Afdian へ',
      },
    ],
    comingSoon: '近日開始',
    pendingNote: '中国国内の窓口（Afdian）は準備中で、開始後にここへ追加します。',
    waitlistNote:
      'GitHub Sponsors の受け取りには対応地域のアカウントが必要で、中国本土はまだ対象外です。申請は提出済みで審査中です。',
    contact: '企業サポートやその他のご質問は Issues に 1 件立ててください（sponsor タグ推奨）',
    usesTitle: '資金の使途',
    usesNote: '割合はメンテナーの計画値であり、約束ではありません。実際の支出は毎月台帳に記録します。',
    uses: [
      { label: '外部セキュリティ監査', share: '~40%', desc: '5 層の防御線と 6 種のサンドボックスバックエンドはまだ第三者監査を受けておらず、ここが最も不足しています' },
      { label: 'CI とリリース署名', share: '~20%', desc: 'マルチプラットフォームのビルド、インストーラーの署名、リリースパイプライン' },
      { label: '英語ドキュメントの校正', share: '~15%', desc: '現在の英語は手作業の翻訳で、通常は中国語より 1 リリース遅れます' },
      { label: 'モデル API の利用枠', share: '~15%', desc: '評価と回帰テストにはモックではなく実際の呼び出しが必要です' },
      { label: 'ドメインとホスティング', share: '~10%', desc: '公式サイト、ドキュメントサイト、ミラー' },
    ],
    notTitle: '約束しないこと',
    nots: [
      '機能の優先順位は買えません：Issue の優先度は金額ではなく影響範囲で決まります',
      '優先サポートは買えません：全員が同じ Issue で順番に並びます',
      'クローズドソースの特権版は作りません：MIT の部分は永遠に MIT です',
      'あなたの名前を公開しません：明確に同意した場合を除きます',
    ],
    tiersTitle: 'スポンサーの段階',
    tiers: [
      { title: '月額 ¥10', desc: '名前を SPONSORS.md に掲載' },
      { title: '任意の金額', desc: '単発の支援。金額は自由です' },
      { title: '企業サポート', desc: 'logo + リンク。請求書が必要な場合は Issues からご連絡ください（法人取引）' },
    ],
    ledgerTitle: '透明な台帳',
    ledgerDesc: '毎月 1 行：収入 / 支出 / 残高。書式を先に定め、最初の行はスポンサー開始の月から記録します。',
    ledgerHeaders: ['月', '収入', '支出', '残高'],
    ledgerEmpty: '記録はまだありません',
    otherTitle: 'お金をかけずにできること',
    others: [
      { title: 'Star と共有', desc: '必要としている人に届ける', href: 'https://github.com/cocosoft/Liri' },
      { title: '再現手順付きの Issue', desc: '再現できるバグ 1 つは 10 の感想より有用です', href: 'https://github.com/cocosoft/Liri/issues/new' },
      { title: '英語ドキュメントの校正', desc: '英語版は手作業の翻訳です。誤りの指摘を歓迎します', href: '/docs' },
      { title: 'セキュリティ監査', desc: 'チェックリストを 1 項目ずつ検証してください。脆弱性の詳細は公開しないでください', href: '/evolution' },
      { title: '空白を 1 つ引き受ける', desc: 'メンテナー制度、契約層、カバレッジゲート', href: '/evolution' },
    ],
    faqTitle: 'よくある質問',
    faq: [
      { q: '請求書は発行できますか？', a: '個人向けの窓口ではできません。企業サポートは Issues からご連絡ください。法人取引で対応します。' },
      { q: '使途を指定できますか？', a: '備考は書けますが、最終的な配分は上記の割合に従います。' },
      { q: '返金できますか？', a: '月額スポンサーはいつでも解約できます。支払い済みの月の返金はありません。' },
      { q: '名前は公開されますか？', a: '既定では公開しません。SPONSORS.md に掲載を希望する場合はスポンサー時にコメントを残してください。' },
    ],
  },

  status: {
    meta: {
      title: 'プロジェクトの状態 — Liri',
      description:
        '機能セルフチェック、現在の制限、リリースのペース、技術スタック。Liri が今どこまでできて、何が未完了かを 1 ページで把握できます。数字はすべてソースへ飛べます。',
    },
    label: '状態',
    title: 'プロジェクトの状態',
    subtitle:
      '機能セルフチェック、現在の制限、リリースのペース、技術スタック——現状どこまでできて、何が未完了かを 1 ページで把握できます。数字はすべてソースへ飛べます。',
    jumpLabel: 'このページの内容',
    jumps: [
      { href: '#comparison', label: 'セルフチェック' },
      { href: '#limitations', label: '現在の制限' },
      { href: '#roadmap', label: 'バージョンとリリース' },
      { href: '#techstack', label: '技術スタック' },
      { href: '#local-first', label: 'ローカルファースト' },
    ],
    healthNote: 'アーキテクチャ健全性の推移（9 回のスナップショット）は次のバージョンでこのページに追加します。',
    updateNote: 'このページはリリースごとに更新します。ソースと一致しない場合は GitHub リポジトリを正としてください。',
  },

  techstack: {
    title: '技術スタック',
    subtitle: '現代的な技術選定で、どの層も熟考しています',
    items: [
      { label: 'TypeScript', pct: '{n} ファイル', desc: 'コア言語 · 約 {lines} 行' },
      { label: 'Rust', pct: '{n} モジュール', desc: 'AST / セキュリティ / 圧縮のネイティブモジュール' },
      { label: 'Bun', pct: '', desc: 'ランタイム' },
      { label: 'React 19 + Ink', pct: '', desc: 'ターミナル UI' },
      { label: 'Tauri 2.11', pct: '{n} コンポーネント', desc: 'デスクトップクライアント' },
      { label: 'SQLite', pct: '', desc: 'データとベクトルの保存' },
      { label: 'OpenTelemetry', pct: '', desc: '可観測性' },
      { label: 'MCP + ACP + A2A + LSP', pct: '', desc: 'プロトコル' },
      { label: 'Docker', pct: '', desc: 'サンドボックスバックエンドの 1 つ' },
      { label: 'MIT License', pct: '', desc: 'オープンソースライセンス' },
    ],
  },

  voiceInteraction: {
    title: '音声インタラクション',
    subtitle: 'タイピングだけではありません——話せば、Liri が理解し、実行し、答えます',
    features: [
      {
        title: '音声入力',
        desc: 'ローカルの faster-whisper と SenseVoice、またはクラウドの OpenAI Whisper',
        platforms: ['ローカル faster-whisper', 'SenseVoice', 'OpenAI Whisper', 'ストリーミング認識'],
      },
      {
        title: '音声出力',
        desc: 'ローカルの Piper またはクラウドの Edge / OpenAI。独自コマンドも接続可能',
        platforms: ['ローカル Piper', 'Edge TTS', 'OpenAI TTS', 'カスタムコマンド'],
      },
      {
        title: 'ツールとしての呼び出し',
        desc: '音声機能自体もツールで、モデルが必要に応じて呼び出せます',
        platforms: ['tts ツール', 'audio_play ツール', '音声入力', '返答の読み上げ'],
      },
      {
        title: 'マルチデバイス対応',
        desc: 'デスクトップとターミナルが同じ音声サービスを共有',
        platforms: ['Tauri デスクトップ', 'CLI ターミナル', 'HTTP API'],
      },
    ],
    scenarios: 'ハンズフリー操作 · マルチタスク · アクセシビリティ支援 · 音声ショートカット ·',
    scenariosHighlight: 'いつでもどこでも、話せば実行',
  },
};
