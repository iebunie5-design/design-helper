# 🎨 웹 디자인 도우미

> 주제를 입력하면 맞춤형 디자인 추천과 CSS를 자동 생성해주는 UI/UX 디자인 가이드 앱

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 목차

- [소개](#-소개)
- [주요 기능](#-주요-기능)
- [스크린샷](#-스크린샷)
- [설치 및 실행](#-설치-및-실행)
- [사용 방법](#-사용-방법)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [라이선스](#-라이선스)

## 🚀 소개

**웹 디자인 도우미**는 웹 개발자와 디자이너를 위한 종합 UI/UX 가이드 앱입니다. 
주제(예: 카페, 병원, 쇼핑몰 등)를 입력하면 해당 분야에 적합한 **색상 팔레트**, **폰트 조합**, **UI 스타일**, **레이아웃 패턴**을 추천받을 수 있습니다.

### ✨ 핵심 가치

- 🎯 **맞춤 추천**: 업종별 최적화된 디자인 가이드
- ⚡ **즉시 사용**: 생성된 CSS를 바로 복사/다운로드
- 👁️ **실시간 미리보기**: 다양한 디바이스에서 디자인 확인
- 🏆 **Pro 데이터**: 96개 산업별 팔레트, 67개 UI 스타일, 57개 폰트 조합

## 💡 주요 기능

### 1. 🔍 주제 기반 추천
- 주제 입력 시 맞춤 디자인 요소 자동 추천
- 색상 팔레트, 폰트 조합, UI 스타일, 레이아웃 패턴 제공
- 디자인 팁 및 피해야 할 사항 안내

### 2. 🛠️ CSS 자동 생성
- 추천 결과를 기반으로 완전한 CSS 코드 자동 생성
- 색상 변수, 폰트 Import, 기본 스타일, 버튼, 반응형 포함
- 📋 복사 및 💾 다운로드 지원

### 3. 👁️ 실시간 미리보기
- 데스크톱 / 태블릿 / 모바일 뷰 전환
- 랜딩 페이지, 카드, 대시보드, 블로그 템플릿
- 새 창에서 전체 화면 미리보기

### 4. 🎨 디자인 라이브러리

| 탭 | 설명 |
|------|------|
| **색상 팔레트** | 21개 기본 팔레트 (산업별 분류) |
| **Pro 팔레트** | 96개 산업별 전문 팔레트 |
| **UI 스타일** | 12개 트렌디한 UI 스타일 |
| **Pro 스타일** | 67개 전문 UI 스타일 + AI 프롬프트 |
| **폰트 조합** | 68개 폰트 페어링 |
| **CSS 생성기** | 커스텀 CSS 생성 도구 |
| **미리보기** | 실시간 디자인 프리뷰 |

### 5. 🌙 다크/라이트 모드
- 시스템 설정 자동 감지
- 수동 토글 지원
- 미니멀 모노 테마 적용

## 📸 스크린샷

### 메인 화면
주제를 입력하고 추천받기 버튼을 클릭하면 맞춤 디자인이 제시됩니다.

### CSS 자동 생성
추천 결과를 기반으로 바로 사용 가능한 CSS가 자동 생성됩니다.

### UI 스타일 갤러리
글래스모피즘, 뉴모피즘, 미니멀리즘 등 다양한 UI 스타일을 탐색할 수 있습니다.

## 📦 설치 및 실행

### 요구 사항
- 최신 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 서버 설치 불필요 (정적 HTML 앱)

### 실행 방법

1. **저장소 클론**
```bash
git clone https://github.com/your-username/design-helper.git
cd design-helper
```

2. **브라우저에서 실행**
```bash
# 방법 1: 직접 열기
open index.html  # macOS
start index.html # Windows

# 방법 2: Live Server 사용 (VS Code)
# Live Server 확장 설치 후 index.html 우클릭 → "Open with Live Server"
```

## 📖 사용 방법

### 1️⃣ 주제 입력
```
검색창에 웹사이트 주제 입력 (예: "카페", "병원", "쇼핑몰", "포트폴리오")
```

### 2️⃣ 추천 결과 확인
- 🎨 **색상 팔레트**: 5가지 조화로운 색상
- ✒️ **폰트 조합**: 제목용 + 본문용 폰트
- 🖼️ **UI 스타일**: 적합한 디자인 스타일
- 📐 **레이아웃**: 추천 레이아웃 패턴
- 💡 **디자인 팁**: 추천 사항 및 주의점

### 3️⃣ CSS 활용
```css
/* 자동 생성된 CSS 예시 */
:root {
    --color-primary: #6366f1;
    --color-secondary: #818cf8;
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Inter', sans-serif;
}
```

### 4️⃣ 미리보기
- 디바이스 전환 버튼으로 반응형 확인
- 템플릿 선택으로 다양한 레이아웃 테스트

## 🛠️ 기술 스택

| 기술 | 설명 |
|------|------|
| **HTML5** | 시맨틱 마크업 |
| **CSS3** | CSS 변수, Flexbox, Grid, 애니메이션 |
| **JavaScript** | ES6+, 모듈 패턴 |
| **Google Fonts** | Poppins, Inter, Noto Sans KR |

## 📁 프로젝트 구조

```
design-helper/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트 (미니멀 모노 테마)
├── app.js              # 메인 JavaScript 로직
├── data.js             # 기본 디자인 데이터 (팔레트, 스타일, 폰트)
├── skill-data.js       # Pro 디자인 데이터 (확장 데이터)
└── README.md           # 이 파일
```

### 주요 파일 설명

| 파일 | 역할 |
|------|------|
| `index.html` | 앱 구조, 탭 네비게이션, 컨텐츠 섹션 |
| `styles.css` | CSS 변수, 컴포넌트 스타일, 반응형 |
| `app.js` | 추천 로직, CSS 생성, 미리보기, 이벤트 처리 |
| `data.js` | 21개 팔레트, 12개 스타일, 11개 폰트 |
| `skill-data.js` | 96개 Pro 팔레트, 67개 Pro 스타일, 57개 폰트 |

## 📊 데이터 출처

- **기본 데이터**: 디자인 트렌드 및 모범 사례 기반
- **Pro 데이터**: UI/UX Pro Max 스킬 데이터
  - 산업별 색상 팔레트 (SaaS, E-commerce, Healthcare 등)
  - 전문 UI 스타일 및 AI 프롬프트
  - 글로벌 폰트 페어링

## 🎨 테마 커스터마이징

`styles.css`의 `:root` 변수를 수정하여 테마를 변경할 수 있습니다:

```css
/* 현재 적용된 미니멀 모노 테마 */
:root {
    --color-primary: #000000;
    --color-secondary: #333333;
    --color-accent: #666666;
    --color-text: #1a1a1a;
    --color-background: #FFFFFF;
}
```

## 🔮 향후 계획

- [ ] 더 많은 산업별 템플릿 추가
- [ ] AI 기반 디자인 추천 강화
- [ ] 사용자 커스텀 팔레트 저장
- [ ] 디자인 히스토리 기능
- [ ] 팀 협업 기능

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

```
MIT License

Copyright (c) 2026 웹 디자인 도우미

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

## 👨‍💻 만든 사람

- **개발**: Antigravity AI Assistant
- **디자인**: 미니멀 모노 테마

---

<p align="center">
  <strong>🎨 웹 디자인 도우미</strong><br>
  주제를 입력하면 맞춤 디자인을 추천해드립니다!
</p>
