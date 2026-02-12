/**
 * 이달의 책 페이지
 */

import PageLayout from '@/components/layout/PageLayout';
import BooksSection from '@/components/home/BooksSection';

export const metadata = {
  title: '이달의 책 | 카페수월',
  description: '독립출판 추천 · 작가 인터뷰',
};

export default function BooksPage() {
  return (
    <PageLayout>
      <BooksSection />
    </PageLayout>
  );
}
