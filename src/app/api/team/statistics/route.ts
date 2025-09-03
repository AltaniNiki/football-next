import { NextResponse } from 'next/server';
import { getStatistics } from '@/services/team.service';

export async function GET(req: Request) {
    // (optional caching) — cache για 60s

    const id = new URL(req.url).searchParams.get('teamId') ?? 0;
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

    const league = new URL(req.url).searchParams.get('league') ?? 0;
    if (!league) return NextResponse.json({ error: 'league required' }, { status: 400 });

    const season = new URL(req.url).searchParams.get('season') ?? 0;
    if (!season) return NextResponse.json({ error: 'season required' }, { status: 400 });


    const data = await getStatistics(league, season, id);
    return NextResponse.json(data, { headers: { 'Cache-Control': 's-maxage=60' } });
}