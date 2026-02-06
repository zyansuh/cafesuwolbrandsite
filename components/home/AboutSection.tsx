'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Heart, Leaf } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: '프리미엄 원두',
    description: '엄선된 스페셜티 원두로 최상의 맛을 선사합니다'
  },
  {
    icon: Heart,
    title: '정성스런 서비스',
    description: '모든 음료는 바리스타의 정성으로 만들어집니다'
  },
  {
    icon: Leaf,
    title: '친환경 운영',
    description: '지속 가능한 환경을 위한 노력을 실천합니다'
  }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="w-full pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            카페수월 이야기
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            2020년, 작은 골목에서 시작한 카페수월은<br />
            최고의 커피와 따뜻한 서비스로 고객님의 일상에 특별함을 더합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all group text-center"
            >
              <div className="w-14 h-14 bg-amber-900 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-950 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
