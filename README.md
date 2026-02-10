# 카페수월 (Cafe Suwol) ☕

> 일상의 여유를 담은 한 잔, 특별한 순간을 만드는 공간

카페수월 공식 브랜드 웹사이트입니다. Next.js 16과 TypeScript로 구축된 반응형 웹사이트로, 카페의 브랜드 정체성과 메뉴, 매장 정보를 소개합니다.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 📋 목차

- [시작하기](#-시작하기)
- [프로젝트 구조](#-프로젝트-구조)
- [디자인 시스템](#-디자인-시스템)
- [기술 스택](#-기술-스택)
- [주요 기능](#-주요-기능)
- [개발 가이드](#-개발-가이드)
- [배포](#-배포)

## 🚀 시작하기

### 사전 요구사항

- Node.js 20 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/zyansuh/cafesuwolbrandsite.git
cd cafesuwolbrandsite

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 린트 검사

```bash
npm run lint
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

### 페이지 구성
- ✅ **Hero Section** - 브랜드 메인 비주얼과 CTA 버튼
- ✅ **About Section** - 카페 소개 및 핵심 가치 (프리미엄 원두, 정성스런 서비스, 친환경 운영)
- ✅ **Menu Section** - 대표 메뉴 6종 소개 (시그니처 커피, 라떼, 디저트 등)
- ✅ **Gallery Section** - 카페 인테리어 및 메뉴 갤러리
- ✅ **Notice Section** - 신메뉴, 이벤트, 영업 공지사항
- ✅ **Store Section** - 매장 위치, 영업시간, 연락처 정보
- ✅ **Footer** - 브랜드 정보 및 SNS 링크

### 기술적 기능
- 🎨 **반응형 디자인** - 모바일, 태블릿, 데스크톱 완벽 대응
- ✨ **스크롤 애니메이션** - Framer Motion 기반 부드러운 인터랙션
- 📱 **모바일 메뉴** - 햄버거 메뉴 및 애니메이션 효과
- 🎯 **스무스 스크롤** - 네비게이션 클릭 시 섹션 이동
- 🎨 **통합 디자인 시스템** - 일관된 컬러 및 레이아웃 관리

## 🎯 브랜드 컬러

카페수월의 따뜻하고 고급스러운 브랜드 정체성을 표현하는 앰버 톤 컬러 팔레트:

| 색상 | Hex | 용도 |
|------|-----|------|
| Amber 950 | `#78350f` | 메인 텍스트, 버튼 |
| Amber 900 | `#92400e` | 세컨더리 텍스트, 호버 |
| Amber 700 | `#b45309` | 액센트 텍스트 |
| Amber 100 | `#fef3c7` | 테두리 |
| Amber 50 | `#fffbeb` | 밝은 배경 |
| White | `#ffffff` | 메인 배경 |

## 📱 반응형 브레이크포인트

```css
/* Mobile First Approach */
Mobile:  < 768px   (기본)
Tablet:  768px     (md:)
Desktop: 1024px    (lg:)
XL:      1280px    (xl:)
2XL:     1536px    (2xl:)
```

## 💻 개발 가이드

### 컴포넌트 추가

새로운 섹션을 추가하려면:

1. `components/home/` 폴더에 새 컴포넌트 생성
2. `app/page.tsx`에 import 및 추가
3. 스타일은 `styles/colors.ts`와 `styles/layout.ts` 활용

```typescript
// components/home/NewSection.tsx
'use client';

import { motion } from 'framer-motion';
import { colors } from '@/styles';

export default function NewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20">
        {/* 컨텐츠 */}
      </div>
    </section>
  );
}
```

### 스타일 가이드

- 왼쪽 여백이 더 큰 비대칭 레이아웃 사용
- 모든 색상은 `styles/colors.ts`에서 관리
- 일관된 padding 클래스 사용: `pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20`

### 애니메이션 패턴

```typescript
// 페이드 인 + 위로 슬라이드
initial={{ opacity: 0, y: 20 }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
transition={{ duration: 0.6 }}
```

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

또는 [Vercel Dashboard](https://vercel.com)에서 GitHub 저장소 연결

### 환경 변수

필요한 경우 `.env.local` 파일 생성:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이센스

This project is licensed under the MIT License.

## 📧 문의

카페수월 - [@cafesuwol](https://instagram.com/cafesuwol)

프로젝트 링크: [https://github.com/zyansuh/cafesuwolbrandsite](https://github.com/zyansuh/cafesuwolbrandsite)

---

Made with ☕ by 카페수월
