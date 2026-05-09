'use client';

import { useState } from 'react';

export default function CustomOrderForm() {
  const [form, setForm] = useState({
    nama: '', noWa: '', jenis: '', ukuran: '', warna: '', jumlah: '', catatan: '',
  });
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.nama || !form.noWa || !form.jenis || !form.ukuran) {
      return alert('Mohon lengkapi semua field yang wajib diisi!');
    }
    setLoading(true);
    try {
      const res = await fetch('/api/custom-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        window.open(data.waUrl, '_blank');
        setForm({ nama: '', noWa: '', jenis: '', ukuran: '', warna: '', jumlah: '', catatan: '' });
      } else {
        alert(data.message || 'Terjadi kesalahan');
      }
    } catch {
      alert('Gagal terhubung ke server');
    } finally {
      setLoading(false);
    }
  };

  const inputCls = 'w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F72585] bg-white';
  const labelCls = 'block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1';

  return (
    <section id="custom" className="py-16 px-4">
      <div
        className="max-w-6xl mx-auto rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center"
        style={{ background: 'linear-gradient(135deg, #FFE8F4, #E8EDFF)' }}
      >
        {/* Left: Info */}
        <div>
          <span className="inline-block bg-[#F72585] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            ✏️ Custom Order
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
            Baju Custom{' '}
            <span className="text-[#F72585]">Si Kecil</span> 🎨
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Mau baju dengan motif tertentu, warna favorit, atau ukuran spesifik?
            Kami siap membuat pakaian custom dari kain perca sesuai permintaan kamu!
          </p>
          <div className="space-y-3">
            {[
              'Isi form & ceritakan kebutuhan kamu',
              'Tim kami konsultasikan via WhatsApp',
              'Konfirmasi desain & ukuran',
              'Proses jahit 3–5 hari kerja',
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="w-7 h-7 rounded-full bg-[#F72585] text-white flex items-center justify-center font-black text-xs flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-600">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-black mb-5 text-gray-800">📋 Form Custom Order</h3>
          <div className="space-y-3">
            <div>
              <label className={labelCls}>Nama Lengkap *</label>
              <input className={inputCls} placeholder="Nama kamu" value={form.nama} onChange={set('nama')} />
            </div>
            <div>
              <label className={labelCls}>Nomor WhatsApp *</label>
              <input className={inputCls} type="tel" placeholder="08xx-xxxx-xxxx" value={form.noWa} onChange={set('noWa')} />
            </div>
            <div>
              <label className={labelCls}>Jenis Pakaian *</label>
              <select className={inputCls} value={form.jenis} onChange={set('jenis')}>
                <option value="">— Pilih —</option>
                {['Dress / Rok', 'Setelan (Atasan + Celana)', 'Blouse / Atasan', 'Celana', 'Gamis Anak', 'Daster Anak', 'Lainnya'].map((j) => (
                  <option key={j}>{j}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Ukuran / Usia *</label>
                <select className={inputCls} value={form.ukuran} onChange={set('ukuran')}>
                  <option value="">— Pilih —</option>
                  {['0-6 bulan','6-12 bulan','1-2 tahun','2-3 tahun','3-4 tahun','4-5 tahun','5-6 tahun','6-8 tahun','8-10 tahun'].map((u) => (
                    <option key={u}>{u}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls}>Jumlah (pcs)</label>
                <input className={inputCls} type="number" min="1" placeholder="1" value={form.jumlah} onChange={set('jumlah')} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Warna / Motif</label>
              <input className={inputCls} placeholder="Contoh: pink floral, biru polkadot" value={form.warna} onChange={set('warna')} />
            </div>
            <div>
              <label className={labelCls}>Catatan Tambahan</label>
              <textarea
                className={`${inputCls} resize-none`}
                rows={2}
                placeholder="Tambahan detail pesanan..."
                value={form.catatan}
                onChange={set('catatan')}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-[#F72585] hover:bg-pink-700 disabled:bg-gray-300 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 text-sm mt-1"
            >
              {loading ? '⏳ Memproses...' : '💬 Kirim via WhatsApp'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
