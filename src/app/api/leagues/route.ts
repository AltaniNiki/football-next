import { NextResponse } from 'next/server';
import { getLeagues } from '@/services/leagues.service';

export async function GET(req: Request) {
    // (optional caching) — cache για 60s
    const data = await getLeagues();
    return NextResponse.json(data, { headers: { 'Cache-Control': 's-maxage=60' } });
}