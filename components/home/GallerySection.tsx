'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
  { id: 1, title: '시그니처 커피', color: 'bg-amber-200' },
  { id: 2, title: '카페 인테리어', color: 'bg-amber-300' },
  { id: 3, title: '브런치 메뉴', color: 'bg-orange-200' },
  { id: 4, title: '디저트', color: 'bg-amber-100' },
  { id: 5, title: '라떼 아트', color: 'bg-orange-300' },
  { id: 6, title: '야외 테라스', color: 'bg-amber-200' },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="gallery" className="py-20 bg-white">
      <div className="w-full pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            갤러리
          </h2>
          <p className="text-lg text-gray-600">
            카페수월의 다양한 모습을 만나보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative aspect-square ${image.color} rounded-lg overflow-hidden group cursor-pointer`}
            >
              {/* 실제 이미지로 교체 가능 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded">
                  {image.title}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
