// ===== Design Data =====
// 색상 팔레트, UI 스타일, 폰트 조합, 산업별 추천 데이터

const colorPalettes = [
    // Warm 팔레트
    {
        name: "카페 브라운",
        category: "warm",
        industry: ["카페", "베이커리", "초콜릿", "커피"],
        colors: ["#8B5A2B", "#D4A574", "#F5E6D3", "#2C1810", "#FAFAF9"],
        colorNames: ["에스프레소", "카라멜", "크림", "다크초코", "밀크"]
    },
    {
        name: "코지 오렌지",
        category: "warm",
        industry: ["음식점", "가정용품", "키즈"],
        colors: ["#FF6B35", "#F7C59F", "#EFEFEF", "#2E2E2E", "#FFF8F0"],
        colorNames: ["선셋", "피치", "라이트그레이", "차콜", "크림화이트"]
    },
    {
        name: "테라코타",
        category: "warm",
        industry: ["인테리어", "가구", "공예"],
        colors: ["#E07A5F", "#F2CC8F", "#81B29A", "#3D405B", "#F4F1DE"],
        colorNames: ["테라코타", "샌드", "세이지", "네이비", "아이보리"]
    },
    {
        name: "골든 엘레강스",
        category: "warm",
        industry: ["주얼리", "럭셔리", "호텔"],
        colors: ["#D4AF37", "#1A1A2E", "#EAEAEA", "#16213E", "#FFF5E1"],
        colorNames: ["골드", "미드나잇", "실버", "딥네이비", "샴페인"]
    },
    {
        name: "로맨틱 로즈",
        category: "warm",
        industry: ["뷰티", "웨딩", "플라워"],
        colors: ["#E8B4B8", "#A8D5BA", "#F5E6E8", "#2D3436", "#FFF5F5"],
        colorNames: ["소프트핑크", "세이지", "블러쉬", "차콜", "로즈화이트"]
    },
    // Cool 팔레트
    {
        name: "오션 블루",
        category: "cool",
        industry: ["수영장", "해양", "스포츠", "여행"],
        colors: ["#0077B6", "#00B4D8", "#90E0EF", "#03045E", "#CAF0F8"],
        colorNames: ["딥블루", "스카이", "아쿠아", "네이비", "아이스"]
    },
    {
        name: "코퍼레이트 블루",
        category: "cool",
        industry: ["기업", "금융", "컨설팅", "비즈니스"],
        colors: ["#2563EB", "#3B82F6", "#DBEAFE", "#1E3A8A", "#F8FAFC"],
        colorNames: ["프라이머리", "세컨더리", "라이트", "다크", "백그라운드"]
    },
    {
        name: "아이스 퍼플",
        category: "cool",
        industry: ["IT", "게임", "메타버스", "AI"],
        colors: ["#8B5CF6", "#A78BFA", "#EDE9FE", "#4C1D95", "#FAF5FF"],
        colorNames: ["바이올렛", "라벤더", "라일락", "딥퍼플", "고스트"]
    },
    {
        name: "민트 프레시",
        category: "cool",
        industry: ["치과", "병원", "헬스케어", "약국"],
        colors: ["#10B981", "#34D399", "#D1FAE5", "#065F46", "#ECFDF5"],
        colorNames: ["에메랄드", "민트", "라이트민트", "딥그린", "페일민트"]
    },
    // Nature 팔레트
    {
        name: "포레스트 그린",
        category: "nature",
        industry: ["환경", "유기농", "농업", "캠핑"],
        colors: ["#2D6A4F", "#40916C", "#95D5B2", "#1B4332", "#D8F3DC"],
        colorNames: ["딥포레스트", "세이지", "민트", "다크그린", "라이트그린"]
    },
    {
        name: "어스 톤",
        category: "nature",
        industry: ["자연", "에코", "핸드메이드"],
        colors: ["#A68A64", "#C6AC8F", "#EAE0D5", "#5E503F", "#F5F0EB"],
        colorNames: ["어스", "샌드", "베이지", "브라운", "크림"]
    },
    {
        name: "보태니컬",
        category: "nature",
        industry: ["플라워샵", "가든", "식물"],
        colors: ["#606C38", "#DDA15E", "#BC6C25", "#FEFAE0", "#283618"],
        colorNames: ["올리브", "마리골드", "테라코타", "크림", "딥올리브"]
    },
    // Modern 팔레트
    {
        name: "미니멀 모노",
        category: "modern",
        industry: ["패션", "갤러리", "포트폴리오", "스튜디오"],
        colors: ["#000000", "#333333", "#666666", "#999999", "#FFFFFF"],
        colorNames: ["블랙", "다크그레이", "미드그레이", "라이트그레이", "화이트"]
    },
    {
        name: "네온 나이트",
        category: "modern",
        industry: ["클럽", "게임", "이스포츠", "엔터테인먼트"],
        colors: ["#FF00FF", "#00FFFF", "#FF6B6B", "#1A1A2E", "#0F0F1A"],
        colorNames: ["마젠타", "시안", "코랄", "다크블루", "블랙"]
    },
    {
        name: "테크 그라데이션",
        category: "modern",
        industry: ["테크", "스타트업", "SaaS", "앱"],
        colors: ["#667EEA", "#764BA2", "#F093FB", "#F5F5F5", "#1A1A2E"],
        colorNames: ["인디고", "퍼플", "핑크", "라이트", "다크"]
    },
    // Pastel 팔레트
    {
        name: "소프트 드림",
        category: "pastel",
        industry: ["키즈", "유아", "장난감", "교육"],
        colors: ["#FFB3BA", "#BAFFC9", "#BAE1FF", "#FFFFBA", "#FFE4E1"],
        colorNames: ["핑크", "민트", "스카이", "레몬", "피치"]
    },
    {
        name: "코튼 캔디",
        category: "pastel",
        industry: ["디저트", "아이스크림", "파티"],
        colors: ["#F8B4D9", "#A5F3FC", "#FDE68A", "#E0E7FF", "#FDFCDC"],
        colorNames: ["핑크", "민트블루", "레몬", "라벤더", "크림"]
    },
    {
        name: "밀키 웨이",
        category: "pastel",
        industry: ["뷰티", "스킨케어", "웰니스"],
        colors: ["#FCE7F3", "#DBEAFE", "#D1FAE5", "#FEF3C7", "#F5F3FF"],
        colorNames: ["블러쉬", "스카이", "민트", "버터", "라일락"]
    },
    // Dark 팔레트
    {
        name: "미드나잇 블루",
        category: "dark",
        industry: ["프리미엄", "자동차", "시계"],
        colors: ["#0F172A", "#1E293B", "#334155", "#94A3B8", "#F1F5F9"],
        colorNames: ["미드나잇", "슬레이트", "그레이", "실버", "화이트"]
    },
    {
        name: "다크 엘레강스",
        category: "dark",
        industry: ["레스토랑", "바", "럭셔리"],
        colors: ["#1A1A1A", "#2D2D2D", "#D4AF37", "#E8E8E8", "#0A0A0A"],
        colorNames: ["차콜", "그레이", "골드", "실버", "퓨어블랙"]
    },
    {
        name: "사이버펑크",
        category: "dark",
        industry: ["게임", "VR", "미래", "테크"],
        colors: ["#0D0D0D", "#1A1A2E", "#E94560", "#0F3460", "#16213E"],
        colorNames: ["블랙", "다크블루", "핫핑크", "네이비", "딥블루"]
    }
];

const uiStyles = [
    {
        name: "글래스모피즘",
        nameEn: "Glassmorphism",
        description: "반투명한 유리 효과와 블러를 사용한 현대적인 스타일. 배경이 살짝 비치는 카드와 레이어 효과가 특징입니다.",
        useCases: ["대시보드", "금융 앱", "테크 서비스", "모바일 앱"],
        css: "background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);",
        demo: {
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            card: "rgba(255,255,255,0.15)",
            blur: "blur(10px)"
        }
    },
    {
        name: "뉴모피즘",
        nameEn: "Neumorphism",
        description: "소프트한 그림자를 사용해 UI가 표면에서 튀어나오거나 들어간 것처럼 보이게 하는 스타일입니다.",
        useCases: ["음악 플레이어", "계산기", "스마트홈", "IoT 앱"],
        css: "background: #e0e0e0; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;",
        demo: {
            background: "#e8e8e8",
            card: "#e8e8e8",
            shadow: "8px 8px 16px #c8c8c8, -8px -8px 16px #ffffff"
        }
    },
    {
        name: "미니멀리즘",
        nameEn: "Minimalism",
        description: "불필요한 요소를 제거하고 콘텐츠에 집중하는 깔끔한 스타일. 여백과 타이포그래피가 핵심입니다.",
        useCases: ["포트폴리오", "갤러리", "블로그", "브랜드 사이트"],
        css: "background: #ffffff; color: #1a1a1a; border: 1px solid #eaeaea; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;",
        demo: {
            background: "#ffffff",
            card: "#fafafa",
            border: "1px solid #eaeaea"
        }
    },
    {
        name: "브루탈리즘",
        nameEn: "Brutalism",
        description: "의도적으로 거친 느낌을 주는 대담한 스타일. 두꺼운 테두리, 강렬한 색상, 비대칭 레이아웃이 특징입니다.",
        useCases: ["크리에이티브 에이전시", "아트 갤러리", "뮤직 사이트", "패션"],
        css: "border: 4px solid #000; background: #ffff00; box-shadow: 8px 8px 0 #000;",
        demo: {
            background: "#f5f5f5",
            card: "#ffff00",
            border: "4px solid #000000"
        }
    },
    {
        name: "클레이모피즘",
        nameEn: "Claymorphism",
        description: "점토처럼 부드럽고 둥근 3D 느낌의 스타일. 부드러운 그림자와 파스텔 색상이 특징입니다.",
        useCases: ["교육 앱", "키즈 서비스", "게임", "소셜 앱"],
        css: "background: linear-gradient(145deg, #ffc8dd, #ffafcc); border-radius: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.1);",
        demo: {
            background: "#fef6f9",
            card: "linear-gradient(145deg, #ffc8dd 0%, #ffafcc 100%)",
            radius: "30px"
        }
    },
    {
        name: "벤토 그리드",
        nameEn: "Bento Grid",
        description: "일본 도시락(벤토)처럼 다양한 크기의 카드를 그리드로 배치하는 레이아웃 스타일입니다.",
        useCases: ["대시보드", "포트폴리오", "제품 소개", "랜딩 페이지"],
        css: "display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;",
        demo: {
            background: "#f8fafc",
            card: "#ffffff",
            grid: true
        }
    },
    {
        name: "다크 모드",
        nameEn: "Dark Mode",
        description: "어두운 배경에 밝은 텍스트를 사용하는 스타일. 눈의 피로를 줄이고 OLED 배터리를 절약합니다.",
        useCases: ["개발 도구", "미디어 플레이어", "SaaS", "모든 앱"],
        css: "background: #0f172a; color: #f1f5f9; accent-color: #818cf8;",
        demo: {
            background: "#0f172a",
            card: "#1e293b",
            text: "#f1f5f9"
        }
    },
    {
        name: "그라데이션 메시",
        nameEn: "Gradient Mesh",
        description: "여러 색상이 자연스럽게 섞이는 유기적인 그라데이션. 배경이나 일러스트에 활용됩니다.",
        useCases: ["앱 배경", "히어로 섹션", "크리에이티브", "브랜딩"],
        css: "background: radial-gradient(at 40% 20%, #fda4af 0, transparent 50%), radial-gradient(at 80% 0%, #22d3ee 0, transparent 50%);",
        demo: {
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            card: "rgba(255,255,255,0.9)",
            mesh: true
        }
    },
    {
        name: "소프트 UI",
        nameEn: "Soft UI",
        description: "부드러운 그림자와 둥근 모서리를 사용한 편안한 스타일. 웰니스, 뷰티 브랜드에 적합합니다.",
        useCases: ["뷰티", "웰니스", "헬스케어", "라이프스타일"],
        css: "background: #fff5f5; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);",
        demo: {
            background: "#fff5f5",
            card: "#ffffff",
            shadow: "0 8px 30px rgba(0,0,0,0.08)"
        }
    },
    {
        name: "아이소메트릭",
        nameEn: "Isometric",
        description: "3D 일러스트를 활용한 시각적으로 풍부한 스타일. 복잡한 개념을 쉽게 전달합니다.",
        useCases: ["SaaS 랜딩", "테크 스타트업", "서비스 소개", "인포그래픽"],
        css: "perspective: 1000px; transform: rotateX(10deg) rotateY(-10deg);",
        demo: {
            background: "#f0f4ff",
            card: "#ffffff",
            transform: "rotateX(10deg) rotateY(-5deg)"
        }
    },
    {
        name: "레트로",
        nameEn: "Retro / Vintage",
        description: "80-90년대 감성의 복고풍 스타일. 픽셀아트, 세리프 폰트, 빈티지 색상이 특징입니다.",
        useCases: ["게임", "음악", "펍/바", "이벤트"],
        css: "font-family: 'Press Start 2P'; background: #faf0e6; border: 3px dashed #8b4513;",
        demo: {
            background: "#faf0e6",
            card: "#fff8dc",
            border: "3px dashed #8b4513"
        }
    },
    {
        name: "오가닉 셰이프",
        nameEn: "Organic Shapes",
        description: "자연스러운 불규칙한 형태를 사용한 스타일. 친근하고 인간적인 느낌을 줍니다.",
        useCases: ["친환경", "식품", "뷰티", "웰니스"],
        css: "border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; background: #e8f5e9;",
        demo: {
            background: "#e8f5e9",
            card: "#ffffff",
            radius: "30% 70% 70% 30% / 30% 30% 70% 70%"
        }
    }
];

const fontPairings = [
    {
        heading: "Playfair Display",
        body: "Lato",
        mood: "클래식 & 모던",
        description: "우아한 세리프와 깔끔한 산세리프의 조합으로 고급스러운 느낌을 줍니다.",
        useCases: ["패션", "매거진", "럭셔리"],
        googleUrl: "https://fonts.google.com/share?selection.family=Lato:wght@400;700|Playfair+Display:wght@400;700"
    },
    {
        heading: "Montserrat",
        body: "Open Sans",
        mood: "프로페셔널",
        description: "현대적이고 가독성 높은 조합으로 비즈니스 사이트에 적합합니다.",
        useCases: ["기업", "SaaS", "테크"],
        googleUrl: "https://fonts.google.com/share?selection.family=Montserrat:wght@400;700|Open+Sans:wght@400;700"
    },
    {
        heading: "Poppins",
        body: "Inter",
        mood: "모던 & 깔끔",
        description: "둥글고 친근한 느낌의 현대적인 조합입니다. 앱과 웹에 모두 적합합니다.",
        useCases: ["앱", "스타트업", "대시보드"],
        googleUrl: "https://fonts.google.com/share?selection.family=Inter:wght@400;700|Poppins:wght@400;700"
    },
    {
        heading: "Cormorant Garamond",
        body: "Proza Libre",
        mood: "우아한",
        description: "세련된 세리프 조합으로 에디토리얼과 럭셔리 브랜드에 완벽합니다.",
        useCases: ["뷰티", "웨딩", "주얼리"],
        googleUrl: "https://fonts.google.com/share?selection.family=Cormorant+Garamond:wght@400;700|Proza+Libre:wght@400;700"
    },
    {
        heading: "Roboto",
        body: "Roboto",
        mood: "Material",
        description: "Google의 Material Design 기본 폰트. 가독성이 뛰어나고 일관성 있습니다.",
        useCases: ["Android 앱", "대시보드", "기업"],
        googleUrl: "https://fonts.google.com/share?selection.family=Roboto:wght@400;500;700"
    },
    {
        heading: "Abril Fatface",
        body: "Poppins",
        mood: "임팩트",
        description: "강렬한 디스플레이 폰트와 깔끔한 본문의 대비가 인상적입니다.",
        useCases: ["포스터", "패션", "매거진"],
        googleUrl: "https://fonts.google.com/share?selection.family=Abril+Fatface|Poppins:wght@400;500"
    },
    {
        heading: "Space Grotesk",
        body: "Space Mono",
        mood: "테크 & 미래",
        description: "기술적이고 미래적인 느낌의 조합. 개발자 도구나 테크에 적합합니다.",
        useCases: ["테크", "코딩", "Web3"],
        googleUrl: "https://fonts.google.com/share?selection.family=Space+Grotesk:wght@400;700|Space+Mono:wght@400;700"
    },
    {
        heading: "DM Serif Display",
        body: "DM Sans",
        mood: "밸런스",
        description: "세리프와 산세리프의 완벽한 밸런스. 다양한 용도로 활용 가능합니다.",
        useCases: ["블로그", "미디어", "비즈니스"],
        googleUrl: "https://fonts.google.com/share?selection.family=DM+Sans:wght@400;700|DM+Serif+Display"
    },
    {
        heading: "Noto Sans KR",
        body: "Noto Sans KR",
        mood: "한글 기본",
        description: "Google의 한글 기본 폰트. 깔끔하고 가독성이 뛰어납니다.",
        useCases: ["한글 사이트", "앱", "기업"],
        googleUrl: "https://fonts.google.com/share?selection.family=Noto+Sans+KR:wght@400;500;700"
    },
    {
        heading: "Black Han Sans",
        body: "Noto Sans KR",
        mood: "한글 임팩트",
        description: "강렬한 한글 제목 폰트. 포스터나 배너에 적합합니다.",
        useCases: ["포스터", "이벤트", "게임"],
        googleUrl: "https://fonts.google.com/share?selection.family=Black+Han+Sans|Noto+Sans+KR:wght@400;500"
    },
    {
        heading: "Gowun Batang",
        body: "Pretendard",
        mood: "한글 클래식",
        description: "고운 바탕체와 현대적인 본문의 조합. 콘텐츠 중심 사이트에 적합합니다.",
        useCases: ["블로그", "매거진", "북스토어"],
        googleUrl: "https://fonts.google.com/share?selection.family=Gowun+Batang:wght@400;700"
    }
];

// 산업별 추천 데이터
const industryRecommendations = {
    "카페": {
        palette: colorPalettes.find(p => p.name === "카페 브라운"),
        style: uiStyles.find(s => s.name === "소프트 UI"),
        font: fontPairings.find(f => f.heading === "Playfair Display"),
        layout: ["Hero", "메뉴", "갤러리", "위치", "리뷰"],
        tips: ["따뜻한 색상으로 아늑한 분위기 연출", "메뉴 사진은 고품질로", "영업시간과 위치를 눈에 띄게"],
        avoid: ["차가운 파란색 톤", "복잡한 애니메이션", "작은 텍스트"]
    },
    "병원": {
        palette: colorPalettes.find(p => p.name === "민트 프레시"),
        style: uiStyles.find(s => s.name === "미니멀리즘"),
        font: fontPairings.find(f => f.heading === "Noto Sans KR"),
        layout: ["Hero", "진료과목", "의료진", "예약", "오시는 길"],
        tips: ["청결하고 신뢰감 있는 디자인", "예약 버튼은 항상 보이게", "의료진 소개로 신뢰 구축"],
        avoid: ["어두운 색상", "복잡한 레이아웃", "작은 예약 버튼"]
    },
    "쇼핑몰": {
        palette: colorPalettes.find(p => p.name === "미니멀 모노"),
        style: uiStyles.find(s => s.name === "벤토 그리드"),
        font: fontPairings.find(f => f.heading === "Poppins"),
        layout: ["Hero", "카테고리", "베스트", "신상품", "리뷰"],
        tips: ["상품 이미지가 주인공", "CTA 버튼은 눈에 띄게", "필터와 검색 기능 강조"],
        avoid: ["배경이 화려한 디자인", "작은 상품 이미지", "복잡한 결제 과정"]
    },
    "포트폴리오": {
        palette: colorPalettes.find(p => p.name === "미니멀 모노"),
        style: uiStyles.find(s => s.name === "미니멀리즘"),
        font: fontPairings.find(f => f.heading === "Space Grotesk"),
        layout: ["Hero", "소개", "프로젝트", "기술스택", "연락처"],
        tips: ["작업물이 돋보이게", "깔끔한 여백 활용", "연락 방법을 명확하게"],
        avoid: ["과도한 장식", "자동 재생 음악", "플래시 애니메이션"]
    },
    "교육": {
        palette: colorPalettes.find(p => p.name === "코퍼레이트 블루"),
        style: uiStyles.find(s => s.name === "클레이모피즘"),
        font: fontPairings.find(f => f.heading === "Montserrat"),
        layout: ["Hero", "과정소개", "강사진", "수강후기", "등록"],
        tips: ["신뢰감 있는 디자인", "과정별 명확한 구분", "수강 후기로 신뢰 구축"],
        avoid: ["유치한 디자인", "정보 과부하", "숨겨진 가격"]
    },
    "음식점": {
        palette: colorPalettes.find(p => p.name === "코지 오렌지"),
        style: uiStyles.find(s => s.name === "소프트 UI"),
        font: fontPairings.find(f => f.heading === "DM Serif Display"),
        layout: ["Hero", "메뉴", "스토리", "갤러리", "예약"],
        tips: ["음식 사진이 가장 중요", "메뉴는 읽기 쉽게", "예약/주문 버튼 강조"],
        avoid: ["저품질 음식 사진", "PDF 메뉴", "복잡한 예약 과정"]
    },
    "뷰티": {
        palette: colorPalettes.find(p => p.name === "로맨틱 로즈"),
        style: uiStyles.find(s => s.name === "소프트 UI"),
        font: fontPairings.find(f => f.heading === "Cormorant Garamond"),
        layout: ["Hero", "서비스", "비포&애프터", "가격", "예약"],
        tips: ["고급스러운 색상 사용", "비포/애프터로 효과 어필", "편안한 분위기 연출"],
        avoid: ["강렬한 네온 색상", "남성적인 디자인", "정보 부족"]
    },
    "IT테크": {
        palette: colorPalettes.find(p => p.name === "테크 그라데이션"),
        style: uiStyles.find(s => s.name === "글래스모피즘"),
        font: fontPairings.find(f => f.heading === "Space Grotesk"),
        layout: ["Hero", "기능소개", "가격", "FAQ", "시작하기"],
        tips: ["혁신적인 느낌의 디자인", "기능을 시각적으로 설명", "CTA 버튼 강조"],
        avoid: ["구식 디자인", "복잡한 가입 과정", "기술 용어 남발"]
    },
    "스타트업": {
        palette: colorPalettes.find(p => p.name === "테크 그라데이션"),
        style: uiStyles.find(s => s.name === "그라데이션 메시"),
        font: fontPairings.find(f => f.heading === "Poppins"),
        layout: ["Hero", "문제정의", "솔루션", "팀소개", "투자자"],
        tips: ["현대적이고 세련된 디자인", "명확한 가치 제안", "신뢰도 높이는 요소"],
        avoid: ["촌스러운 클립아트", "과장된 표현", "느린 로딩"]
    },
    "호텔": {
        palette: colorPalettes.find(p => p.name === "골든 엘레강스"),
        style: uiStyles.find(s => s.name === "미니멀리즘"),
        font: fontPairings.find(f => f.heading === "Cormorant Garamond"),
        layout: ["Hero", "객실", "시설", "위치", "예약"],
        tips: ["고급스러운 사진 중심", "예약 버튼 항상 보이게", "특별 혜택 강조"],
        avoid: ["저품질 이미지", "복잡한 예약 과정", "숨겨진 비용"]
    },
    "게임": {
        palette: colorPalettes.find(p => p.name === "사이버펑크"),
        style: uiStyles.find(s => s.name === "다크 모드"),
        font: fontPairings.find(f => f.heading === "Space Grotesk"),
        layout: ["Hero", "게임소개", "스크린샷", "다운로드", "커뮤니티"],
        tips: ["다이나믹한 비주얼", "게임 분위기 반영", "다운로드 버튼 강조"],
        avoid: ["정적인 디자인", "느린 로딩", "과도한 팝업"]
    },
    "웨딩": {
        palette: colorPalettes.find(p => p.name === "로맨틱 로즈"),
        style: uiStyles.find(s => s.name === "오가닉 셰이프"),
        font: fontPairings.find(f => f.heading === "Cormorant Garamond"),
        layout: ["Hero", "우리이야기", "갤러리", "일정", "RSVP"],
        tips: ["로맨틱한 색상", "커플 사진 강조", "일정 정보 명확하게"],
        avoid: ["과한 반짝임 효과", "복잡한 레이아웃", "느린 이미지 로딩"]
    }
};

// 기본 추천 생성 함수
function getRecommendation(topic) {
    const normalizedTopic = topic.toLowerCase().trim();

    // 직접 매칭
    for (const [key, value] of Object.entries(industryRecommendations)) {
        if (normalizedTopic.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedTopic)) {
            return { topic: key, ...value };
        }
    }

    // 팔레트 산업 매칭
    for (const palette of colorPalettes) {
        for (const industry of palette.industry) {
            if (normalizedTopic.includes(industry.toLowerCase()) || industry.toLowerCase().includes(normalizedTopic)) {
                return {
                    topic: industry,
                    palette: palette,
                    style: uiStyles[0],
                    font: fontPairings[2],
                    layout: ["Hero", "소개", "특징", "갤러리", "연락처"],
                    tips: ["해당 산업에 맞는 색상 사용", "명확한 CTA 버튼", "모바일 최적화"],
                    avoid: ["어울리지 않는 색상", "복잡한 레이아웃", "느린 로딩"]
                };
            }
        }
    }

    // 기본값
    return {
        topic: topic,
        palette: colorPalettes[12], // 미니멀 모노
        style: uiStyles[2], // 미니멀리즘
        font: fontPairings[2], // Poppins
        layout: ["Hero", "소개", "특징", "갤러리", "연락처"],
        tips: ["깔끔한 레이아웃", "명확한 CTA 버튼", "모바일 최적화"],
        avoid: ["복잡한 디자인", "작은 텍스트", "느린 로딩"]
    };
}

// Export for use in app.js
window.designData = {
    colorPalettes,
    uiStyles,
    fontPairings,
    industryRecommendations,
    getRecommendation
};
