'use client';

/**
 * 히어로 섹션
 * - 메인 카피, CTA 버튼 (공간 둘러보기 / 이달의 책 보기)
 */

import { motion } from 'framer-motion';
import { layout } from '@/styles';

export default function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-50 mt-12">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 mb-4 tracking-tight font-shilla">
            카페수월
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed mb-8"
          >
            오늘의 커피가, 내일의 이야기가 되도록
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#gallery"
            className={`${layout.button.primary} shadow-sm`}
          >
            공간 둘러보기
          </a>
          <a href="#books" className={layout.button.outline}>
            이달의 책 보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
