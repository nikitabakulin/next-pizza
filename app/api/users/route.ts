import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany();
    
    return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    
    const user = await prisma.user.create({
        data
    });
    
    const resp = NextResponse.json(user);
    resp.cookies.set('userId', String(user.id));

    return resp;
}