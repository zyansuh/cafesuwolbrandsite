'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Plus, Pencil, AlertTriangle, Package, Search, TrendingUp, TrendingDown, History, Eye } from 'lucide-react';

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

interface StockHistory {
  id: number;
  type: 'in' | 'out';
  quantity: number;
  date: string;
  reason: string;
  user: string;
}

type ModalType = 'add' | 'edit' | 'stockIn' | 'stockOut' | 'detail' | 'history' | null;

export default function InventoryManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [stockHistory, setStockHistory] = useState<StockHistory[]>([]);

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

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleStockIn = async (itemId: number, quantity: number) => {
    // TODO: 재고 입고 API 호출
    /*
    await fetch(`YOUR_API_URL/admin/inventory/${itemId}/stock-in`, {
      method: 'POST',
      body: JSON.stringify({ quantity, reason }),
    });
    */
    
    setInventory(inventory.map(item => 
      item.id === itemId 
        ? { ...item, quantity: item.quantity + quantity, lastUpdated: new Date().toISOString().split('T')[0] }
        : item
    ));
    setModalType(null);
    setSelectedItem(null);
  };

  const handleStockOut = async (itemId: number, quantity: number) => {
    // TODO: 재고 출고 API 호출
    /*
    await fetch(`YOUR_API_URL/admin/inventory/${itemId}/stock-out`, {
      method: 'POST',
      body: JSON.stringify({ quantity, reason }),
    });
    */
    
    setInventory(inventory.map(item => 
      item.id === itemId 
        ? { ...item, quantity: item.quantity - quantity, lastUpdated: new Date().toISOString().split('T')[0] }
        : item
    ));
    setModalType(null);
    setSelectedItem(null);
  };

  const handleSave = async () => {
    // TODO: 재고 생성/수정 API 호출
    /*
    if (selectedItem) {
      await fetch(`YOUR_API_URL/admin/inventory/${selectedItem.id}`, {
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
    
    setModalType(null);
    setSelectedItem(null);
    fetchInventory();
  };

  const fetchStockHistory = async () => {
    // TODO: 재고 히스토리 API 호출
    /*
    const response = await fetch(`YOUR_API_URL/admin/inventory/${itemId}/history`);
    const data = await response.json();
    setStockHistory(data);
    */
    
    // 임시 데이터
    setStockHistory([
      { id: 1, type: 'in', quantity: 20, date: '2024-02-05', reason: '정기 발주', user: '관리자' },
      { id: 2, type: 'out', quantity: 5, date: '2024-02-06', reason: '사용', user: '김바리스타' },
      { id: 3, type: 'in', quantity: 10, date: '2024-02-04', reason: '긴급 발주', user: '관리자' },
    ]);
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
              setSelectedItem(null);
              setModalType('add');
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
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              setModalType('detail');
                            }}
                            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            title="상세"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              setModalType('stockIn');
                            }}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="입고"
                          >
                            <TrendingUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              setModalType('stockOut');
                            }}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="출고"
                          >
                            <TrendingDown className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              // TODO: 실제 itemId를 API로 전송
                              console.log('재고 히스토리 조회:', item.id);
                              fetchStockHistory();
                              setModalType('history');
                            }}
                            className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                            title="히스토리"
                          >
                            <History className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              setModalType('edit');
                            }}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="수정"
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
      {(modalType === 'add' || modalType === 'edit') && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">
              {modalType === 'edit' ? '재고 수정' : '재고 추가'}
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
                <label className="block text-sm font-medium text-gray-700 mb-1">품목명 *</label>
                <input
                  name="name"
                  type="text"
                  required
                  defaultValue={selectedItem?.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">카테고리 *</label>
                <select
                  name="category"
                  required
                  defaultValue={selectedItem?.category}
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">현재 수량 *</label>
                  <input name="quantity" type="number" required defaultValue={selectedItem?.quantity} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">단위 *</label>
                  <input name="unit" type="text" required placeholder="kg, L, 개 등" defaultValue={selectedItem?.unit} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">최소 수량 *</label>
                <input name="minQuantity" type="number" required defaultValue={selectedItem?.minQuantity} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                <p className="text-xs text-gray-500 mt-1">재고가 이 수량 이하로 떨어지면 알림을 받습니다</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">공급처</label>
                <input name="supplier" type="text" defaultValue={selectedItem?.supplier} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => { setModalType(null); setSelectedItem(null); }} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">취소</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors">저장</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 재고 입고 모달 */}
      {modalType === 'stockIn' && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">재고 입고</h2>
                <p className="text-sm text-gray-600">{selectedItem.name}</p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const reason = formData.get('reason') as string;
                console.log('입고 사유:', reason); // TODO: API로 전송
                handleStockIn(selectedItem.id, Number(formData.get('quantity')));
              }}
              className="space-y-4"
            >
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">현재 재고</p>
                <p className="text-2xl font-bold text-gray-900">{selectedItem.quantity}{selectedItem.unit}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">입고 수량 *</label>
                <input name="quantity" type="number" required min="0.01" step="0.01" placeholder="입고할 수량" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">입고 사유 *</label>
                <select name="reason" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none mb-2">
                  <option value="">선택하세요</option>
                  <option value="정기 발주">정기 발주</option>
                  <option value="긴급 발주">긴급 발주</option>
                  <option value="반품 입고">반품 입고</option>
                  <option value="기타">기타</option>
                </select>
                <textarea name="note" placeholder="추가 메모 (선택)" rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm" />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => { setModalType(null); setSelectedItem(null); }} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">취소</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">입고 처리</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 재고 출고 모달 */}
      {modalType === 'stockOut' && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">재고 출고</h2>
                <p className="text-sm text-gray-600">{selectedItem.name}</p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const quantity = Number(formData.get('quantity'));
                const reason = formData.get('reason') as string;
                if (quantity > selectedItem.quantity) {
                  alert('출고 수량이 현재 재고보다 많습니다!');
                  return;
                }
                console.log('출고 사유:', reason); // TODO: API로 전송
                handleStockOut(selectedItem.id, quantity);
              }}
              className="space-y-4"
            >
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">현재 재고</p>
                <p className="text-2xl font-bold text-gray-900">{selectedItem.quantity}{selectedItem.unit}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">출고 수량 *</label>
                <input name="quantity" type="number" required min="0.01" step="0.01" max={selectedItem.quantity} placeholder="출고할 수량" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
                <p className="text-xs text-gray-500 mt-1">최대 {selectedItem.quantity}{selectedItem.unit}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">출고 사유 *</label>
                <select name="reason" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none mb-2">
                  <option value="">선택하세요</option>
                  <option value="사용">사용</option>
                  <option value="폐기">폐기</option>
                  <option value="반품">반품</option>
                  <option value="분실">분실</option>
                  <option value="기타">기타</option>
                </select>
                <textarea name="note" placeholder="추가 메모 (선택)" rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none text-sm" />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => { setModalType(null); setSelectedItem(null); }} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">취소</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">출고 처리</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 재고 상세 정보 모달 */}
      {modalType === 'detail' && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">재고 상세 정보</h2>
              <button onClick={() => { setModalType(null); setSelectedItem(null); }} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">품목명</p>
                  <p className="font-bold text-gray-900">{selectedItem.name}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">카테고리</p>
                  <p className="font-bold text-gray-900">{selectedItem.category}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">현재 수량</p>
                  <p className="text-2xl font-bold text-blue-600">{selectedItem.quantity}{selectedItem.unit}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">최소 수량</p>
                  <p className="text-2xl font-bold text-red-600">{selectedItem.minQuantity}{selectedItem.unit}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">공급처</p>
                <p className="font-medium text-gray-900">{selectedItem.supplier || '미등록'}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">마지막 업데이트</p>
                <p className="font-medium text-gray-900">{selectedItem.lastUpdated}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">재고 상태</p>
                {selectedItem.quantity <= selectedItem.minQuantity ? (
                  <div className="flex items-center gap-2 text-red-600 font-bold">
                    <AlertTriangle className="w-5 h-5" />
                    재고 부족 - 발주 필요
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-green-600 font-bold">
                    <Package className="w-5 h-5" />
                    정상
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <button onClick={() => setModalType('edit')} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">수정</button>
              <button onClick={() => { console.log('재고 히스토리 조회:', selectedItem.id); fetchStockHistory(); setModalType('history'); }} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">히스토리</button>
            </div>
          </div>
        </div>
      )}

      {/* 재고 히스토리 모달 */}
      {modalType === 'history' && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">재고 입출고 히스토리</h2>
                <p className="text-sm text-gray-600">{selectedItem.name}</p>
              </div>
              <button onClick={() => { setModalType(null); setSelectedItem(null); }} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="space-y-3">
              {stockHistory.length === 0 ? (
                <p className="text-center text-gray-500 py-8">히스토리가 없습니다</p>
              ) : (
                stockHistory.map(history => (
                  <div key={history.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${history.type === 'in' ? 'bg-green-100' : 'bg-red-100'}`}>
                          {history.type === 'in' ? (
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          ) : (
                            <TrendingDown className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{history.reason}</p>
                          <p className="text-sm text-gray-600">{history.user} • {history.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-bold ${history.type === 'in' ? 'text-green-600' : 'text-red-600'}`}>
                          {history.type === 'in' ? '+' : '-'}{history.quantity}{selectedItem.unit}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
