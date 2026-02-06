// 카페수월 브랜드 컬러 시스템

export const colors = {
  // 메인 브랜드 컬러
  brand: {
    primary: '#78350f',      // amber-950 - 메인 다크 브라운
    secondary: '#92400e',    // amber-900 - 세컨더리 브라운
    light: '#d97706',        // amber-600 - 밝은 브라운
    accent: '#f59e0b',       // amber-500 - 액센트
  },

  // 배경 컬러
  background: {
    primary: '#ffffff',      // 메인 배경 (화이트)
    secondary: '#fffbeb',    // amber-50 - 밝은 앰버
    tertiary: '#fef3c7',     // amber-100 - 더 진한 앰버
    gradient: {
      from: '#fffbeb',       // amber-50
      via: '#ffffff',        // white
      to: '#fffbeb',         // amber-50
    }
  },

  // 텍스트 컬러
  text: {
    primary: '#78350f',      // amber-950 - 메인 텍스트
    secondary: '#92400e',    // amber-900 - 세컨더리 텍스트
    tertiary: '#b45309',     // amber-700 - 삼차 텍스트
    gray: {
      dark: '#374151',       // gray-700
      medium: '#6b7280',     // gray-600
      light: '#9ca3af',      // gray-400
    }
  },

  // 테두리 컬러
  border: {
    light: '#fef3c7',        // amber-100
    medium: '#fde68a',       // amber-200
    dark: '#fcd34d',         // amber-300
    gray: {
      light: '#f3f4f6',      // gray-100
      medium: '#e5e7eb',     // gray-200
    }
  },

  // 상태 컬러
  state: {
    hover: '#92400e',        // amber-900
    active: '#78350f',       // amber-950
    disabled: '#d1d5db',     // gray-300
  }
} as const;

export type Colors = typeof colors;
