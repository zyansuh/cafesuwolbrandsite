import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import MenuSection from '@/components/home/MenuSection';
import GallerySection from '@/components/home/GallerySection';
import NoticeSection from '@/components/home/NoticeSection';
import StoreSection from '@/components/home/StoreSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <NoticeSection />
        <StoreSection />
      </main>
      <Footer />
    </>
  );
}
