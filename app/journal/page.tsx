/**
 * Journal 페이지
 */

import PageLayout from '@/components/layout/PageLayout';
import JournalSection from '@/components/home/JournalSection';

export const metadata = {
  title: 'Journal | 카페수월',
  description: '브랜딩 · 소식 · 블로그',
};

export default function JournalPage() {
  return (
    <PageLayout>
      <JournalSection />
    </PageLayout>
  );
}
