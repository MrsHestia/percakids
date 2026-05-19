'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

function formatRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function ImageSlider({ images, name }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative w-full h-full">
      <img
        src={images[current]}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full w-7 h-7 text-sm font-bold flex items-center justify-center z-10 transition-all"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full w-7 h-7 text-sm font-bold flex items-center justify-center z-10 transition-all"
      >
        ›
      </button>
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image area */}
      <div className="relative w-full aspect-square bg-[#E8EDFF] overflow-hidden">
        {product.images ? (
          <ImageSlider images={product.images} name={product.name} />
        ) : product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-7xl">{product.emoji}</span>
          </div>
        )}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-[#F72585] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
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
