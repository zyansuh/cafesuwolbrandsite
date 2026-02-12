'use client';

/**
 * Contact 섹션
 * - 오시는 길, 지도, 영업시간, SNS, 입점 문의
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CONTACT_INFO } from '@/constants';
import { section } from '@/styles';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="contact"
      className={`${section.padding.default} bg-white w-full overflow-visible`}
    >
      <div className={`w-full ${section.contentPadding}`}>
        <SectionHeader
          title="Contact"
          subtitle="오시는 길 · 지도 · 영업시간 · SNS · 입점 문의"
        />

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 ${section.gridGap.large} mb-12 w-full`}
        >
          {CONTACT_INFO.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-center ${section.card.paddingLarge} rounded-lg bg-amber-50 border border-amber-100`}
              >
                <div className="w-14 h-14 bg-amber-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-amber-950 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-700 text-sm hover:text-amber-900 transition-colors whitespace-pre-line"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                    {info.content}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* 지도 영역 (카카오맵/구글맵 연동 예정) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: section.animation.duration, delay: 0.4 }}
          className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200"
        >
          <p className="text-gray-500">지도 영역 (카카오맵/구글맵 연동 예정)</p>
        </motion.div>
      </div>
    </section>
  );
}
