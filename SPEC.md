# Bot-Codex Content Specification v2.0

이 문서는 챗봇 홍보 사이트의 콘텐츠 규격입니다.
**AI(ChatGPT, Claude, Gemini 등)에게 이 spec과 함께 당신의 세계관/캐릭터 정보를 주면,
사이트에 바로 사용할 수 있는 `content.json`을 생성해줍니다.**

---

## 사용법

1. 이 SPEC.md 파일을 AI에게 보여주세요
2. 당신의 세계관/캐릭터 설정을 함께 전달하세요
3. "이 spec에 맞춰서 content.json을 만들어줘"라고 요청하세요
4. 생성된 JSON을 `content.json` 파일에 붙여넣으세요
5. 끝!

---

## content.json 구조

```json
{
  "bot": { ... },
  "theme": { ... },
  "world": { ... },
  "characters": [ ... ],
  "episodes": [ ... ],
  "meta": { ... }
}
```

---

## 1. bot (필수)

봇의 기본 정보입니다.

```json
{
  "bot": {
    "name": "봇 이름",
    "tagline": "한 줄 소개 (20자 내외)",
    "description": "봇에 대한 설명 (2-3문장)",
    "genre": ["판타지", "로맨스"],
    "playLink": "https://genit.ai/play/your-bot-id"
  }
}
```

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| name | string | ✅ | 봇/작품 이름 |
| tagline | string | ✅ | 짧은 캐치프레이즈 |
| description | string | ✅ | 2-3문장 소개 |
| genre | string[] | ✅ | 장르 태그 (1-3개) |
| playLink | string | ✅ | 플레이 링크 URL |

---

## 2. theme (필수) ⭐ 핵심

사이트의 시각적 스타일입니다. **세계관의 분위기에 맞게 자유롭게 설정하세요.**

```json
{
  "theme": {
    "colors": {
      "primary": "#d4af37",
      "secondary": "#8b4513",
      "accent": "#4a1c6b",
      "background": "#0f0d15",
      "surface": "#1a1520",
      "text": "#e8e4d9",
      "textMuted": "#9a9488",
      "glow": "rgba(212, 175, 55, 0.4)"
    },
    "fonts": {
      "display": "Cinzel",
      "body": "Noto Serif KR",
      "accent": "Uncial Antiqua"
    },
    "decorations": {
      "ornament": "⚜",
      "divider": "◆",
      "bullet": "◇",
      "cornerStyle": "flourish",
      "lineStyle": "gradient"
    },
    "effects": {
      "vignette": true,
      "scanlines": false,
      "noise": false,
      "sparkle": true,
      "glow": true,
      "glowIntensity": 0.6
    },
    "mood": "신비롭고 고풍스러운"
  }
}
```

### 2.1 colors (색상)

| 필드 | 설명 | 예시 |
|------|------|------|
| primary | 메인 강조색 | 골드, 네온시안, 핏빛 |
| secondary | 보조색 | 브라운, 마젠타, 다크퍼플 |
| accent | 포인트색 | 보라, 청록 |
| background | 배경색 | 어두운 색 권장 |
| surface | 카드/패널 배경 | background보다 약간 밝게 |
| text | 본문 텍스트 | 밝은 색 |
| textMuted | 보조 텍스트 | text보다 어둡게 |
| glow | 글로우 효과 색상 | rgba 형식 권장 |

### 2.2 fonts (폰트)

세계관 분위기에 맞는 Google Fonts를 선택하세요.

| 필드 | 용도 | 설명 |
|------|------|------|
| display | 제목/로고 | 눈에 띄는 장식 폰트 |
| body | 본문 | 가독성 좋은 폰트 |
| accent | 특수 강조 | 인용구, 대사 등 (선택) |

#### 📚 추천 폰트 목록

**판타지/중세:**
- `Cinzel` - 로마식 고전
- `Uncial Antiqua` - 중세 필사본
- `MedievalSharp` - 고딕 중세
- `IM Fell English` - 고풍스러운 세리프

**SF/사이버펑크:**
- `Orbitron` - 기하학적 SF
- `Rajdhani` - 테크니컬
- `Share Tech Mono` - 모노스페이스 터미널
- `Electrolize` - 전자적

**호러/다크:**
- `Creepster` - 공포 스타일
- `Nosifer` - 피 흘리는 느낌
- `Eater` - 부식된 느낌
- `Metal Mania` - 헤비메탈

**로맨스/감성:**
- `Cormorant Garamond` - 우아한 세리프
- `Playfair Display` - 클래식 로맨틱
- `Dancing Script` - 손글씨
- `Great Vibes` - 캘리그라피

**현대/미니멀:**
- `Inter` - 깔끔한 산세리프
- `Poppins` - 모던
- `Space Grotesk` - 테크 스타트업

**한글 폰트:**
- `Noto Serif KR` - 명조 (고전적)
- `Noto Sans KR` - 고딕 (현대적)
- `Gothic A1` - 깔끔한 고딕
- `Sunflower` - 부드러운 손글씨

### 2.3 decorations (장식)

| 필드 | 설명 | 예시 값들 |
|------|------|----------|
| ornament | 주요 장식 문자 | ⚜ ❧ ☠ ⛧ ✦ ◈ ▣ ⬡ |
| divider | 구분선 장식 | ◆ ◇ ─ • ═ ∿ ☆ ✧ |
| bullet | 목록 불릿 | ◇ › ▸ ⬥ ✦ ⚬ |
| cornerStyle | 모서리 스타일 | flourish / angular / rounded / torn / none |
| lineStyle | 선 스타일 | gradient / solid / dashed / glow |

#### 🎨 장식 문자 모음

**판타지/중세:**
```
⚜ ❧ ❦ ☙ ✠ ⚔ 🜲 ◆ ◇ ❖ ✦ ✧ ★ ☆
```

**SF/사이버펑크:**
```
▣ ▤ ▥ ◈ ⬡ ⬢ ⏣ ⏥ ▶ ◀ ⟨ ⟩ [ ] < > // ::
```

**호러/다크:**
```
☠ ⛧ ⛤ ☽ ☾ 🦇 ⚰ † ‡ ✝ ♱ ⁂ ※
```

**로맨스/감성:**
```
♡ ♥ ❤ ✿ ❀ ❁ ✾ ❃ ⁕ ✻ ❋ ๑ ღ
```

**현대/미니멀:**
```
• ‣ › ― ─ │ ┃ ○ ● ◦ ◉
```

### 2.4 effects (효과)

| 필드 | 타입 | 설명 |
|------|------|------|
| vignette | boolean | 가장자리 어둡게 (판타지/호러) |
| scanlines | boolean | 스캔라인 오버레이 (SF/레트로) |
| noise | boolean | 노이즈/그레인 효과 (호러/빈티지) |
| sparkle | boolean | 반짝이는 파티클 (판타지/로맨스) |
| glow | boolean | 텍스트/요소 글로우 |
| glowIntensity | number | 글로우 강도 (0.0 ~ 1.0) |

#### 분위기별 추천 효과 조합

| 분위기 | vignette | scanlines | noise | sparkle | glow |
|--------|----------|-----------|-------|---------|------|
| 판타지 | ✅ | ❌ | ❌ | ✅ | ✅ |
| SF | ❌ | ✅ | ❌ | ❌ | ✅ |
| 호러 | ✅ | ❌ | ✅ | ❌ | ✅ |
| 로맨스 | ✅ | ❌ | ❌ | ✅ | ✅ |
| 현대 | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## 3. world (필수)

세계관 정보입니다.

```json
{
  "world": {
    "name": "세계 이름",
    "era": "시대 배경",
    "description": "세계관 설명 (3-5문장)",
    "locations": [
      {
        "name": "장소 이름",
        "type": "city / forest / castle / station / etc",
        "description": "장소 설명"
      }
    ],
    "factions": [
      {
        "name": "세력 이름",
        "description": "세력 설명",
        "alignment": "ally / enemy / neutral"
      }
    ],
    "timeline": [
      {
        "year": "시점",
        "event": "사건 설명"
      }
    ]
  }
}
```

---

## 4. characters (필수)

등장인물 정보입니다.

```json
{
  "characters": [
    {
      "id": "aina",
      "name": "아이나",
      "role": "main",
      "title": "폐허의 마녀",
      "appearance": "외모 설명",
      "personality": "성격 설명",
      "background": "배경 스토리",
      "quote": "대표 대사",
      "relations": [
        {
          "target": "kael",
          "type": "ally / enemy / lover / rival / family / complicated",
          "description": "관계 설명"
        }
      ]
    }
  ]
}
```

### role 종류
- `main`: 주인공/메인 캐릭터
- `supporting`: 조력자/동료
- `antagonist`: 적대자/빌런
- `npc`: 기타 NPC

---

## 5. episodes (선택)

에피소드/챕터 정보입니다.

```json
{
  "episodes": [
    {
      "id": "ep1",
      "title": "각성",
      "chapter": 1,
      "summary": "줄거리 요약",
      "characters": ["aina", "kael"],
      "status": "available / coming_soon / locked"
    }
  ]
}
```

---

## 6. meta (선택)

기타 메타 정보입니다.

```json
{
  "meta": {
    "warnings": ["폭력적인 장면", "스포일러 주의"],
    "credits": "Created by @username",
    "version": "1.0",
    "lastUpdated": "2025-01-07"
  }
}
```

---

## 전체 예시 1: 판타지

```json
{
  "bot": {
    "name": "잊혀진 왕국의 연대기",
    "tagline": "천 년의 잠에서 깨어난 마녀와 함께",
    "description": "폐허가 된 왕국에서 눈을 뜬 당신. 유일한 동행자는 신비로운 마녀뿐.",
    "genre": ["판타지", "미스터리"],
    "playLink": "https://genit.ai/play/forgotten-kingdom"
  },
  "theme": {
    "colors": {
      "primary": "#d4af37",
      "secondary": "#8b4513",
      "accent": "#4a1c6b",
      "background": "#0f0d15",
      "surface": "#1a1520",
      "text": "#e8e4d9",
      "textMuted": "#9a9488",
      "glow": "rgba(212, 175, 55, 0.4)"
    },
    "fonts": {
      "display": "Cinzel",
      "body": "Noto Serif KR"
    },
    "decorations": {
      "ornament": "⚜",
      "divider": "◆",
      "bullet": "◇",
      "cornerStyle": "flourish",
      "lineStyle": "gradient"
    },
    "effects": {
      "vignette": true,
      "scanlines": false,
      "sparkle": true,
      "glow": true,
      "glowIntensity": 0.6
    }
  },
  "world": {
    "name": "엘도라 왕국",
    "era": "마법이 사라진 시대",
    "description": "천 년 전 멸망한 왕국의 폐허."
  },
  "characters": [
    {
      "id": "aina",
      "name": "아이나",
      "role": "main",
      "title": "폐허의 마녀",
      "quote": "운명이란 건... 네가 생각하는 것보다 유연해."
    }
  ]
}
```

---

## 전체 예시 2: 사이버펑크

```json
{
  "bot": {
    "name": "CODE:ZERO",
    "tagline": "SYSTEM ERROR - NEURAL LINK ESTABLISHED",
    "description": "2147년, 붕괴된 도시. 정체불명의 AI가 당신을 인도한다.",
    "genre": ["SF", "스릴러"],
    "playLink": "https://genit.ai/play/code-zero"
  },
  "theme": {
    "colors": {
      "primary": "#00ffcc",
      "secondary": "#ff00aa",
      "accent": "#6366f1",
      "background": "#0a0a0f",
      "surface": "#12121a",
      "text": "#e0e0e0",
      "textMuted": "#888888",
      "glow": "rgba(0, 255, 204, 0.5)"
    },
    "fonts": {
      "display": "Orbitron",
      "body": "Rajdhani"
    },
    "decorations": {
      "ornament": "◈",
      "divider": "//",
      "bullet": "▸",
      "cornerStyle": "angular",
      "lineStyle": "glow"
    },
    "effects": {
      "vignette": false,
      "scanlines": true,
      "sparkle": false,
      "glow": true,
      "glowIntensity": 0.8
    }
  },
  "world": {
    "name": "네오 서울",
    "era": "2147년",
    "description": "메가코퍼레이션이 지배하는 디스토피아."
  },
  "characters": [
    {
      "id": "aria",
      "name": "A.R.I.A",
      "role": "main",
      "title": "시스템 오퍼레이터",
      "quote": "Trust the process. Trust the code."
    }
  ]
}
```

---

## 전체 예시 3: 호러

```json
{
  "bot": {
    "name": "붉은 달이 뜨는 밤",
    "tagline": "이 마을에서는... 아무도 떠날 수 없다",
    "description": "폐쇄된 마을에 갇힌 당신. 밤마다 누군가 사라진다.",
    "genre": ["호러", "미스터리"],
    "playLink": "https://genit.ai/play/red-moon"
  },
  "theme": {
    "colors": {
      "primary": "#8b0000",
      "secondary": "#4a0404",
      "accent": "#2d1b2d",
      "background": "#0d0a0a",
      "surface": "#1a1414",
      "text": "#d4c5c5",
      "textMuted": "#8a7a7a",
      "glow": "rgba(139, 0, 0, 0.5)"
    },
    "fonts": {
      "display": "Creepster",
      "body": "Noto Serif KR"
    },
    "decorations": {
      "ornament": "☠",
      "divider": "†",
      "bullet": "‡",
      "cornerStyle": "torn",
      "lineStyle": "solid"
    },
    "effects": {
      "vignette": true,
      "scanlines": false,
      "noise": true,
      "sparkle": false,
      "glow": true,
      "glowIntensity": 0.4
    }
  },
  "world": {
    "name": "적월리",
    "era": "현대",
    "description": "지도에서 지워진 마을. 붉은 달이 뜨면 무언가 깨어난다."
  },
  "characters": [
    {
      "id": "unknown",
      "name": "???",
      "role": "antagonist",
      "title": "그것",
      "quote": "...도망쳐봤자 소용없어."
    }
  ]
}
```

---

## AI에게 요청하는 법

아래 프롬프트를 복사해서 사용하세요:

```
당신은 챗봇 홍보 사이트의 콘텐츠 & 디자인 전문가입니다.

[SPEC 규격]
(이 SPEC.md 내용 전체를 붙여넣기)

[내 세계관/캐릭터 정보]
(당신의 설정을 붙여넣기)

위 SPEC 규격에 맞춰서 content.json을 생성해주세요.

요청사항:
1. 모든 필수 필드를 채워주세요
2. 내 세계관의 분위기에 맞는 색상, 폰트, 장식을 선택해주세요
3. 효과(effects)도 분위기에 맞게 설정해주세요
4. 캐릭터는 주요 캐릭터 위주로 3-5명
5. 결과는 JSON 코드블록으로 출력해주세요
```

---

## 변경 이력

- v2.0 (2025-01-07): 테마 확장 - 폰트/장식/효과 세부 설정 추가
- v1.0 (2025-01-07): 최초 버전
