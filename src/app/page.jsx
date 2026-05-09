import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CustomOrderForm from '@/components/CustomOrderForm';
import WhyUs from '@/components/WhyUs';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';

export default function Home() {
  return (
    <>
      {/* USP Strip */}
      <div className="bg-[#3B5BDB] text-white py-2.5 px-4">
        <div className="max-w-6xl mx-auto flex justify-center gap-8 flex-wrap text-xs font-semibold">
          <span>♻️ Ramah Lingkungan</span>
          <span>🎨 Motif Unik & Eksklusif</span>
          <span>📦 Free Ongkir Medan</span>
          <span>💬 Order via WhatsApp</span>
        </div>
      </div>

      <Navbar />
      <Hero />
      <ProductGrid />
      <CustomOrderForm />
      <WhyUs />
      <Footer />
      <CartSidebar />
    </>
  );
}
