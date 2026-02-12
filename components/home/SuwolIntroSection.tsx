'use client';

/**
 * 수월이란? 섹션
 * - 브랜드 철학 한 줄 소개
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
      className={`${section.padding.default} bg-white w-full overflow-visible`}
    >
      <div className={`w-full ${section.contentPadding}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: section.animation.duration }}
          className={`text-center overflow-visible ${section.headerPadding}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-amber-950 mb-6 font-shilla">
            수월이란?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            수월(水月)은 물 위에 비친 달처럼 잡히지 않지만 분명히 존재하는 기억입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
