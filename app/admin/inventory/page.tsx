'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Plus, Pencil, AlertTriangle, Package, Search } from 'lucide-react';

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  minQuantity: number;
  lastUpdated: string;
  supplier?: string;
}

export default function InventoryManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    // TODO: 재고 목록 API 호출
    /*
    const response = await fetch('YOUR_API_URL/admin/inventory');
    const data = await response.json();
    setInventory(data);
    */
    
    // 임시 데이터
    setInventory([
      { id: 1, name: '아라비카 원두', category: '원두', quantity: 15, unit: 'kg', minQuantity: 10, lastUpdated: '2024-02-06', supplier: 'A원두상사' },
      { id: 2, name: '우유', category: '유제품', quantity: 8, unit: 'L', minQuantity: 20, lastUpdated: '2024-02-06', supplier: 'B유통' },
      { id: 3, name: '종이컵 (HOT)', category: '소모품', quantity: 500, unit: '개', minQuantity: 200, lastUpdated: '2024-02-05' },
      { id: 4, name: '시럽 (바닐라)', category: '시럽', quantity: 3, unit: '병', minQuantity: 5, lastUpdated: '2024-02-05' },
      { id: 5, name: '휘핑크림', category: '유제품', quantity: 25, unit: '개', minQuantity: 10, lastUpdated: '2024-02-06' },
    ]);
  };

  const handleEdit = (item: InventoryItem) => {
    setEditingItem(item);
    setShowModal(true);
  };

  const handleSave = async (formData: Partial<InventoryItem>) => {
    // TODO: 재고 생성/수정 API 호출
    /*
    if (editingItem) {
      await fetch(`YOUR_API_URL/admin/inventory/${editingItem.id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
      });
    } else {
      await fetch('YOUR_API_URL/admin/inventory', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
    }
    */
    
    setShowModal(false);
    setEditingItem(null);
    fetchInventory();
  };

  const filteredItems = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lowStockItems = inventory.filter(item => item.quantity <= item.minQuantity);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">재고 관리</h1>
            <p className="text-gray-600 mt-1">원자재 및 소모품 재고를 관리하세요</p>
          </div>
          <button
            onClick={() => {
              setEditingItem(null);
              setShowModal(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
          >
            <Plus className="w-5 h-5" />
            재고 추가
          </button>
        </div>

        {/* 재고 경고 */}
        {lowStockItems.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-red-900">재고 부족 경고</h3>
                <p className="text-sm text-red-700 mt-1">
                  {lowStockItems.length}개 품목의 재고가 최소 수량 이하입니다. 발주가 필요합니다.
                </p>
                <ul className="mt-2 space-y-1">
                  {lowStockItems.map(item => (
                    <li key={item.id} className="text-sm text-red-700">
                      • {item.name}: {item.quantity}{item.unit} (최소: {item.minQuantity}{item.unit})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 검색 */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="재고 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* 재고 테이블 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">품목명</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">카테고리</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">현재 수량</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">최소 수량</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">공급처</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">마지막 업데이트</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">상태</th>
                  <th className="text-center py-3 px-6 font-medium text-gray-700">관리</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => {
                  const isLowStock = item.quantity <= item.minQuantity;
                  return (
                    <tr key={item.id} className="border-t border-gray-200">
                      <td className="py-4 px-6 font-medium">{item.name}</td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={isLowStock ? 'text-red-600 font-bold' : ''}>
                          {item.quantity}{item.unit}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {item.minQuantity}{item.unit}
                      </td>
                      <td className="py-4 px-6 text-gray-600 text-sm">
                        {item.supplier || '-'}
                      </td>
                      <td className="py-4 px-6 text-gray-600 text-sm">{item.lastUpdated}</td>
                      <td className="py-4 px-6">
                        {isLowStock ? (
                          <span className="flex items-center gap-1 text-red-600 text-sm font-medium">
                            <AlertTriangle className="w-4 h-4" />
                            부족
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <Package className="w-4 h-4" />
                            정상
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 재고 추가/수정 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">
              {editingItem ? '재고 수정' : '재고 추가'}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleSave({
                  name: formData.get('name') as string,
                  category: formData.get('category') as string,
                  quantity: Number(formData.get('quantity')),
                  unit: formData.get('unit') as string,
                  minQuantity: Number(formData.get('minQuantity')),
                  supplier: formData.get('supplier') as string,
                  lastUpdated: new Date().toISOString().split('T')[0],
                });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  품목명 *
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
                  <option value="원두">원두</option>
                  <option value="유제품">유제품</option>
                  <option value="시럽">시럽</option>
                  <option value="소모품">소모품</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    현재 수량 *
                  </label>
                  <input
                    name="quantity"
                    type="number"
                    required
                    defaultValue={editingItem?.quantity}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    단위 *
                  </label>
                  <input
                    name="unit"
                    type="text"
                    required
                    placeholder="kg, L, 개 등"
                    defaultValue={editingItem?.unit}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  최소 수량 *
                </label>
                <input
                  name="minQuantity"
                  type="number"
                  required
                  defaultValue={editingItem?.minQuantity}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  재고가 이 수량 이하로 떨어지면 알림을 받습니다
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  공급처
                </label>
                <input
                  name="supplier"
                  type="text"
                  defaultValue={editingItem?.supplier}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
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
