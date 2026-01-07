# Bot-Codex

**LLM-friendly chatbot promo site template.**

챗봇 제작자들을 위한 세계관 아카이브 & 홍보 사이트 템플릿.
AI에게 세계관을 설명하면, 바로 사용할 수 있는 사이트가 완성됩니다.

---

## Features

- **LLM-Powered Customization** - AI에게 세계관을 알려주면 `content.json` 자동 생성
- **Dynamic Theming** - 색상, 폰트, 장식, 효과가 모두 `content.json`에서 제어
- **Zero Coding Required** - JSON 복붙만으로 완전히 다른 사이트로 변신
- **Multiple Styles** - 판타지, SF, 호러, 로맨스 등 어떤 분위기든 가능

---

## Quick Start

두 가지 방법 중 선택하세요:

### Option A: 원클릭 배포 (비개발자 추천)

코딩 없이 바로 시작하고 싶다면:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/devforai-creator/bot-codex)

1. 위 버튼 클릭 → GitHub 연동 → 자동 배포
2. 배포 완료 후, 생성된 GitHub repo에서 `content.json` 수정
3. 저장(commit)하면 자동으로 사이트 업데이트

> **참고:** 배포 후 사이트가 안 열리면 Vercel Dashboard → Settings → Deployment Protection이 꺼져 있는지 확인하세요.

### Option B: 로컬 개발 (개발자용)

미리보기하면서 작업하고 싶다면:

```bash
# Clone
git clone https://github.com/devforai-creator/bot-codex.git
cd bot-codex

# Install
npm install

# Run
npm run dev
```

로컬에서 `content.json` 수정 → 미리보기 확인 → 완성되면 배포

### content.json 만들기

1. [SPEC.md](./SPEC.md) 파일 내용을 복사
2. ChatGPT/Claude/Gemini에게 붙여넣기
3. 당신의 세계관/캐릭터 설정을 함께 전달
4. "이 spec에 맞춰서 content.json을 만들어줘"라고 요청
5. 생성된 JSON을 `content.json`에 붙여넣기
6. 끝!

---

## How It Works

```
[Your Worldbuilding]     [SPEC.md]           [Site]
       ↓                     ↓                  ↓
  "내 봇은 뱀파이어    +   규격 문서    →    content.json
   로맨스야..."                              복붙하면 끝!
       ↓                                        ↓
      AI가                                   사이트가
   JSON 생성                              자동으로 변신
```

---

## content.json Structure

```json
{
  "bot": {
    "name": "봇 이름",
    "tagline": "한 줄 소개",
    "description": "설명",
    "genre": ["판타지", "로맨스"],
    "playLink": "https://genit.ai/play/..."
  },
  "theme": {
    "colors": { "primary": "#d4af37", ... },
    "fonts": { "display": "Cinzel", ... },
    "decorations": { "ornament": "⚜", ... },
    "effects": { "vignette": true, ... }
  },
  "world": { ... },
  "characters": [ ... ],
  "episodes": [ ... ]
}
```

자세한 규격은 [SPEC.md](./SPEC.md) 참고.

---

## Theme Examples

### Fantasy
```json
"colors": { "primary": "#d4af37" },
"fonts": { "display": "Cinzel" },
"decorations": { "ornament": "⚜" },
"effects": { "vignette": true, "sparkle": true }
```

### Cyberpunk
```json
"colors": { "primary": "#00ffcc" },
"fonts": { "display": "Orbitron" },
"decorations": { "ornament": "◈", "divider": "//" },
"effects": { "scanlines": true, "glow": true }
```

### Horror
```json
"colors": { "primary": "#8b0000" },
"fonts": { "display": "Creepster" },
"decorations": { "ornament": "☠" },
"effects": { "vignette": true, "noise": true }
```

---

## Commands

```bash
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
```

---

## File Structure

```
bot-codex/
├── content.json         ← 당신의 콘텐츠
├── content.example.json ← 템플릿 예시
├── SPEC.md              ← AI용 규격 문서
├── index.md             ← 홈페이지
└── .vitepress/
    ├── config.mts       ← VitePress 설정
    └── theme/
        ├── Layout.vue   ← 레이아웃
        └── components/
            └── HeroSection.vue
```

---

## License

MIT

---

Made with [VitePress](https://vitepress.dev) + [Claude](https://claude.ai)
