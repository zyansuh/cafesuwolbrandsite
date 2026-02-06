'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50 mt-16">
      {/* 배경 이미지 영역 - 실제 이미지로 교체 가능 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(120, 53, 15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 w-full pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 mb-3 tracking-tight">
            카페수월
          </h1>
          <p className="text-lg md:text-xl text-amber-800 mb-2 font-light">
            Cafe Suwol
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed mb-6"
          >
            일상의 여유를 담은 한 잔, 특별한 순간을 만드는 공간
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a 
            href="#menu"
            className="px-10 py-4 bg-amber-900 text-white rounded-md font-medium hover:bg-amber-800 transition-colors shadow-sm"
          >
            메뉴 보기
          </a>
          <a 
            href="#store"
            className="px-10 py-4 border-2 border-amber-900 text-amber-900 rounded-md font-medium hover:bg-amber-900 hover:text-white transition-colors"
          >
            매장 찾기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
