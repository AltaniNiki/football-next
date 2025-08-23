import { apiClient } from '@/lib/http/apiClient';
import type { LeagueItem } from '@/types/api-football';

export async function getLeagues(): Promise<LeagueItem[]> {
    const { data } = await apiClient.get('/leagues?type=league&current=true');

    return data.response as LeagueItem[];
}

// export async function getStanding():