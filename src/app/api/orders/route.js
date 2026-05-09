import { NextResponse } from 'next/server';

const WA_NUMBER = process.env.WA_NUMBER || '6285357925172';

function formatRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { items, buyerName, buyerAddress, buyerNote } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Keranjang kosong' },
        { status: 400 }
      );
    }

    if (!buyerName || !buyerAddress) {
      return NextResponse.json(
        { success: false, message: 'Nama dan alamat wajib diisi' },
        { status: 400 }
      );
    }

    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    const orderDate = new Date().toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric',
    });

    let msg = `Halo Perca Kids! 👋\n`;
    msg += `Saya mau order ya 🛍️\n\n`;
    msg += `📅 *${orderDate}*\n\n`;
    msg += `*PESANAN:*\n`;

    items.forEach((item) => {
      msg += `• ${item.name} (${item.size}) x${item.qty} = ${formatRp(item.price * item.qty)}\n`;
    });

    msg += `\n💰 *Total: ${formatRp(total)}*\n\n`;
    msg += `📦 *Data Pemesan:*\n`;
    msg += `Nama: ${buyerName}\n`;
    msg += `Alamat: ${buyerAddress}\n`;
    if (buyerNote) msg += `Catatan: ${buyerNote}\n`;
    msg += `\nMohon konfirmasi pesanan saya ya, terima kasih! 🙏`;

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

    return NextResponse.json({ success: true, waUrl, total });
  } catch (err) {
    console.error('Order error:', err);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
