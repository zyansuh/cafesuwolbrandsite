'use client';

/**
 * Journal 섹션
 * - 블로그 역할, 브랜딩 강화, SEO
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { JOURNAL_CATEGORIES } from '@/constants';
import { section } from '@/styles';
import SectionHeader from '@/components/ui/SectionHeader';

export default function JournalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="journal"
      className={`${section.padding.default} bg-white w-full overflow-visible`}
    >
      <div className={`w-full ${section.contentPadding}`}>
        <SectionHeader
          title="Journal"
          subtitle="블로그 역할 + 브랜딩 강화 · SEO"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: section.animation.duration, delay: 0.2 }}
          className={`grid grid-cols-2 md:grid-cols-4 ${section.gridGap.default}`}
        >
          {JOURNAL_CATEGORIES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${section.card.paddingLarge} rounded-lg bg-amber-50 border border-amber-100 hover:border-amber-300 transition-all text-center group`}
            >
              <item.icon className="w-10 h-10 text-amber-900 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-amber-950 text-sm">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
