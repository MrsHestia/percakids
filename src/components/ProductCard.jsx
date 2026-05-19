'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

function formatRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

export default function ProductCard({ product }) {
  const { addItem, setIsOpen } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden">
      {/* Image area */}
      <div className="relative w-full aspect-square bg-[#E8EDFF] flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-7xl">{product.emoji}</span>
        )}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-[#F72585] text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3.5">
        <h3 className="font-bold text-sm text-gray-800 mb-1">{product.name}</h3>
        <p className="text-xs text-gray-400 mb-2">Ukuran: {product.size}</p>
        <p className="font-black text-lg text-[#3B5BDB] mb-3">{formatRp(product.price)}</p>
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 text-white ${
            added ? 'bg-green-500' : 'bg-[#3B5BDB] hover:bg-blue-700'
          }`}
        >
          {added ? '✓ Ditambahkan!' : '+ Tambah ke Keranjang'}
        </button>
      </div>
    </div>
  );
}
