'use client';

/**
 * About 수월 섹션
 * - 브랜드 스토리 전체 텍스트
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BRAND_STORY } from '@/constants';
import { section } from '@/styles';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="about"
      className={`${section.padding.default} bg-gradient-to-b from-amber-50 to-white w-full overflow-visible`}
    >
      <div className={`w-full ${section.contentPadding}`}>
        <SectionHeader
          title="About 수월"
          subtitle="북카페 수월 브랜드 스토리"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: section.animation.duration, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-8 text-gray-700 leading-relaxed text-center"
        >
          {BRAND_STORY.map((paragraph, index) => (
            <p key={index} className="text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
