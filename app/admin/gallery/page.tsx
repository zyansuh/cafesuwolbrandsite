'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Plus, Trash2, Upload } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  createdAt: string;
}

export default function GalleryManagement() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    // TODO: 갤러리 목록 API 호출
    setGalleryItems([
      { id: 1, title: '시그니처 커피', imageUrl: '', category: '메뉴', createdAt: '2024-02-01' },
      { id: 2, title: '카페 인테리어', imageUrl: '', category: '매장', createdAt: '2024-02-01' },
      { id: 3, title: '브런치 메뉴', imageUrl: '', category: '메뉴', createdAt: '2024-01-28' },
    ]);
  }, []);

  const handleDelete = (id: number) => {
    if (!confirm('삭제하시겠습니까?')) return;
    // TODO: 갤러리 이미지 삭제 API
    setGalleryItems(galleryItems.filter(item => item.id !== id));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">갤러리 관리</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800">
            <Upload className="w-5 h-5" />
            이미지 업로드
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden group">
              <div className="aspect-square bg-amber-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">{item.title}</p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                <p className="text-xs text-gray-500 mt-2">{item.createdAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
