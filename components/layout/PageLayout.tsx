/**
 * 상세 페이지 공통 레이아웃
 * - Navbar + 메인 콘텐츠 + Footer
 */

import Navbar from '@/components/Navbar';
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
      <div className="w-full flex justify-center">
        <Footer />
      </div>
    </>
  );
}
