/**
 * 저널(블로그) 카테고리
 * - Journal 섹션에서 사용
 */

import { Coffee, BookOpen, User, FileText } from 'lucide-react';

export interface JournalCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const JOURNAL_CATEGORIES: JournalCategory[] = [
  { title: '오늘의 원두 이야기', icon: Coffee },
  { title: '한 권의 책', icon: BookOpen },
  { title: '작가 인터뷰', icon: User },
  { title: '수월의 기록', icon: FileText },
];
