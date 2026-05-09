import { NextResponse } from 'next/server';

const WA_NUMBER = process.env.WA_NUMBER || '6285357925172';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nama, noWa, jenis, ukuran, warna, jumlah, catatan } = body;

    if (!nama || !noWa || !jenis || !ukuran) {
      return NextResponse.json(
        { success: false, message: 'Mohon lengkapi semua field yang wajib diisi' },
        { status: 400 }
      );
    }

    let msg = `Halo Perca Kids! Saya mau *Custom Order* 🎨\n\n`;
    msg += `*DATA PEMESAN:*\n`;
    msg += `👤 Nama: ${nama}\n`;
    msg += `📱 No WA: ${noWa}\n\n`;
    msg += `*DETAIL PESANAN:*\n`;
    msg += `👗 Jenis Pakaian: ${jenis}\n`;
    msg += `📏 Ukuran/Usia: ${ukuran}\n`;
    if (warna) msg += `🎨 Warna/Motif: ${warna}\n`;
    if (jumlah) msg += `🔢 Jumlah: ${jumlah} pcs\n`;
    if (catatan) msg += `📝 Catatan: ${catatan}\n`;
    msg += `\nMohon bantu konsultasikan pesanan saya ya, terima kasih! 🙏`;

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

    return NextResponse.json({ success: true, waUrl });
  } catch (err) {
    console.error('Custom order error:', err);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
