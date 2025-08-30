import { NextResponse } from 'next/server';
import { getSquads } from '@/services/players.service';

export async function GET(req: Request) {
    // (optional caching) — cache για 60s

    const teamId = new URL(req.url).searchParams.get('teamId') ?? 0;
    if (!teamId) return NextResponse.json({ error: 'teamId required' }, { status: 400 });


    const data = await getSquads(teamId);
    return NextResponse.json(data, { headers: { 'Cache-Control': 's-maxage=60' } });
}