'use client';

/**
 * SuwolIntroSection - "수월이란?" 브랜드 소개 섹션
 *
 * [역할]
 * - 브랜드 철학 한 줄 소개: "수월(水月)은 물 위에 비친 달처럼..."
 * - 스크롤 시 fade-in 애니메이션 (useInView)
 *
 * [애니메이션]
 * - amount: 0.3 - 30% 노출 시 트리거
 * - once: true - 한 번만 실행
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { section } from '@/styles';

export default function SuwolIntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="suwol-intro"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white w-full overflow-visible"
    >
      <div className={`w-full ${section.contentPadding}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: section.animation.duration }}
          className={`text-center overflow-visible ${section.headerPadding}`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-950 mb-4 sm:mb-6 font-shilla">
            수월이란?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            수월(水月)은 물 위에 비친 달처럼 잡히지 않지만 분명히 존재하는 기억입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
