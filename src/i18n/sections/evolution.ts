/** 「演进 / Build Log」页文案 */
const zh = {
  meta: {
    title: '演进 — Liri',
    description:
      '从 v0.1 到 v0.5.22：Liri 如何从 4000 个文件收敛成有边界、有门禁、能被别人接手的系统。每个转折点都附源码与 CHANGELOG 证据。',
  },

  hero: {
    eyebrow: 'BUILD LOG',
    title: '一条还没走完的路',
    subtitle:
      '从 v0.1 到 v0.5.22，156 天，116 个版本段。这里写的不是功能清单，是我们踩过的坑、换来的规则，和还没填上的空白。',
    stats: [
      { value: '156 天', label: '从首发到今天' },
      { value: '116', label: '个版本段' },
      { value: '9', label: '次架构快照' },
      { value: '20+', label: '项架构检查' },
    ],
    scroll: '跳到时间线',
  },

  origin: {
    title: '起源',
    paragraphs: [
      '2026 年 5 月 25 日，Liri 的第一个版本是 v0.1：100 次实质提交，一个能跑起来的终端 AI 助手。',
      '最初想解决的问题很具体——让大模型真的坐在终端里，读文件、跑命令、改代码，而不是只在一个网页输入框里聊天。选择本地模型优先，是因为不想把私人文件传到别人的服务器；选择「安全内生」，是因为它拿到的是一台真实的机器，而不只是一个 API。',
      '接下来的三个月，能力被一条条铺开：工具、27 个消息渠道、桌面端、语音、知识库。到 8 月，仓库里有 4000 多个文件。',
      '也是在那时，问题第一次被明确指出来。2026 年 6 月 18 日的代码复查里：LocalHTTPService 7200 行，ChatManager 3263 行，测试文件 150 个，源码文件 3742 个。两个月后，架构健康度第一次打分：10/40，D 级，105 个超限文件全部未登记。',
      '那时才明白：判断一个项目能不能被别人接手，不看它有多少功能，而看它踩过坑之后长出了什么规则。',
    ],
  },

  nodes: {
    title: '五个转折点',
    note: '按因果排序，不是日历顺序——时间上有交叠。',
    items: [
      {
        id: 'n1',
        period: '2026-05-25 → 2026-08',
        title: '先把能力铺开，边界放后面',
        situation: 'v0.1 只有 100 次提交，能跑起来就算赢；功能优先级高于结构。',
        decision: '先把能力铺满：工具、渠道、桌面端、语音、知识库，一个一个补。',
        cost:
          '审计第一次给出数字时很难看——LocalHTTPService 7200 行、ChatManager 3263 行，测试与源码比约 4%，首次架构健康度只有 10/40（D），105 个超限文件全部没登记。',
        result: '4000+ 文件、82 个工具、27 个渠道、425 个桌面组件。',
        evidence: [
          { label: 'CHANGELOG v0.1', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
          { label: '2026-06-18 代码复查', href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/codebase-review-20260618.md' },
        ],
        participate: '想加新能力：在 app/src 下起模块，不要往内核里塞。',
      },
      {
        id: 'n2',
        period: '2026-08-09 → 2026-09-30',
        title: '先学会量自己',
        situation: '问题人人都能感觉到，但没人说得清「差多少」。',
        decision:
          '把架构质量做成可重复的评分与台账（architecture-health），超限文件必须登记；放弃了「靠自觉保持整洁」这个假设。',
        cost:
          '登记不等于拆分——ChatManager 反而从 3263 行涨到 7036 行；评分口径本身也在变，所以它只能当体检表，不能当 KPI。',
        result: '9 次快照；未登记超限文件从 105 降到 0（后回弹到 2）；超限清单从「没人知道」变成一份可追溯的台账。',
        evidence: [
          {
            label: 'architecture-health-history.json',
            href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/architecture-health-history.json',
          },
          { label: 'architecture-health.ts', href: 'https://github.com/cocosoft/Liri/blob/main/scripts/architecture-health.ts' },
        ],
        participate: '认领一个超限文件的拆分（见下方参与方式）。',
      },
      {
        id: 'n3',
        period: '2026-10-08 → 10-09',
        title: '一次删错，换来一条删除流程',
        situation:
          '代码里积累了一批看起来没人引用的「死面」。v0.4.69 的清理把沙箱与隔离子系统当成死代码删除——那一版动了 170 个文件，+9340 / −10174 行。',
        decision:
          '第二天 v0.4.71 整批回滚：恢复 24 个文件（IsolationManager、EnhancedSandboxManager、PTYSandbox、SSHSandbox、docker/** 等，外加 5 项测试），并回滚 21 个存活文件的配套改动。',
        cost: '清理一个文件要先写证据，流程变慢；但比删错再回滚快。',
        result:
          'v0.4.72 落地删除流程 code-deletion.md（CD01–CD07）：先取证、再摘入口、后删实现。「看起来没人用」不再是删除理由。',
        evidence: [
          { label: 'CHANGELOG v0.4.69 / v0.4.71 / v0.4.72', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
        ],
        participate: '按 CD01–CD07 做一次「死代码候选」核对。',
      },
      {
        id: 'n4',
        period: '2026-10-10 → 10-22',
        title: '把规则变成门禁',
        situation: '规则写在文档里，靠自觉；文档和代码开始漂移。',
        decision:
          '每条规则都做成 CI 阻断而不是建议：五道门禁 + doc-gate + sandbox-negative 必需 job；硬编码基线 413 键；状态词表 34 个值、1795 对基线；启动面、关键模块、内核面各一道。',
        cost: '每次提交多几秒；改词表要同步基线——口径不能再随手改，这恰恰是目的。',
        result: 'lint:arch 违规 0；测试从 3029 涨到 7488。',
        evidence: [
          { label: 'AGENTS.md 门禁清单', href: 'https://github.com/cocosoft/Liri/blob/main/AGENTS.md' },
          { label: 'CI 工作流', href: 'https://github.com/cocosoft/Liri/blob/main/.github/workflows/ci.yml' },
        ],
        participate: '提交前先跑一遍本地门禁（bun run ci），红在哪就修哪。',
      },
      {
        id: 'n5',
        period: '2026-10-05 → 10-28',
        title: '内核收缩：从 5336 行到独立包',
        situation: 'core 既是入口实现，又是所有能力的公共腹地，谁都能往里加。',
        decision:
          '三步走——先砍（CoreAPIImpl 5336 → 2521 行），再抽包（@openliri/kernel 独立，core 146 → 113 个文件，K01–K08 内核门禁），最后外移（37 个不满足「零 I/O / 零上层依赖」的模块下沉 app/src，同步 470+ 处 import，5 类基线重生成）。',
        cost: '一次大迁移，全部基线重生成；10-18 起改成按批次收口，提交密度主动降下来。',
        result: '内核对外只剩一层薄接口，外部贡献第一次有了明确边界。',
        evidence: [{ label: 'CHANGELOG v0.5.22', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' }],
        participate: '内核边界之外的新能力，从 app/src 起步，不必进内核。',
      },
    ],
    fieldLabels: {
      situation: '处境',
      decision: '决策',
      cost: '代价',
      result: '结果',
      evidence: '证据',
      participate: '可以参与',
    },
  },

  model: {
    title: '架构：像操作系统那样分层',
    intro:
      '架构不是重新发明的。薄内核、子系统边界、依赖方向、门禁与可观测——这套组织方式来自操作系统几十年的工程实践；Agent 领域近两年公开的设计模式与工程指南，也基本收敛到同一组问题：分层、边界、状态、治理、评估。我们按前者的方式约束自己，用后者的清单做自查。',
    mappingTitle: '操作系统概念 → Liri 现状',
    headers: { concept: '概念', liri: 'Liri 里对应什么', status: '状态' },
    statuses: {
      ready: '已落地',
      converging: '收敛中',
      audit: '待外部审计',
      missing: '空白',
    },
    rows: [
      { concept: '内核', liri: '@openliri/kernel 独立包，对外只暴露薄接口，K01–K08 门禁', status: 'ready' },
      {
        concept: '子系统',
        liri: '工具 / 渠道 / 记忆 / 路由 / 沙箱 / 任务 / 语音 / 桌面，各有入口与边界',
        status: 'converging',
      },
      {
        concept: '驱动',
        liri: 'provider 适配器、渠道适配器、6 种沙箱后端（Landlock / Docker / SSH / PTY / macOS / Windows）',
        status: 'ready',
      },
      { concept: '进程与调度', liri: '会话执行、PDCA、Swarm、Cron', status: 'ready' },
      {
        concept: '权限模型',
        liri: '五层防线 + 审批四段（requested → presented → decided → recorded）',
        status: 'audit',
      },
      { concept: '可观测与审计', liri: '事件日志、成本账本、证据台账', status: 'ready' },
      { concept: '维护者（MAINTAINERS）', liri: '尚未建立：没有子系统 owner 与接手路径', status: 'missing' },
    ],
    referenceTitle: '我们参考了什么',
    referenceBody:
      '我们逐项对标了公开的 Agent 设计模式与工程指南：21 个模式都有真实实现，但其中 3 个关键开关默认关闭——所以对外只说「有实现」，不说「默认生效」。工程主线也按同样五段自查：架构、构建、运行、治理、调优。',
    blanksTitle: '三块空白',
    blanks: [
      { title: '子系统维护者制度', desc: '没有 owner 就没有接手路径。这是最像操作系统、也最缺的一块。' },
      { title: '子系统契约层', desc: '契约设计稿已有，台账 / LoopProfile 是否落地未核实——接口稳定承诺还没写死。' },
      { title: '覆盖率门禁', desc: '复查时约 4%；CI 有 20+ 项架构检查，但还没有覆盖率门槛。' },
    ],
    honesty:
      '说实话：架构健康度仍是 D（13/40），121 个超限文件待拆，最大的是 ChatManager（7036 行）。内核有了，边界在收敛，维护者制度还没有——这就是「还没走完」的意思。',
    layersToggle: '展开当前 8 层功能分层',
    cta: '查看完整状态',
  },

  timeline: {
    title: '时间线',
    subtitle: '每月一条，只记架构与治理上的变化，不收录普通提交。',
    items: [
      { date: '2026-05-25', text: 'v0.1：100 次实质提交，终端助手跑起来' },
      { date: '2026-06-18', text: '第一次代码复查：7200 行巨石文件，测试与源码比约 4%' },
      { date: '2026-08-09', text: '第一次架构健康度：10/40（D），105 个超限文件未登记' },
      { date: '2026-10-09', text: '沙箱被清理误删 → 整批回滚；次日落地删除流程 CD01–CD07' },
      { date: '2026-10-20', text: '状态词表门禁上线：34 个值、1795 对基线' },
      { date: '2026-10-28', text: '内核外移落定；默认可见工具收口到 12 个、1397 token' },
      { date: '2026-10-28', text: '中英双语文档站与本站上线' },
    ],
    more: '之后的每月更新会继续追加在这里。',
  },

  participate: {
    title: '参与方式',
    subtitle: '这页不是结项报告，是邀请。三件事，都有人手缺口。',
    cards: [
      {
        title: '认领一块空白',
        desc: 'Domain-first 知识域隔离已有设计稿，Phase A/B/C 未实施；内核边界之外的功能也不需要先进内核。',
        cta: '认领任务',
      },
      {
        title: '帮我们把账还掉',
        desc: '121 个超限文件待拆，最大的是 ChatManager（7036 行）；测试覆盖率门槛还没建。',
        cta: '认领任务',
      },
      {
        title: '审计我们的安全',
        desc: '五层防线与 6 种沙箱后端已实现，规则源码可查，但还没有第三方审计。这是我们最想要的反馈。',
        cta: '看审计清单',
      },
    ],
    audit: {
      title: '安全审计清单',
      items: [
        '危险命令规则：37 条规则在哪、怎么触发——构造一次，看拦截是否落在预期的那一条',
        '提示注入规则：14 条注入规则，喂一段恶意文档看是否被拦',
        'Shell 规则：10 条白 / 黑名单，验证绕过路径（管道、子 shell、编码）',
        '沙箱降级逻辑：6 种后端各自在什么条件下降级、降级后是否 fail-closed',
        '审批四段：requested → presented → decided → recorded 是否有漏段或乱序',
        '越权面：工具调用能否绕过权限分类器直接落盘或执行',
      ],
      note: '入口：app/src/security、app/src/sandbox、app/src/permission。',
    },
    securityNotice:
      '发现漏洞细节请按 SECURITY.md 私密报告，不要开公开 issue；公开 issue 只讨论审计流程与覆盖范围。',
    ctaGithub: '在 Issues 里认领或提问',
    ctaSecurity: '打开安全自查路径',
    fundLink: '想用资金支持？查看赞助页',
  },

  teaser: {
    title: '一条还没走完的路',
    paragraphs: [
      '2026 年 5 月 25 日，它只有 v0.1 和 100 次提交。五个月后，它长到 4000 多个文件、82 个工具、27 个渠道——也长出了代价：7000 行的巨石文件、105 个无人登记的超限文件，一次「清理死代码」甚至删掉了整个沙箱子系统。',
      '我们回滚、恢复，然后把删除、边界、状态词表一条条做成 CI 门禁。这条路还没走完。',
    ],
    stats: ['156 天', '116 个版本段', '20+ 项架构检查'],
    cta: '读完整故事',
  },
};

const en = {
  meta: {
    title: 'Build Log — Liri',
    description:
      'From v0.1 to v0.5.22: how Liri went from 4,000 files to a system with boundaries, gates and an interface others can pick up. Every turning point links to source and CHANGELOG evidence.',
  },

  hero: {
    eyebrow: 'BUILD LOG',
    title: 'A road that is still being built',
    subtitle:
      'From v0.1 to v0.5.22 — 156 days, 116 releases. This is not a feature list; it is the mistakes we made, the rules we earned, and the blanks we have not filled yet.',
    stats: [
      { value: '156 days', label: 'since first release' },
      { value: '116', label: 'releases' },
      { value: '9', label: 'architecture snapshots' },
      { value: '20+', label: 'architecture checks' },
    ],
    scroll: 'Jump to the timeline',
  },

  origin: {
    title: 'Origin',
    paragraphs: [
      'On 25 May 2026, Liri shipped v0.1: 100 commits and a terminal AI assistant that could actually run.',
      'The problem was concrete — let the model sit in the terminal, read files, run commands and edit code, instead of chatting in a web input box. Local models first, because private files should not have to leave the machine; security by design, because the assistant is handed a real computer, not just an API.',
      'Over the next three months, capability was added layer by layer: tools, 27 messaging channels, a desktop client, voice, a knowledge base. By August the repository held more than 4,000 files.',
      'That is also when the problem was named out loud. The 18 June 2026 code review found LocalHTTPService at 7,200 lines and ChatManager at 3,263, with 150 test files against 3,742 source files. Two months later the first architecture health score came back: 10/40, grade D, with 105 oversized files, none of them registered.',
      'The lesson: whether a project can be handed to someone else is decided not by how many features it has, but by the rules it grows after it hits a wall.',
    ],
  },

  nodes: {
    title: 'Five turning points',
    note: 'Ordered by cause, not by calendar — some periods overlap.',
    items: [
      {
        id: 'n1',
        period: '2026-05-25 → 2026-08',
        title: 'Ship capability first, boundaries later',
        situation: 'v0.1 had 100 commits; shipping beat structure.',
        decision: 'Fill in capability first: tools, channels, desktop, voice, knowledge — one at a time.',
        cost:
          'The first audit was ugly: LocalHTTPService at 7,200 lines, ChatManager at 3,263, a test-to-source ratio around 4%, and a first health score of 10/40 (D) with 105 unregistered oversized files.',
        result: '4,000+ files, 82 tools, 27 channels, 425 desktop components.',
        evidence: [
          { label: 'CHANGELOG v0.1', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
          {
            label: 'Code review, 18 Jun 2026',
            href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/codebase-review-20260618.md',
          },
        ],
        participate: 'Adding capability? Start a module under app/src, not inside the kernel.',
      },
      {
        id: 'n2',
        period: '2026-08-09 → 2026-09-30',
        title: 'Learn to measure ourselves',
        situation: 'Everyone could feel the problem; nobody could say how bad it was.',
        decision:
          'Turn architecture quality into a repeatable score with a register, and require every oversized file to be registered — giving up the assumption that cleanliness survives on discipline alone.',
        cost:
          'Registering is not splitting: ChatManager grew from 3,263 to 7,036 lines. The scoring itself kept changing, so it is a health check, not a KPI.',
        result:
          'Nine snapshots; unregistered oversized files went from 105 to 0 (later back to 2); the list became a traceable register.',
        evidence: [
          {
            label: 'architecture-health-history.json',
            href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/architecture-health-history.json',
          },
          { label: 'architecture-health.ts', href: 'https://github.com/cocosoft/Liri/blob/main/scripts/architecture-health.ts' },
        ],
        participate: 'Claim one oversized file to split (see Ways to help below).',
      },
      {
        id: 'n3',
        period: '2026-10-08 → 10-09',
        title: 'One bad delete bought us a deletion process',
        situation:
          'The codebase had accumulated a layer of apparently unused "dead surfaces". The v0.4.69 cleanup treated the sandbox and isolation subsystem as dead code: 170 files touched, +9,340 / −10,174 lines.',
        decision:
          'The next day, v0.4.71 rolled the whole thing back — 24 files restored (IsolationManager, EnhancedSandboxManager, PTYSandbox, SSHSandbox, docker/** and more, plus 5 test suites) and 21 live files reverted to match.',
        cost: 'Deleting now takes longer: you write evidence first. Still cheaper than a rollback.',
        result:
          'v0.4.72 turned deletion into a process, code-deletion.md (CD01–CD07): collect evidence, detach entry points, then delete. "Nobody seems to use it" stopped being a reason.',
        evidence: [
          { label: 'CHANGELOG v0.4.69 / v0.4.71 / v0.4.72', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
        ],
        participate: 'Review one "dead code candidate" against CD01–CD07.',
      },
      {
        id: 'n4',
        period: '2026-10-10 → 10-22',
        title: 'Turn rules into gates',
        situation: 'Rules lived in documents and relied on discipline; documents and code began to drift.',
        decision:
          'Every rule became a CI blocker rather than advice: five gates plus doc-gate and a required sandbox-negative job; 413 hardcoding baseline keys; a 34-value state vocabulary with 1,795 baseline pairs; startup-surface, critical-module and kernel-surface gates.',
        cost:
          'A few seconds per commit, and baselines must be regenerated with every vocabulary change — the point is that definitions can no longer drift silently.',
        result: 'lint:arch violations at 0; tests grew from 3,029 to 7,488.',
        evidence: [
          { label: 'AGENTS.md gate list', href: 'https://github.com/cocosoft/Liri/blob/main/AGENTS.md' },
          { label: 'CI workflow', href: 'https://github.com/cocosoft/Liri/blob/main/.github/workflows/ci.yml' },
        ],
        participate: 'Run the local gates (bun run ci) before you push — fix whatever goes red.',
      },
      {
        id: 'n5',
        period: '2026-10-05 → 10-28',
        title: 'Shrink the kernel: from 5,336 lines to its own package',
        situation: 'The core was both the entry implementation and everyone’s shared backyard — anyone could add to it.',
        decision:
          'Three steps: shrink (CoreAPIImpl 5,336 → 2,521 lines), extract (@openliri/kernel as its own package; core from 146 to 113 files with kernel gates K01–K08), then evict (37 modules failing the "zero I/O / zero upward dependency" rule moved into app/src, 470+ imports updated, five baseline families regenerated).',
        cost:
          'One large migration and full baseline regeneration; since 18 Oct work lands in batches and commit density is deliberately lower.',
        result: 'The kernel now exposes a thin interface; external contributions finally have a boundary.',
        evidence: [{ label: 'CHANGELOG v0.5.22', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' }],
        participate: 'New capabilities live outside the kernel boundary and start in app/src.',
      },
    ],
    fieldLabels: {
      situation: 'Situation',
      decision: 'Decision',
      cost: 'Cost',
      result: 'Result',
      evidence: 'Evidence',
      participate: 'Ways in',
    },
  },

  model: {
    title: 'Architecture: layered like an operating system',
    intro:
      'The architecture was not invented from scratch. A thin kernel, subsystem boundaries, one-way dependency direction, gates and observability come from decades of operating-system practice; the design-pattern and engineering guides published for agents over the last two years converge on the same questions — layering, boundaries, state, governance, evaluation. We constrain ourselves the first way and audit ourselves against the second.',
    mappingTitle: 'OS concept → where Liri stands',
    headers: { concept: 'Concept', liri: 'In Liri', status: 'Status' },
    statuses: {
      ready: 'Shipped',
      converging: 'Converging',
      audit: 'Pending audit',
      missing: 'Missing',
    },
    rows: [
      { concept: 'Kernel', liri: '@openliri/kernel as its own package with a thin public interface, guarded by K01–K08', status: 'ready' },
      {
        concept: 'Subsystems',
        liri: 'Tools / channels / memory / routing / sandbox / tasks / voice / desktop — each with its own entry points and boundaries',
        status: 'converging',
      },
      {
        concept: 'Drivers',
        liri: 'Provider adapters, channel adapters and 6 sandbox backends (Landlock / Docker / SSH / PTY / macOS / Windows)',
        status: 'ready',
      },
      { concept: 'Processes & scheduling', liri: 'Session execution, PDCA, Swarm, Cron', status: 'ready' },
      {
        concept: 'Permission model',
        liri: 'Five defense layers plus four approval stages (requested → presented → decided → recorded)',
        status: 'audit',
      },
      { concept: 'Observability & audit', liri: 'Event log, cost ledger, evidence ledger', status: 'ready' },
      { concept: 'Maintainers', liri: 'Not established yet: no subsystem owners and no hand-over path', status: 'missing' },
    ],
    referenceTitle: 'What we compared against',
    referenceBody:
      'We benchmarked ourselves item by item against publicly available agent design patterns and engineering guides: all 21 patterns have real implementations, but 3 of the key switches default to off — so we only claim "implemented", never "on by default". The engineering loop is audited the same way: architecture, build, run, govern, optimize.',
    blanksTitle: 'Three blanks',
    blanks: [
      { title: 'Subsystem maintainers', desc: 'Without owners there is no hand-over path. This is the most OS-like piece, and the one we lack.' },
      { title: 'Subsystem contracts', desc: 'The contract design exists, but whether the ledger / LoopProfile landed is unverified — interface stability is not yet pinned down.' },
      { title: 'Coverage gate', desc: 'About 4% at review time; CI runs 20+ architecture checks, but there is no coverage threshold yet.' },
    ],
    honesty:
      'To be honest: the architecture health score is still D (13/40), 121 oversized files are waiting to be split, the largest being ChatManager at 7,036 lines. The kernel exists, boundaries are converging, maintainers do not exist yet — that is what "not finished" means.',
    layersToggle: 'Expand the current 8 functional layers',
    cta: 'See full status',
  },

  timeline: {
    title: 'Timeline',
    subtitle: 'One entry per month — architecture and governance only, no routine commits.',
    items: [
      { date: '2026-05-25', text: 'v0.1: 100 commits, the terminal assistant runs' },
      { date: '2026-06-18', text: 'First code review: a 7,200-line monolith, ~4% test-to-source ratio' },
      { date: '2026-08-09', text: 'First health score: 10/40 (D), 105 oversized files unregistered' },
      { date: '2026-10-09', text: 'Sandbox deleted by a cleanup → full rollback; deletion process CD01–CD07 the next day' },
      { date: '2026-10-20', text: 'State vocabulary gate ships: 34 values, 1,795 baseline pairs' },
      { date: '2026-10-28', text: 'Kernel eviction lands; model-visible tools capped at 12 / 1,397 tokens' },
      { date: '2026-10-28', text: 'Bilingual documentation site and this page go live' },
    ],
    more: 'Monthly entries will be appended here.',
  },

  participate: {
    title: 'Ways to help',
    subtitle: 'This page is not a wrap-up report, it is an invitation. Three gaps, all of them need hands.',
    cards: [
      {
        title: 'Claim a blank',
        desc: 'Domain-first knowledge isolation has a design but Phases A/B/C are unimplemented; new capabilities do not need to enter the kernel.',
        cta: 'Claim a task',
      },
      {
        title: 'Help us pay down the debt',
        desc: '121 oversized files are waiting to be split, the largest being ChatManager at 7,036 lines; there is no coverage gate yet.',
        cta: 'Claim a task',
      },
      {
        title: 'Audit our security',
        desc: 'Five defense layers and six sandbox backends are implemented and their rules are readable in source — but no third-party audit has been done. This is the feedback we want most.',
        cta: 'See the checklist',
      },
    ],
    audit: {
      title: 'Security audit checklist',
      items: [
        'Dangerous-command rules: 37 rules — where they live, how they fire; build one case and check it hits the expected rule',
        'Prompt-injection rules: 14 rules — feed a malicious document and see whether it is stopped',
        'Shell rules: 10 allow / deny entries — try bypass paths (pipes, subshells, encoding)',
        'Sandbox degradation: when each of the 6 backends degrades, and whether it fails closed',
        'Approval stages: requested → presented → decided → recorded — look for missing or out-of-order stages',
        'Privilege surface: can a tool call bypass the permission classifier and write or execute directly?',
      ],
      note: 'Entry points: app/src/security, app/src/sandbox, app/src/permission.',
    },
    securityNotice:
      'Report vulnerability details privately via SECURITY.md — do not open a public issue. Public issues are for audit process and coverage only.',
    ctaGithub: 'Claim or ask in Issues',
    ctaSecurity: 'Open the security path',
    fundLink: 'Prefer to fund it? See the sponsor page',
  },

  teaser: {
    title: 'A road that is still being built',
    paragraphs: [
      'On 25 May 2026 it was a single v0.1 with 100 commits. Five months later it holds 4,000+ files, 82 tools and 27 channels — and the bill that comes with them: a 7,000-line monolith, 105 oversized files nobody had registered, and one "dead code cleanup" that deleted the entire sandbox subsystem.',
      'We restored it, then turned deletion, boundaries and state vocabularies into CI gates one by one. The road is not finished.',
    ],
    stats: ['156 days', '116 releases', '20+ architecture checks'],
    cta: 'Read the full story',
  },
} satisfies typeof zh;

export const evolution = { zh, en };
