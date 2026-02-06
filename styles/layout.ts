// 레이아웃 설정

export const layout = {
  // 최대 너비
  maxWidth: {
    container: 'max-w-7xl',
    content: 'max-w-6xl',
    narrow: 'max-w-5xl',
    wide: 'max-w-screen-2xl',
  },

  // 여백 (padding)
  padding: {
    page: 'pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20', // 왼쪽 여백 큼
    section: 'py-20',
    card: 'p-6',
    button: 'px-8 py-4',
  },

  // 간격 (gap)
  gap: {
    small: 'gap-3',
    medium: 'gap-6',
    large: 'gap-8',
  },

  // 반경 (border radius)
  radius: {
    small: 'rounded-md',
    medium: 'rounded-lg',
    large: 'rounded-xl',
    full: 'rounded-full',
  },
} as const;

export type Layout = typeof layout;
