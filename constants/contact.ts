/**
 * 연락처/매장 정보
 * - ContactSection에서 사용
 */

import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

export interface ContactItem {
  title: string;
  content: string;
  link?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const CONTACT_INFO: ContactItem[] = [
  { title: '오시는 길', content: '대전광역시 가양로68번길 2', icon: MapPin },
  {
    title: '영업시간',
    content: '평일 11:00 - 00:50\n일요일 11:00 - 00:50',
    icon: Clock,
  },
  { title: '문의', content: '02-1234-5678', link: 'tel:02-1234-5678', icon: Phone },
  { title: '입점 문의', content: '작가 입점 문의', link: '#', icon: MessageCircle },
];
