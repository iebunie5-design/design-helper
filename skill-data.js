// ===== UI/UX Pro Max Skill Data =====
// 스킬에서 가져온 확장 데이터

// 96개 산업별 색상 팔레트 (스킬 데이터)
const proColorPalettes = [
    { no: 1, type: "SaaS (General)", primary: "#2563EB", secondary: "#3B82F6", cta: "#F97316", bg: "#F8FAFC", text: "#1E293B", border: "#E2E8F0", note: "Trust blue + orange CTA contrast" },
    { no: 2, type: "Micro SaaS", primary: "#6366F1", secondary: "#818CF8", cta: "#10B981", bg: "#F5F3FF", text: "#1E1B4B", border: "#E0E7FF", note: "Indigo primary + emerald CTA" },
    { no: 3, type: "E-commerce", primary: "#059669", secondary: "#10B981", cta: "#F97316", bg: "#ECFDF5", text: "#064E3B", border: "#A7F3D0", note: "Success green + urgency orange" },
    { no: 4, type: "E-commerce Luxury", primary: "#1C1917", secondary: "#44403C", cta: "#CA8A04", bg: "#FAFAF9", text: "#0C0A09", border: "#D6D3D1", note: "Premium dark + gold accent" },
    { no: 5, type: "Healthcare App", primary: "#0891B2", secondary: "#22D3EE", cta: "#059669", bg: "#ECFEFF", text: "#164E63", border: "#A5F3FC", note: "Calm cyan + health green" },
    { no: 6, type: "Educational App", primary: "#4F46E5", secondary: "#818CF8", cta: "#F97316", bg: "#EEF2FF", text: "#1E1B4B", border: "#C7D2FE", note: "Playful indigo + energetic orange" },
    { no: 7, type: "Creative Agency", primary: "#EC4899", secondary: "#F472B6", cta: "#06B6D4", bg: "#FDF2F8", text: "#831843", border: "#FBCFE8", note: "Bold pink + cyan accent" },
    { no: 8, type: "Gaming", primary: "#7C3AED", secondary: "#A78BFA", cta: "#F43F5E", bg: "#0F0F23", text: "#E2E8F0", border: "#4C1D95", note: "Neon purple + rose action" },
    { no: 9, type: "Fintech/Crypto", primary: "#F59E0B", secondary: "#FBBF24", cta: "#8B5CF6", bg: "#0F172A", text: "#F8FAFC", border: "#334155", note: "Gold trust + purple tech" },
    { no: 10, type: "AI/Chatbot", primary: "#7C3AED", secondary: "#A78BFA", cta: "#06B6D4", bg: "#FAF5FF", text: "#1E1B4B", border: "#DDD6FE", note: "AI purple + cyan interactions" },
    { no: 11, type: "Beauty/Spa", primary: "#EC4899", secondary: "#F9A8D4", cta: "#8B5CF6", bg: "#FDF2F8", text: "#831843", border: "#FBCFE8", note: "Soft pink + lavender luxury" },
    { no: 12, type: "Restaurant/Food", primary: "#DC2626", secondary: "#F87171", cta: "#CA8A04", bg: "#FEF2F2", text: "#450A0A", border: "#FECACA", note: "Appetizing red + warm gold" },
    { no: 13, type: "Fitness/Gym", primary: "#F97316", secondary: "#FB923C", cta: "#22C55E", bg: "#1F2937", text: "#F8FAFC", border: "#374151", note: "Energy orange + success green" },
    { no: 14, type: "Real Estate", primary: "#0F766E", secondary: "#14B8A6", cta: "#0369A1", bg: "#F0FDFA", text: "#134E4A", border: "#99F6E4", note: "Trust teal + professional blue" },
    { no: 15, type: "Travel/Tourism", primary: "#0EA5E9", secondary: "#38BDF8", cta: "#F97316", bg: "#F0F9FF", text: "#0C4A6E", border: "#BAE6FD", note: "Sky blue + adventure orange" },
    { no: 16, type: "Coffee Shop", primary: "#78350F", secondary: "#92400E", cta: "#FBBF24", bg: "#FEF3C7", text: "#451A03", border: "#FDE68A", note: "Coffee brown + warm gold" },
    { no: 17, type: "Bakery/Cafe", primary: "#92400E", secondary: "#B45309", cta: "#F8FAFC", bg: "#FEF3C7", text: "#78350F", border: "#FDE68A", note: "Warm brown + cream white" },
    { no: 18, type: "Developer Tool", primary: "#1E293B", secondary: "#334155", cta: "#22C55E", bg: "#0F172A", text: "#F8FAFC", border: "#475569", note: "Code dark + run green" },
    { no: 19, type: "Music Streaming", primary: "#1E1B4B", secondary: "#4338CA", cta: "#22C55E", bg: "#0F0F23", text: "#F8FAFC", border: "#312E81", note: "Dark audio + play green" },
    { no: 20, type: "Wedding/Event", primary: "#DB2777", secondary: "#F472B6", cta: "#CA8A04", bg: "#FDF2F8", text: "#831843", border: "#FBCFE8", note: "Romantic pink + elegant gold" }
];

// 67개 UI 스타일 (스킬 데이터에서 선별)
const proUIStyles = [
    {
        no: 1,
        name: "Minimalism",
        nameKo: "미니멀리즘",
        keywords: "Clean, simple, spacious, functional, white space",
        colors: { primary: "#000000", secondary: "#FFFFFF", accent: "#808080" },
        effects: "Subtle hover (200-250ms), smooth transitions, sharp shadows",
        bestFor: ["Enterprise apps", "Dashboards", "Documentation", "SaaS"],
        cssKeywords: "display: grid, gap: 2rem, font-family: sans-serif, max-width: 1200px",
        aiPrompt: "Design a minimalist landing page. Use: white space, geometric layouts, sans-serif fonts, high contrast, grid-based structure."
    },
    {
        no: 2,
        name: "Glassmorphism",
        nameKo: "글래스모피즘",
        keywords: "Frosted glass, transparent, blurred background, layered",
        colors: { primary: "rgba(255,255,255,0.15)", secondary: "#0080FF", accent: "#FF1493" },
        effects: "Backdrop blur (10-20px), subtle border, Z-depth",
        bestFor: ["Modern SaaS", "Financial dashboards", "Modal overlays", "Navigation"],
        cssKeywords: "backdrop-filter: blur(15px), background: rgba(255,255,255,0.15), border: 1px solid rgba(255,255,255,0.2)",
        aiPrompt: "Design a glassmorphic interface with frosted glass effect. Use backdrop blur (10-20px), translucent overlays, vibrant background colors."
    },
    {
        no: 3,
        name: "Neubrutalism",
        nameKo: "뉴브루탈리즘",
        keywords: "Bold borders, black outlines, primary colors, thick shadows",
        colors: { primary: "#FFEB3B", secondary: "#FF5252", accent: "#000000" },
        effects: "box-shadow: 4px 4px 0 #000, border: 3px solid #000, no gradients",
        bestFor: ["Gen Z brands", "Startups", "Creative agencies", "Tech blogs"],
        cssKeywords: "border: 3px solid black, box-shadow: 5px 5px 0px black, font-weight: 700",
        aiPrompt: "Design a neubrutalist interface. Use: high contrast, hard black borders (3px+), bright pop colors, no blur, bold typography."
    },
    {
        no: 4,
        name: "Bento Box Grid",
        nameKo: "벤토 그리드",
        keywords: "Modular cards, asymmetric grid, Apple-style, dashboard tiles",
        colors: { primary: "#F5F5F7", secondary: "#FFFFFF", accent: "#1D1D1F" },
        effects: "Hover scale (1.02), soft shadow expansion, smooth layout shifts",
        bestFor: ["Dashboards", "Product pages", "Portfolios", "Marketing summaries"],
        cssKeywords: "display: grid, grid-template-columns: repeat(4, 1fr), gap: 16px, border-radius: 24px",
        aiPrompt: "Design a Bento Grid layout. Use: modular cards with varied sizes (1x1, 2x1), Apple-style aesthetic, rounded corners (16-24px)."
    },
    {
        no: 5,
        name: "Dark Mode OLED",
        nameKo: "다크 모드",
        keywords: "Dark theme, low light, high contrast, OLED, power efficient",
        colors: { primary: "#000000", secondary: "#121212", accent: "#39FF14" },
        effects: "Minimal glow, dark-to-light transitions, high readability",
        bestFor: ["Night-mode apps", "Coding platforms", "Entertainment", "OLED devices"],
        cssKeywords: "background: #000000, color: #FFFFFF, text-shadow: 0 0 10px neon-color",
        aiPrompt: "Create an OLED-optimized dark interface with deep black (#000000), vibrant neon accents, high contrast text."
    },
    {
        no: 6,
        name: "Aurora UI",
        nameKo: "오로라 UI",
        keywords: "Vibrant gradients, Northern Lights effect, mesh gradient, luminous",
        colors: { primary: "#0080FF", secondary: "#FF1493", accent: "#00FFFF" },
        effects: "Large flowing gradients, subtle 8-12s animations, depth via color layering",
        bestFor: ["Modern SaaS", "Creative agencies", "Music platforms", "Hero sections"],
        cssKeywords: "background: conic-gradient or radial-gradient, animation: 8-12s, background-size: 200%",
        aiPrompt: "Create a vibrant gradient interface inspired by Northern Lights with mesh gradients, flowing animations."
    },
    {
        no: 7,
        name: "Claymorphism",
        nameKo: "클레이모피즘",
        keywords: "Soft 3D, chunky, playful, toy-like, bubbly",
        colors: { primary: "#FDBCB4", secondary: "#ADD8E6", accent: "#98FF98" },
        effects: "Inner+outer shadows, soft press (200ms), fluffy elements",
        bestFor: ["Educational apps", "Children's apps", "Creative tools", "Onboarding"],
        cssKeywords: "border-radius: 16-24px, border: 3-4px solid, box-shadow: inset + outer",
        aiPrompt: "Design a playful, toy-like interface with soft 3D, chunky elements, rounded edges (16-24px), pastel colors."
    },
    {
        no: 8,
        name: "Cyberpunk UI",
        nameKo: "사이버펑크",
        keywords: "Neon, dark mode, terminal, HUD, sci-fi, glitch",
        colors: { primary: "#00FF00", secondary: "#FF00FF", accent: "#00FFFF" },
        effects: "Neon glow, glitch animations, scanlines, terminal fonts",
        bestFor: ["Gaming", "Tech products", "Crypto apps", "Entertainment"],
        cssKeywords: "background: #0D0D0D, color: neon, font-family: monospace, text-shadow: glow",
        aiPrompt: "Design a cyberpunk interface. Use: neon colors on dark (#0D0D0D), terminal aesthetic, glitch effects, monospace fonts."
    }
];

// 57개 폰트 조합 (스킬 데이터)
const proFontPairings = [
    { no: 1, name: "Classic Elegant", category: "Serif + Sans", heading: "Playfair Display", body: "Inter", mood: "elegant, luxury, sophisticated", bestFor: "Luxury brands, fashion, spa, editorial", cssImport: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');" },
    { no: 2, name: "Modern Professional", category: "Sans + Sans", heading: "Poppins", body: "Open Sans", mood: "modern, professional, clean", bestFor: "SaaS, corporate sites, startups", cssImport: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');" },
    { no: 3, name: "Tech Startup", category: "Sans + Sans", heading: "Space Grotesk", body: "DM Sans", mood: "tech, startup, innovative", bestFor: "Tech companies, AI products, developer tools", cssImport: "@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');" },
    { no: 4, name: "Playful Creative", category: "Display + Sans", heading: "Fredoka", body: "Nunito", mood: "playful, friendly, fun", bestFor: "Children's apps, educational, gaming", cssImport: "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap');" },
    { no: 5, name: "Developer Mono", category: "Mono + Sans", heading: "JetBrains Mono", body: "IBM Plex Sans", mood: "code, developer, technical", bestFor: "Developer tools, documentation, tech blogs", cssImport: "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');" },
    { no: 6, name: "Wellness Calm", category: "Serif + Sans", heading: "Lora", body: "Raleway", mood: "calm, wellness, health", bestFor: "Health apps, wellness, spa, meditation", cssImport: "@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');" },
    { no: 7, name: "Korean Modern", category: "Sans + Sans", heading: "Noto Sans KR", body: "Noto Sans KR", mood: "korean, modern, clean", bestFor: "Korean sites, K-beauty, K-pop", cssImport: "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');" },
    { no: 8, name: "Gaming Bold", category: "Display + Sans", heading: "Russo One", body: "Chakra Petch", mood: "gaming, bold, action", bestFor: "Gaming, esports, action games", cssImport: "@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Russo+One&display=swap');" },
    { no: 9, name: "Crypto/Web3", category: "Sans + Sans", heading: "Orbitron", body: "Exo 2", mood: "crypto, web3, futuristic", bestFor: "Crypto platforms, NFT, blockchain", cssImport: "@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap');" },
    { no: 10, name: "Accessibility First", category: "Sans + Sans", heading: "Atkinson Hyperlegible", body: "Atkinson Hyperlegible", mood: "accessible, readable, inclusive", bestFor: "Accessibility-critical sites, government, healthcare", cssImport: "@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');" }
];

// Export
window.skillData = {
    proColorPalettes,
    proUIStyles,
    proFontPairings
};
