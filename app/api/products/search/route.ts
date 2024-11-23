import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const query = req.nextUrl.searchParams.get('query')?.toLowerCase() || '';

    // Ждем разрешения промиса от findMany
    const products = await prisma.product.findMany();

    // Фильтруем результат
    const filteredProducts = products.filter(item => 
        item.name.toLowerCase().includes(query)
    ).slice(0, 5);

    return NextResponse.json(filteredProducts);
}