'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { section } from '@/styles';

interface SectionHeaderProps {
  /** 섹션 제목 */
  title: string;
  /** 섹션 부제목/설명 (선택) */
  subtitle?: string;
  /** 추가 설명 (선택, subtitle 아래에 작은 글씨로) */
  note?: string;
}

/**
 * 섹션 헤더 공통 컴포넌트
 * - 제목 + 부제목 + (선택) 참고 문구
 */
export default function SectionHeader({ title, subtitle, note }: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: section.animation.duration }}
      className={`text-center ${section.headerMargin} overflow-visible ${section.headerPadding}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4 font-shilla">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 mb-2">{subtitle}</p>
      )}
      {note && (
        <p className="text-sm text-gray-500">{note}</p>
      )}
    </motion.div>
  );
}
