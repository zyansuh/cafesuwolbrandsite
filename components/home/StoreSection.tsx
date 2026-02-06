'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const storeInfo = [
  {
    icon: MapPin,
    title: '주소',
    content: '서울시 강남구 테헤란로 123',
    link: null
  },
  {
    icon: Clock,
    title: '영업시간',
    content: '평일 08:00 - 22:00\n주말 10:00 - 20:00',
    link: null
  },
  {
    icon: Phone,
    title: '문의',
    content: '02-1234-5678',
    link: 'tel:02-1234-5678'
  }
];

export default function StoreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="store" className="py-20 bg-white">
      <div className="w-full pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            매장 안내
          </h2>
          <p className="text-lg text-gray-600">
            카페수월에서 특별한 시간을 보내세요
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {storeInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-amber-50 border border-amber-100"
            >
              <div className="w-14 h-14 bg-amber-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <info.icon className="w-7 h-7 text-white" />
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
          ))}
        </div>

        {/* 지도 영역 (추후 카카오맵 or 구글맵 삽입 가능) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200"
        >
          <p className="text-gray-500">지도 영역 (카카오맵/구글맵 연동 예정)</p>
        </motion.div>
      </div>
    </section>
  );
}
