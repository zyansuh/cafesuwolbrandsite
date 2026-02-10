'use client';

import { Chrome, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function SocialLoginButtons() {
  const handleGoogleLogin = () => {
    // TODO: Google OAuth 로그인 API 연동
    console.log('Google 로그인 시도');
    // Example: window.location.href = 'YOUR_BACKEND_URL/auth/google';
  };

  const handleKakaoLogin = () => {
    // TODO: Kakao OAuth 로그인 API 연동
    console.log('Kakao 로그인 시도');
    // Example: window.Kakao.Auth.login({ success: ... });
  };

  const handleNaverLogin = () => {
    // TODO: Naver OAuth 로그인 API 연동
    console.log('Naver 로그인 시도');
    // Example: window.location.href = 'YOUR_BACKEND_URL/auth/naver';
  };

  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-gray-600 mb-4">소셜 계정으로 계속하기</p>
      
      {/* Google 로그인 */}
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Chrome className="w-5 h-5 text-gray-700" />
        <span className="font-medium text-gray-700">Google로 계속하기</span>
      </button>

      {/* Kakao 로그인 */}
      <button
        onClick={handleKakaoLogin}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg transition-colors"
        style={{ backgroundColor: '#FEE500' }}
      >
        <MessageCircle className="w-5 h-5 text-gray-900" fill="#000000" />
        <span className="font-medium text-gray-900">Kakao로 계속하기</span>
      </button>

      {/* Naver 로그인 */}
      <button
        onClick={handleNaverLogin}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg transition-colors"
        style={{ backgroundColor: '#03C75A' }}
      >
        <span className="font-bold text-white text-lg">N</span>
        <span className="font-medium text-white">Naver로 계속하기</span>
      </button>
    </div>
  );
}
