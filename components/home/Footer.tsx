'use client';

import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-50 py-10">
      <div className="w-full pl-12 pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* 브랜드 정보 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">카페수월</h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              일상의 여유를 담은 한 잔,<br />
              특별한 순간을 만드는 공간
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <h4 className="text-lg font-bold mb-3">바로가기</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="#about" className="text-amber-200 hover:text-white transition-colors">
                  브랜드 소개
                </a>
              </li>
              <li>
                <a href="#menu" className="text-amber-200 hover:text-white transition-colors">
                  메뉴
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-amber-200 hover:text-white transition-colors">
                  갤러리
                </a>
              </li>
              <li>
                <a href="#store" className="text-amber-200 hover:text-white transition-colors">
                  매장 안내
                </a>
              </li>
            </ul>
          </div>

          {/* SNS */}
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

        <div className="border-t border-amber-800 pt-6 text-center text-amber-300 text-sm">
          <p>&copy; 2024 카페수월 Cafe Suwol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
