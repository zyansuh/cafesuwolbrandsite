'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: '신메뉴 출시 안내 - 크림 브륄레 라떼',
    date: '2024.02.01',
    category: '신메뉴'
  },
  {
    id: 2,
    title: '설 연휴 영업시간 안내',
    date: '2024.01.28',
    category: '공지'
  },
  {
    id: 3,
    title: '2월 이벤트 - 아메리카노 1+1',
    date: '2024.01.25',
    category: '이벤트'
  },
  {
    id: 4,
    title: '겨울 시즌 한정 메뉴 출시',
    date: '2024.01.15',
    category: '신메뉴'
  },
];

export default function NoticeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="notice" className="py-20 bg-white">
      <div className="w-full pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            공지사항
          </h2>
          <p className="text-lg text-gray-600">
            카페수월의 새로운 소식을 확인하세요
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200 py-5 hover:bg-amber-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-medium rounded-full">
                      {notice.category}
                    </span>
                    <span className="text-sm text-gray-500">{notice.date}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-amber-900 transition-colors">
                    {notice.title}
                  </h3>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-900 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <button className="px-7 py-3 border border-amber-900 text-amber-900 rounded-md font-medium hover:bg-amber-900 hover:text-white transition-colors">
            더보기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
