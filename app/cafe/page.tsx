/**
 * Cafe 메뉴 페이지
 */

import PageLayout from '@/components/layout/PageLayout';
import CafeSection from '@/components/home/CafeSection';

export const metadata = {
  title: 'Cafe | 카페수월',
  description: '커피 철학 · 원두 소개 · 시그니처 메뉴 · 핸드드립',
};

export default function CafePage() {
  return (
    <PageLayout>
      <CafeSection />
    </PageLayout>
  );
}
