'use client';

/**
 * 이달의 책 섹션
 * - 독립출판 1~2권 강조, 작가 인터뷰 링크
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen } from 'lucide-react';
import { section, layout } from '@/styles';
import SectionHeader from '@/components/ui/SectionHeader';

export default function BooksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="books"
      className={`${section.padding.default} bg-amber-50 w-full overflow-visible`}
    >
      <div className={`w-full ${section.contentPadding}`}>
        <SectionHeader
          title="이달의 책"
          subtitle="독립출판 1~2권 강조 · 작가 인터뷰 링크"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: section.animation.duration, delay: 0.2 }}
          className={`grid md:grid-cols-2 ${section.gridGap.large} max-w-2xl mx-auto`}
        >
          {[1, 2].map((item) => (
            <div
              key={item}
              className={`${layout.card.base} ${layout.card.hover} ${layout.card.paddingLarge} bg-white flex items-center gap-4`}
            >
              <div className="w-16 h-20 bg-amber-200 rounded flex items-center justify-center shrink-0">
                <BookOpen className="w-8 h-8 text-amber-800" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-amber-950 mb-1">이달의 독립출판</h3>
                <p className="text-sm text-gray-600">작가 인터뷰 링크</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
