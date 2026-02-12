/**
 * Store 페이지
 */

import PageLayout from '@/components/layout/PageLayout';
import StoreSection from '@/components/home/StoreSection';

export const metadata = {
  title: 'Store | 카페수월',
  description: '드립백 · 굿즈 · 독립출판 온라인 판매',
};

export default function StorePage() {
  return (
    <PageLayout>
      <StoreSection />
    </PageLayout>
  );
}
