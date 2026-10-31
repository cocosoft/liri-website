/** 한국어 번역. 구조는 en 객체와 일대일로 대응합니다. */
export const ko = {
  ui: {
    meta: {
      homeTitle: 'Liri — 당신의 AI 개인 비서',
      homeDescription:
        'Liri는 오픈소스(MIT) 터미널 AI 에이전트입니다: 내장 도구 {tools}개, 메시지 채널 {channels}개, 5계층 보안 방어, 로컬 모델 지원과 다중 프로바이더 라우팅을 갖추고 있습니다.',
    },

    nav: {
      capabilities: '핵심 기능',
      architecture: '아키텍처',
      security: '보안',
      routing: '라우팅',
      voice: '음성',
      brain: '세컨드 브레인',
      desktop: '데스크톱',
      cost: '비용',
      ecosystem: '생태계',
      evolution: '개발 로그',
      start: '시작하기',
      docs: '문서',
      openMenu: '메뉴 열기',
      closeMenu: '메뉴 닫기',
    },

    lang: {
      label: '언어',
      switchToZh: '중국어로 전환',
      switchToEn: '영어로 전환',
    },

    stage: {
      label: '빠른 반복 기간',
      note: 'API와 문서가 변경될 수 있습니다',
      detail:
        '현재 빠른 반복 기간으로, API와 설정 항목, 문서가 버전에 따라 조정됩니다. 업그레이드 전에 릴리스 노트를 확인해 주세요.',
      cta: '릴리스 노트',
    },

    footer: {
      tagline: 'AI 개인 비서 · 로컬 우선 · 보안 내장',
      resources: '리소스',
      repo: 'GitHub 저장소',
      issue: '이슈 제출',
      releases: '릴리스 노트',
      license: 'MIT License',
      community: '커뮤니티',
      discord: 'Discord (출시 예정)',
      docs: '사용 문서',
      status: '프로젝트 상태',
      evolution: '개발 로그',
      support: 'Liri 후원하기',
      discussions: 'Discussions (곧 시작)',
      copyright: '© {year} Liri. Released under MIT License.',
      stats:
        'TS 파일 {tsFiles}개 · 도구 {tools}개 · 보안 {securityLayers}계층 · 채널 {channels}개 · Buddy 종 {buddySpecies}가지',
    },

    docs: {
      label: '문서',
      pageTitle: '문서 — Liri',
      pageDescription: 'Liri의 설치, 설정, 채널 연동과 명령 참조.',
      all: '전체 문서',
      articleTitle: '{title} — Liri 문서',
      backHome: '홈으로 돌아가기',
      indexTitle: '사용 문서',
      indexIntro:
        'GitHub 저장소의 <code class="font-mono text-brand-400">app/docs</code>에서 동기화되었으며, 총 {count}편입니다.',
      footerNote:
        '문서와 소스가 다를 수 있으므로 <a class="text-surface-400 hover:text-surface-200" href="https://github.com/cocosoft/Liri/tree/main/app/docs" target="_blank" rel="noopener noreferrer">GitHub 저장소</a>를 기준으로 삼습니다.',
      source: '원본 파일: ',
      englishOnly: '문서는 현재 영어로만 제공됩니다.',
    },

    common: {
      scroll: '아래로 스크롤',
      copy: '클릭하여 복사',
      backHome: '홈으로 돌아가기',
      fullStatus: '전체 상태 보기',
    },
  },

  channels: {
    即时通讯: '메시징',
    国内平台: '중국 플랫폼',
    协作与社交: '협업 및 소셜',
    其它通道: '기타 채널',
    微信: 'WeChat',
    企业微信: 'WeCom',
    钉钉: 'DingTalk',
    飞书: 'Feishu',
    元宝: 'Yuanbao',
    移动端接入: '모바일 연동',
  },

  about: {
    title: 'Liri란 무엇인가',
    p1: 'Liri는 <strong class="text-brand-300">TypeScript + Rust</strong> 아키텍처를 기반으로 한 <strong class="text-brand-300">AI 개인 비서</strong>입니다.',
    p2: '단순한 챗봇이 아닙니다. Liri는 <strong class="text-brand-300">의도를 파악</strong>하고, <strong class="text-brand-300">명령을 실행</strong>하며, <strong class="text-brand-300">작업을 관리</strong>하고, <strong class="text-brand-300">도구를 호출</strong>하며, 다른 AI 에이전트와 협업까지 합니다. 터미널에서 데스크톱까지, IM에서 MCP까지 하나의 엔진이 여러 진입점을 뒷받침합니다.',
    p3: '모듈형 서브시스템 <strong class="text-brand-300">{modules}</strong>개, TypeScript 파일 <strong class="text-brand-300">{tsFiles}</strong>개, 데스크톱 컴포넌트 <strong class="text-brand-300">{desktopComponents}</strong>개 — 빌드 변형별로 잘라낼 수 있습니다.',
    statLabels: ['TypeScript 파일', '내장 도구', '메시지 채널', '데스크톱 TSX 컴포넌트'],
    verifyTitle: 'GitHub 소스에서 직접 확인',
  },

  architecture: {
    title: '아키텍처 개요',
    subtitle:
      '진입점에서 피드백까지 8개 기능 계층; 엔지니어링 측면에서는 6계층 의존성 게이트(entry > ui > app > service > infra > core)로 강제합니다',
    summary: {
      title: '운영체제처럼 계층화',
      subtitle: '얇은 커널 + 서브시스템 경계 + 의존성 게이트. 로컬 우선은 스위치가 아니라 기본값입니다.',
      pillars: [
        { title: '커널', desc: '@openliri/kernel은 독립 패키지로 대외에는 얇은 인터페이스만 노출하며 K01–K08 게이트가 지킵니다' },
        { title: '서브시스템', desc: '도구, 채널, 메모리, 라우팅, 샌드박스, 작업은 각자 진입점과 경계를 가집니다' },
        { title: '게이트', desc: '6계층 의존 방향 + 20여 개 아키텍처 검사, 위반 시 CI 차단' },
        { title: '로컬 우선', desc: '데이터는 기본적으로 기기에 남고, 모델은 완전히 로컬에서 실행할 수 있습니다' },
      ],
      link: '아키텍처가 어떻게 진화했고 무엇이 남았는지 보기',
    },
    layers: [
      {
        name: '멀티모달 진입 계층',
        subtitle: '어떤 진입점에서든 Liri로',
        items: [
          { label: 'REPL 터미널', detail: 'React + Ink로 만든 터미널 UI, Buddy 파트너 시스템 내장' },
          { label: 'Tauri 데스크톱 클라이언트', detail: 'TSX 컴포넌트 {desktopComponents}개, 기능 화면 {desktopPages}개 (Tauri 2.11 + React 19)' },
          { label: 'MCP / 채널 게이트웨이', detail: 'MCP Server + 메시지 채널 {channels}개 (WeChat/DingTalk/Feishu/TG 등)' },
          { label: 'CLI / HTTP API', detail: 'Liri / liri-memory / liri-ink 세 실행 진입점 + HTTP API' },
        ],
      },
      {
        name: '보안 제1 계층',
        subtitle: '모든 입력은 보안 필터를 거칩니다',
        items: [
          { label: 'Rust AST 컴파일 타임 분석', detail: 'FFI 계층이 Bash AST를 파싱하며 위험 명령 규칙 {dangerousRules}개를 적용합니다' },
          { label: 'TypeScript 의미 분석', detail: '복합 읽기 전용 명령을 구간별로 판정하고, 거부 사유를 귀속시킬 수 있습니다' },
          { label: 'Guardrail 규칙 엔진', detail: '주입 패턴 {injectionRules}개 + Shell 전용 규칙 {shellRules}개' },
          { label: 'AutoMode 분류기', detail: '작업 위험 등급을 자동 판정해 허용 / 질문 / 거부를 결정합니다' },
        ],
      },
      {
        name: '스마트 라우팅 계층',
        subtitle: '작업 유형과 난이도에 따라 모델 선택',
        items: [
          { label: '{taskTypes}가지 작업 유형 인식', detail: '코딩 / 작성 / 분석 / 도구 / 번역 / 검색 / 창작 / 일상 대화 등' },
          { label: '4단계 tier', detail: 'simple / medium / complex / reasoning' },
          { label: '5단계 의사결정 파이프라인', detail: '스위치 → 빠른 경로 → 세션 고정성 → LLM 판별 → Tier 해석' },
          { label: 'FallbackChain 폴백', detail: '주 프로바이더를 쓸 수 없으면 순서대로 폴백하며 RetryPolicy를 함께 사용합니다' },
        ],
      },
      {
        name: '세컨드 브레인 주입 계층',
        subtitle: '지식 베이스 + 메모리 + 세션 이벤트, 세 갈래의 검색 가능한 컨텍스트',
        items: [
          { label: '지식 베이스', detail: 'Markdown 디스크 저장 + 시맨틱 인덱싱, 키워드 / 벡터 / RRF 융합 검색' },
          { label: '메모리 시스템', detail: '계층형 메모리 + SQLite 벡터 테이블, 관련도 가중 회수' },
          { label: '세션 이벤트', detail: 'events.jsonl 추가 저장, 재생과 감사 가능' },
          { label: 'DreamEngine', detail: '유휴 시 지식 정리: 수집 → 분석 → 생성 → 기록 → 인덱싱' },
        ],
      },
      {
        name: 'TAOR 결정 루프',
        subtitle: 'Think → Act → Observe → Reason',
        items: [
          { label: 'Think (사고)', detail: '{strategies}가지 에이전트 전략: 범용 / 코딩 / 탐색 / 계획' },
          { label: 'Act (행동)', detail: '내장 도구 {tools}개, 빌드 변형에 따라 동적으로 등록' },
          { label: 'Observe (관찰)', detail: '결과 평가 + 컨텍스트 계층 분할 윈도와 자동 압축' },
          { label: 'Reason (추론)', detail: '토큰 예산 관리 + 체크포인트 재개 + 라운드 단위 서킷 브레이커' },
        ],
      },
      {
        name: '실행 샌드박스 계층',
        subtitle: '명령은 격리 환경에서 실행되며, 격리가 없으면 정직하게 저하됩니다',
        items: [
          { label: 'Linux Landlock', detail: '커널 수준 파일 시스템 접근 제한' },
          { label: 'macOS / Windows', detail: '시스템 샌드박스 + Low IL / Job 객체 최후 방어' },
          { label: 'Docker 컨테이너', detail: '완전한 컨테이너 격리 + 리소스 제한 + 네트워크 정책' },
          { label: 'SSH / PTY', detail: '원격의 깨끗한 실행 환경과 의사 터미널 경로 제어' },
        ],
      },
      {
        name: '장기 실행 작업 계층',
        subtitle: '단일 대화에서 여러 날에 걸친 작업까지',
        items: [
          { label: 'PDCA 파이프라인', detail: 'Plan-Do-Check-Act 루프, 산출물 존재 여부로 진행' },
          { label: 'Swarm 멀티 에이전트', detail: 'AgentSwarm + 의사결정 오케스트레이션, 레지스트리 동적 탐색' },
          { label: 'Cron 예약 작업', detail: 'once / interval / cron 표현식 지원 (시간대 포함)' },
          { label: '작업 영속화', detail: '세션 스냅샷 + 중단 지점 복구 + 대기 중 카운트다운 표시' },
        ],
      },
      {
        name: '피드백과 진화 계층',
        subtitle: '모든 상호작용은 검증 가능한 증거를 남깁니다',
        items: [
          { label: '실패 사례 정리', detail: '실패 패턴을 정리해 프롬프트와 스킬에 다시 반영하여 개선 루프를 완성합니다' },
          { label: '비용 원장', detail: '데이터베이스 가격표로 과금하고, 프로바이더가 회신한 실제 모델명을 기록합니다' },
          { label: '평가 게이트', detail: '내장 베이스라인 문제 세트 + pass^k 신뢰성 지표 + 짝지은 안전 측정' },
          { label: '이벤트 재생', detail: '모든 모델 호출의 컨텍스트를 사후에 재구성할 수 있습니다' },
        ],
      },
    ],
    principlesTitle: '아키텍처 철학',
    principles: [
      { title: '보안 내장', desc: '보안은 플러그인이 아니라 모든 계층의 DNA입니다' },
      { title: '로컬 우선', desc: '데이터는 로컬에 저장되고 오프라인에서도 동작하며 프라이버시는 기본으로 보장됩니다' },
      { title: '스마트 라우팅', desc: '{taskTypes}개 작업 분류를 알맞은 tier의 모델에 연결합니다' },
      { title: '세컨드 브레인 설계', desc: '지식 베이스 + 메모리 + 이벤트 로그, 세 갈래 컨텍스트를 검색할 수 있습니다' },
      { title: '검증 가능한 루프', desc: '실패 사례 정리 결과를 다시 반영하고, 변경은 게이트가 막습니다' },
      { title: '멀티모달 통합', desc: '터미널/데스크톱/IM/API가 같은 엔진을 공유합니다' },
    ],
  },

  brainSection: {
    title: '세컨드 브레인',
    subtitle: '지식 베이스 → 메모리 → 세션 이벤트: 세 갈래의 검색 가능한 컨텍스트를 모두 기기에 보관합니다',
    layers: [
      {
        badge: '1계층: 지식 베이스',
        title: '지식 베이스',
        desc: 'Markdown 디스크 저장 + 시맨틱 인덱스, 검색 결과에 출처 표시',
        tags: ['Markdown 디스크 저장', '시맨틱 인덱스 JSONL', '키워드 검색', '벡터 검색', 'RRF 융합'],
      },
      {
        badge: '2계층: 메모리',
        title: '메모리 시스템',
        desc: '계층형 메모리 + SQLite 벡터 테이블, 관련도 가중 회수',
        tags: ['계층형 메모리', 'memory_vectors', '관련도 가중', '메모리 정제', '컨텍스트 주입'],
      },
      {
        badge: '3계층: 사실 원천',
        title: '세션 이벤트 로그',
        desc: '모델 요청에 들어간 모든 내용이 세션 이벤트로 남아 재생할 수 있습니다',
        tags: ['events.jsonl 추가', '기록 전 영속화', '세션 재생', '감사 추적', '컴파일 타임 등록 강제'],
      },
    ],
    governTitle: '정리와 거버넌스',
    governSubtitle: '유휴 시 지식을 정리하고, 윈도를 넘으면 컨텍스트를 압축합니다 — 실제로 존재하는 두 개의 백그라운드 파이프라인',
    dreamHeading: 'DreamEngine 5단계 파이프라인',
    dreamStages: [
      { name: '수집', desc: '정리 대상 세션과 문서를 모읍니다' },
      { name: '분석', desc: '주제와 재사용 가능한 결론을 추출합니다' },
      { name: '생성', desc: '상위 계층을 위한 노트를 산출합니다' },
      { name: '기록', desc: '지식 베이스와 메모리에 저장합니다' },
      { name: '인덱싱', desc: '벡터와 키워드 인덱스를 재구축합니다' },
    ],
    contextTitle: '컨텍스트 계층 거버넌스',
    contextBody:
      '윈도를 넘는 긴 대화는 먼저 오래된 앞부분을 버리고, 빌드 시 메모리 사용량을 O(전체)에서 O(윈도)로 낮춥니다. 윈도를 자를 때 「원문 복원 가능」 안내를 남겨 필요하면 페이지 단위로 다시 읽어오고, 토큰 수위에 따라 자동 압축합니다.',
    contextCards: [
      { title: '계층 분할 윈도', desc: '윈도 초과 시 오래된 라운드부터 절단' },
      { title: '필요 시 복원', desc: '원문을 구간별로 다시 읽기' },
      { title: '3단계 압축', desc: 'Tier1/2 동기 + Tier3 백그라운드' },
    ],
    pdcaTitle: 'PDCA 자체 반복 루프',
    pdcaBody:
      '장기 작업의 경우 Liri가 Plan-Do-Check-Act 루프를 자동으로 수행합니다: 작업 분해 → 단계 실행 → 결과 검토 → 계획 수정, 완료되거나 종료 조건에 도달할 때까지 반복합니다.',
    pdcaSteps: [
      { step: 'Plan', desc: '자동 분해' },
      { step: 'Do', desc: '단계별 실행' },
      { step: 'Check', desc: '자동 검토' },
      { step: 'Act', desc: '자동 수정' },
    ],
  },

  capabilities: {
    title: '핵심 기능',
    subtitle: '여덟 가지 차별화된 기능, 모두 GitHub 소스에서 확인할 수 있습니다',
    items: [
      {
        title: '심층 에이전트 엔진',
        description: '자체 개발한 TAOR 루프: 전략과 기억, 체크포인트를 갖췄습니다',
        details: [
          'TAOR 결정 루프 (Think-Act-Observe-Reason)',
          '{strategies}가지 에이전트 전략: 범용 / 코딩 / 탐색 / 계획',
          '체크포인트 재개로 장기 작업이 중단되어도 복구됩니다',
          '컨텍스트 계층 분할 윈도 + 3단계 자동 압축',
          '8가지 종료 사유 + 라운드 단위 서킷 브레이커로 공회전을 방지합니다',
        ],
        highlight: '핵심',
      },
      {
        title: '5계층 보안 심층 방어',
        description: 'Rust AST 컴파일 타임 분석 → 5계층 방어 → 다중 백엔드 샌드박스 격리',
        details: [
          'Rust FFI AST 기반 컴파일 타임 Bash 분석',
          '위험 명령 {dangerousRules}개 + 주입 규칙 {injectionRules}개',
          'Guardrail 정책 규칙 엔진',
          'AutoMode 위험 분류기',
          '샌드박스: Landlock / macOS / Windows / Docker / SSH / PTY 지원',
        ],
        highlight: '보안',
      },
      {
        title: '내장 도구 {tools}개',
        description: '{categories}개 분류로 파일, 명령, 네트워크, 미디어, 코드, 협업을 아우릅니다',
        details: [
          'Rust AST 수준 Bash 실행',
          'LSP 코드 인텔리전스 연동',
          '웹 스크래핑과 검색',
          'Notebook, 이미지, 오디오·비디오 처리',
          'MCP 클라이언트 + 서버 완전 지원',
        ],
        highlight: '풍부함',
      },
      {
        title: '메시지 채널 {channels}개',
        description: '채널 어댑터 {channels}개, WeChat / WeCom / DingTalk / Feishu / QQ 모두 지원',
        details: [
          'Telegram / Discord / Slack / WhatsApp',
          'WeChat / WeCom / DingTalk / Feishu / QQ / Yuanbao',
          'Email / SMS / Webhook / IRC / Matrix',
          '통합 채널 카탈로그와 게이트웨이 라우팅',
          '채널 단위 빌드 트리밍으로 산출물 축소',
        ],
        highlight: '멀티 플랫폼',
      },
      {
        title: '엔터프라이즈급 관측성',
        description: 'OpenTelemetry 연동 + 알림 체계 + 헬스 체크',
        details: [
          'Tracing + Metrics, OTel GenAI 시맨틱 규약 준수',
          '구조화 로그 등급 관리',
          '알림 규칙과 인시던트 관리',
          '헬스 체크, 백업, 데이터 아카이빙',
          '세션 이벤트 재생과 감사 가능',
        ],
        highlight: '관측성',
      },
      {
        title: '플러그인 아키텍처',
        description: '플러그인 SDK + 스킬 시스템 + 4개 프로토콜, 빌드 변형별 트리밍',
        details: [
          '5가지 빌드 변형: core / personal / coding / enterprise / headless',
          '플러그인 마켓, 핫 로딩과 서명 검증 지원',
          '스킬 3개 출처 격리 (내장 / 사용자 / 서드파티)',
          'MCP / ACP / A2A / LSP 4개 프로토콜',
          '4단계 기동 (T0–T3)과 필요 시 로딩',
        ],
        highlight: '유연함',
      },
      {
        title: '로컬 우선',
        description: 'Ollama / llama.cpp 로컬 모델, 데이터는 기본적으로 기기에 저장',
        details: [
          '로컬 추론, 완전 오프라인 실행 가능',
          'SQLite 단일 데이터 파일, 기기 밖으로 나가지 않음',
          '세션은 events.jsonl에 추가 저장',
          '클라우드 프로바이더는 선택적 확장',
          '워크스페이스별로 격리된 샌드박스 디렉터리',
        ],
        highlight: '프라이버시',
      },
      {
        title: '스마트 라우팅',
        description: '{taskTypes}개 작업 분류 × 4단계 tier × 5단계 의사결정 + 프로바이더 폴백 체인',
        details: [
          '{taskTypes}가지 작업 유형 자동 인식',
          '4단계 tier: simple / medium / complex / reasoning',
          '5단계 의사결정: 스위치 → 빠른 경로 → 세션 고정성 → LLM 판별 → Tier',
          'FallbackChain 다중 프로바이더 폴백 + 재시도 정책',
          '가격과 컨텍스트 윈도 모두 데이터베이스에서 조회',
        ],
        highlight: '라우팅',
      },
    ],
  },

  channelWall: {
    title: '메시지 채널 {channels}개',
    subtitle:
      '채널 {channels}개 모두 대응 어댑터가 있습니다. 채널별 환경 변수를 설정하면 활성화되고, 빌드 시 잘라낼 수도 있습니다.',
    summary: '총 {count}개 채널 · 통합 채널 카탈로그 · 채널별 활성화 · 빌드 시 트리밍 지원',
  },

  community: {
    title: '오픈소스 · 커뮤니티',
    subtitle: 'Liri는 오픈소스 프로젝트이며 모든 기여자를 환영합니다',
    githubDesc: 'GitHub에서 프로젝트를 팔로우하고 이슈나 PR을 보내 주세요',
    communityTitle: '커뮤니티 참여',
    communityDesc: '토론에 참여하고 이슈나 PR을 보내 주세요',
  },

  comparison: {
    title: '기능 자체 점검표',
    subtitle:
      '16개 항목의 현재 상태와 소스 위치를 하나씩 표기합니다. 모든 숫자는 코드로 연결되고, 아직 미완성인 부분도 그대로 적었습니다.',
    dimensionHeader: '항목',
    stateHeader: '현재 상태',
    statusHeader: '진행',
    sourceHeader: '소스',
    sourceLink: '보기',
    statuses: {
      ready: '구현됨',
      polish: '다듬는 중',
      audit: '외부 감사 대기',
      building: '구축 중',
      experimental: '실험적',
    },
    statusLegend:
      '상태는 유지관리자가 자체 평가한 것으로 버전에 따라 갱신됩니다. 「보기」를 누르면 해당 소스 디렉터리로 이동해 직접 확인할 수 있습니다.',
    footnote: '* 표 데이터는 소스 v{version} 기준이며, 소스 링크는 GitHub 저장소 main 브랜치를 가리킵니다.',
    rows: [
      { dimension: '언어', liri: 'TypeScript + Rust', status: 'ready', source: 'app/src' },
      { dimension: '로컬 우선', liri: 'Ollama / llama.cpp + 로컬 SQLite', status: 'ready', source: 'app/src/ai' },
      { dimension: '스마트 라우팅', liri: '{taskTypes} 유형 · 4단계 · 5계층 의사결정', status: 'ready', source: 'app/src/ai' },
      { dimension: '보안 체계', liri: '{securityLayers}계층 심층 방어 · 6가지 샌드박스 백엔드', status: 'audit', source: 'app/src/security' },
      { dimension: '메시지 채널', liri: '{channels}개 (WeChat / DingTalk / Feishu / QQ 포함)', status: 'ready', source: 'app/src/channels' },
      { dimension: '데스크톱 클라이언트', liri: 'Tauri 2.11 · TSX 컴포넌트 {components}개', status: 'polish', source: 'client/src' },
      { dimension: '터미널 UI', liri: 'React + Ink', status: 'ready', source: 'app/src/ink' },
      { dimension: '페르소나 시스템', liri: '{species} 종 × {hats} 모자 × {eyes} 눈', status: 'ready', source: 'app/src/buddy' },
      { dimension: '음성 인터랙션', liri: '로컬 faster-whisper / Piper + 클라우드', status: 'ready', source: 'app/src/voice' },
      { dimension: '비용 투명성', liri: 'DB 가격 · 호출마다 기록', status: 'ready', source: 'app/src/cost' },
      { dimension: '세컨드 브레인', liri: '지식 베이스 + 메모리 + 이벤트 로그', status: 'ready', source: 'app/src/knowledge' },
      { dimension: '컨텍스트 거버넌스', liri: '계층 분할 윈도 + 3단계 압축', status: 'ready', source: 'app/src/context' },
      { dimension: '생태계 마켓', liri: '플러그인 마켓 + MCP 마켓 + 스킬 출처', status: 'building', source: 'app/src/plugins' },
      { dimension: '에이전트 전략', liri: '{agentStrategies}가지 전략 · PDCA · Swarm', status: 'ready', source: 'app/src/agent' },
      { dimension: '예약 작업', liri: 'once / interval / cron', status: 'ready', source: 'app/src/chronos' },
      { dimension: '프로토콜 지원', liri: 'MCP + ACP + A2A + LSP', status: 'experimental', source: 'app/src/mcp' },
    ],
  },

  desktopClient: {
    title: '데스크톱 클라이언트',
    subtitle:
      'Tauri 2.11 + React 19 기반 · TSX 컴포넌트 {components}개 · 기능 화면 {pages}개 · 완전한 데스크톱 경험',
    sidebar: [
      '채팅',
      'AI 모델',
      '지식 베이스',
      '메모리 관리',
      '스킬',
      'MCP',
      '예약 작업',
      '비용 센터',
      'Buddy 파트너',
      '시스템 설정',
    ],
    panelTitle: '채팅 패널',
    panelUser: 'Liri · Linglong Bird',
    greeting: '안녕하세요! Liri입니다. 무엇을 도와드릴까요?',
    userMessage: '이 프로젝트의 데이터를 분석해 줘',
    reply: '네, 분석 중입니다...',
    inputPlaceholder: '메시지를 입력하고 Enter로 전송하세요...',
    mockNote: '인터페이스 구조 예시이며 실제 스크린샷이 아닙니다',
    features: [
      { label: '채팅 패널', desc: '멀티턴 대화' },
      { label: '모델 관리', desc: '모델 전환' },
      { label: '지식 베이스', desc: '파일 검색' },
      { label: '메모리 관리', desc: '과거 기록 돌아보기' },
      { label: '예약 작업', desc: 'Cron 스케줄링' },
      { label: 'MCP 연동', desc: '서버 탐색과 설치' },
      { label: '비용 센터', desc: '사용량과 비용 기록' },
      { label: 'Buddy 파트너', desc: '외형과 성장 데이터' },
    ],
  },

  ecosystem: {
    title: '생태계',
    subtitle: '플러그인 마켓 + MCP 마켓 + 스킬 3출처 + 템플릿 마켓 = 조합 가능한 Liri 생태계',
    mcp: {
      title: 'MCP 마켓',
      desc: '출처 어댑터 5개를 하나의 검색으로',
      items: ['GitHub 출처', 'NPM 출처', '공식 카탈로그', 'Smithery 출처', '기본 제공 서비스'],
    },
    plugins: {
      title: '플러그인 마켓',
      desc: '로컬 / npm / 원격 카탈로그 세 가지 출처',
      items: ['플러그인 SDK + 어댑터', '라이프사이클과 핫 로딩', '서명 검증', '설정 엔드포인트 + CLI', '5가지 빌드 변형'],
    },
    skills: {
      title: '스킬 3출처',
      desc: '내장 / 사용자 / 서드파티를 물리적으로 격리',
      items: ['내장 스킬 {skills}개', '사용자 정의 스킬', 'ClawHub 서드파티 출처', '조건 트리거 오케스트레이션', '스킬 조합과 매칭'],
    },
    templates: {
      title: '템플릿과 프로토콜',
      desc: '에이전트와 문서 템플릿, 바로 사용',
      items: ['에이전트 템플릿 마켓', '문서 템플릿 마켓', 'MCP / ACP / A2A / LSP', '플러그인과 스킬 조합 가능', '템플릿 파라미터 재사용'],
    },
  },

  evolution: {
    meta: {
      title: '개발 로그 — Liri',
      description:
        'v0.1에서 v0.5.22까지: Liri가 4,000여 개 파일에서 경계와 게이트를 갖추고 다른 사람이 이어받을 수 있는 시스템으로 수렴한 과정. 모든 전환점에 소스와 CHANGELOG 근거를 붙였습니다.',
    },

    hero: {
      eyebrow: 'BUILD LOG',
      title: '아직 끝나지 않은 길',
      subtitle:
        'v0.1에서 v0.5.22까지, 156일, 116개 릴리스. 여기 적은 것은 기능 목록이 아니라 우리가 밟은 함정, 그 대가로 얻은 규칙, 그리고 아직 채우지 못한 공백입니다.',
      stats: [
        { value: '156일', label: '첫 릴리스부터 오늘까지' },
        { value: '116', label: '릴리스' },
        { value: '9', label: '아키텍처 스냅샷' },
        { value: '20+', label: '아키텍처 검사' },
      ],
      scroll: '타임라인으로 이동',
      snapshot: '데이터 스냅샷 {date} · 수치는 sync-facts와 health:arch가 Liri 메인 저장소에서 수집했습니다',
    },

    origin: {
      title: '기원',
      paragraphs: [
        '2026년 5월 25일, Liri의 첫 버전 v0.1은 실질 커밋 100개와 실제로 동작하는 터미널 AI 비서였습니다.',
        '처음 풀고 싶던 문제는 구체적이었습니다. 대형 모델이 웹 입력창에서 대화하는 데 그치지 않고 터미널에 실제로 앉아 파일을 읽고 명령을 실행하며 코드를 고치게 하는 것. 로컬 모델을 우선한 것은 개인 파일을 다른 사람의 서버로 보내고 싶지 않아서였고, 「보안 내장」을 택한 것은 그것이 API가 아니라 실제 기기를 넘겨받기 때문입니다.',
        '이후 석 달 동안 기능이 하나씩 펼쳐졌습니다: 도구, 메시지 채널 27개, 데스크톱 클라이언트, 음성, 지식 베이스. 8월이 되자 저장소에는 4,000개가 넘는 파일이 있었습니다.',
        '문제가 처음으로 명확히 지적된 것도 그때입니다. 2026년 6월 18일 코드 리뷰에서 LocalHTTPService 7,200줄, ChatManager 3,263줄, 테스트 파일 150개, 소스 파일 3,742개가 확인되었습니다. 두 달 뒤 첫 아키텍처 건전성 점수가 나왔습니다: 10/40, D 등급, 초과 파일 105개 전부 미등록.',
        '그때 깨달았습니다. 프로젝트를 다른 사람이 이어받을 수 있는지는 기능이 얼마나 많은지가 아니라, 함정을 밟은 뒤 어떤 규칙이 자라났는지로 판가름됩니다.',
      ],
    },

    nodes: {
      title: '다섯 개의 전환점',
      note: '인과 순서로 정렬했으며 달력 순서가 아닙니다 — 시간상 서로 겹칩니다.',
      items: [
        {
          id: 'n1',
          period: '2026-05-25 → 2026-08',
          title: '먼저 기능을 펼치고, 경계는 나중에',
          situation: 'v0.1은 커밋 100개뿐이었고, 돌아가기만 하면 이기는 상황이었습니다. 기능 우선순위가 구조보다 높았습니다.',
          decision: '기능을 먼저 채웠습니다: 도구, 채널, 데스크톱, 음성, 지식 베이스를 하나씩.',
          cost:
            '첫 감사에서 나온 숫자는 보기 좋지 않았습니다 — LocalHTTPService 7,200줄, ChatManager 3,263줄, 테스트와 소스 비율 약 4%, 첫 아키텍처 건전성은 10/40(D), 초과 파일 105개가 모두 미등록이었습니다.',
          result: '파일 4,000여 개, 도구 {tools}개, 채널 {channels}개, 데스크톱 컴포넌트 {desktopComponents}개.',
          evidence: [
            { label: 'CHANGELOG v0.1', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
            {
              label: '2026-06-18 코드 리뷰',
              href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/codebase-review-20260618.md',
            },
          ],
          participate: '새 기능을 추가하려면 app/src 아래에 모듈을 만들고, 커널에 밀어 넣지 마세요.',
        },
        {
          id: 'n2',
          period: '2026-08-09 → 2026-09-30',
          title: '먼저 자신을 측정하는 법을 배우다',
          situation: '누구나 문제를 느꼈지만 「얼마나 나쁜지」를 말할 수 있는 사람은 없었습니다.',
          decision:
            '아키텍처 품질을 반복 가능한 점수와 대장(architecture-health)으로 만들고, 초과 파일은 반드시 등록하도록 했습니다. 「자율 규율만으로 청결을 유지한다」는 가정을 포기한 것입니다.',
          cost:
            '등록이 분할을 뜻하지는 않았습니다 — ChatManager는 오히려 3,263줄에서 7,036줄로 늘었습니다(현재 {chatManagerLines}줄로 분할). 점수 산정 기준 자체도 계속 바뀌어서, 이것은 건강검진표일 뿐 KPI가 될 수 없습니다.',
          result:
            '스냅샷 9회; 미등록 초과 파일이 105개에서 0개로 줄었습니다(이후 2개로 반등). 초과 목록은 「아무도 모르는 것」에서 추적 가능한 대장이 되었습니다.',
          evidence: [
            {
              label: 'architecture-health-history.json',
              href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/architecture-health-history.json',
            },
            { label: 'architecture-health.ts', href: 'https://github.com/cocosoft/Liri/blob/main/scripts/architecture-health.ts' },
          ],
          participate: '초과 파일 하나의 분할을 맡아 주세요(아래 참여 방법 참고).',
        },
        {
          id: 'n3',
          period: '2026-10-08 → 10-09',
          title: '한 번의 잘못된 삭제가 삭제 절차를 만들어 냄',
          situation:
            '코드베이스에는 아무도 참조하지 않는 것처럼 보이는 「죽은 표면」이 쌓여 있었습니다. v0.4.69 정리 작업은 샌드박스와 격리 서브시스템을 죽은 코드로 보고 삭제했습니다 — 그 버전은 파일 170개를 건드렸고 +9,340 / −10,174줄이었습니다.',
          decision:
            '다음 날 v0.4.71에서 전량 롤백했습니다: 파일 24개(IsolationManager, EnhancedSandboxManager, PTYSandbox, SSHSandbox, docker/** 등과 테스트 5종)를 복구하고, 살아남은 파일 21개의 관련 변경도 되돌렸습니다.',
          cost: '파일 하나를 삭제하려면 먼저 근거를 써야 하므로 절차가 느려졌습니다. 다만 잘못 지우고 롤백하는 것보다는 빠릅니다.',
          result:
            'v0.4.72에서 삭제 절차 code-deletion.md(CD01–CD07)를 도입했습니다: 먼저 증거를 수집하고, 진입점을 떼어낸 뒤, 구현을 삭제합니다. 「아무도 안 쓰는 것 같다」는 더 이상 삭제 사유가 아닙니다.',
          evidence: [
            { label: 'CHANGELOG v0.4.69 / v0.4.71 / v0.4.72', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
          ],
          participate: 'CD01–CD07에 따라 「죽은 코드 후보」 하나를 점검해 주세요.',
        },
        {
          id: 'n4',
          period: '2026-10-10 → 10-22',
          title: '규칙을 게이트로 만들다',
          situation: '규칙은 문서에 적혀 자율 규율에 맡겨졌고, 문서와 코드가 어긋나기 시작했습니다.',
          decision:
            '모든 규칙을 권고가 아니라 CI 차단으로 만들었습니다: 게이트 5개 + doc-gate + 필수 sandbox-negative job; 하드코딩 베이스라인 413키; 상태 어휘 34개 값, 1,795개 베이스라인 쌍; 기동 표면, 핵심 모듈, 커널 표면 각각에 게이트 하나씩.',
          cost:
            '커밋마다 몇 초가 더 걸리고, 어휘를 바꾸면 베이스라인을 함께 갱신해야 합니다 — 정의를 마음대로 바꿀 수 없다는 것이 바로 목적입니다.',
          result: 'lint:arch 위반 0; 테스트가 3,029개에서 7,488개로 증가.',
          evidence: [
            { label: 'AGENTS.md 게이트 목록', href: 'https://github.com/cocosoft/Liri/blob/main/AGENTS.md' },
            { label: 'CI 워크플로', href: 'https://github.com/cocosoft/Liri/blob/main/.github/workflows/ci.yml' },
          ],
          participate: '푸시 전에 로컬 게이트(bun run ci)를 한 번 돌리고, 빨간 곳을 고치세요.',
        },
        {
          id: 'n5',
          period: '2026-10-05 → 10-28',
          title: '커널 축소: 5,336줄에서 독립 패키지로',
          situation: 'core는 진입점 구현이면서 모든 기능의 공용 뒷마당이었고, 누구나 여기에 무언가를 더할 수 있었습니다.',
          decision:
            '세 단계로 진행했습니다 — 먼저 줄이고(CoreAPIImpl 5,336 → 2,521줄), 패키지로 분리하고(@openliri/kernel 독립, core 146 → 113개 파일, K01–K08 커널 게이트), 마지막으로 외부로 옮겼습니다(「제로 I/O / 상위 의존성 제로」를 충족하지 못한 모듈 37개를 app/src로 내리고, import 470여 곳을 동기화하고, 베이스라인 5종 재생성).',
          cost:
            '한 번의 대규모 이관과 전체 베이스라인 재생성; 10-18부터 배치 단위로 마무리하도록 바꾸고 커밋 밀도를 의도적으로 낮췄습니다.',
          result: '커널은 대외에 얇은 인터페이스 한 층만 남겼고, 외부 기여에 처음으로 명확한 경계가 생겼습니다.',
          evidence: [{ label: 'CHANGELOG v0.5.22', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' }],
          participate: '커널 경계 밖의 새 기능은 app/src에서 시작하며 커널에 들어갈 필요가 없습니다.',
        },
      ],
      fieldLabels: {
        situation: '상황',
        decision: '결정',
        cost: '대가',
        result: '결과',
        evidence: '근거',
        participate: '참여 방법',
      },
    },

    model: {
      title: '아키텍처: 운영체제처럼 계층화',
      intro:
        '아키텍처를 새로 발명한 것은 아닙니다. 얇은 커널, 서브시스템 경계, 의존 방향, 게이트와 관측성 — 이 조직 방식은 운영체제가 수십 년 쌓아 온 엔지니어링 실천에서 왔습니다. 지난 2년간 공개된 에이전트 설계 패턴과 엔지니어링 가이드 역시 계층, 경계, 상태, 거버넌스, 평가라는 같은 문제군으로 수렴했습니다. 우리는 전자의 방식으로 자신을 제약하고, 후자의 체크리스트로 자체 점검합니다.',
      mappingTitle: '운영체제 개념 → Liri 현황',
      headers: { concept: '개념', liri: 'Liri에서의 대응', status: '상태' },
      statuses: {
        ready: '반영됨',
        converging: '수렴 중',
        audit: '외부 감사 대기',
        missing: '공백',
      },
      rows: [
        { concept: '커널', liri: '@openliri/kernel 독립 패키지, 대외에는 얇은 인터페이스만 노출, K01–K08 게이트', status: 'ready' },
        {
          concept: '서브시스템',
          liri: '도구 / 채널 / 메모리 / 라우팅 / 샌드박스 / 작업 / 음성 / 데스크톱, 각자 진입점과 경계 보유',
          status: 'converging',
        },
        {
          concept: '드라이버',
          liri: '프로바이더 어댑터, 채널 어댑터, 샌드박스 백엔드 6가지 (Landlock / Docker / SSH / PTY / macOS / Windows)',
          status: 'ready',
        },
        { concept: '프로세스와 스케줄링', liri: '세션 실행, PDCA, Swarm, Cron', status: 'ready' },
        {
          concept: '권한 모델',
          liri: '5계층 방어 + 승인 4단계 (requested → presented → decided → recorded)',
          status: 'audit',
        },
        { concept: '관측성과 감사', liri: '이벤트 로그, 비용 원장, 근거 대장', status: 'ready' },
        { concept: '유지관리자(MAINTAINERS)', liri: '아직 없음: 서브시스템 owner와 인수 경로가 없습니다', status: 'missing' },
      ],
      referenceTitle: '무엇을 참고했나',
      referenceBody:
        '공개된 에이전트 설계 패턴과 엔지니어링 가이드에 항목별로 대조했습니다: 21개 패턴 모두 실제 구현이 있지만 그중 3개의 핵심 스위치는 기본적으로 꺼져 있습니다 — 그래서 대외에는 「구현이 있다」고만 하고 「기본으로 동작한다」고는 말하지 않습니다. 엔지니어링의 주된 흐름도 같은 5단계로 자체 점검합니다: 아키텍처, 빌드, 실행, 거버넌스, 튜닝.',
      blanksTitle: '세 가지 공백',
      blanks: [
        { title: '서브시스템 유지관리자 제도', desc: 'owner가 없으면 인수 경로도 없습니다. 가장 운영체제답고, 가장 빠진 부분입니다.' },
        { title: '서브시스템 계약 계층', desc: '계약 설계안은 있지만 대장 / LoopProfile이 반영되었는지는 확인되지 않았습니다 — 인터페이스 안정성 약속은 아직 확정되지 않았습니다.' },
        { title: '커버리지 게이트', desc: '리뷰 당시 약 4%; CI에는 20여 개 아키텍처 검사가 있지만 커버리지 임계값은 아직 없습니다.' },
      ],
      honesty:
        '솔직히 말하면: 아키텍처 건전성은 여전히 {healthGrade}({healthScore})이고, 초과 파일 {oversized}개 중 {unregistered}개가 아직 미등록이며, 가장 큰 것은 여전히 chat 모듈입니다(ChatManager는 7,036줄에서 {chatManagerLines}줄로 분할). 커널은 생겼고 경계는 수렴 중이며 유지관리자 제도는 아직 없습니다 — 이것이 「아직 끝나지 않았다」는 뜻입니다.',
      layersToggle: '현재 8개 기능 계층 펼쳐 보기',
      cta: '전체 상태 보기',
    },

    timeline: {
      title: '타임라인',
      subtitle: '매달 한 줄, 아키텍처와 거버넌스 변화만 기록하며 일반 커밋은 넣지 않습니다.',
      items: [
        { date: '2026-05-25', text: 'v0.1: 실질 커밋 100개, 터미널 비서 동작' },
        { date: '2026-06-18', text: '첫 코드 리뷰: 7,200줄 단일 거대 파일, 테스트와 소스 비율 약 4%' },
        { date: '2026-08-09', text: '첫 아키텍처 건전성: 10/40(D), 초과 파일 105개 미등록' },
        { date: '2026-10-09', text: '샌드박스가 정리 작업에서 잘못 삭제 → 전량 롤백; 다음 날 삭제 절차 CD01–CD07 도입' },
        { date: '2026-10-20', text: '상태 어휘 게이트 출시: 34개 값, 1,795쌍 베이스라인' },
        { date: '2026-10-28', text: '커널 외부 이관 완료; 기본 노출 도구를 12개, 1,397 token으로 축소' },
        { date: '2026-10-28', text: '중국어·영어 문서 사이트와 본 사이트 출시' },
      ],
      more: '이후의 월간 업데이트도 계속 여기에 추가됩니다.',
    },

    participate: {
      title: '참여 방법',
      subtitle: '이 페이지는 결산 보고서가 아니라 초대장입니다. 세 가지 일 모두 사람이 부족합니다.',
      cards: [
        {
          title: '공백 하나 맡기',
          desc: 'Domain-first 지식 영역 격리는 설계안이 있고 Phase A/B/C는 미구현입니다; 커널 경계 밖의 기능도 커널에 먼저 들어갈 필요가 없습니다.',
          cta: '작업 맡기',
        },
        {
          title: '우리가 진 빚을 함께 갚기',
          desc: '초과 파일 {oversized}개({unregistered}개 미등록)가 분할을 기다리고 있습니다; 테스트 커버리지 임계값도 아직 없습니다.',
          cta: '작업 맡기',
        },
        {
          title: '우리 보안을 감사하기',
          desc: '5계층 방어와 샌드박스 백엔드 6가지는 구현되어 있고 규칙 소스도 확인할 수 있지만, 서드파티 감사는 아직 없습니다. 이것이 우리가 가장 원하는 피드백입니다.',
          cta: '감사 체크리스트 보기',
        },
      ],
      audit: {
        title: '보안 감사 체크리스트',
        items: [
          '위험 명령 규칙: 37개 규칙이 어디에 있고 어떻게 발동하는지 — 한 번 구성해 보고 차단이 예상한 규칙에 걸리는지 확인',
          '프롬프트 주입 규칙: 14개 주입 규칙에 악성 문서를 넣어 차단되는지 확인',
          'Shell 규칙: 10개 허용 / 차단 목록, 우회 경로(파이프, 서브셸, 인코딩) 검증',
          '샌드박스 저하 로직: 6가지 백엔드가 각각 어떤 조건에서 저하되는지, 저하 후 fail-closed인지',
          '승인 4단계: requested → presented → decided → recorded에 누락되거나 순서가 뒤바뀐 구간이 있는지',
          '권한 침범 표면: 도구 호출이 권한 분류기를 우회해 직접 기록하거나 실행할 수 있는지',
        ],
        note: '진입점: app/src/security, app/src/sandbox, app/src/permission.',
      },
      securityNotice:
        '취약점 세부 내용은 SECURITY.md에 따라 비공개로 신고하고 공개 이슈를 열지 마세요. 공개 이슈에서는 감사 절차와 범위만 논의합니다.',
      ctaGithub: 'Issues에서 맡거나 질문하기',
      ctaSecurity: '보안 자체 점검 경로 열기',
      fundLink: '자금으로 지원하고 싶다면? 후원 페이지 보기',
    },

    teaser: {
      title: '아직 끝나지 않은 길',
      paragraphs: [
        '2026년 5월 25일, 그것은 v0.1과 커밋 100개뿐이었습니다. 다섯 달 뒤에는 4,000여 개 파일, 채널 27개로 자랐습니다 — 그리고 그 대가도 함께 자랐습니다: 7,000줄의 거대 파일, 아무도 등록하지 않은 초과 파일 105개, 그리고 「죽은 코드 정리」 한 번이 샌드박스 서브시스템 전체를 삭제한 일.',
        '우리는 롤백하고 복구한 뒤, 삭제와 경계, 상태 어휘를 하나씩 CI 게이트로 만들었습니다. 이 길은 아직 끝나지 않았습니다.',
      ],
      stats: ['156일', '116개 릴리스', '20+개 아키텍처 검사'],
      cta: '전체 이야기 읽기',
    },
  },

  hero: {
    subtitle:
      'Linglong Bird · AI 개인 비서 · <span class="text-brand-400">로컬 우선</span> · <span class="text-brand-400">보안 내장</span>',
    versionPill: 'v{version} · MIT 오픈소스 · <span class="whitespace-nowrap">{date}</span> 공개',
    stats: ['TS 파일 {n}개', '내장 도구 {n}개', '보안 {n}계층', '메시지 채널 {n}개', 'Buddy 종 {n}가지'],
    ctaPrimary: '빠른 시작',
    ctaGithub: 'GitHub',
    command: 'git clone https://github.com/cocosoft/Liri.git',
    commandHint: '  # 그다음 cd app && bun install',
  },

  highlights: {
    title: '기능 목록 그 이상',
    subtitle: '놓치기 쉽지만 매일 쓰게 되는 세 가지.',
    cards: [
      {
        id: 'buddy',
        icon: '🐣',
        title: 'Buddy 페르소나 시스템',
        desc: '도구가 아니라 동료입니다. 외형은 시드에서 결정론적으로 생성되어 같은 개체는 항상 같은 모습이고, 성장 상태는 디스크에 저장되어 세션을 넘어 누적됩니다.',
        chips: ['{species}종', '{hats}가지 모자', '{eyes}가지 눈', '{rarities}등급 희귀도'],
      },
      {
        id: 'cost',
        icon: '🧾',
        title: '비용 투명성',
        desc: '가격은 데이터베이스에서 읽고, 프로바이더가 회신한 실제 모델명으로 귀속하며, 모든 호출을 cost_records에 기록합니다. 예산이 수위를 넘으면 먼저 경고하고, 다음은 압축, 마지막은 차단입니다.',
        chips: ['가격표 model_registry', '실제 usage', '호출마다 기록', '일일 예산'],
      },
      {
        id: 'scenarios',
        icon: '🎯',
        title: '네 가지 사용 장면',
        desc: '개발자는 명령을 돌리고 코드를 고치며, 보안 책임자는 AST 수준 차단과 감사에 쓰고, 운영팀은 상시 서비스로 두며, 일반 사용자는 채팅 앱에서 바로 호출합니다.',
        chips: ['개발자', '보안 책임자', '운영팀', '일반 사용자'],
      },
    ],
  },

  limitations: {
    title: '현재 제한',
    subtitle: '빠른 반복 기간에 아직 미비한 부분을 먼저 적어 둡니다. 직접 부딪혀 알게 되지 않도록.',
    statuses: {
      audit: '외부 감사 대기',
      polish: '다듬는 중',
      building: '구축 중',
      experimental: '실험적',
      note: '설명',
    },
    items: [
      {
        status: 'audit',
        title: '보안 체계는 외부 감사 대기',
        desc: '{securityLayers}계층 방어와 샌드박스 백엔드 6가지는 구현되었고 샌드박스 관련 파일 {sandboxFiles}개를 하나씩 확인할 수 있지만, 서드파티 보안 감사는 아직 통과하지 못했습니다.',
      },
      {
        status: 'polish',
        title: '데스크톱 상호작용 다듬는 중',
        desc: 'TSX 컴포넌트 {desktopComponents}개와 화면 {desktopPages}개는 준비되었고, 단축키와 애니메이션, 경계 상황은 아직 조정 중입니다.',
      },
      {
        status: 'building',
        title: '생태계 마켓 항목은 제한적',
        desc: '플러그인 마켓, MCP 마켓, 스킬 출처는 연결되었지만 설치 가능한 항목은 아직 채우는 중입니다.',
      },
      {
        status: 'experimental',
        title: 'ACP / A2A는 실험적 구현',
        desc: '두 프로토콜은 여전히 진화 중이며 인터페이스가 버전에 따라 바뀔 수 있습니다. MCP와 LSP는 안정적으로 사용할 수 있습니다.',
      },
      {
        status: 'building',
        title: '영어 문서가 뒤처질 수 있음',
        desc: '중국어 문서는 소스 저장소에서 자동 동기화되며, 영어는 수동 번역으로 보통 중국어보다 한 버전 늦습니다.',
      },
      {
        status: 'note',
        title: '문서와 소스는 저장소 기준',
        desc: '이 사이트 문서는 app/docs에서 동기화해 생성됩니다. 소스와 다를 경우 GitHub 저장소를 기준으로 삼아 주세요.',
      },
    ],
    cta: '문제를 발견하셨나요? 이슈 제출',
  },

  localFirst: {
    title: '로컬 우선',
    subtitle:
      'Ollama / llama.cpp 로컬 모델을 지원하며 데이터는 기본적으로 기기에 저장됩니다. 클라우드 프로바이더로 전환할 때는 해당 요청의 내용만 선택한 제공업체로 전송됩니다',
    benefits: [
      {
        title: '오프라인 실행',
        desc: '로컬 Ollama 또는 llama.cpp 모델을 쓰면 네트워크 없이도 대화하고 로컬 도구를 실행할 수 있습니다. 세션, 메모리, 지식 베이스는 모두 기기 파일에 기록됩니다.',
      },
      {
        title: '데이터는 기본적으로 기기에',
        desc: '세션, 메모리, 지식 베이스는 로컬 SQLite와 워크스페이스 디렉터리에 저장되고, 대화 기록은 events.jsonl에 추가 저장되어 다시 보고 감사하기 쉽습니다.',
      },
      {
        title: '필요할 때 클라우드 연결',
        desc: '더 강력한 모델이 필요하면 설정에서 클라우드 프로바이더({providers}종)를 켜고 라우팅이 작업 tier에 맞춰 선택하게 할 수 있습니다. 로컬 모델만 쓰는 것도 가능합니다.',
      },
    ],
    compareTitle: '로컬 모드 / 클라우드 모드',
    compareRows: [
      { label: '모델 실행 위치', local: '기기 (Ollama / llama.cpp)', cloud: '프로바이더 서버' },
      { label: '네트워크 필요 여부', local: '불필요', cloud: '필요' },
      { label: '이번 요청 내용의 흐름', local: '기기 밖으로 나가지 않음', cloud: '선택한 프로바이더로 전송' },
      { label: '비용 원천', local: '자체 연산 자원', cloud: '사용량 기반 과금' },
      { label: '대화 기록', local: 'events.jsonl로 기기에 보관', cloud: '마찬가지로 기기에 보관' },
    ],
  },

  quickstart: {
    title: '빠른 시작',
    subtitle: '세 단계: 의존성 설치 → API Key 설정 → dev 실행',
    stepLabels: ['의존성 설치', 'API Key 설정', 'Liri 실행'],
    copy: '명령 복사',
    envComment: '# .env를 편집해 API Key를 입력하세요',
  },

  roadmap: {
    title: '버전과 릴리스 주기',
    subtitle:
      '버전 번호, 태그 수, 커밋 기록은 모두 GitHub에서 확인할 수 있습니다. 저장소 이력에는 개발 기간이 포함되며, 공개 반복은 출시 이후 시작됩니다',
    milestones: [
      {
        quarter: '2026-10-28',
        version: 'v{version}',
        label: '현재 버전',
        items: [
          '내장 도구 {tools}개 · {toolCategories}개 분류',
          '메시지 채널 {channels}개',
          '보안 {securityLayers}계층 + 샌드박스 백엔드 6가지',
          '데스크톱 컴포넌트 {desktopComponents}개 · 화면 {desktopPages}개',
        ],
      },
      {
        quarter: '2026-10',
        version: 'v0.5.13 → v0.5.21',
        label: '출시됨',
        items: [
          '사흘 만에 버전 8개 연속 출시(v0.5.13 → v0.5.21), 개발 기간의 공개적 진행',
          '커널 모듈 분리, 게이트 베이스라인 동기화',
          '계획 진행을 산출물 존재 여부 기준으로 변경',
          '샌드박스 권한 변경 즉시 적용',
        ],
      },
      {
        quarter: '저장소 누적',
        version: '{releases}개 tag',
        label: '반복 리듬',
        items: [
          '누적 커밋 {commits}회',
          'CI가 lint:arch / 타입 검사 / 단위 테스트를 커버',
          '저장소 공개, 이슈와 PR 열람 가능',
        ],
      },
      {
        quarter: '향후',
        version: 'v0.6+',
        label: '계획 중',
        items: [
          'GitHub Releases와 Issues를 기준으로 합니다',
          '온라인 문서 사이트 출시 (중국어·영어 2개 언어)',
          '기능 우선순위는 Issue에서 투표해 주세요',
        ],
      },
    ],
  },

  security: {
    title: '5계층 보안 심층 방어',
    subtitle:
      '컴파일 타임 AST 분석에서 런타임 샌드박스까지: 규칙 개수, 임계값, 저하 정책이 모두 소스에 적혀 있습니다',
    layers: [
      {
        title: 'Rust AST 컴파일 타임 분석',
        short:
          '코드 실행 전 Rust FFI로 AST 수준 보안 분석을 수행하며 위험 명령 규칙 {dangerousRules}개를 검사합니다',
        tag: '컴파일 타임',
        details: [
          'Rust FFI 계층이 Bash AST를 파싱',
          'Bash AST 파싱, 위험 명령 규칙 {dangerousRules}개',
          '변수 주입 탐지, 경로 탈출 차단',
          '인자 변조 식별, 허용 목록 명령 검증',
        ],
      },
      {
        title: 'TypeScript 의미 분석',
        short: '런타임에 복합 명령을 구간별로 판정하고, 거부 사유를 구체적 문장에 귀속시킵니다',
        tag: '런타임',
        details: [
          '복합 읽기 전용 명령을 구간별로 허용하며, 더 이상 명령 전체를 거부하지 않습니다',
          '주입 패턴 {injectionRules}개 탐지 (제로폭 문자, 환경 변수 오염 포함)',
          'Shell 전용 규칙 {shellRules}개 (bash / PowerShell / cmd)',
          '거부 메시지가 실제 원인과 해당 문장을 가리킵니다',
        ],
      },
      {
        title: 'Guardrail 규칙 엔진',
        short:
          '도구/채널/사용자 그룹별 세밀한 권한 부여가 가능한 설정형 정책 규칙 시스템',
        tag: '정책',
        details: [
          'deny-by-default 허용 목록 방식',
          '권한 세분화: 도구 → 규칙 → 핑거프린트',
          '규칙 변경 즉시 적용, 재시작 불필요',
          '거부 시 규칙 출처와 해당 문장 반환',
        ],
      },
      {
        title: 'AutoMode 분류기',
        short:
          '작업과 도구 컨텍스트로 위험 등급을 판정해 허용, 질문, 거부를 자동으로 결정합니다',
        tag: '지능형',
        details: [
          '명령 의미와 도구 컨텍스트 기반 위험 등급화',
          '저위험 명령은 정책에 따라 자동 허용',
          '고위험 명령은 승인으로 넘겨 Inbox에서 처리 대기',
          '신뢰되지 않은 명령은 즉시 거부 대신 기본적으로 질문',
        ],
      },
      {
        title: '샌드박스 격리 실행',
        short:
          '격리 백엔드 6가지 — Landlock / macOS / Windows / Docker / SSH / PTY — 권한을 넘어선 명령은 호스트에 닿을 수 없습니다',
        tag: '격리',
        details: [
          'Linux Landlock: 커널 수준 파일 시스템 제한',
          'macOS 샌드박스 / Windows Low IL + Job 최후 방어',
          'Docker 컨테이너: 완전 격리 + 리소스와 네트워크 정책',
          'SSH 원격 실행과 PTY 의사 터미널 경로 제어',
          '사용 가능한 격리 백엔드가 없으면 정직하게 저하하고 안내를 표시',
        ],
      },
    ],
    protectionsTitle: '보안 방어 수치',
    protections: [
      { label: '위험 명령 규칙', value: '{n}', desc: 'AST 수준 매칭, bash / PowerShell / cmd 포함' },
      { label: '주입 탐지 규칙', value: '{n}', desc: '제로폭 문자, 환경 변수 오염 등 주입 형태 포함' },
      { label: '샌드박스 격리 백엔드', value: '{n}', desc: 'Landlock / macOS / Windows / Docker / SSH / PTY' },
      { label: '샌드박스 구현 파일', value: '{n}', desc: 'app/src/sandbox 아래 TypeScript 구현' },
    ],
    summary:
      'Rust AST 컴파일 타임 분석 · TypeScript 의미 분석 · Guardrail 규칙 엔진 · AutoMode 분류기 · 샌드박스 격리 실행',
  },

  smartRouter: {
    title: '스마트 라우팅',
    subtitle:
      '작업 유형과 난이도로 모델 tier를 선택하고, 주 프로바이더를 쓸 수 없으면 설정된 순서대로 폴백합니다',
    taskTypesHeading: '{taskTypes}가지 작업 유형 자동 인식 (아래는 흔한 {common}가지)',
    taskTypes: [
      { name: '코딩', desc: '코드 생성/디버깅/리뷰' },
      { name: '작성', desc: '문서/카피/번역' },
      { name: '분석', desc: '데이터 분석/추론/계획' },
      { name: '도구', desc: '파일/검색/시스템 작업' },
      { name: '번역', desc: '다국어 번역/현지화' },
      { name: '검색', desc: '웹 검색/정보 검색' },
      { name: '창작', desc: '브레인스토밍/디자인/구상' },
      { name: '일상 대화', desc: '일상 대화/범용 교류' },
    ],
    layersHeading: '{n}단계 의사결정 파이프라인',
    layers: [
      { name: 'L1: 라우팅 스위치', desc: '꺼져 있으면 기본 모델로 직결되며 추가 판정을 하지 않습니다' },
      { name: 'L2: 빠른 경로 적중', desc: '단순 작업이나 접두사 규칙에 맞으면 저단계 모델로 바로 갑니다' },
      { name: 'L3: 세션 고정성', desc: '같은 세션에서 선택된 모델을 유지해 잦은 전환을 피합니다' },
      { name: 'L4: LLM 판별', desc: '소형 모델이 작업 유형과 난이도를 판정해 tier를 산출합니다' },
      { name: 'L5: Tier 해석', desc: 'simple/medium/complex/reasoning에 따라 구체적 모델로 연결합니다' },
    ],
    fallbackHeading: '프로바이더 폴백 체인',
    fallbackNote: '주 모델 불가 → 자동 폴백 → 중단 없는 저하',
    fallback: [
      { name: '기본 선택', model: '주 프로바이더 · 현재 tier 모델' },
      { name: '폴백 1', model: '동일 tier 예비 프로바이더' },
      { name: '폴백 2', model: '교차 tier 저하 프로바이더' },
      { name: '폴백 3', model: '기타 설정된 프로바이더' },
      { name: '최후 수단', model: '로컬 Ollama / llama.cpp' },
    ],
  },

  sponsor: {
    meta: {
      title: 'Liri 후원 — Liri',
      description:
        'Liri는 한 사람이 유지관리하는 오픈소스 프로젝트입니다. 후원은 팁이 아니라 시간을 사는 일입니다: 외부 보안 감사, 영어 문서 교정, 인프라를 맡길 수 있게 합니다.',
    },
    label: '후원',
    hero: {
      title: 'Liri 후원',
      subtitle:
        '한 사람이 유지관리하는 오픈소스 프로젝트입니다. 후원은 팁이 아니라 시간을 사는 일입니다 — 감사, 문서, 인프라를 맡길 수 있게 합니다.',
      note: '모든 자금 집행 내역은 매달 아래 원장에 공개됩니다. MIT인 부분은 영원히 MIT입니다.',
    },
    channelsTitle: '후원 방법',
    channels: [
      {
        title: 'GitHub Sponsors',
        desc: '해외 대상, 월간 후원, 명단과 금액이 GitHub에 자연스럽게 공개됩니다.',
        cta: '매월 후원',
      },
      {
        title: 'Afdian',
        desc: '중국 대상, Alipay / WeChat 지원, 월간 또는 원하는 금액 선택.',
        cta: 'Afdian에서 후원',
      },
    ],
    comingSoon: '곧 개설',
    pendingNote: '중국 채널(Afdian)은 준비 중이며, 개설되면 이곳에 추가됩니다.',
    waitlistNote:
      'GitHub Sponsors로 수금하려면 지원 지역에 있는 계정이 필요하며, 중국 본토는 아직 목록에 없습니다. 후원 신청은 제출되어 심사 중입니다.',
    contact: '기업 후원 및 기타 문의: Issues에 하나 남겨 주세요 (sponsor 태그 권장)',
    usesTitle: '돈은 어디에 쓰이나',
    usesNote: '비율은 유지관리자의 계획값이며 약속이 아닙니다. 실제 지출은 매달 원장에 기록됩니다.',
    uses: [
      { label: '외부 보안 감사', share: '~40%', desc: '5계층 방어와 샌드박스 백엔드 6가지는 아직 서드파티 감사를 받지 못했습니다. 가장 부족한 부분입니다' },
      { label: 'CI와 릴리스 서명', share: '~20%', desc: '멀티 플랫폼 빌드, 설치 패키지 서명, 릴리스 파이프라인' },
      { label: '영어 문서 교정', share: '~15%', desc: '현재 영어는 수동 번역이라 보통 중국어보다 한 버전 늦습니다' },
      { label: '모델 API 크레딧', share: '~15%', desc: '평가와 회귀 테스트에는 mock이 아닌 실제 호출이 필요합니다' },
      { label: '도메인과 호스팅', share: '~10%', desc: '웹사이트, 문서 사이트, 미러' },
    ],
    notTitle: '약속하지 않는 것',
    nots: [
      '기능 일정을 사지 않습니다: Issue 우선순위는 영향 범위를 보고 금액은 보지 않습니다',
      '우선 지원을 사지 않습니다: 모두 같은 Issue 공간에서 순서를 기다립니다',
      '클로즈드 소스 특권판은 만들지 않습니다: MIT인 부분은 영원히 MIT입니다',
      '이름을 공개하지 않습니다: 명시적으로 동의한 경우가 아니면',
    ],
    tiersTitle: '후원 등급',
    tiers: [
      { title: '월 ¥10', desc: 'SPONSORS.md에 이름이 올라갑니다' },
      { title: '원하는 금액', desc: '일회성 후원, 금액은 자유' },
      { title: '기업 후원', desc: 'logo + 링크; 세금 계산서가 필요하면 Issues로 연락해 법인 결제로 진행합니다' },
    ],
    ledgerTitle: '투명 원장',
    ledgerDesc: '매달 한 줄: 수입 / 지출 / 잔액. 형식은 여기에 먼저 세우고, 첫 기록은 후원이 시작되는 달부터 남깁니다.',
    ledgerHeaders: ['월', '수입', '지출', '잔액'],
    ledgerEmpty: '기록 없음',
    otherTitle: '돈 없이도 돕는 방법',
    others: [
      { title: 'Star와 공유', desc: '필요한 사람이 찾을 수 있게', href: 'https://github.com/cocosoft/Liri' },
      { title: '재현 절차가 있는 Issue', desc: '재현 가능한 버그 하나가 열 마디 피드백보다 유용합니다', href: 'https://github.com/cocosoft/Liri/issues/new' },
      { title: '영어 문서 교정', desc: '영어판은 수동 번역입니다. 오류 제보를 환영합니다', href: '/docs' },
      { title: '보안 감사', desc: '체크리스트를 따라 하나씩 검증하고, 공개된 취약점 세부 내용은 받지 않습니다', href: '/evolution' },
      { title: '빈칸 하나 맡기', desc: '유지관리자 제도, 계약 계층, 커버리지 게이트', href: '/evolution' },
    ],
    faqTitle: '자주 묻는 질문',
    faq: [
      { q: '세금 계산서를 발급할 수 있나요?', a: '개인 채널로는 불가합니다. 기업 후원은 Issues로 연락해 법인 결제로 진행합니다.' },
      { q: '용도를 지정할 수 있나요?', a: '메모는 남길 수 있지만 최종 배분은 위 비율을 따릅니다.' },
      { q: '환불이 가능한가요?', a: '월간 후원은 언제든 취소할 수 있으며, 이미 결제된 달은 환불되지 않습니다.' },
      { q: '제 이름이 공개되나요?', a: '기본적으로 공개하지 않습니다. SPONSORS.md에 올리고 싶다면 후원 시 메모를 남겨 주세요.' },
    ],
  },

  status: {
    meta: {
      title: '프로젝트 상태 — Liri',
      description:
        '기능 자체 점검, 현재 제한, 릴리스 주기와 기술 스택: Liri가 지금 어디까지 왔고 무엇이 남았는지 한 페이지에서 확인할 수 있으며, 모든 숫자는 소스로 연결됩니다.',
    },
    label: '상태',
    title: '프로젝트 상태',
    subtitle:
      '기능 자체 점검, 현재 제한, 릴리스 주기와 기술 스택 — 지금 어디까지 왔고 무엇이 남았는지 한 페이지에서 봅니다. 모든 숫자는 소스로 연결됩니다.',
    jumpLabel: '이 페이지 목차',
    jumps: [
      { href: '#comparison', label: '기능 자체 점검' },
      { href: '#limitations', label: '현재 제한' },
      { href: '#roadmap', label: '버전과 릴리스 주기' },
      { href: '#techstack', label: '기술 스택' },
      { href: '#local-first', label: '로컬 우선' },
    ],
    healthNote: '아키텍처 건전성 추세(스냅샷 9회)는 다음 버전에서 이 페이지에 연결됩니다.',
    updateNote: '이 페이지는 버전에 따라 갱신됩니다. 소스와 다를 경우 GitHub 저장소를 기준으로 삼아 주세요.',
  },

  techstack: {
    title: '기술 스택',
    subtitle: '현대적인 기술 선택, 모든 계층을 심사숙고해 골랐습니다',
    items: [
      { label: 'TypeScript', pct: '{n} 파일', desc: '핵심 언어 · 약 {lines}줄' },
      { label: 'Rust', pct: '{n} 모듈', desc: 'AST / 보안 / 압축 네이티브 모듈' },
      { label: 'Bun', pct: '', desc: '런타임' },
      { label: 'React 19 + Ink', pct: '', desc: '터미널 UI' },
      { label: 'Tauri 2.11', pct: '{n} 컴포넌트', desc: '데스크톱 클라이언트' },
      { label: 'SQLite', pct: '', desc: '데이터와 벡터 저장' },
      { label: 'OpenTelemetry', pct: '', desc: '관측성' },
      { label: 'MCP + ACP + A2A + LSP', pct: '', desc: '프로토콜' },
      { label: 'Docker', pct: '', desc: '샌드박스 백엔드 중 하나' },
      { label: 'MIT License', pct: '', desc: '오픈소스 라이선스' },
    ],
  },

  voiceInteraction: {
    title: '음성 인터랙션',
    subtitle: '타이핑만이 아닙니다 — 필요한 것을 말하면 Liri가 듣고, 실행하고, 답합니다',
    features: [
      {
        title: '음성 입력',
        desc: '로컬 faster-whisper와 SenseVoice, 또는 클라우드 OpenAI Whisper',
        platforms: ['로컬 faster-whisper', 'SenseVoice', 'OpenAI Whisper', '스트리밍 인식'],
      },
      {
        title: '음성 출력',
        desc: '로컬 Piper 또는 클라우드 Edge / OpenAI, 사용자 정의 명령도 연결 가능',
        platforms: ['로컬 Piper', 'Edge TTS', 'OpenAI TTS', '사용자 정의 명령'],
      },
      {
        title: '도구화된 호출',
        desc: '음성 기능 자체도 도구라서 모델이 필요할 때 호출할 수 있습니다',
        platforms: ['tts 도구', 'audio_play 도구', '음성 입력', '답변 재생'],
      },
      {
        title: '멀티 디바이스 대응',
        desc: '데스크톱과 터미널이 같은 음성 서비스를 공유합니다',
        platforms: ['Tauri 데스크톱', 'CLI 터미널', 'HTTP API'],
      },
    ],
    scenarios: '핸즈프리 조작 · 멀티태스킹 · 접근성 지원 · 음성 단축 명령 ·',
    scenariosHighlight: '언제 어디서나, 말하면 실행됩니다',
  },
};
