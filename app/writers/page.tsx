/**
 * Writers 페이지
 */

import PageLayout from '@/components/layout/PageLayout';
import WritersSection from '@/components/home/WritersSection';

export const metadata = {
  title: 'Writers | 카페수월',
  description: '입점 작가 소개 · 인터뷰 · Q&A',
};

export default function WritersPage() {
  return (
    <PageLayout>
      <WritersSection />
    </PageLayout>
  );
}
