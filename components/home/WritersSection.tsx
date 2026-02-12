'use client';

/**
 * Writers 섹션
 * - 입점 작가 소개, 입점 문의 CTA
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';
import { section, layout } from '@/styles';
import SectionHeader from '@/components/ui/SectionHeader';

export default function WritersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="writers"
      className={`${section.padding.default} bg-gradient-to-b from-white to-amber-50 w-full overflow-visible`}
    >
      <div className={`w-full ${section.contentPadding}`}>
        <SectionHeader
          title="Writers"
          subtitle="입점 작가 소개 · 인터뷰 · Q&A"
        />

        <div className="flex justify-center mb-6">
          <a href="#contact" className={layout.button.primary}>
            입점 문의
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: section.animation.duration, delay: 0.2 }}
          className={`grid md:grid-cols-2 ${section.gridGap.large} max-w-2xl mx-auto`}
        >
          <div
            className={`${layout.card.base} ${layout.card.hover} ${layout.card.paddingLarge} bg-white text-center`}
          >
            <User className="w-16 h-16 text-amber-800 mx-auto mb-4" />
            <h3 className="font-bold text-amber-950 mb-2">입점 작가</h3>
            <p className="text-sm text-gray-600">작가 아카이브로 발전 예정</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
