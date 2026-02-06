# 카페수월 (Cafe Suwol)

카페수월 브랜드 웹사이트

## 🚀 시작하기

### 개발 서버 실행
```bash
npm run dev
```

개발 서버가 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 빌드
```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
cafelink/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   └── globals.css        # 전역 스타일
├── components/            # React 컴포넌트
│   ├── Navbar.tsx         # 네비게이션 바
│   └── home/              # 홈페이지 섹션들
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── MenuSection.tsx
│       ├── GallerySection.tsx
│       ├── NoticeSection.tsx
│       ├── StoreSection.tsx
│       └── Footer.tsx
├── styles/                # 스타일 설정
│   ├── colors.ts          # 브랜드 컬러 시스템
│   ├── layout.ts          # 레이아웃 설정
│   └── index.ts           # 통합 export
└── public/                # 정적 파일
```

## 🎨 디자인 시스템

### 컬러
모든 브랜드 컬러는 `styles/colors.ts`에서 관리됩니다.

```typescript
import { colors } from '@/styles';

// 사용 예시
const brandColor = colors.brand.primary; // #78350f
```

### 레이아웃
레이아웃 설정은 `styles/layout.ts`에서 관리됩니다.

```typescript
import { layout } from '@/styles';

// 사용 예시
const padding = layout.padding.page;
```

## 🛠 기술 스택

- **Next.js 16** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS 4** - 유틸리티 CSS
- **Framer Motion** - 애니메이션
- **Lucide React** - 아이콘

## 📝 주요 기능

- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 스크롤 애니메이션
- ✅ 네비게이션 바 (모바일 메뉴 지원)
- ✅ Hero 섹션
- ✅ 브랜드 소개
- ✅ 메뉴 소개
- ✅ 갤러리
- ✅ 공지사항
- ✅ 매장 안내
- ✅ SNS 링크

## 🎯 브랜드 컬러

- **Primary**: Amber 950 (#78350f) - 메인 다크 브라운
- **Secondary**: Amber 900 (#92400e) - 세컨더리 브라운
- **Background**: Amber 50 (#fffbeb) - 밝은 배경

## 📱 반응형 브레이크포인트

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
