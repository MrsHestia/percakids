import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  const result =
    category && category !== 'semua'
      ? products.filter((p) => p.category === category)
      : products;

  return NextResponse.json({ success: true, data: result });
}
