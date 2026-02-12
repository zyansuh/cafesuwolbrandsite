'use client';

/**
 * 푸터 컴포넌트
 * - 브랜드 정보, 바로가기 링크, SNS 아이콘
 */

import { Instagram, Facebook, Youtube } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-50 py-10 w-full flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* 브랜드 정보 */}
          <div>
            <h3 className="text-2xl font-bold mb-3 font-shilla">카페수월</h3>
            <p className="text-amber-200 text-sm leading-relaxed">
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
                  <a
                    href={item.href}
                    className="text-amber-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
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
                className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
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
