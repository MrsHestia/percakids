const WA_NUMBER = '6285357925172';
const IG_USERNAME = 'percakids';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-[#1a1a2e] text-white py-12 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <div className="text-3xl font-black mb-2">
          Perca <span className="text-[#F72585]">Kids</span>
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          Pakaian anak dari kain perca — unik, lucu, dan ramah lingkungan 🌿
          <br />
          Medan, Sumatera Utara
        </p>

        <div className="flex gap-3 justify-center flex-wrap mb-8">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Halo+Perca+Kids%2C+saya+mau+tanya+tentang+produk`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            💬 0853-5792-5172
          </a>
          <a
            href={`https://instagram.com/${IG_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
            style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
          >
            📸 @{IG_USERNAME}
          </a>
        </div>

        <small className="text-white/30 text-xs">
          © {new Date().getFullYear()} Perca Kids – Pakaian Anak dari Kain Perca.
          All rights reserved.
        </small>
      </div>
    </footer>
  );
}
