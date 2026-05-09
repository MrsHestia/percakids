'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

function formatRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

export default function CartSidebar() {
  const { items, isOpen, setIsOpen, removeItem, changeQty, totalPrice, clearCart } = useCart();
  const [buyerName, setBuyerName] = useState('');
  const [buyerAddress, setBuyerAddress] = useState('');
  const [buyerNote, setBuyerNote] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!buyerName.trim()) return alert('Mohon isi nama pemesan!');
    if (!buyerAddress.trim()) return alert('Mohon isi alamat pengiriman!');

    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, buyerName, buyerAddress, buyerNote }),
      });
      const data = await res.json();
      if (data.success) {
        window.open(data.waUrl, '_blank');
        clearCart();
        setIsOpen(false);
        setBuyerName('');
        setBuyerAddress('');
        setBuyerNote('');
      } else {
        alert(data.message || 'Terjadi kesalahan');
      }
    } catch {
      alert('Gagal terhubung ke server');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h3 className="text-xl font-black">🛒 Keranjang Belanja</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-pink-50 text-[#F72585] font-bold text-lg flex items-center justify-center hover:bg-pink-100"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <div className="text-6xl mb-3">🛒</div>
              <p className="font-medium">Keranjang masih kosong</p>
              <p className="text-sm mt-1">Yuk pilih produk dulu!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 items-center p-3 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#E8EDFF] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{item.name}</p>
                    <p className="text-sm text-[#F72585] font-bold">{formatRp(item.price)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => changeQty(item.id, -1)}
                        className="w-6 h-6 rounded-full border border-gray-200 bg-white text-sm font-bold flex items-center justify-center hover:border-[#F72585] hover:text-[#F72585]"
                      >
                        −
                      </button>
                      <span className="text-sm font-bold w-5 text-center">{item.qty}</span>
                      <button
                        onClick={() => changeQty(item.id, 1)}
                        className="w-6 h-6 rounded-full border border-gray-200 bg-white text-sm font-bold flex items-center justify-center hover:border-[#F72585] hover:text-[#F72585]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-300 hover:text-[#F72585] text-lg transition-colors"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="border-t p-5 space-y-3">
            {/* Buyer info */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                Nama Pemesan
              </label>
              <input
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                placeholder="Nama lengkap kamu"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F72585]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                Alamat Pengiriman
              </label>
              <input
                type="text"
                value={buyerAddress}
                onChange={(e) => setBuyerAddress(e.target.value)}
                placeholder="Alamat lengkap"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F72585]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                Catatan (opsional)
              </label>
              <input
                type="text"
                value={buyerNote}
                onChange={(e) => setBuyerNote(e.target.value)}
                placeholder="Ukuran, warna, dll"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F72585]"
              />
            </div>

            {/* Total */}
            <div className="flex justify-between items-center pt-1">
              <span className="font-bold text-gray-700">Total</span>
              <span className="text-xl font-black text-[#3B5BDB]">{formatRp(totalPrice)}</span>
            </div>

            {/* Checkout button */}
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] disabled:bg-gray-300 text-white font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 text-sm"
            >
              {loading ? '⏳ Memproses...' : '💬 Pesan via WhatsApp'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
