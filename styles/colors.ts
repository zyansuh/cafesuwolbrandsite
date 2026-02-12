/**
 * 카페수월 브랜드 컬러 시스템
 * - 밝기 +10, 채도 맑게 조정된 버전
 * - JS에서 직접 색상값 사용 시 참조 (Tailwind 클래스는 globals.css @theme에서 오버라이드)
 */

export const colors = {
  // 메인 브랜드 컬러
  brand: {
    primary: '#8f4a1f',      // amber-950 - 메인 다크 브라운
    secondary: '#a55a24',    // amber-900 - 세컨더리 브라운
    light: '#d98a2a',       // amber-600 - 밝은 브라운
    accent: '#e8a31f',       // amber-500 - 액센트
  },

  // 배경 컬러
  background: {
    primary: '#ffffff',      // 메인 배경 (화이트)
    secondary: '#fffdf5',    // amber-50 - 밝은 앰버
    tertiary: '#fff8e8',     // amber-100 - 더 진한 앰버
    gradient: {
      from: '#fffdf5',       // amber-50
      via: '#ffffff',        // white
      to: '#fffdf5',         // amber-50
    }
  },

  // 텍스트 컬러
  text: {
    primary: '#8f4a1f',      // amber-950 - 메인 텍스트
    secondary: '#a55a24',    // amber-900 - 세컨더리 텍스트
    tertiary: '#c97d3a',     // amber-700 - 삼차 텍스트
    gray: {
      dark: '#374151',       // gray-700
      medium: '#6b7280',     // gray-600
      light: '#9ca3af',      // gray-400
    }
  },

  // 테두리 컬러
  border: {
    light: '#fff8e8',        // amber-100
    medium: '#fef5c7',       // amber-200
    dark: '#fde68a',         // amber-300
    gray: {
      light: '#f3f4f6',      // gray-100
      medium: '#e5e7eb',     // gray-200
    }
  },

  // 상태 컬러
  state: {
    hover: '#a55a24',        // amber-900
    active: '#8f4a1f',       // amber-950
    disabled: '#d1d5db',     // gray-300
  }
} as const;

export type Colors = typeof colors;
