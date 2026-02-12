# 카페수월 프로젝트 구조

## 디렉터리 개요

```
cafelink/
├── app/                 # Next.js 페이지 (라우팅)
├── components/          # React 컴포넌트
│   ├── home/           # 홈페이지 섹션 컴포넌트
│   ├── admin/          # 관리자 페이지 컴포넌트
│   ├── auth/           # 로그인/회원가입 컴포넌트
│   └── ui/             # 공통 UI 컴포넌트
├── constants/           # 데이터 상수 (메뉴, 네비게이션 등)
├── styles/              # 스타일 상수 (colors, layout, section)
└── docs/               # 문서
```

## 스타일 시스템 (`styles/`)

| 파일 | 용도 |
|------|------|
| `colors.ts` | 브랜드 컬러 (JS에서 색상값 참조 시) |
| `layout.ts` | 페이지 레이아웃, 카드, 버튼 클래스 |
| `section.ts` | 섹션 공통 패딩, 간격, 애니메이션 |

**사용 예:**
```tsx
import { section, layout } from '@/styles';

<section className={`${section.padding.default} bg-amber-50`}>
  <button className={layout.button.primary}>버튼</button>
</section>
```

## 상수 (`constants/`)

| 파일 | 용도 |
|------|------|
| `navigation.ts` | 네비게이션 메뉴 (NAV_ITEMS) |
| `menu.ts` | 카페 메뉴 목록 (MENU_ITEMS) |
| `contact.ts` | 연락처/매장 정보 (CONTACT_INFO) |
| `brand.ts` | 브랜드 스토리 텍스트 (BRAND_STORY) |
| `gallery.ts` | 공간미리보기 이미지 (SPACE_IMAGES) |
| `program.ts` | 행사/모임 (PROGRAMS) |
| `store.ts` | 스토어 판매 항목 (STORE_ITEMS) |
| `journal.ts` | 저널 카테고리 (JOURNAL_CATEGORIES) |

**데이터 수정 시:** 해당 constants 파일만 수정하면 됩니다.

## 공통 컴포넌트 (`components/ui/`)

| 컴포넌트 | 용도 |
|----------|------|
| `SectionHeader` | 섹션 제목 + 부제목 + 참고 문구 |

## 홈 섹션 순서

1. HeroSection - 메인 카피, CTA
2. SuwolIntroSection - 수월이란?
3. GallerySection - 공간미리보기
4. BooksSection - 이달의 책
5. ProgramSection - 행사/모임
6. AboutSection - About 수월 (브랜드 스토리)
7. CafeSection - 메뉴
8. WritersSection - 입점 작가
9. JournalSection - 저널
10. StoreSection - 스토어
11. ContactSection - 연락처
