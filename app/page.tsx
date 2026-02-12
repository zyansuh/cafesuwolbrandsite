/**
 * 메인 홈페이지
 * - 섹션 구성: Hero → 수월이란? → 공간미리보기 → … → Contact
 */

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import SuwolIntroSection from '@/components/home/SuwolIntroSection';
import GallerySection from '@/components/home/GallerySection';
import BooksSection from '@/components/home/BooksSection';
import ProgramSection from '@/components/home/ProgramSection';
import AboutSection from '@/components/home/AboutSection';
import CafeSection from '@/components/home/CafeSection';
import WritersSection from '@/components/home/WritersSection';
import JournalSection from '@/components/home/JournalSection';
import StoreSection from '@/components/home/StoreSection';
import ContactSection from '@/components/home/ContactSection';
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
          <GallerySection />
          <BooksSection />
          <ProgramSection />
          <AboutSection />
          <CafeSection />
          <WritersSection />
          <JournalSection />
          <StoreSection />
          <ContactSection />
        </div>
      </main>
      <div className="w-full flex justify-center">
        <Footer />
      </div>
    </>
  );
}
