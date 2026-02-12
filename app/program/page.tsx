/**
 * 행사/모임 페이지
 */

import PageLayout from '@/components/layout/PageLayout';
import ProgramSection from '@/components/home/ProgramSection';

export const metadata = {
  title: '행사/모임 | 카페수월',
  description: '북토크 · 낭독회 · 글쓰기 모임 · 독립출판 클래스',
};

export default function ProgramPage() {
  return (
    <PageLayout>
      <ProgramSection />
    </PageLayout>
  );
}
