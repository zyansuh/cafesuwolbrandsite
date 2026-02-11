'use client';

import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { TrendingUp, Users, ShoppingCart } from 'lucide-react';

export default function AdminDashboard() {
  // TODO: 대시보드 통계 API 호출
  /*
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalUsers: 0,
  });
  
  useEffect(() => {
    fetch('YOUR_API_URL/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);
  */
  
  // 임시 데이터
  const [stats] = useState({
    totalSales: 2450000,
    totalOrders: 156,
    totalUsers: 342,
  });

  const statCards = [
    {
      title: '오늘 매출',
      value: `${stats.totalSales.toLocaleString()}원`,
      icon: TrendingUp,
      color: 'bg-blue-500',
      change: '+12.5%',
    },
    {
      title: '오늘 주문',
      value: `${stats.totalOrders}건`,
      icon: ShoppingCart,
      color: 'bg-green-500',
      change: '+8.2%',
    },
    {
      title: '총 회원',
      value: `${stats.totalUsers}명`,
      icon: Users,
      color: 'bg-purple-500',
      change: '+5.1%',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* 페이지 헤더 */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
          <p className="text-gray-600 mt-1">카페수월 운영 현황을 한눈에 확인하세요</p>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((card) => (
            <div key={card.title} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                  <p className="text-sm text-gray-500 mt-2">{card.change}</p>
                </div>
                <div className={`${card.color} p-3 rounded-lg`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 최근 주문 */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">최근 주문</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">주문번호</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">고객명</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">메뉴</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">금액</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {/* TODO: 실제 주문 데이터 API 연동 */}
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">#ORD-001</td>
                    <td className="py-3 px-4">홍길동</td>
                    <td className="py-3 px-4">아메리카노, 카페라떼</td>
                    <td className="py-3 px-4">9,500원</td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        완료
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">#ORD-002</td>
                    <td className="py-3 px-4">김철수</td>
                    <td className="py-3 px-4">시그니처 커피</td>
                    <td className="py-3 px-4">6,500원</td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        준비중
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
