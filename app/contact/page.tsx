/**
 * Contact 페이지
 */

import PageLayout from '@/components/layout/PageLayout';
import ContactSection from '@/components/home/ContactSection';

export const metadata = {
  title: 'Contact | 카페수월',
  description: '오시는 길 · 지도 · 영업시간 · SNS · 입점 문의',
};

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactSection />
    </PageLayout>
  );
}
