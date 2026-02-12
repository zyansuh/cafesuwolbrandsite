'use client';

/**
 * Footer - 하단 푸터
 *
 * [역할]
 * - 브랜드 정보: 카페수월 소개 문구
 * - 바로가기: NAV_ITEMS와 동일 링크 (상세 페이지)
 * - 소셜 미디어: Instagram, Facebook, YouTube (현재 #)
 *
 * [반응형]
 * - grid-cols-1(모바일) → sm:2열 → md:3열
 * - py-8 ~ py-10, px 반응형
 */

import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-50 py-8 sm:py-10 w-full flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6">
          {/* 브랜드 정보 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 font-shilla">카페수월</h3>
            <p className="text-amber-200 text-sm leading-relaxed break-words">
              커피를 마시고, 책을 읽고, 기억을 남깁니다.
              <br />
              지역 독립출판 플랫폼형 북카페
            </p>
          </div>

          {/* 바로가기 링크 */}
          <div>
            <h4 className="text-lg font-bold mb-3">바로가기</h4>
            <ul className="space-y-1.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-amber-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS 링크 */}
          <div>
            <h4 className="text-lg font-bold mb-3">소셜 미디어</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 active:scale-95 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 active:scale-95 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 active:scale-95 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* 저작권 */}
        <div className="border-t border-amber-800 pt-6 text-center text-amber-300 text-sm">
          <p>&copy; 2024 카페수월 Cafe Suwol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
