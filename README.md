# 카페수월 (Cafe Suwol) ☕

> 일상의 여유를 담은 한 잔, 특별한 순간을 만드는 공간

카페수월 공식 브랜드 웹사이트입니다. Next.js 16과 TypeScript로 구축된 반응형 웹사이트로, 카페의 브랜드 정체성과 메뉴, 매장 정보를 소개하고, 관리자 페이지를 통해 전체 운영을 관리할 수 있습니다.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 📋 목차

- [시작하기](#-시작하기)
- [프로젝트 구조](#-프로젝트-구조)
- [주요 기능](#-주요-기능)
  - [사용자 페이지](#사용자-페이지)
  - [인증 시스템](#인증-시스템)
  - [관리자 페이지](#관리자-페이지)
- [디자인 시스템](#-디자인-시스템)
- [기술 스택](#-기술-스택)
- [개발 가이드](#-개발-가이드)
- [API 연동 가이드](#-api-연동-가이드)
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
├── app/                           # Next.js App Router
│   ├── layout.tsx                # 루트 레이아웃
│   ├── page.tsx                  # 홈페이지
│   ├── globals.css               # 전역 스타일
│   ├── login/                    # 로그인 페이지
│   │   └── page.tsx
│   ├── signup/                   # 회원가입 페이지
│   │   └── page.tsx
│   └── admin/                    # 관리자 페이지
│       ├── dashboard/            # 대시보드
│       ├── menu/                 # 메뉴 관리
│       ├── inventory/            # 재고 관리 ⭐
│       ├── orders/               # 주문 관리
│       ├── users/                # 회원 관리
│       ├── notices/              # 공지사항 관리
│       ├── stores/               # 매장 관리
│       └── gallery/              # 갤러리 관리
├── components/                   # React 컴포넌트
│   ├── Navbar.tsx               # 네비게이션 바
│   ├── admin/                   # 관리자 컴포넌트
│   │   └── AdminLayout.tsx      # 관리자 레이아웃
│   ├── auth/                    # 인증 컴포넌트
│   │   └── SocialLoginButtons.tsx
│   └── home/                    # 홈페이지 섹션들
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── MenuSection.tsx
│       ├── GallerySection.tsx
│       ├── NoticeSection.tsx
│       ├── StoreSection.tsx
│       └── Footer.tsx
├── styles/                      # 스타일 설정
│   ├── colors.ts               # 브랜드 컬러 시스템
│   ├── layout.ts               # 레이아웃 설정
│   └── index.ts                # 통합 export
└── public/                     # 정적 파일
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

### 프론트엔드
- **Next.js 16** - React 프레임워크 (App Router)
- **TypeScript 5** - 타입 안정성
- **Tailwind CSS 4** - 유틸리티 CSS 프레임워크
- **Framer Motion 12** - 애니메이션 라이브러리
- **Lucide React** - 아이콘 라이브러리

### 개발 도구
- **ESLint** - 코드 품질 검사
- **PostCSS** - CSS 처리
- **clsx & tailwind-merge** - 클래스네임 유틸리티

### 패키지 관리
```json
{
  "dependencies": {
    "next": "16.1.6",
    "react": "19.2.3",
    "framer-motion": "^12.33.0",
    "lucide-react": "^0.563.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0"
  }
}
```

## 📝 주요 기능

### 사용자 페이지

**홈페이지** (`/`)
- ✅ **Hero Section** - 브랜드 메인 비주얼과 CTA 버튼 (높이 50vh로 최적화)
- ✅ **About Section** - 카페 소개 및 핵심 가치 (프리미엄 원두, 정성스런 서비스, 친환경 운영)
- ✅ **Menu Section** - 대표 메뉴 6종 소개 (시그니처 커피, 라떼, 디저트 등)
- ✅ **Gallery Section** - 카페 인테리어 및 메뉴 갤러리 (2x3 그리드)
- ✅ **Notice Section** - 신메뉴, 이벤트, 영업 공지사항
- ✅ **Store Section** - 매장 위치, 영업시간, 연락처, 지도
- ✅ **Footer** - 브랜드 정보 및 SNS 링크 (Instagram, Facebook, YouTube)

**UI/UX 특징**
- 🎨 **반응형 디자인** - 모바일, 태블릿, 데스크톱 완벽 대응
- ✨ **스크롤 애니메이션** - Framer Motion 기반 부드러운 인터랙션
- 📱 **모바일 메뉴** - 햄버거 메뉴 및 애니메이션 효과
- 🎯 **스무스 스크롤** - 네비게이션 클릭 시 섹션 이동
- 🎨 **통합 디자인 시스템** - 일관된 컬러 및 레이아웃 관리
- ⬅️ **비대칭 레이아웃** - 왼쪽 여백이 더 큰 모던한 디자인

### 인증 시스템

**로그인** (`/login`)
- 📧 이메일/비밀번호 로그인
- 🔑 비밀번호 보기/숨기기 토글
- ✅ 로그인 상태 유지 옵션
- 🔗 비밀번호 찾기
- 🌐 소셜 로그인 (Google, Kakao, Naver)

**회원가입** (`/signup`)
- 📝 기본 정보 입력 (이름, 이메일, 전화번호)
- 🔒 비밀번호 & 비밀번호 확인
- 📋 약관 동의 (이용약관, 개인정보 처리방침, 마케팅 수신)
- 🌐 소셜 회원가입 (Google, Kakao, Naver)
- ✅ 비밀번호 일치 검증

### 관리자 페이지

**접속**: `/admin/dashboard`

**1. 대시보드** (`/admin/dashboard`)
- 📊 실시간 통계
  - 오늘 매출
  - 오늘 주문수
  - 총 회원수
  - 재고 부족 경고
- 📋 최근 주문 목록

**2. 메뉴 관리** (`/admin/menu`)
- ➕ 메뉴 CRUD (추가/수정/삭제)
- 🔍 메뉴 검색
- 🏷️ 카테고리별 분류 (커피, 시그니처, 논커피, 디저트)
- ✅ 판매 가능/품절 상태 관리
- 💰 가격 및 설명 관리
- 📝 모달 기반 폼

**3. 재고 관리** (`/admin/inventory`) ⭐ 핵심 기능
- 📦 **재고 CRUD**
  - 품목 추가/수정
  - 카테고리별 분류 (원두, 유제품, 시럽, 소모품)
  - 최소 수량 설정
  - 공급처 정보 관리
- 📈 **재고 입고 모달**
  - 입고 수량 입력
  - 입고 사유 선택 (정기발주, 긴급발주, 반품)
  - 메모 기능
- 📉 **재고 출고 모달**
  - 출고 수량 입력
  - 현재 재고 초과 방지 검증
  - 출고 사유 선택 (사용, 폐기, 반품, 분실)
- 👁️ **재고 상세 정보 모달**
  - 현재/최소 수량 표시
  - 재고 상태 자동 표시 (정상/부족)
- 📊 **재고 히스토리 모달**
  - 입출고 내역 타임라인
  - 수량 변동 및 담당자 정보
- ⚠️ **재고 부족 경고 시스템**
  - 최소 수량 이하 시 자동 알림
  - 발주 필요 품목 리스트 표시
- 🔍 검색 및 필터링

**4. 주문 관리** (`/admin/orders`)
- 📋 실시간 주문 목록 조회
- 🔄 주문 상태 변경
  - 대기중 → 준비중 → 완료
  - 취소 처리
- 🔍 주문번호/고객명 검색
- 🏷️ 상태별 필터링 (전체/대기/준비/완료/취소)

**5. 회원 관리** (`/admin/users`)
- 👥 회원 목록 조회
- 📊 회원 통계 대시보드
  - 총 회원수
  - 활성 회원
  - 총 누적 매출
- 📈 회원별 주문 내역 및 누적 결제 금액
- 🔍 이름/이메일/전화번호 통합 검색
- 📧 이메일 및 전화번호 표시

**6. 공지사항 관리** (`/admin/notices`)
- 📝 공지사항 CRUD
- 🏷️ 카테고리별 분류 (신메뉴, 공지, 이벤트)
- 👁️ 조회수 통계
- 📅 작성일 표시

**7. 매장 관리** (`/admin/stores`)
- 🏪 매장 정보 관리
- 📍 주소, 전화번호, 영업시간
- 🟢 영업 상태 (영업중/휴무)
- 🗺️ 지도 연동 준비

**8. 갤러리 관리** (`/admin/gallery`)
- 🖼️ 이미지 업로드 및 삭제
- 🏷️ 카테고리별 분류
- 📅 등록일 관리
- 🎨 그리드 레이아웃

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

### 페이지 접속

- **홈페이지**: `http://localhost:3000/`
- **로그인**: `http://localhost:3000/login`
- **회원가입**: `http://localhost:3000/signup`
- **관리자 대시보드**: `http://localhost:3000/admin/dashboard`

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

- **비대칭 레이아웃**: 왼쪽 여백이 더 큼 (모던한 디자인)
- **컬러 관리**: `styles/colors.ts`에서 중앙 관리
- **일관된 패딩**: `pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20`

### 애니메이션 패턴

```typescript
// 페이드 인 + 위로 슬라이드
initial={{ opacity: 0, y: 20 }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
transition={{ duration: 0.6 }}
```

### 관리자 페이지 개발

관리자 페이지는 `AdminLayout`을 사용합니다:

```typescript
import AdminLayout from '@/components/admin/AdminLayout';

export default function CustomAdminPage() {
  return (
    <AdminLayout>
      {/* 페이지 컨텐츠 */}
    </AdminLayout>
  );
}
```

## 🔌 API 연동 가이드

모든 페이지에 TODO 주석으로 API 연동 위치가 표시되어 있습니다.

### 인증 API

```typescript
// 로그인 - app/login/page.tsx
// TODO: 로그인 API 연동
fetch('YOUR_API_URL/auth/login', {
  method: 'POST',
  body: JSON.stringify({ email, password }),
});

// 소셜 로그인 - components/auth/SocialLoginButtons.tsx
// TODO: Google OAuth 로그인 API 연동
// TODO: Kakao OAuth 로그인 API 연동
// TODO: Naver OAuth 로그인 API 연동
```

### 관리자 API

```typescript
// 재고 관리
// 목록 조회
GET /admin/inventory

// 재고 추가
POST /admin/inventory
{ name, category, quantity, unit, minQuantity, supplier }

// 재고 입고
POST /admin/inventory/:id/stock-in
{ quantity, reason, note }

// 재고 출고
POST /admin/inventory/:id/stock-out
{ quantity, reason, note }

// 재고 히스토리
GET /admin/inventory/:id/history

// 메뉴 관리
GET /admin/menu
POST /admin/menu
PUT /admin/menu/:id
DELETE /admin/menu/:id

// 주문 관리
GET /admin/orders
PATCH /admin/orders/:id/status

// 회원 관리
GET /admin/users

// 공지사항 관리
GET /admin/notices
POST /admin/notices
DELETE /admin/notices/:id
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
