'use client';

import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Plus, Pencil, MapPin } from 'lucide-react';

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  status: 'open' | 'closed';
}

export default function StoreManagement() {
  // TODO: 매장 목록 API 호출
  /*
  const [stores, setStores] = useState<Store[]>([]);
  
  useEffect(() => {
    fetch('YOUR_API_URL/admin/stores')
      .then(res => res.json())
      .then(data => setStores(data));
  }, []);
  */
  
  // 임시 데이터
  const [stores] = useState<Store[]>([
    { id: 1, name: '카페수월', address: '대전광역시 가양로68번길 2', phone: '02-1234-5678', hours: '평일 08:00-22:00, 주말 10:00-20:00', status: 'open' },
  ]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">매장 관리</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800">
            <Plus className="w-5 h-5" />
            매장 추가
          </button>
        </div>

        <div className="grid gap-6">
          {stores.map(store => (
            <div key={store.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{store.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      store.status === 'open' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {store.status === 'open' ? '영업중' : '휴무'}
                    </span>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {store.address}
                    </p>
                    <p>📞 {store.phone}</p>
                    <p>🕐 {store.hours}</p>
                  </div>
                </div>
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Pencil className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
