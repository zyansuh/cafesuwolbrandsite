'use client';

import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image?: string;
  available: boolean;
}

export default function MenuManagement() {
  // TODO: 메뉴 목록 API 호출
  /*
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  
  const fetchMenuItems = useCallback(async () => {
    const response = await fetch('YOUR_API_URL/admin/menu');
    const data = await response.json();
    setMenuItems(data);
  }, []);
  
  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);
  */
  
  // 임시 데이터
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: 1, name: '시그니처 아메리카노', category: 'coffee', price: 4500, description: '깊고 진한 에스프레소의 풍미', available: true },
    { id: 2, name: '수월 라떼', category: 'coffee', price: 5000, description: '부드러운 우유와 에스프레소의 조화', available: true },
    { id: 3, name: '크림 브륄레 라떼', category: 'signature', price: 6500, description: '카라멜라이징한 달콤한 크림 토핑', available: true },
    { id: 4, name: '말차 라떼', category: 'non-coffee', price: 6000, description: '프리미엄 일본산 말차', available: false },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    
    // TODO: 메뉴 삭제 API 호출
    /*
    await fetch(`YOUR_API_URL/admin/menu/${id}`, { method: 'DELETE' });
    */
    
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setShowModal(true);
  };

  const handleSave = async () => {
    // TODO: 메뉴 생성/수정 API 호출
    /*
    if (editingItem) {
      await fetch(`YOUR_API_URL/admin/menu/${editingItem.id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
      });
    } else {
      await fetch('YOUR_API_URL/admin/menu', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
    }
    */
    
    setShowModal(false);
    setEditingItem(null);
    // TODO: API 저장 후 목록 다시 불러오기
    // fetchMenuItems();
  };

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">메뉴 관리</h1>
            <p className="text-gray-600 mt-1">카페 메뉴를 추가하고 수정하세요</p>
          </div>
          <button
            onClick={() => {
              setEditingItem(null);
              setShowModal(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
          >
            <Plus className="w-5 h-5" />
            메뉴 추가
          </button>
        </div>

        {/* 검색 */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="메뉴 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* 메뉴 테이블 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">메뉴명</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">카테고리</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">가격</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">설명</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">상태</th>
                  <th className="text-center py-3 px-6 font-medium text-gray-700">관리</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id} className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">{item.name}</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">{item.price.toLocaleString()}원</td>
                    <td className="py-4 px-6 text-gray-600 text-sm">{item.description}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        item.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {item.available ? '판매중' : '품절'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
      </div>

      {/* 메뉴 추가/수정 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4">
              {editingItem ? '메뉴 수정' : '메뉴 추가'}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: 폼 데이터를 API로 전송
                handleSave();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  메뉴명 *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  defaultValue={editingItem?.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  카테고리 *
                </label>
                <select
                  name="category"
                  required
                  defaultValue={editingItem?.category}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                >
                  <option value="coffee">커피</option>
                  <option value="signature">시그니처</option>
                  <option value="non-coffee">논커피</option>
                  <option value="dessert">디저트</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  가격 *
                </label>
                <input
                  name="price"
                  type="number"
                  required
                  defaultValue={editingItem?.price}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  설명
                </label>
                <textarea
                  name="description"
                  rows={3}
                  defaultValue={editingItem?.description}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
              <div className="flex items-center">
                <input
                  name="available"
                  type="checkbox"
                  defaultChecked={editingItem?.available ?? true}
                  className="w-4 h-4 text-amber-900 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">판매 가능</label>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingItem(null);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
                >
                  저장
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
