/**
 * 스토어 판매 항목
 * - Store 섹션에서 사용
 */

import { Package, Gift, BookOpen } from 'lucide-react';

export interface StoreItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const STORE_ITEMS: StoreItem[] = [
  { title: '드립백', icon: Package },
  { title: '굿즈', icon: Gift },
  { title: '독립출판 온라인 판매', icon: BookOpen },
];
