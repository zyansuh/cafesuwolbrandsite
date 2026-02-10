'use client';

import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  category: string;
  content: string;
  createdAt: string;
  views: number;
}

export default function NoticeManagement() {
  // TODO: 공지사항 목록 API 호출
  /*
  const [notices, setNotices] = useState<Notice[]>([]);
  
  const fetchNotices = useCallback(async () => {
    const response = await fetch('YOUR_API_URL/admin/notices');
    const data = await response.json();
    setNotices(data);
  }, []);
  
  useEffect(() => {
    fetchNotices();
  }, [fetchNotices]);
  */
  
  // 임시 데이터
  const [notices, setNotices] = useState<Notice[]>([
    { id: 1, title: '신메뉴 출시 안내', category: '신메뉴', content: '크림 브륄레 라떼 출시', createdAt: '2024-02-01', views: 150 },
    { id: 2, title: '설 연휴 영업시간 안내', category: '공지', content: '설 연휴 영업시간...', createdAt: '2024-01-28', views: 89 },
  ]);

  const handleDelete = (id: number) => {
    if (!confirm('삭제하시겠습니까?')) return;
    // TODO: 공지사항 삭제 API
    setNotices(notices.filter(n => n.id !== id));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">공지사항 관리</h1>
          <button
            onClick={() => console.log('TODO: 공지사항 추가 모달')}
            className="flex items-center gap-2 px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800"
          >
            <Plus className="w-5 h-5" />
            공지 추가
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-700">제목</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">카테고리</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">작성일</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">조회수</th>
                <th className="text-center py-3 px-6 font-medium text-gray-700">관리</th>
              </tr>
            </thead>
            <tbody>
              {notices.map(notice => (
                <tr key={notice.id} className="border-t">
                  <td className="py-4 px-6">{notice.title}</td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                      {notice.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{notice.createdAt}</td>
                  <td className="py-4 px-6 text-sm">{notice.views}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(notice.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
