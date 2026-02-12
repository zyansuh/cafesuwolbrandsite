/**
 * PageLayout - 상세 페이지 공통 레이아웃
 *
 * [역할]
 * - /about, /cafe, /books 등 상세 페이지에서 공통 사용
 * - Navbar + 메인 콘텐츠 + DividerSection + Footer
 *
 * [구조]
 * - pt-20: Navbar 고정 높이만큼 패딩
 * - layout.page: 컨테이너, 패딩, 섹션 간격
 */

import Navbar from '@/components/Navbar';
import DividerSection from '@/components/home/DividerSection';
import Footer from '@/components/home/Footer';
import { layout } from '@/styles';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center overflow-visible pt-20">
        <div
          className={`${layout.page.container} ${layout.page.padding} ${layout.page.sectionGap}`}
        >
          {children}
        </div>
      </main>
      <DividerSection />
      <div className="w-full flex justify-center">
        <Footer />
      </div>
    </>
  );
}
