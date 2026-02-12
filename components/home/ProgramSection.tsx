'use client';

/**
 * 행사/모임 섹션
 * - 낭독회, 북토크, 글쓰기 모임, 글쓰기 클래스
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PROGRAMS } from '@/constants';
import { section, layout } from '@/styles';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ProgramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="program"
      className={`${section.padding.default} bg-white w-full overflow-visible`}
    >
      <div className={`w-full ${section.contentPadding}`}>
        <SectionHeader
          title="행사/모임"
          subtitle="북토크 · 낭독회 · 글쓰기 모임 · 독립출판 클래스"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: section.animation.duration, delay: 0.2 }}
          className={`grid grid-cols-2 md:grid-cols-4 ${section.gridGap.default}`}
        >
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${layout.card.paddingLarge} rounded-lg bg-amber-50 border border-amber-100 hover:border-amber-300 transition-all text-center group`}
            >
              <program.icon className="w-10 h-10 text-amber-900 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-amber-950">{program.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: section.animation.duration, delay: 0.2 }}
          className={`text-center ${section.buttonMargin}`}
        >
          <a href="#" className={`inline-block ${layout.button.outline}`}>
            예약하기 (구글폼/자체 신청)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
