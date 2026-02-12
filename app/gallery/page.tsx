/**
 * 공간미리보기 페이지
 */

import PageLayout from '@/components/layout/PageLayout';
import GallerySection from '@/components/home/GallerySection';

export const metadata = {
  title: '공간미리보기 | 카페수월',
  description: '햇살이 드는 창가, 책이 있는 공간',
};

export default function GalleryPage() {
  return (
    <PageLayout>
      <GallerySection />
    </PageLayout>
  );
}
