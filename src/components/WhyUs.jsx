const reasons = [
  { icon: '♻️', title: 'Eco-Friendly', desc: 'Menggunakan kain perca pilihan sehingga mengurangi limbah tekstil dan mendukung lingkungan yang lebih baik.' },
  { icon: '🎨', title: 'Desain Unik', desc: 'Setiap pakaian memiliki perpaduan kain yang unik — si kecil tampil beda dan tidak pasaran!' },
  { icon: '🧵', title: 'Jahitan Rapi', desc: 'Dibuat oleh penjahit berpengalaman dengan kualitas jahitan yang kuat dan nyaman dipakai anak-anak.' },
  { icon: '💰', title: 'Harga Terjangkau', desc: 'Kualitas premium dengan harga yang bersahabat. Karena setiap anak berhak tampil kece!' },
];

export default function WhyUs() {
  return (
    <section id="tentang" className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <span className="inline-block bg-yellow-100 text-yellow-600 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
          💛 Keunggulan Kami
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
          Kenapa Pilih Perca Kids?
        </h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Kami bukan sekadar toko baju biasa — ada nilai yang kami pegang di setiap jahitan
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:-translate-y-1 transition-transform"
          >
            <div className="text-4xl mb-3">{r.icon}</div>
            <h4 className="font-black text-gray-800 mb-2">{r.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
