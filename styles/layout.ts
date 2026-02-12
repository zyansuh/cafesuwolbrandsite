/**
 * layout - 레이아웃 공통 스타일
 *
 * [사용처]
 * - app/page.tsx, PageLayout: page.container, page.padding, page.sectionGap
 * - ExploreSection, CafeSection 등: card, button
 *
 * [page]
 * - container: max-w-4xl, min-w-0 (오버플로우 방지)
 * - padding: 반응형 px (모바일 좁게)
 * - sectionGap: 섹션 간 세로 간격
 */

export const layout = {
  /** 콘텐츠 최대 너비 (데스크톱 중앙 정렬) */
  maxWidth: {
    container: 'max-w-4xl',
    content: 'max-w-6xl',
    narrow: 'max-w-2xl',
    wide: 'max-w-screen-2xl',
  },

  /** 페이지 메인 영역 */
  page: {
    container: 'w-full max-w-4xl flex flex-col items-center overflow-visible min-w-0',
    padding: 'px-2 sm:px-6 md:px-8 lg:px-10',
    sectionGap: 'gap-y-12 sm:gap-y-16 md:gap-y-20',
  },

  /** 카드 스타일 */
  card: {
    base: 'rounded-lg border border-amber-100 transition-all overflow-visible min-w-0',
    hover: 'hover:border-amber-300 hover:shadow-md',
    padding: 'p-5',
    paddingLarge: 'p-6',
  },

  /** 버튼 스타일 */
  button: {
    primary: 'px-7 py-3 bg-amber-900 text-white rounded-md font-medium hover:bg-amber-800 transition-colors',
    outline: 'px-7 py-3 border-2 border-amber-900 text-amber-900 rounded-md font-medium hover:bg-amber-900 hover:text-white transition-colors',
  },

  /** 반경 */
  radius: {
    small: 'rounded-md',
    medium: 'rounded-lg',
    large: 'rounded-xl',
    full: 'rounded-full',
  },
} as const;

export type Layout = typeof layout;
