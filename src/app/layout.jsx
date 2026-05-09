import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  title: 'Perca Kids – Pakaian Anak dari Kain Perca',
  description:
    'Toko online baju anak dari kain perca pilihan. Unik, lucu, dan ramah lingkungan. Custom order tersedia!',
  keywords: 'baju anak, kain perca, pakaian anak, custom order, medan',
  openGraph: {
    title: 'Perca Kids – Pakaian Anak dari Kain Perca',
    description: 'Baju anak unik dari kain perca, custom order tersedia!',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
