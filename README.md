# 🎀 Perca Kids – Website Toko Online

Website toko online **Perca Kids** — pakaian anak dari kain perca.  
Dibangun dengan **Next.js 14 + Tailwind CSS**, di-deploy ke **Vercel**.

---

## 🚀 Cara Setup & Deploy

### 1. Clone / Download project
```bash
git clone https://github.com/username/percakids.git
cd percakids
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
```bash
cp .env.example .env.local
# Edit .env.local dan isi nilai yang sesuai
```

### 4. Jalankan di lokal
```bash
npm run dev
# Buka http://localhost:3000
```

### 5. Deploy ke Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login & deploy
vercel

# Atau push ke GitHub → connect di vercel.com (otomatis deploy)
```

---

## 📁 Struktur Folder

```
percakids/
├── src/
│   ├── app/
│   │   ├── page.jsx              ← Halaman utama
│   │   ├── layout.jsx            ← Root layout
│   │   ├── globals.css           ← CSS global
│   │   └── api/
│   │       ├── products/route.js ← GET /api/products
│   │       ├── orders/route.js   ← POST /api/orders
│   │       └── custom-order/route.js ← POST /api/custom-order
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartSidebar.jsx       ← Keranjang + checkout WA
│   │   ├── CustomOrderForm.jsx
│   │   ├── WhyUs.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── CartContext.jsx       ← State management keranjang
│   └── data/
│       └── products.js           ← Data produk (edit di sini!)
├── .env.example
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

---

## ✏️ Cara Edit Produk

Buka `src/data/products.js` dan tambah/edit/hapus objek produk:

```js
{
  id: 9,                      // ID unik
  name: 'Nama Produk',
  price: 85000,               // Harga dalam rupiah
  size: '2-5 tahun',
  category: 'perempuan',      // 'perempuan' | 'laki' | 'unisex'
  emoji: '👗',                // Emoji pengganti gambar
  badge: 'New',               // Badge opsional (kosongkan jika tidak ada)
  description: 'Deskripsi...',
  stock: 10,
}
```

---

## 🌍 Environment Variables

| Variable | Deskripsi | Default |
|---|---|---|
| `WA_NUMBER` | Nomor WA bisnis (format: 62xxx) | `6285357925172` |
| `STORE_NAME` | Nama toko | `Perca Kids` |
| `IG_USERNAME` | Username Instagram | `percakids` |

---

## 🔗 API Endpoints

| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/products?category=perempuan` | Ambil daftar produk |
| POST | `/api/orders` | Buat order → return WA URL |
| POST | `/api/custom-order` | Custom order → return WA URL |

---

Built with ❤️ for Perca Kids, Medan.
