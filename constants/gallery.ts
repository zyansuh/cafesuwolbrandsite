/**
 * 공간미리보기 이미지 데이터
 * - 실제 이미지로 교체 예정
 */

export interface SpaceImage {
  id: number;
  title: string;
  color: string; // Tailwind bg 클래스
}

export const SPACE_IMAGES: SpaceImage[] = [
  { id: 1, title: '좌석', color: 'bg-amber-200' },
  { id: 2, title: '창가', color: 'bg-amber-300' },
  { id: 3, title: '북존', color: 'bg-amber-100' },
  { id: 4, title: '핸드드립존', color: 'bg-amber-200' },
];
