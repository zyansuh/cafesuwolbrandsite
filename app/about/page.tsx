/**
 * About 수월 페이지
 */

import PageLayout from '@/components/layout/PageLayout';
import AboutSection from '@/components/home/AboutSection';
import SuwolIntroSection from '@/components/home/SuwolIntroSection';

export const metadata = {
  title: 'About 수월 | 카페수월',
  description: '북카페 수월 브랜드 스토리',
};

export default function AboutPage() {
  return (
    <PageLayout>
      <SuwolIntroSection />
      <AboutSection />
    </PageLayout>
  );
}
