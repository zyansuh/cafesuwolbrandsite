'use client';

/**
 * ExploreSection - 둘러보기 섹션 (메인 페이지 전용)
 *
 * [역할]
 * - 메인 페이지 하단에 About, Cafe, Books 등 상세 페이지로 이동하는 링크 카드 그리드
 * - 레이아웃: 제목 → 한줄 여백 → 부제목 → 한줄 여백 → 아이콘 카드 3x3
 *
 * [구조]
 * - 둘러보기 (h2)
 * - 카페수월의 공간, 메뉴, 행사, 작가 소개를 만나보세요. (p)
 * - 9개 링크 카드 (grid 2열 모바일 / 3열 데스크톱)
 *
 * [반응형]
 * - grid-cols-2: 모바일 2열
 * - md:grid-cols-3: 데스크톱 3열
 * - pb-32~48: 아이콘과 푸터 사이 강제 여백
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

/** 상세 페이지 링크 정의 (제목, 경로, 아이콘, 설명) */
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
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // 스크롤 시 한 번만 애니메이션

  return (
    <section
      ref={ref}
      className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-32 md:pb-40 lg:pb-48 bg-gradient-to-b from-amber-50 to-amber-50 w-full overflow-visible"
    >
      <div className={`w-full ${section.contentPadding}`}>
        {/* 제목·부제목 영역 (둘러보기 → 한줄 → 부제목 → 한줄 → 아이콘) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-950 mb-8 font-shilla">
            둘러보기
          </h2>
          {/* 한줄 여백(mb-8) 후 부제목 */}
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base px-2 sm:px-0 mb-8">
            카페수월의 공간, 메뉴, 행사, 작가 소개를 만나보세요.
          </p>
        </motion.div>

        {/* 한줄 여백(mb-8) 후 아이콘 카드 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
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
                  className={`${layout.card.base} ${layout.card.hover} p-4 sm:p-5 bg-white group flex items-center gap-3 sm:gap-4 block min-h-[72px] sm:min-h-0`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-900" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-amber-950 group-hover:text-amber-700 transition-colors text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">{item.desc}</p>
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
