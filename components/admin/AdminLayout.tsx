'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Coffee, 
  Package, 
  ShoppingCart, 
  Users, 
  Bell, 
  MapPin, 
  Image,
  Menu,
  X,
  LogOut,
  Settings
} from 'lucide-react';

const menuItems = [
  { name: '대시보드', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: '메뉴 관리', href: '/admin/menu', icon: Coffee },
  { name: '재고 관리', href: '/admin/inventory', icon: Package },
  { name: '주문 관리', href: '/admin/orders', icon: ShoppingCart },
  { name: '회원 관리', href: '/admin/users', icon: Users },
  { name: '공지사항', href: '/admin/notices', icon: Bell },
  { name: '매장 관리', href: '/admin/stores', icon: MapPin },
  { name: '갤러리', href: '/admin/gallery', icon: Image },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    // TODO: 로그아웃 API 연동
    console.log('로그아웃');
    // localStorage.removeItem('admin_token');
    // router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 모바일 사이드바 오버레이 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-amber-950 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* 로고 */}
        <div className="p-6 border-b border-amber-900">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <Coffee className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">카페수월</h1>
              <p className="text-xs text-amber-300">관리자 페이지</p>
            </div>
          </Link>
        </div>

        {/* 메뉴 */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-amber-800 text-white'
                    : 'text-amber-100 hover:bg-amber-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* 하단 메뉴 */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-amber-900 space-y-2">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-amber-100 hover:bg-amber-900 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">설정</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-amber-100 hover:bg-amber-900 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">로그아웃</span>
          </button>
        </div>
      </aside>

      {/* 메인 콘텐츠 */}
      <div className="lg:ml-64">
        {/* 상단 헤더 */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-700"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <div className="flex items-center gap-4 ml-auto">
              <span className="text-sm text-gray-600">관리자님 환영합니다</span>
              <Link
                href="/"
                target="_blank"
                className="text-sm text-amber-900 hover:text-amber-700 font-medium"
              >
                사이트 보기
              </Link>
            </div>
          </div>
        </header>

        {/* 페이지 콘텐츠 */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
