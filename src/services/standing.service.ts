import { apiClient } from '@/lib/http/apiClient';
import type { LeagueItem } from '@/types/api-football';

export async function getStanding(league: number, season: number): Promise<LeagueItem[]> {
    console.log(`/standings?league=${league}&season=${season}`)
    const { data } = await apiClient.get(`/standings?league=${league}&season=${season}`);
    console.log('data------->', data)
    return data.response as LeagueItem[];
    //
}

// export async function getStanding():