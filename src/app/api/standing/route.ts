import { NextResponse } from 'next/server';
import { getStanding } from '@/services/standing.service';

export async function GET(req: Request) {
    // (optional caching) — cache για 60s

    const league = new URL(req.url).searchParams.get('league') ?? 0;
    if (!league) return NextResponse.json({ error: 'league required' }, { status: 400 });

    const season = new URL(req.url).searchParams.get('season') ?? '';
    if (!season) return NextResponse.json({ error: 'season required' }, { status: 400 });


    const data = await getStanding(league, season);
    console.log('fetch----> ', data)
    return NextResponse.json(data, { headers: { 'Cache-Control': 's-maxage=60' } });
}