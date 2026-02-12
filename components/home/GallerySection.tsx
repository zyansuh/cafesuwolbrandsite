'use client';

/**
 * 공간미리보기 섹션
 * - 좌석, 창가, 북존, 핸드드립존 이미지 그리드
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SPACE_IMAGES } from '@/constants';
import { section } from '@/styles';
import SectionHeader from '@/components/ui/SectionHeader';

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="gallery"
      className={`${section.padding.default} bg-white w-full overflow-visible`}
    >
      <div className={`w-full ${section.contentPadding}`}>
        <SectionHeader
          title="공간미리보기"
          subtitle="햇살이 드는 창가, 책이 있는 공간"
        />

        <div
          className={`grid grid-cols-2 md:grid-cols-4 ${section.gridGap.default} w-full`}
        >
          {SPACE_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative aspect-square ${image.color} rounded-lg overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
