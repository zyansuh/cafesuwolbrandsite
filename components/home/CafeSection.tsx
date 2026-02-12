'use client';

/**
 * Cafe 섹션
 * - 메뉴 목록, PDF 다운로드 버튼
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MENU_ITEMS } from '@/constants';
import { section, layout } from '@/styles';
import SectionHeader from '@/components/ui/SectionHeader';

export default function CafeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="cafe"
      className={`${section.padding.default} bg-amber-50 w-full overflow-visible`}
    >
      <div className={`w-full ${section.contentPadding}`}>
        <SectionHeader
          title="Cafe"
          subtitle="커피 철학 · 원두 소개 · 시그니처 메뉴 · 핸드드립"
          note="메뉴는 PDF 다운로드 가능"
        />

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 ${section.gridGap.default} w-full min-w-0`}
        >
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * section.animation.delayMultiplier,
              }}
              className={`${layout.card.base} ${layout.card.hover} ${layout.card.padding} bg-white group`}
            >
              <div className="flex justify-between items-start gap-3 mb-2 min-w-0">
                <h3 className="text-lg font-bold text-amber-950 group-hover:text-amber-700 transition-colors break-words min-w-0 flex-1">
                  {item.name}
                </h3>
                <span className="text-amber-900 font-semibold shrink-0">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed break-words overflow-visible">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: section.animation.duration, delay: 0.6 }}
          className={`text-center ${section.buttonMargin}`}
        >
          <button className={layout.button.primary}>
            전체 메뉴 PDF 다운로드
          </button>
        </motion.div>
      </div>
    </section>
  );
}
