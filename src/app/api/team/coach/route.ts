import { NextResponse } from 'next/server';
import { getCoach } from '@/services/team.service';

export async function GET(req: Request) {
    // (optional caching) — cache για 60s

    const id = new URL(req.url).searchParams.get('teamId') ?? 0;
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

    const data = await getCoach(id);
    return NextResponse.json(data, { headers: { 'Cache-Control': 's-maxage=60' } });
}