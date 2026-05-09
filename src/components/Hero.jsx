export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white py-20 px-4 text-center"
      style={{
        background: 'linear-gradient(135deg, #3B5BDB 0%, #6B8BFF 50%, #F72585 100%)',
      }}
    >
      {/* Decorative top text */}
      <div className="absolute top-3 left-0 right-0 text-3xl opacity-10 whitespace-nowrap overflow-hidden tracking-widest pointer-events-none select-none">
        👗🌸👕🌺👗🌸👕🌺👗🌸👕🌺👗🌸👕🌺
      </div>

      {/* Badge */}
      <div className="inline-block bg-white/20 border border-white/40 backdrop-blur-sm rounded-full px-5 py-1.5 text-sm mb-5">
        ✨ Pakaian Anak Unik dari Kain Perca
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
        Cantik, Unik, &amp;
        <br />
        <span className="text-yellow-300">Ramah Lingkungan</span>
      </h1>

      <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
        Baju anak-anak dari kain perca pilihan — warna-warni, kuat, dan bikin si
        kecil makin menggemaskan!
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-3 justify-center flex-wrap">
        <a
          href="#katalog"
          className="bg-white text-[#3B5BDB] font-bold px-7 py-3 rounded-full hover:scale-105 transition-transform text-sm"
        >
          🛍️ Lihat Katalog
        </a>
        <a
          href="#custom"
          className="bg-transparent border-2 border-white/60 text-white font-bold px-7 py-3 rounded-full hover:bg-white/15 transition-all text-sm"
        >
          ✏️ Custom Order
        </a>
      </div>
    </section>
  );
}
