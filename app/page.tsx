/**
 * 메인 홈페이지 (간소화)
 *
 * [구조]
 * 1. Navbar - 고정 상단 네비게이션
 * 2. main - Hero → 수월이란? → 둘러보기
 * 3. DividerSection - 콘텐츠와 푸터 사이 구분 역할
 * 4. Footer - 브랜드 정보, 바로가기, SNS
 *
 * [상세 페이지]
 * - /about, /cafe, /books 등은 각각 별도 라우트로 분리
 * - 둘러보기 카드 클릭 시 해당 페이지로 이동
 */

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import SuwolIntroSection from '@/components/home/SuwolIntroSection';
import ExploreSection from '@/components/home/ExploreSection';
import DividerSection from '@/components/home/DividerSection';
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
      <DividerSection />
      <div className="w-full flex justify-center">
        <Footer />
      </div>
    </>
  );
}
