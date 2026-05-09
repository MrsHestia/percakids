'use client';

import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-pink-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
            style={{ background: 'linear-gradient(135deg, #3B5BDB, #F72585)' }}
          >
            PK
          </div>
          <span className="font-black text-xl text-[#3B5BDB] font-nunito">
            Perca <span className="text-[#F72585]">Kids</span>
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-6 list-none">
          {[
            { href: '#katalog', label: 'Katalog' },
            { href: '#custom', label: 'Custom Order' },
            { href: '#tentang', label: 'Tentang Kami' },
            { href: '#kontak', label: 'Kontak' },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-[#F72585] font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Cart Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-[#F72585] text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-pink-700 transition-all hover:scale-105 active:scale-95"
        >
          🛒 Keranjang
          <span className="bg-white text-[#F72585] rounded-full w-5 h-5 text-xs flex items-center justify-center font-black">
            {totalItems}
          </span>
        </button>
      </div>
    </nav>
  );
}
