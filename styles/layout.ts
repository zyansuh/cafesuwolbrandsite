/**
 * 레이아웃 공통 스타일
 * - 페이지 컨테이너, 패딩, 간격 등
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
    container: 'w-full max-w-4xl flex flex-col items-center overflow-visible',
    padding: 'px-6 sm:px-8 md:px-10',
    sectionGap: 'gap-y-16 md:gap-y-20',
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
