/**
 * 메인 홈페이지 (간소화)
 * - Hero → 수월이란? → 둘러보기 링크 카드 → Footer
 * - 상세 내용은 각 페이지(/about, /cafe 등)로 분리
 */

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import SuwolIntroSection from '@/components/home/SuwolIntroSection';
import ExploreSection from '@/components/home/ExploreSection';
import Footer from '@/components/home/Footer';
import { layout } from '@/styles';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center overflow-visible">
        <div
          className={`${layout.page.container} ${layout.page.padding} ${layout.page.sectionGap}`}
        >
          <HeroSection />
          <SuwolIntroSection />
          <ExploreSection />
        </div>
      </main>
      <div className="w-full flex justify-center">
        <Footer />
      </div>
    </>
  );
}
