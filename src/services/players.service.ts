import { apiClient } from '@/lib/http/apiClient';

export async function getTopScores(league: string, season: string) {
    const { data } = await apiClient.get(`/players/topscorers?league=${league}&season=${season}`);
    return data.response;
}

