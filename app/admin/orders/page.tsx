'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Search } from 'lucide-react';

interface Order {
  id: string;
  customerName: string;
  items: string;
  total: number;
  status: 'pending' | 'preparing' | 'completed' | 'cancelled';
  createdAt: string;
}

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const fetchOrders = async () => {
    // TODO: 주문 목록 API 호출
    /*
    const response = await fetch('YOUR_API_URL/admin/orders');
    const data = await response.json();
    setOrders(data);
    */
    
    // 임시 데이터
    setOrders([
      { id: 'ORD-001', customerName: '홍길동', items: '아메리카노, 카페라떼', total: 9500, status: 'completed', createdAt: '2024-02-06 10:30' },
      { id: 'ORD-002', customerName: '김철수', items: '시그니처 커피', total: 6500, status: 'preparing', createdAt: '2024-02-06 11:15' },
      { id: 'ORD-003', customerName: '이영희', items: '말차라떼, 크루아상', total: 9000, status: 'pending', createdAt: '2024-02-06 11:45' },
      { id: 'ORD-004', customerName: '박민수', items: '콜드브루', total: 5500, status: 'completed', createdAt: '2024-02-06 09:20' },
    ]);
  };

  useEffect(() => {
    fetchOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateOrderStatus = async (orderId: string, newStatus: Order['status']) => {
    // TODO: 주문 상태 업데이트 API 호출
    /*
    await fetch(`YOUR_API_URL/admin/orders/${orderId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status: newStatus }),
    });
    */
    
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusBadge = (status: Order['status']) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      preparing: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    
    const labels = {
      pending: '대기중',
      preparing: '준비중',
      completed: '완료',
      cancelled: '취소',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* 헤더 */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">주문 관리</h1>
          <p className="text-gray-600 mt-1">실시간 주문 현황을 확인하고 관리하세요</p>
        </div>

        {/* 필터 및 검색 */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="주문번호 또는 고객명 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            >
              <option value="all">전체 상태</option>
              <option value="pending">대기중</option>
              <option value="preparing">준비중</option>
              <option value="completed">완료</option>
              <option value="cancelled">취소</option>
            </select>
          </div>
        </div>

        {/* 주문 테이블 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">주문번호</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">고객명</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">주문 내역</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">금액</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">주문 시간</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">상태</th>
                  <th className="text-center py-3 px-6 font-medium text-gray-700">관리</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">{order.id}</td>
                    <td className="py-4 px-6">{order.customerName}</td>
                    <td className="py-4 px-6 text-gray-600 text-sm">{order.items}</td>
                    <td className="py-4 px-6 font-medium">{order.total.toLocaleString()}원</td>
                    <td className="py-4 px-6 text-gray-600 text-sm">{order.createdAt}</td>
                    <td className="py-4 px-6">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <select
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                          className="px-3 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                        >
                          <option value="pending">대기중</option>
                          <option value="preparing">준비중</option>
                          <option value="completed">완료</option>
                          <option value="cancelled">취소</option>
                        </select>
                      </div>
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
