import { NextResponse } from 'next/server';
import { getProfile } from '@/services/players.service';

export async function GET(req: Request) {
    // (optional caching) — cache για 60s

    const playerId = new URL(req.url).searchParams.get('playerId') ?? 0;
    if (!playerId) return NextResponse.json({ error: 'playerId required' }, { status: 400 });

    console.log('player---->')
    const data = await getProfile(playerId);
    return NextResponse.json(data, { headers: { 'Cache-Control': 's-maxage=60' } });
}