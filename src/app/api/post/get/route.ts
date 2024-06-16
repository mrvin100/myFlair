import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest, res:NextResponse) {
  try {
    const postes = await prisma.post.findMany({
      cacheStrategy:{ ttl: 60}
    });
    console.log('post from database:', postes);
    return new Response(JSON.stringify(postes), { status: 200 });
  } catch (error) {
    console.error('Error fetching workPlace:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch workPlace' }), { status: 500 });
  }
}