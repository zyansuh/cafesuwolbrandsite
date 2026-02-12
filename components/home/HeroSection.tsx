'use client';

/**
 * HeroSection - 메인 히어로 섹션
 *
 * [역할]
 * - 첫 화면 메인 카피: "카페수월", "오늘의 커피가, 내일의 이야기가 되도록"
 * - CTA 버튼: 공간 둘러보기(/gallery), 이달의 책 보기(/books)
 *
 * [반응형]
 * - min-h: 320px(모바일) → 400px(데스크톱)
 * - 제목: text-3xl ~ text-6xl
 * - 버튼: 모바일 세로 배치, 데스크톱 가로 배치
 *
 * [배경]
 * - radial-gradient 패턴 (실제 이미지 교체 예정)
 */

import { motion } from 'framer-motion';
import { layout } from '@/styles';

export default function HeroSection() {
  return (
    <section className="relative min-h-[320px] sm:min-h-[400px] w-full flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-50 mt-16 sm:mt-20 md:mt-12">
      {/* 배경 패턴 (실제 이미지로 교체 예정: 햇살, 책, 커피) */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(143, 74, 31) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-2 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 mb-3 sm:mb-4 tracking-tight font-shilla">
            카페수월
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8 px-1"
          >
            오늘의 커피가, 내일의 이야기가 되도록
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <a
            href="/gallery"
            className={`${layout.button.primary} shadow-sm`}
          >
            공간 둘러보기
          </a>
          <a href="/books" className={layout.button.outline}>
            이달의 책 보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
