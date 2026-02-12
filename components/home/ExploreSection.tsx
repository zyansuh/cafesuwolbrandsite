'use client';

/**
 * 탐색 섹션 (메인 페이지)
 * - 각 상세 페이지로 이동하는 링크 카드
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Coffee,
  Building2,
  ImageIcon,
  Users,
  Calendar,
  FileText,
  ShoppingBag,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import { section, layout } from '@/styles';

const EXPLORE_LINKS = [
  { title: 'About 수월', href: '/about', icon: Building2, desc: '브랜드 스토리' },
  { title: '공간미리보기', href: '/gallery', icon: ImageIcon, desc: '햇살이 드는 창가' },
  { title: 'Cafe', href: '/cafe', icon: Coffee, desc: '메뉴·원두·핸드드립' },
  { title: '이달의 책', href: '/books', icon: BookOpen, desc: '독립출판 추천' },
  { title: '행사/모임', href: '/program', icon: Calendar, desc: '북토크·낭독회' },
  { title: 'Writers', href: '/writers', icon: Users, desc: '입점 작가' },
  { title: 'Journal', href: '/journal', icon: FileText, desc: '브랜딩·소식' },
  { title: 'Store', href: '/store', icon: ShoppingBag, desc: '드립백·굿즈' },
  { title: 'Contact', href: '/contact', icon: MapPin, desc: '오시는 길·문의' },
];

export default function ExploreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className={`${section.padding.default} bg-gradient-to-b from-amber-50 to-white w-full overflow-visible`}
    >
      <div className={`w-full ${section.contentPadding}`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-amber-950 mb-4 font-shilla">
            둘러보기
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            카페수월의 공간, 메뉴, 행사, 작가 소개를 만나보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {EXPLORE_LINKS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`${layout.card.base} ${layout.card.hover} ${layout.card.padding} bg-white group flex items-center gap-4 block`}
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                    <Icon className="w-6 h-6 text-amber-900" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-amber-950 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-amber-400 group-hover:text-amber-600 shrink-0" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
