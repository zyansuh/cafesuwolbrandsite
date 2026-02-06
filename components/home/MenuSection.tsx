'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const menuItems = [
  {
    name: '시그니처 아메리카노',
    description: '깊고 진한 에스프레소의 풍미',
    price: '4,500원',
    category: 'coffee'
  },
  {
    name: '수월 라떼',
    description: '부드러운 우유와 에스프레소의 조화',
    price: '5,000원',
    category: 'coffee'
  },
  {
    name: '콜드브루',
    description: '16시간 저온 추출의 깊은 맛',
    price: '5,500원',
    category: 'coffee'
  },
  {
    name: '크림 브륄레 라떼',
    description: '카라멜라이징한 달콤한 크림 토핑',
    price: '6,500원',
    category: 'signature'
  },
  {
    name: '말차 라떼',
    description: '프리미엄 일본산 말차',
    price: '6,000원',
    category: 'non-coffee'
  },
  {
    name: '딸기 에이드',
    description: '신선한 딸기로 만든 상큼함',
    price: '6,500원',
    category: 'beverage'
  }
];

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="menu" className="py-20 bg-amber-50">
      <div className="w-full pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            메뉴
          </h2>
          <p className="text-lg text-gray-600">
            엄선된 재료로 정성껏 만든 카페수월의 음료들
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-5 rounded-lg bg-white border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-amber-950 group-hover:text-amber-700 transition-colors">
                  {item.name}
                </h3>
                <span className="text-amber-900 font-semibold">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <button className="px-7 py-3 bg-amber-900 text-white rounded-md font-medium hover:bg-amber-800 transition-colors">
            전체 메뉴 보기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
