'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const FILTERS = [
  { key: 'semua', label: 'Semua' },
  { key: 'perempuan', label: '👧 Perempuan' },
  { key: 'laki', label: '👦 Laki-laki' },
  { key: 'unisex', label: '🧒 Unisex' },
];

export default function ProductGrid() {
  const [active, setActive] = useState('semua');

  const filtered =
    active === 'semua' ? products : products.filter((p) => p.category === active);

  return (
    <section id="katalog" className="max-w-6xl mx-auto px-4 py-16">
      {/* Section header */}
      <div className="text-center mb-10">
        <span className="inline-block bg-[#FFE8F4] text-[#F72585] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
          🛍️ Koleksi Kami
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">Katalog Produk</h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Baju anak dari kain perca pilihan, tersedia berbagai ukuran untuk si kecil
        </p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 justify-center flex-wrap mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`px-5 py-2 rounded-full border text-sm font-bold transition-all ${
              active === f.key
                ? 'bg-[#F72585] text-white border-[#F72585]'
                : 'bg-white text-gray-500 border-gray-200 hover:border-[#F72585] hover:text-[#F72585]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
