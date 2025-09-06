import { NextResponse } from 'next/server';
import { getStatistics } from '@/services/players.service';

export async function GET(req: Request) {
    // (optional caching) — cache για 60s

    const playerId = new URL(req.url).searchParams.get('playerId') ?? 0;
    if (!playerId) return NextResponse.json({ error: 'playerId required' }, { status: 400 });

    const season = new URL(req.url).searchParams.get('season') ?? 0;
    if (!season) return NextResponse.json({ error: 'season required' }, { status: 400 });

    const data = await getStatistics(playerId, season);
    return NextResponse.json(data, { headers: { 'Cache-Control': 's-maxage=60' } });
}