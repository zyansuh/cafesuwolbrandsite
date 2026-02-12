/**
 * section - 섹션 공통 스타일 상수
 *
 * [사용처]
 * - ExploreSection, AboutSection, GallerySection 등 홈/상세 페이지 섹션
 *
 * [contentPadding]
 * - px-4 sm:px-6: 섹션 내부 좌우 패딩
 *
 * [animation]
 * - duration, delayMultiplier: framer-motion 애니메이션 통일
 */

export const section = {
  /** 섹션 세로 패딩 (상하) */
  padding: {
    default: 'py-24 md:py-28',
    small: 'py-16 md:py-20',
    large: 'py-28 md:py-32',
  },

  /** 섹션 콘텐츠 내부 패딩 (좌우) */
  contentPadding: 'px-4 sm:px-6',

  /** 섹션 헤더(제목+설명) 하단 마진 */
  headerMargin: 'mb-14',

  /** 섹션 헤더 패딩 (제목 잘림 방지용) */
  headerPadding: 'px-4 sm:px-6 md:px-10',

  /** 그리드 간격 */
  gridGap: {
    default: 'gap-6',
    large: 'gap-8',
  },

  /** 버튼 영역 상단 마진 */
  buttonMargin: 'mt-12',

  /** 카드 패딩 (아이콘+텍스트 카드용) */
  card: {
    paddingLarge: 'p-6',
  },

  /** 애니메이션 딜레이 배수 (delay: index * section.animation.delayMultiplier) */
  animation: {
    duration: 0.6,
    delayMultiplier: 0.08,
  },
} as const;
