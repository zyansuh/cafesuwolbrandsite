'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Search, Mail, Phone } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  totalOrders: number;
  totalSpent: number;
  status: 'active' | 'inactive';
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    // TODO: 회원 목록 API 호출
    /*
    const response = await fetch('YOUR_API_URL/admin/users');
    const data = await response.json();
    setUsers(data);
    */
    
    // 임시 데이터
    setUsers([
      { id: 1, name: '홍길동', email: 'hong@email.com', phone: '010-1234-5678', joinDate: '2024-01-15', totalOrders: 15, totalSpent: 125000, status: 'active' },
      { id: 2, name: '김철수', email: 'kim@email.com', phone: '010-2345-6789', joinDate: '2024-01-20', totalOrders: 8, totalSpent: 68000, status: 'active' },
      { id: 3, name: '이영희', email: 'lee@email.com', phone: '010-3456-7890', joinDate: '2024-02-01', totalOrders: 3, totalSpent: 25000, status: 'active' },
      { id: 4, name: '박민수', email: 'park@email.com', phone: '010-4567-8901', joinDate: '2023-12-10', totalOrders: 42, totalSpent: 356000, status: 'inactive' },
    ]);
  };

  useEffect(() => {
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* 헤더 */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">회원 관리</h1>
          <p className="text-gray-600 mt-1">회원 정보와 활동 내역을 확인하세요</p>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">총 회원수</p>
            <p className="text-3xl font-bold text-gray-900">{users.length}명</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">활성 회원</p>
            <p className="text-3xl font-bold text-green-600">
              {users.filter(u => u.status === 'active').length}명
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">총 누적 매출</p>
            <p className="text-3xl font-bold text-amber-900">
              {users.reduce((sum, u) => sum + u.totalSpent, 0).toLocaleString()}원
            </p>
          </div>
        </div>

        {/* 검색 */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="이름, 이메일, 전화번호로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* 회원 테이블 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">회원명</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">이메일</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">전화번호</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">가입일</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">주문수</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">누적 결제</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">상태</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">{user.name}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        {user.email}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        {user.phone}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-sm">{user.joinDate}</td>
                    <td className="py-4 px-6">{user.totalOrders}건</td>
                    <td className="py-4 px-6 font-medium">{user.totalSpent.toLocaleString()}원</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.status === 'active' ? '활성' : '비활성'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
