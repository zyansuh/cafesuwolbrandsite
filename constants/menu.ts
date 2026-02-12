/**
 * 카페 메뉴 데이터
 * - 실제 API 연동 시 이 파일의 데이터를 교체
 */

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { name: '시그니처 아메리카노', description: '깊고 진한 에스프레소의 풍미', price: '4,500원', category: 'coffee' },
  { name: '수월 라떼', description: '부드러운 우유와 에스프레소의 조화', price: '5,000원', category: 'coffee' },
  { name: '콜드브루', description: '16시간 저온 추출의 깊은 맛', price: '5,500원', category: 'coffee' },
  { name: '크림 브륄레 라떼', description: '카라멜라이징한 달콤한 크림 토핑', price: '6,500원', category: 'signature' },
  { name: '말차 라떼', description: '프리미엄 일본산 말차', price: '6,000원', category: 'non-coffee' },
  { name: '딸기 에이드', description: '신선한 딸기로 만든 상큼함', price: '6,500원', category: 'beverage' },
];
